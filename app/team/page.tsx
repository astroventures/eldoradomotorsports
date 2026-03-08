import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Team | El Dorado Motorsports",
  description:
    "El Dorado Motorsports — Fremont, CA based road racing team competing in SCCA and NASA. Multi-car program with championship pedigree.",
};

export default function TeamPage() {
  return (
    <div className="bg-black pt-16">
      {/* ── Hero ── */}
      <section className="relative py-28 sm:py-36 overflow-hidden">
        <Image
          src="/assets/01-linkedin-company-banner-v1.png"
          alt="El Dorado Motorsports — #22 Honda Prelude"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-12 h-0.5 bg-[#cc0000] mx-auto mb-6" />
          <p
            className="text-[#b0b8c1] text-sm tracking-widest uppercase mb-3"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Fremont, CA · Est. 2015
          </p>
          <h1
            className="text-6xl sm:text-8xl lg:text-9xl font-black text-white leading-none"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            El Dorado
            <br />
            <span className="text-[#cc0000]">Motorsports</span>
          </h1>
          <p
            className="mt-4 text-[#b0b8c1] text-xl tracking-widest uppercase"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            SCCA &middot; NASA &middot; Road Racing
          </p>
        </div>
      </section>

      {/* ── About ── */}
      <section className="bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="flex flex-col gap-6">
              <div className="w-12 h-0.5 bg-[#cc0000]" />
              <h2
                className="text-5xl sm:text-6xl font-black text-white"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                About the <span className="text-[#cc0000]">Team</span>
              </h2>
              <div
                className="flex flex-col gap-4 text-[#b0b8c1] leading-relaxed"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                <p>
                  El Dorado Motorsports is a Fremont, California-based road racing
                  team competing at the highest amateur levels across SCCA and NASA
                  platforms. Founded on a philosophy of precision engineering,
                  driver development, and relentless pursuit of performance, the
                  team has built a championship record that speaks for itself.
                </p>
                <p>
                  The team campaigns Honda Preludes — a platform chosen for its
                  balance of mechanical platform, development ceiling, and class
                  competitiveness. Every car in the fleet is built to race-winning
                  specification, developed in-house with decades of accumulated
                  knowledge.
                </p>
                <p>
                  Two SCCA Western Conference championships, 13+ race wins, and a
                  Buttonwillow Raceway Park track record define what El Dorado
                  Motorsports stands for: consistent, championship-caliber
                  performance.
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/assets/21-nathan-linkedin-banner-next-to-23-v1.png"
                alt="Nathan Pope next to #23"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#cc0000]" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Multi-car Program Stats ── */}
      <section className="bg-black border-t border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <div className="w-12 h-0.5 bg-[#cc0000] mx-auto mb-4" />
            <h2
              className="text-5xl font-black text-white"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Multi-Car <span className="text-[#cc0000]">Program</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "4", label: "Race Cars" },
              { value: "2", label: "Race Series" },
              { value: "3+", label: "Car Classes" },
              { value: "10+", label: "Years Racing" },
            ].map((stat) => (
              <div key={stat.label} className="text-center border border-[#1a1a1a] p-6">
                <div
                  className="text-5xl font-black text-[#cc0000] leading-none"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-[#b0b8c1] text-xs tracking-widest uppercase mt-2"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Race Series ── */}
      <section className="bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-14">
            <div className="w-12 h-0.5 bg-[#cc0000] mx-auto mb-4" />
            <h2
              className="text-5xl font-black text-white"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Race <span className="text-[#cc0000]">Series</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "SCCA Super Tour",
                desc: "The premier national road racing series in the United States. El Dorado Motorsports has claimed the Western Super Tour championship outright — 8 wins in a single season.",
                detail: "STU class · Western Conference",
                highlight: "2019 Champion",
              },
              {
                name: "SCCA Majors Tour",
                desc: "Regional SCCA competition at tracks across the Western United States — the proving ground where championship pace is developed and refined.",
                detail: "Multiple classes · Regional",
                highlight: "Multiple Championships",
              },
              {
                name: "NASA ST4",
                desc: "The team's NASA program campaigns a Honda CRX in the ST4 class — expanding the program beyond SCCA into a second major road racing platform.",
                detail: "ST4 class · National series",
                highlight: "NASA Program",
              },
            ].map((series) => (
              <div
                key={series.name}
                className="bg-black border border-[#1a1a1a] hover:border-[#cc0000]/40 transition-colors p-8 flex flex-col gap-4"
              >
                <div className="w-8 h-0.5 bg-[#cc0000]" />
                <h3
                  className="text-2xl font-black text-white"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  {series.name}
                </h3>
                <p
                  className="text-[#b0b8c1] text-sm leading-relaxed flex-1"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  {series.desc}
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-[#1a1a1a]">
                  <span
                    className="text-[#555] text-xs tracking-widest uppercase"
                    style={{ fontFamily: "var(--font-barlow-condensed)" }}
                  >
                    {series.detail}
                  </span>
                  <span
                    className="text-[#cc0000] text-xs font-bold tracking-widest uppercase"
                    style={{ fontFamily: "var(--font-barlow-condensed)" }}
                  >
                    {series.highlight}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Location ── */}
      <section className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src="/assets/34-las-vegas-22-v1.png"
                alt="#22 at Las Vegas Motor Speedway"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#cc0000]" />
            </div>

            <div className="flex flex-col gap-6">
              <div className="w-12 h-0.5 bg-[#cc0000]" />
              <h2
                className="text-5xl font-black text-white"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Home Base &<br />
                <span className="text-[#cc0000]">Race Tracks</span>
              </h2>
              <div
                className="flex flex-col gap-4 text-[#b0b8c1] leading-relaxed"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                <p>
                  Based in Fremont, CA in the heart of the San Francisco Bay Area,
                  El Dorado Motorsports is ideally positioned to compete at tracks
                  throughout the Western United States.
                </p>
                <p>
                  The team regularly competes at circuits including Buttonwillow
                  Raceway Park, Sonoma Raceway, Las Vegas Motor Speedway, and
                  other Western Conference venues. Events span from Northern
                  California to Nevada and beyond.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  "Buttonwillow Raceway Park",
                  "Sonoma Raceway",
                  "Las Vegas Motor Speedway",
                  "Western Conference Tracks",
                ].map((track) => (
                  <div
                    key={track}
                    className="border border-[#1a1a1a] px-4 py-3 text-sm text-[#b0b8c1]"
                    style={{ fontFamily: "var(--font-barlow)" }}
                  >
                    {track}
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-2">
                <div className="w-2 h-2 rounded-full bg-[#cc0000]" />
                <span
                  className="text-[#b0b8c1] text-sm tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  Fremont, CA · San Francisco Bay Area
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sponsor CTA ── */}
      <section className="bg-[#cc0000] py-20 text-center">
        <h2
          className="text-5xl font-black text-white"
          style={{ fontFamily: "var(--font-barlow-condensed)" }}
        >
          Join the Team
        </h2>
        <p
          className="text-white/80 mt-3 mb-8 max-w-xl mx-auto text-lg"
          style={{ fontFamily: "var(--font-barlow)" }}
        >
          Partner with El Dorado Motorsports and put your brand alongside a
          two-time championship team.
        </p>
        <Link
          href="/sponsors"
          className="inline-flex items-center gap-3 px-8 py-3 bg-black text-white font-bold tracking-widest uppercase text-sm hover:bg-[#0f0f0f] transition-colors"
          style={{ fontFamily: "var(--font-barlow-condensed)" }}
        >
          Sponsorship Opportunities
        </Link>
      </section>
    </div>
  );
}
