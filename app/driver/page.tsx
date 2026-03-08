import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Nathan Pope — Driver | El Dorado Motorsports",
  description:
    "Nathan Pope — Two-time SCCA Western Conference Champion. 13+ race wins, Buttonwillow track record. El Dorado Motorsports.",
};

export default function DriverPage() {
  return (
    <div className="bg-black pt-16">
      {/* ── Hero ── */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/assets/25-suit-up-v1-42car.png"
          alt="Nathan Pope suited up next to #42"
          fill
          className="object-cover object-top"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <div className="w-12 h-0.5 bg-[#cc0000] mb-4" />
          <p
            className="text-[#b0b8c1] text-sm tracking-widest uppercase mb-2"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            El Dorado Motorsports
          </p>
          <h1
            className="text-7xl sm:text-9xl font-black text-white leading-none"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Nathan
            <br />
            <span className="text-[#cc0000]">Pope</span>
          </h1>
          <p
            className="mt-4 text-[#b0b8c1] text-xl tracking-widest uppercase"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Racing Driver &middot; El Dorado Motorsports
          </p>
        </div>
      </section>

      {/* ── Profile ── */}
      <section className="bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Headshot */}
            <div className="relative">
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src="/assets/04-profile-headshot-v1-BEST.png"
                  alt="Nathan Pope headshot"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#cc0000]" />

              {/* Driver profile card overlay */}
              <div className="mt-6">
                <Image
                  src="/assets/12-driver-profile-card-v1.png"
                  alt="Nathan Pope driver profile stats"
                  width={600}
                  height={337}
                  className="w-full object-contain"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="flex flex-col gap-6">
              <div className="w-12 h-0.5 bg-[#cc0000]" />
              <h2
                className="text-5xl font-black text-white"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Driver <span className="text-[#cc0000]">Profile</span>
              </h2>

              {/* Badges */}
              <div className="flex flex-wrap gap-3">
                {["2x Champion", "13+ Race Wins", "SCCA Track Record", "Fremont, CA"].map((badge) => (
                  <span
                    key={badge}
                    className="px-3 py-1 border border-[#cc0000]/40 text-[#cc0000] text-xs font-bold tracking-widest uppercase"
                    style={{ fontFamily: "var(--font-barlow-condensed)" }}
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <div
                className="flex flex-col gap-4 text-[#b0b8c1] leading-relaxed"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                <p>
                  Nathan Pope is one of the West Coast&apos;s most decorated amateur
                  road racers — a two-time SCCA Western Conference Champion who
                  has built a career on technical precision, car development, and
                  relentless competitiveness.
                </p>
                <p>
                  His 2019 Super Tour campaign remains one of the most dominant
                  in Western Conference history: eight starts, eight wins, and a
                  championship secured without a single loss. That season also
                  produced the Buttonwillow Raceway Park track record for the STU
                  class — a record that still stands.
                </p>
                <p>
                  In 2021, Nathan added a second conference championship in the
                  STL class, demonstrating his adaptability across different car
                  setups and regulations. The 2022 season brought a complete
                  weekend sweep at the Buttonwillow Hoosier Super Tour — back-to-back
                  wins on Saturday and Sunday.
                </p>
                <p>
                  Based in the Fremont, CA area and competing under the El Dorado
                  Motorsports banner, Nathan continues to develop Honda Preludes
                  and pursue championships across SCCA and NASA platforms.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                {[
                  { label: "Home Base", value: "Fremont, CA" },
                  { label: "Primary Series", value: "SCCA / NASA" },
                  { label: "Car Brands", value: "Honda" },
                  { label: "Primary Class", value: "STU / STL" },
                ].map((item) => (
                  <div key={item.label} className="border border-[#1a1a1a] p-4">
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
          </div>
        </div>
      </section>

      {/* ── Championship Record ── */}
      <section className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-14">
            <div className="w-12 h-0.5 bg-[#cc0000] mx-auto mb-4" />
            <h2
              className="text-5xl sm:text-6xl font-black text-white"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Championship <span className="text-[#cc0000]">Record</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                year: "2019",
                title: "SCCA Western Super Tour Champion",
                class: "STU Class",
                car: "#22 Honda Prelude",
                detail: "Undefeated — 8 starts, 8 wins. Buttonwillow track record set this season.",
                img: "/assets/01-linkedin-company-banner-v1.png",
              },
              {
                year: "2021",
                title: "SCCA Western Conference Champion",
                class: "STL Class",
                car: "#23 Honda Prelude",
                detail: "Second conference championship, different class — proving championship-caliber across formats.",
                img: "/assets/14-champion-celebration-v1.png",
              },
              {
                year: "2022",
                title: "Buttonwillow Super Tour Sweep",
                class: "Saturday + Sunday",
                car: "#22 Honda Prelude",
                detail: "Complete weekend sweep at Buttonwillow Hoosier Super Tour.",
                img: "/assets/22-trophy-celebration-v2-podium.png",
              },
            ].map((card) => (
              <div
                key={card.year}
                className="bg-[#0f0f0f] border border-[#1a1a1a] overflow-hidden hover:border-[#cc0000]/50 transition-colors"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/50" />
                  <div
                    className="absolute top-4 left-4 text-5xl font-black text-[#cc0000]"
                    style={{ fontFamily: "var(--font-barlow-condensed)" }}
                  >
                    {card.year}
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-2">
                  <h3
                    className="text-xl font-black text-white"
                    style={{ fontFamily: "var(--font-barlow-condensed)" }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="text-[#cc0000] text-sm tracking-widest uppercase font-bold"
                    style={{ fontFamily: "var(--font-barlow-condensed)" }}
                  >
                    {card.class} &middot; {card.car}
                  </p>
                  <p
                    className="text-[#b0b8c1] text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-barlow)" }}
                  >
                    {card.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Career Stats ── */}
      <section className="bg-[#cc0000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "2", label: "Championships" },
              { value: "13+", label: "Career Wins" },
              { value: "1", label: "Track Records" },
              { value: "8-0", label: "2019 Record" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-6xl sm:text-7xl font-black text-white leading-none"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-white/70 text-sm tracking-widest uppercase mt-2"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Origins ── */}
      <section className="bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <div className="w-12 h-0.5 bg-[#cc0000]" />
              <p
                className="text-[#b0b8c1] text-sm tracking-widest uppercase"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Where It Started
              </p>
              <h2
                className="text-5xl sm:text-6xl font-black text-white"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Karts to
                <br />
                <span className="text-[#cc0000]">Championships</span>
              </h2>
              <p
                className="text-[#b0b8c1] leading-relaxed"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                Like most serious racers, Nathan&apos;s journey started in karts — the
                purist&apos;s proving ground where car control, racecraft, and
                competitive instinct are forged under the rawest conditions.
                Those foundations carried directly into road racing, where the
                same instincts — smooth inputs, precise braking, carrying speed
                through corners — separate champions from the field.
              </p>
              <p
                className="text-[#b0b8c1] leading-relaxed"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                The progression from karts to Honda Preludes built both the
                driver and the team. El Dorado Motorsports has grown from a
                single-car effort into a multi-car program competing across two
                major road racing platforms.
              </p>
            </div>
            <div className="relative aspect-video overflow-hidden">
              <Image
                src="/assets/30-karting-origins-v2.png"
                alt="Karting origins — Nathan Pope"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#cc0000]" />
            </div>
          </div>
        </div>
      </section>

      {/* ── In the Car ── */}
      <section className="relative overflow-hidden">
        <Image
          src="/assets/15-in-the-cockpit-crx-v1.png"
          alt="Nathan Pope in the cockpit"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="max-w-xl">
            <div className="w-12 h-0.5 bg-[#cc0000] mb-4" />
            <p
              className="text-[#b0b8c1] text-sm tracking-widest uppercase mb-2"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              In the Seat
            </p>
            <h2
              className="text-6xl font-black text-white leading-none"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Where the
              <br />
              <span className="text-[#cc0000]">Work Happens</span>
            </h2>
            <p
              className="mt-6 text-[#b0b8c1] leading-relaxed"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Inside a race car, the margin between a good lap and a great lap
              is measured in tenths. Nathan&apos;s track record reflects years of
              those tenths adding up.
            </p>
          </div>
        </div>
      </section>

      {/* ── Follow ── */}
      <section className="bg-black py-16 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h3
            className="text-3xl font-black text-white mb-4"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Follow the Journey
          </h3>
          <p
            className="text-[#b0b8c1] mb-6"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Race updates, behind-the-scenes content, and in-car footage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </section>
    </div>
  );
}
