import Image from "next/image";

export const metadata = {
  title: "Sponsorship | El Dorado Motorsports",
  description:
    "Partner with El Dorado Motorsports — championship-proven road racing team based in Fremont, CA. SCCA and NASA sponsorship opportunities.",
};

const tiers = [
  {
    name: "Title Sponsor",
    price: "Premier Partnership",
    color: "#cc0000",
    features: [
      "Primary logo placement on hood and front fascia",
      "Logo on driver suit — chest and sleeve",
      "Logo on helmet",
      "Company name in all team communications",
      "Social media features throughout the season",
      "VIP paddock access at all events",
      "Dedicated sponsor content and race day coverage",
      "Category exclusivity",
    ],
    cta: true,
  },
  {
    name: "Series Sponsor",
    price: "Season-Long Visibility",
    color: "#b0b8c1",
    features: [
      "Side panel logo placement on car",
      "Logo on driver suit — sleeve",
      "Social media features at race events",
      "Paddock access at designated events",
      "Season recap content package",
      "Logo on team signage",
    ],
    cta: true,
  },
  {
    name: "Event Sponsor",
    price: "Race Weekend Presence",
    color: "#555",
    features: [
      "Logo placement for designated race events",
      "Social media post at sponsored event",
      "Paddock access at event",
      "Race weekend photo content",
    ],
    cta: true,
  },
  {
    name: "Associate Sponsor",
    price: "Brand Presence",
    color: "#555",
    features: [
      "Logo on rear diffuser or wing",
      "Logo on team website",
      "Social media mention",
      "Season-end recap feature",
    ],
    cta: true,
  },
];

const whySponsor = [
  {
    stat: "2x",
    label: "Championship Proven",
    desc: "Back a team with an established record — not a hope. Two SCCA Western Conference championships mean your brand rides with a winner.",
  },
  {
    stat: "13+",
    label: "Race Wins",
    desc: "Consistent P1 finishes generate media coverage, social content, and visible podium moments that amplify your brand every race weekend.",
  },
  {
    stat: "SCCA & NASA",
    label: "Dual Platform Reach",
    desc: "Two major road racing series mean doubled event exposure — SCCA Super Tour and NASA events across the Western United States.",
  },
  {
    stat: "Bay Area",
    label: "Premium Market",
    desc: "Based in Fremont, CA — the San Francisco Bay Area's motorsport audience is tech-forward, affluent, and highly engaged.",
  },
];

export default function SponsorsPage() {
  return (
    <div className="bg-black pt-16">
      {/* ── Hero ── */}
      <section className="relative py-28 sm:py-36 overflow-hidden">
        <Image
          src="/assets/08-sponsor-slide-v1.png"
          alt="El Dorado Motorsports sponsorship"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-12 h-0.5 bg-[#cc0000] mx-auto mb-6" />
          <p
            className="text-[#b0b8c1] text-sm tracking-widest uppercase mb-3"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            El Dorado Motorsports
          </p>
          <h1
            className="text-6xl sm:text-8xl font-black text-white leading-none"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Partner With
            <br />
            <span className="text-[#cc0000]">EDM</span>
          </h1>
          <p
            className="mt-6 text-[#b0b8c1] text-xl max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Put your brand on a championship-proven machine. Gain visibility at
            SCCA and NASA events across the Western United States.
          </p>
          <a
            href="mailto:nathan.h.pope@gmail.com?subject=EDM Sponsorship Inquiry"
            className="mt-10 inline-flex items-center gap-3 px-10 py-4 bg-[#cc0000] text-white font-black tracking-widest uppercase text-sm hover:bg-red-700 transition-colors"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Get Sponsorship Information
          </a>
        </div>
      </section>

      {/* ── Why Sponsor ── */}
      <section className="bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-14">
            <div className="w-12 h-0.5 bg-[#cc0000] mx-auto mb-4" />
            <h2
              className="text-5xl sm:text-6xl font-black text-white"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Why Sponsor <span className="text-[#cc0000]">EDM?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whySponsor.map((item) => (
              <div
                key={item.label}
                className="bg-black border border-[#1a1a1a] hover:border-[#cc0000]/40 transition-colors p-8 flex flex-col gap-4"
              >
                <div
                  className="text-5xl font-black text-[#cc0000] leading-none"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  {item.stat}
                </div>
                <h3
                  className="text-lg font-black text-white"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  {item.label}
                </h3>
                <p
                  className="text-[#b0b8c1] text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sponsor Slide Feature ── */}
      <section className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src="/assets/08-sponsor-slide-v1.png"
              alt="El Dorado Motorsports sponsorship deck"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p
                className="text-white text-2xl font-black"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Championship Credibility on Every Race Weekend
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sponsorship Tiers ── */}
      <section className="bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-14">
            <div className="w-12 h-0.5 bg-[#cc0000] mx-auto mb-4" />
            <h2
              className="text-5xl sm:text-6xl font-black text-white"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Sponsorship <span className="text-[#cc0000]">Tiers</span>
            </h2>
            <p
              className="mt-4 text-[#b0b8c1] max-w-xl mx-auto"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Every partnership is tailored to your brand&apos;s goals. Reach out to
              discuss custom packages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier, idx) => (
              <div
                key={tier.name}
                className={`bg-black flex flex-col gap-5 p-7 relative overflow-hidden ${
                  idx === 0
                    ? "border border-[#cc0000] ring-1 ring-[#cc0000]/20"
                    : "border border-[#1a1a1a]"
                }`}
              >
                {idx === 0 && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#cc0000]" />
                )}
                <div>
                  <h3
                    className="text-2xl font-black text-white"
                    style={{ fontFamily: "var(--font-barlow-condensed)" }}
                  >
                    {tier.name}
                  </h3>
                  <p
                    className="text-sm tracking-widest uppercase mt-1"
                    style={{ fontFamily: "var(--font-barlow-condensed)", color: tier.color }}
                  >
                    {tier.price}
                  </p>
                </div>

                <ul className="flex flex-col gap-2 flex-1">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-[#b0b8c1]"
                      style={{ fontFamily: "var(--font-barlow)" }}
                    >
                      <div
                        className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: tier.color }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="mailto:nathan.h.pope@gmail.com?subject=EDM Sponsorship Inquiry"
                  className={`mt-2 block text-center py-3 font-bold tracking-widest uppercase text-sm transition-colors ${
                    idx === 0
                      ? "bg-[#cc0000] text-white hover:bg-red-700"
                      : "border border-[#333] text-[#b0b8c1] hover:border-[#cc0000] hover:text-white"
                  }`}
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  Inquire
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section className="bg-black border-t border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <div className="w-12 h-0.5 bg-[#cc0000] mx-auto mb-6" />
          <h2
            className="text-5xl sm:text-6xl font-black text-white"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Ready to <span className="text-[#cc0000]">Partner?</span>
          </h2>
          <p
            className="mt-6 text-[#b0b8c1] text-xl leading-relaxed max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Reach out directly to discuss your sponsorship goals, budget, and
            how El Dorado Motorsports can deliver ROI for your brand.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:nathan.h.pope@gmail.com?subject=EDM Sponsorship Inquiry"
              className="px-10 py-4 bg-[#cc0000] text-white font-black tracking-widest uppercase text-sm hover:bg-red-700 transition-colors"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Email Nathan
            </a>
            <div
              className="text-[#b0b8c1] text-sm"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              nathan.h.pope@gmail.com
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { label: "Based In", value: "Fremont, CA" },
              { label: "Series", value: "SCCA · NASA" },
              { label: "Championships", value: "2x Western Conference" },
            ].map((item) => (
              <div key={item.label} className="border border-[#1a1a1a] p-5">
                <div
                  className="text-[#555] text-xs tracking-widest uppercase mb-1"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  {item.label}
                </div>
                <div
                  className="text-white font-bold"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
