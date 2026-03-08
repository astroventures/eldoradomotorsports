import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black">
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/assets/02-linkedin-company-banner-v3-42car.png"
          alt="El Dorado Motorsports #42 Honda Prelude"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Gradient bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent" />

        <div className="relative z-10 text-center px-4 sm:px-8 max-w-5xl mx-auto">
          {/* Red accent line */}
          <div className="w-16 h-1 bg-[#cc0000] mx-auto mb-6" />
          <h1
            className="text-6xl sm:text-8xl lg:text-[10rem] font-black leading-none tracking-tight text-white uppercase"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            El Dorado
            <br />
            <span className="text-[#cc0000]">Motorsports</span>
          </h1>
          <p
            className="mt-6 text-[#b0b8c1] text-lg sm:text-2xl tracking-widest uppercase"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            SCCA &middot; NASA &middot; Road Racing &middot; Fremont, CA
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/driver"
              className="px-8 py-4 bg-[#cc0000] text-white font-bold tracking-widest uppercase text-sm hover:bg-red-700 transition-colors"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Meet the Driver
            </Link>
            <Link
              href="/sponsors"
              className="px-8 py-4 border border-white text-white font-bold tracking-widest uppercase text-sm hover:bg-white hover:text-black transition-colors"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Sponsorship
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="bg-black border-t-2 border-[#cc0000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "2x", label: "Champion" },
              { value: "13+", label: "Race Wins" },
              { value: "1", label: "SCCA Track Record" },
              { value: "Since 2015", label: "Racing" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-4xl sm:text-5xl font-black text-[#cc0000] leading-none"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-[#b0b8c1] text-sm tracking-widest uppercase mt-1"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Driver ── */}
      <section className="bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="absolute -inset-1 bg-[#cc0000]/20 blur-sm rounded" />
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/assets/04-profile-headshot-v1-BEST.png"
                  alt="Nathan Pope — El Dorado Motorsports Driver"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Red accent border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#cc0000]" />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-6">
              <div className="w-12 h-0.5 bg-[#cc0000]" />
              <div
                className="text-[#b0b8c1] text-sm tracking-widest uppercase"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Featured Driver
              </div>
              <h2
                className="text-6xl sm:text-7xl font-black text-white leading-none"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Nathan
                <br />
                <span className="text-[#cc0000]">Pope</span>
              </h2>

              {/* Badge */}
              <div className="inline-flex items-center gap-3 bg-[#cc0000]/10 border border-[#cc0000]/30 px-4 py-2 w-fit">
                <div className="w-2 h-2 rounded-full bg-[#cc0000]" />
                <span
                  className="text-[#cc0000] text-sm font-bold tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  2x SCCA Western Conference Champion
                </span>
              </div>

              <p
                className="text-[#b0b8c1] text-lg leading-relaxed"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                Nathan Pope is a two-time SCCA Western Conference Champion, known
                for dominating the STU and STL classes with Honda Preludes. His
                2019 season stands as one of the most complete in Western
                Conference history — an undefeated 8-for-8 campaign that
                secured the Super Tour championship.
              </p>
              <p
                className="text-[#b0b8c1] leading-relaxed"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                With 13+ career wins across SCCA and NASA, a Buttonwillow
                Raceway Park track record, and championships at every level,
                Nathan continues to build on a legacy of consistent,
                championship-caliber racing.
              </p>

              <Link
                href="/driver"
                className="inline-flex items-center gap-3 text-[#cc0000] font-bold tracking-widest uppercase text-sm group w-fit"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Full Driver Profile
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Car ── */}
      <section className="bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <div className="w-12 h-0.5 bg-[#cc0000] mx-auto mb-4" />
            <p
              className="text-[#b0b8c1] text-sm tracking-widest uppercase"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Current Season
            </p>
            <h2
              className="text-5xl sm:text-6xl font-black text-white mt-2"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              #42 Honda <span className="text-[#cc0000]">Prelude</span>
            </h2>
            <p
              className="text-[#b0b8c1] tracking-widest uppercase mt-2"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              STU Class &middot; Black / Red / Silver Livery
            </p>
          </div>

          <div className="relative aspect-[16/7] overflow-hidden">
            <Image
              src="/assets/27-42-clean-side-profile-night-v1.png"
              alt="#42 Honda Prelude — El Dorado Motorsports"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#cc0000]" />
          </div>

          <div className="text-center mt-8">
            <Link
              href="/cars"
              className="inline-flex items-center gap-3 text-[#cc0000] font-bold tracking-widest uppercase text-sm group"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              View All Cars
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Championship Highlights ── */}
      <section className="bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <div className="w-12 h-0.5 bg-[#cc0000] mx-auto mb-4" />
            <h2
              className="text-5xl sm:text-6xl font-black text-white"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Championship <span className="text-[#cc0000]">Highlights</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                year: "2019",
                title: "SCCA Western Super Tour Champion",
                subtitle: "STU Class",
                detail: "Undefeated season — 8 starts, 8 wins. Dominant championship campaign with zero losses.",
                accent: "#cc0000",
              },
              {
                year: "2021",
                title: "SCCA Western Conference Champion",
                subtitle: "STL Class",
                detail: "Back-to-back conference championship — proving consistency across different classes.",
                accent: "#cc0000",
              },
              {
                year: "2022",
                title: "Buttonwillow Super Tour Sweep",
                subtitle: "Saturday + Sunday Wins",
                detail: "Complete weekend sweep at Buttonwillow Hoosier Super Tour — win Saturday, win Sunday.",
                accent: "#cc0000",
              },
            ].map((card) => (
              <div
                key={card.year}
                className="bg-black border border-[#1a1a1a] hover:border-[#cc0000]/50 transition-colors p-8 flex flex-col gap-4"
              >
                <div
                  className="text-6xl font-black text-[#cc0000] leading-none"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  {card.year}
                </div>
                <div>
                  <h3
                    className="text-xl font-bold text-white leading-tight"
                    style={{ fontFamily: "var(--font-barlow-condensed)" }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="text-[#cc0000] text-sm tracking-widest uppercase mt-1"
                    style={{ fontFamily: "var(--font-barlow-condensed)" }}
                  >
                    {card.subtitle}
                  </p>
                </div>
                <p
                  className="text-[#b0b8c1] text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  {card.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/results"
              className="inline-flex items-center gap-3 px-8 py-3 border border-[#cc0000] text-[#cc0000] font-bold tracking-widest uppercase text-sm hover:bg-[#cc0000] hover:text-white transition-colors"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Full Results
            </Link>
          </div>
        </div>
      </section>

      {/* ── Sponsor CTA ── */}
      <section className="relative overflow-hidden">
        <Image
          src="/assets/08-sponsor-slide-v1.png"
          alt="Partner with El Dorado Motorsports"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center">
          <div className="w-12 h-0.5 bg-[#cc0000] mx-auto mb-6" />
          <h2
            className="text-5xl sm:text-7xl font-black text-white leading-none"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Become a <span className="text-[#cc0000]">Sponsor</span>
          </h2>
          <p
            className="mt-6 text-[#b0b8c1] text-xl max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Put your brand on a championship-proven car. Gain visibility across
            SCCA and NASA events throughout the Western United States.
          </p>
          <Link
            href="/sponsors"
            className="mt-10 inline-flex items-center gap-3 px-10 py-4 bg-[#cc0000] text-white font-black tracking-widest uppercase text-sm hover:bg-red-700 transition-colors"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Sponsorship Opportunities
          </Link>
        </div>
      </section>
    </div>
  );
}
