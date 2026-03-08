"""
replace_logo_v4.py — OpenCV template matching to find exact logo positions.

Strategy:
1. Build a template of the red star from the official logo
2. Use matchTemplate to find it precisely in each image
3. Expand outward from the star to capture the full "EDM" text (non-black pixels)
4. Black out that exact region, place official logo scaled to match
"""

import cv2
import numpy as np
from PIL import Image
import os, shutil

ASSETS = "public/assets"
OFFICIAL_LOGO = os.path.join(ASSETS, "edm-logo.png")
BACKUP_DIR = "/tmp/edm-backup"  # clean originals

# ─── Load and prepare official logo ───────────────────────────────────────────
logo_pil = Image.open(OFFICIAL_LOGO).convert("RGBA")
la = np.array(logo_pil)
# Tight crop to visible content
mask = la[:, :, 3] > 10
rows = np.any(mask, axis=1); cols = np.any(mask, axis=0)
rmin, rmax = np.where(rows)[0][[0, -1]]
cmin, cmax = np.where(cols)[0][[0, -1]]
logo_cropped_pil = logo_pil.crop((cmin, rmin, cmax+1, rmax+1))
LOGO_ASPECT = logo_cropped_pil.width / logo_cropped_pil.height  # ~2.72

# Build star template from official logo: crop just the left 38% (the star portion)
logo_np = np.array(logo_cropped_pil)
star_w = int(logo_np.shape[1] * 0.38)
star_crop = logo_np[:, :star_w, :]  # RGBA star region

# Convert to BGR for OpenCV, use only opaque pixels as template
star_bgr = cv2.cvtColor(star_crop, cv2.COLOR_RGBA2BGR)
# Create mask of visible pixels
star_alpha = star_crop[:, :, 3]
star_mask = (star_alpha > 20).astype(np.uint8) * 255

# ─── Detection function ────────────────────────────────────────────────────────
def find_logo(img_bgr, min_scale=0.05, max_scale=0.7, steps=25, threshold=0.55):
    """
    Multi-scale template match for the star.
    Returns (center_x, center_y, matched_w, matched_h, score) or None.
    """
    ih, iw = img_bgr.shape[:2]
    best = None

    for s in np.linspace(min_scale, max_scale, steps):
        tw = int(star_bgr.shape[1] * (iw * s / star_bgr.shape[1]))
        th = int(star_bgr.shape[0] * (iw * s / star_bgr.shape[1]))
        if tw < 10 or th < 10 or tw > iw or th > ih:
            continue
        tmpl = cv2.resize(star_bgr, (tw, th))
        result = cv2.matchTemplate(img_bgr, tmpl, cv2.TM_CCOEFF_NORMED)
        _, max_val, _, max_loc = cv2.minMaxLoc(result)
        if max_val > threshold:
            if best is None or max_val > best[4]:
                best = (max_loc[0] + tw//2, max_loc[1] + th//2, tw, th, max_val)

    return best


def expand_to_full_logo(img_bgr, star_cx, star_cy, star_w, star_h, expand_factor=3.2):
    """
    From star center+size, expand right to capture the full "EDM" + any
    trailing characters (e.g. ChatGPT-hallucinated "1" after EDM).
    """
    ih, iw = img_bgr.shape[:2]

    # Estimated full logo: star is ~38% of total width, text extends right
    est_logo_w = int(star_w / 0.38 * 0.95)
    est_logo_h = int(est_logo_w / LOGO_ASPECT)

    x1 = max(0, star_cx - star_w // 2 - 4)
    y1 = max(0, star_cy - star_h // 2 - 4)
    x2 = min(iw, x1 + est_logo_w + 8)
    y2 = min(ih, y1 + est_logo_h + 8)

    # Pass 1: find content within estimated region
    region = img_bgr[y1:y2, x1:x2]
    gray = region.sum(axis=2)
    bright = gray > 40
    if not bright.any():
        return (x1, y1, x2, y2)
    rs = np.where(bright.any(axis=1))[0]
    cs = np.where(bright.any(axis=0))[0]
    rx1 = x1 + int(cs[0])
    ry1 = y1 + int(rs[0])
    rx2 = x1 + int(cs[-1]) + 1
    ry2 = y1 + int(rs[-1]) + 1

    # Max allowed logo width based on known aspect ratio + 20% for trailing chars
    max_logo_w = int(star_w / 0.38 * 1.20)
    max_rx2 = min(iw, x1 + max_logo_w)

    # Pass 2: scan right of rx2 for trailing chars (e.g. "1") — but stay within
    # the aspect-ratio-capped max width so we don't absorb adjacent design text
    scan_end = min(max_rx2, rx2 + int(star_w * 0.6))
    if scan_end > rx2:
        right_strip = img_bgr[ry1:ry2, rx2:scan_end]
        rs2 = right_strip.sum(axis=2)
        bright2 = rs2 > 40
        if bright2.any():
            extra_cols = np.where(bright2.any(axis=0))[0]
            rx2 = min(max_rx2, rx2 + int(extra_cols[-1]) + 1)

    return (rx1, ry1, min(iw, rx2), ry2)


def process(fname, force_bbox=None, skip=False):
    """Replace logo in fname. force_bbox=(l,t,r,b) overrides detection."""
    if skip:
        print(f"  SKIP  {fname}")
        return

    src = os.path.join(ASSETS, fname)
    if not os.path.exists(src):
        print(f"  MISSING  {fname}")
        return

    # Always work from the clean original
    backup = os.path.join(BACKUP_DIR, fname)
    if os.path.exists(backup):
        shutil.copy2(backup, src)

    img_pil = Image.open(src).convert("RGB")
    img_bgr = cv2.cvtColor(np.array(img_pil), cv2.COLOR_RGB2BGR)
    ih, iw = img_bgr.shape[:2]

    if force_bbox:
        l, t, r, b = force_bbox
        score = 1.0
        print(f"  FORCE  {fname}  bbox=({l},{t},{r},{b})")
    else:
        match = find_logo(img_bgr)
        if match is None:
            print(f"  NO MATCH  {fname}")
            return
        cx, cy, sw, sh, score = match
        l, t, r, b = expand_to_full_logo(img_bgr, cx, cy, sw, sh)
        print(f"  FOUND  {fname}  score={score:.3f}  bbox=({l},{t},{r},{b})")

    # Clamp
    l, t, r, b = max(0,l), max(0,t), min(iw,r), min(ih,b)
    bw, bh = r-l, b-t
    if bw < 5 or bh < 5:
        print(f"  SKIP (bbox too small)  {fname}")
        return

    # Black out
    arr = np.array(img_pil)
    arr[t:b, l:r] = [0, 0, 0]
    result = Image.fromarray(arr)

    # Scale official logo to fit bbox
    lw = bw
    lh = int(lw / LOGO_ASPECT)
    if lh > bh:
        lh = bh
        lw = int(lh * LOGO_ASPECT)
    logo = logo_cropped_pil.resize((lw, lh), Image.LANCZOS)

    px = l + (bw - lw) // 2
    py = t + (bh - lh) // 2
    result.paste(logo, (px, py), logo)
    result.save(src, "PNG")


# ─── Process all images ────────────────────────────────────────────────────────
# Auto-detect works for: isolated logos on black BG, one logo per image
# force_bbox: use when auto-detect gets confused (e.g. multiple logos, dark logos)
# skip=True: logo is embedded in text block — replacing would break design

print("=== EDM Logo Replacement v4 (OpenCV template matching) ===\n")

JOBS = [
    # ── LinkedIn/Facebook/Twitter/YouTube banners ──────────────────────────────
    # These have logo+text in one integrated block. Replacing star alone looks OK
    # because the text "EL DORADO MOTORSPORTS" stays — only the star changes.
    # 01: logo bottom-left area (star+EDM portion, "EL DORADO MOTORSPORTS" text stays)
    ("01-linkedin-company-banner-v1.png",    (60,  345, 410, 500),             False),
    # 02-v2: large logo block left-center — force to just the star+EDM portion
    ("02-linkedin-company-banner-v2.png",    (75, 420, 440, 575),              False),
    # 02-v3: double ChatGPT logo (★DM top + ★EDM bottom overlapping) — cover entire mess, keep text below y=660
    ("02-linkedin-company-banner-v3-42car.png",  (15, 480, 820, 660),          False),
    # 02-v4: logo bottom-left
    ("02-linkedin-company-banner-v4.png",    (85,  355, 430, 510),             False),
    ("03-facebook-cover.png",                           None,                  False),
    # 09: "EDM1" ends ~x=500, "NASA" starts ~x=520 — use x=512 as right edge
    ("09-twitter-header-v1.png",             (0,   250,  512, 440),            False),
    ("10-youtube-banner-v1-with-car.png",               None,                  False),
    ("10-youtube-banner-v2-logo-only.png",              None,                  False),

    # ── Templates (logo is hero — replace it) ─────────────────────────────────
    ("05-race-result-post-template.png",                None,                  False),
    # 06: logo top-center but original has spike artifacts above star — start bbox higher
    ("06-race-announcement-template.png",    (180,  80,  850, 300),            False),
    ("07-instagram-story-template.png",                 None,                  False),
    ("08-sponsor-slide-v1.png",                         None,                  False),

    # ── Nathan personal banner ────────────────────────────────────────────────
    ("11-nathan-personal-linkedin-banner-v1-42car.png", None,                  False),

    # ── Driver profile cards ──────────────────────────────────────────────────
    ("12-driver-profile-card-v1.png",                   None,                  False),
    ("12-driver-profile-card-v2.png",        (1016, 618, 1440, 834),           False),

    # ── Portrait / action ────────────────────────────────────────────────────
    ("13-pre-race-portrait-focused-v1.png",             None,                  False),
    ("14-champion-celebration-v1.png",                  None,                  False),
    ("15-in-the-cockpit-crx-v1.png",                    None,                  False),
    ("19-race-win-celebration-v1.png",                  None,                  False),

    # ── Nathan LinkedIn banners ───────────────────────────────────────────────
    ("21-nathan-linkedin-banner-next-to-23-v3.png",     None,                  False),
    ("22-trophy-celebration-v1-checkered-flags.png",    None,                  False),
    ("22-trophy-celebration-v2-podium.png",             None,                  False),
    ("22-trophy-celebration-v3-podium.png",             None,                  False),

    # ── Car shots ─────────────────────────────────────────────────────────────
    ("23-on-track-front-view-42-v1.png",                None,                  False),
    ("23-on-track-front-view-23-v1.png",                None,                  False),
    ("24-on-track-side-profile-42-v1.png",              None,                  False),
    ("25-suit-up-v1-42car.png",                         None,                  False),
    ("25-suit-up-v2-23car.png",                         None,                  False),
    ("27-42-clean-side-profile-night-v1.png",           None,                  False),
    ("27-42-clean-side-profile-night-v2.png",           None,                  False),
    # 30-v1: logo in bottom black bar — tight bbox, don't go above y=865
    ("30-karting-origins-v1.png",            (100, 865, 750, 1010),            False),
    # 30-v2: bottom logo "EDM 1" — wide enough to cover trailing "1"
    ("30-karting-origins-v2.png",            (170, 795,  790, 975),            False),
    ("31-23-prelude-car-shot-v1.png",                   None,                  False),
    ("32-23-at-sonoma-v1.png",                          None,                  False),
    # 33-v1: full logo extends to x≈430 — cover all of it
    ("33-22-dusk-shot-v1.png",               (0,   0,   440, 210),             False),
    # 33-v2: same
    ("33-22-dusk-shot-v2.png",               (0,   0,   440, 210),             False),
    # 34: small overlay logo bottom-right corner, wider bbox to catch trailing "1"
    ("34-las-vegas-22-v1.png",               (615, 835, 1010, 995),            False),
    ("39-helmet-closeup-v1.png",                        None,                  False),
    ("39-helmet-closeup-v2.png",                        None,                  False),
    ("39-helmet-closeup-v3.png",                        None,                  False),
    ("39-helmet-closeup-v4.png",             (520, 670, 900, 860),             False),
]

for fname, force, skip in JOBS:
    process(fname, force_bbox=force, skip=skip)

print("\nDone.")
