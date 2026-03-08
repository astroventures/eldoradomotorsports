import Image from "next/image";

export const metadata = {
  title: "Gallery | El Dorado Motorsports",
  description:
    "Photo gallery — El Dorado Motorsports. Brand assets, driver portraits, car shots, and race action.",
};

type GalleryImage = {
  src: string;
  alt: string;
  category: string;
  caption: string;
};

const categories = ["All", "Brand Assets", "Driver Portraits", "Car Shots", "Race Action"];

const images: GalleryImage[] = [
  // Brand Assets
  { src: "/assets/02-linkedin-company-banner-v3-42car.png", alt: "#42 car — company banner", category: "Brand Assets", caption: "#42 Banner — El Dorado Motorsports" },
  { src: "/assets/01-linkedin-company-banner-v1.png", alt: "#22 car — company banner", category: "Brand Assets", caption: "#22 Banner — Championship Year" },
  { src: "/assets/05-race-result-post-template.png", alt: "P1 Race Result Template", category: "Brand Assets", caption: "P1 Race Result" },
  { src: "/assets/08-sponsor-slide-v1.png", alt: "Sponsor slide", category: "Brand Assets", caption: "Sponsorship Deck" },
  { src: "/assets/09-twitter-header-v1.png", alt: "Twitter/X header", category: "Brand Assets", caption: "Social Header" },
  { src: "/assets/10-youtube-banner-v1-with-car.png", alt: "YouTube banner with car", category: "Brand Assets", caption: "YouTube Banner" },

  // Driver Portraits
  { src: "/assets/04-profile-headshot-v1-BEST.png", alt: "Nathan Pope headshot — best quality", category: "Driver Portraits", caption: "Nathan Pope — Driver Profile" },
  { src: "/assets/13-pre-race-portrait-focused-v1.png", alt: "Pre-race portrait", category: "Driver Portraits", caption: "Pre-Race — Focused" },
  { src: "/assets/13-pre-race-portrait-race-ready-v1.png", alt: "Race-ready portrait", category: "Driver Portraits", caption: "Race Ready" },
  { src: "/assets/25-suit-up-v1-42car.png", alt: "Suit up — #42", category: "Driver Portraits", caption: "SUIT UP — #42" },
  { src: "/assets/25-suit-up-v2-23car.png", alt: "Suit up — #23", category: "Driver Portraits", caption: "SUIT UP — #23" },
  { src: "/assets/11-nathan-personal-linkedin-banner-v1-42car.png", alt: "Nathan next to #42", category: "Driver Portraits", caption: "Nathan + #42" },
  { src: "/assets/21-nathan-linkedin-banner-next-to-23-v1.png", alt: "Nathan next to #23", category: "Driver Portraits", caption: "Nathan + #23" },
  { src: "/assets/12-driver-profile-card-v1.png", alt: "Driver profile card", category: "Driver Portraits", caption: "Driver Profile Card" },
  { src: "/assets/39-helmet-closeup-v1.png", alt: "Helmet closeup", category: "Driver Portraits", caption: "Helmet — Closeup" },
  { src: "/assets/17-helmet-visor-closeup-vega-v1.png", alt: "Helmet visor closeup", category: "Driver Portraits", caption: "Visor — Race Ready" },

  // Car Shots
  { src: "/assets/27-42-clean-side-profile-night-v1.png", alt: "#42 clean side profile — night", category: "Car Shots", caption: "#42 — Night Side Profile" },
  { src: "/assets/33-22-dusk-shot-v2.png", alt: "#22 dusk shot", category: "Car Shots", caption: "#22 STU — Dusk" },
  { src: "/assets/34-las-vegas-22-v1.png", alt: "#22 at Las Vegas", category: "Car Shots", caption: "#22 — Las Vegas" },
  { src: "/assets/31-23-prelude-car-shot-v1.png", alt: "#23 Prelude car shot", category: "Car Shots", caption: "#23 Honda Prelude" },
  { src: "/assets/15-in-the-cockpit-crx-v1.png", alt: "In the cockpit — CRX", category: "Car Shots", caption: "IN THE SEAT — #24 CRX" },
  { src: "/assets/27-42-clean-side-profile-night-v2.png", alt: "#42 night side profile v2", category: "Car Shots", caption: "#42 — Night (alt)" },

  // Race Action
  { src: "/assets/23-on-track-front-view-42-v1.png", alt: "#42 on track — front view", category: "Race Action", caption: "#42 ON TRACK — Front" },
  { src: "/assets/24-on-track-side-profile-42-v1.png", alt: "#42 on track — side profile", category: "Race Action", caption: "#42 ON TRACK — Side" },
  { src: "/assets/32-23-at-sonoma-v1.png", alt: "#23 at Sonoma Raceway", category: "Race Action", caption: "#23 at Sonoma Raceway" },
  { src: "/assets/14-champion-celebration-v1.png", alt: "Champion celebration", category: "Race Action", caption: "CHAMPION" },
  { src: "/assets/22-trophy-celebration-v1-checkered-flags.png", alt: "Trophy celebration with checkered flags", category: "Race Action", caption: "P1 RACE WIN" },
  { src: "/assets/22-trophy-celebration-v2-podium.png", alt: "Podium celebration", category: "Race Action", caption: "P1 PODIUM" },
  { src: "/assets/19-race-win-celebration-v1.png", alt: "Race win celebration", category: "Race Action", caption: "Race Win Celebration" },
  { src: "/assets/30-karting-origins-v2.png", alt: "Karting origins", category: "Race Action", caption: "KARTS TO CHAMPIONSHIPS" },
];

export default function GalleryPage() {
  return (
    <div className="bg-black pt-16">
      {/* ── Hero ── */}
      <section className="py-20 text-center">
        <div className="w-12 h-0.5 bg-[#cc0000] mx-auto mb-6" />
        <p
          className="text-[#b0b8c1] text-sm tracking-widest uppercase mb-3"
          style={{ fontFamily: "var(--font-barlow-condensed)" }}
        >
          El Dorado Motorsports
        </p>
        <h1
          className="text-7xl sm:text-9xl font-black text-white leading-none"
          style={{ fontFamily: "var(--font-barlow-condensed)" }}
        >
          Photo <span className="text-[#cc0000]">Gallery</span>
        </h1>
        <p
          className="mt-4 text-[#b0b8c1] text-xl tracking-widest uppercase"
          style={{ fontFamily: "var(--font-barlow-condensed)" }}
        >
          Brand Assets &middot; Driver Portraits &middot; Car Shots &middot; Race Action
        </p>
      </section>

      {/* ── Category Labels ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <span
              key={cat}
              className="px-4 py-1.5 border border-[#1a1a1a] text-[#b0b8c1] text-xs font-bold tracking-widest uppercase"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      {/* ── By Category ── */}
      {["Brand Assets", "Driver Portraits", "Car Shots", "Race Action"].map((category) => {
        const catImages = images.filter((img) => img.category === category);
        return (
          <section key={category} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            {/* Category header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-0.5 bg-[#cc0000]" />
              <h2
                className="text-2xl font-black text-white tracking-widest uppercase"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                {category}
              </h2>
              <div className="flex-1 h-px bg-[#1a1a1a]" />
              <span
                className="text-[#555] text-xs tracking-widest"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                {catImages.length} images
              </span>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {catImages.map((img, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden bg-[#0f0f0f] border border-[#1a1a1a] hover:border-[#cc0000]/50 transition-colors cursor-pointer"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300 flex items-end">
                    <div className="w-full p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p
                        className="text-white text-xs font-bold tracking-widest uppercase leading-tight"
                        style={{ fontFamily: "var(--font-barlow-condensed)" }}
                      >
                        {img.caption}
                      </p>
                      <p
                        className="text-[#cc0000] text-xs mt-0.5"
                        style={{ fontFamily: "var(--font-barlow-condensed)" }}
                      >
                        {img.category}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}

      {/* ── Footer CTA ── */}
      <section className="border-t border-[#1a1a1a] py-16 text-center">
        <p
          className="text-[#b0b8c1] mb-2"
          style={{ fontFamily: "var(--font-barlow)" }}
        >
          Follow for race updates and behind-the-scenes content.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
          <a
            href="https://instagram.com/pope_motorsports"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-[#cc0000] text-white font-bold tracking-widest uppercase text-sm hover:bg-red-700 transition-colors"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            @pope_motorsports
          </a>
          <a
            href="https://instagram.com/_nathanpope_"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-white text-white font-bold tracking-widest uppercase text-sm hover:bg-white hover:text-black transition-colors"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            @_nathanpope_
          </a>
        </div>
      </section>
    </div>
  );
}
