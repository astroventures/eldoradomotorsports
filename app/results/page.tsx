import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Race Results | El Dorado Motorsports",
  description:
    "El Dorado Motorsports race results — 2x SCCA Western Conference Champions, 13+ career wins, Buttonwillow track record.",
};

const championships = [
  {
    year: "2019",
    title: "SCCA Western Super Tour Champion",
    subtitle: "STU Class — 8 Starts, 8 Wins",
    description:
      "An undefeated championship season. The 2019 Super Tour campaign produced eight race wins from eight starts — a perfect score. The Buttonwillow Raceway Park STU class track record was also set this season.",
    highlight: "8-0 — Undefeated",
  },
  {
    year: "2021",
    title: "SCCA Western Conference Champion",
    subtitle: "STL Class",
    description:
      "Back-to-back conference championships in two different classes. The 2021 title in STL demonstrated Nathan&apos;s adaptability and continued championship-caliber performance across regulations.",
    highlight: "2x Champion",
  },
];

const raceWins = [
  { year: "2019", event: "SCCA Western Super Tour", location: "Round 1", class: "STU", result: "P1 — 1st Win" },
  { year: "2019", event: "SCCA Western Super Tour", location: "Round 2", class: "STU", result: "P1" },
  { year: "2019", event: "SCCA Western Super Tour", location: "Round 3", class: "STU", result: "P1" },
  { year: "2019", event: "SCCA Western Super Tour", location: "Round 4", class: "STU", result: "P1" },
  { year: "2019", event: "SCCA Western Super Tour", location: "Round 5", class: "STU", result: "P1" },
  { year: "2019", event: "SCCA Western Super Tour", location: "Round 6", class: "STU", result: "P1" },
  { year: "2019", event: "SCCA Western Super Tour", location: "Round 7", class: "STU", result: "P1" },
  { year: "2019", event: "SCCA Western Super Tour", location: "Round 8 — Championship", class: "STU", result: "P1 — Championship" },
  { year: "2021", event: "SCCA Western Conference", location: "Multiple Rounds", class: "STL", result: "P1 — Championship" },
  { year: "2022", event: "Buttonwillow Hoosier Super Tour", location: "Buttonwillow Raceway Park", class: "STU", result: "P1 — Saturday" },
  { year: "2022", event: "Buttonwillow Hoosier Super Tour", location: "Buttonwillow Raceway Park", class: "STU", result: "P1 — Sunday" },
];

export default function ResultsPage() {
  return (
    <div className="bg-black pt-16">
      {/* ── Hero ── */}
      <section className="relative py-28 sm:py-36 overflow-hidden">
        <Image
          src="/assets/22-trophy-celebration-v1-checkered-flags.png"
          alt="P1 Race Win — El Dorado Motorsports"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
            Race <span className="text-[#cc0000]">Results</span>
          </h1>
          <p
            className="mt-4 text-[#b0b8c1] text-xl tracking-widest uppercase"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            13+ Career Wins &middot; 2x Champion &middot; SCCA Track Record
          </p>
        </div>
      </section>

      {/* ── Summary Stats ── */}
      <section className="bg-[#cc0000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "2", label: "Championships" },
              { value: "13+", label: "Career Wins" },
              { value: "8-0", label: "2019 Perfect Season" },
              { value: "1", label: "Track Records" },
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

      {/* ── Championship Titles ── */}
      <section className="bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-14">
            <div className="w-12 h-0.5 bg-[#cc0000] mx-auto mb-4" />
            <h2
              className="text-5xl sm:text-6xl font-black text-white"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Championship <span className="text-[#cc0000]">Titles</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {championships.map((champ) => (
              <div
                key={champ.year}
                className="bg-black border border-[#1a1a1a] hover:border-[#cc0000]/40 transition-colors p-8 flex flex-col gap-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className="text-8xl font-black text-[#cc0000]/20 leading-none select-none"
                    style={{ fontFamily: "var(--font-barlow-condensed)" }}
                  >
                    {champ.year}
                  </div>
                  <span
                    className="shrink-0 px-3 py-1 bg-[#cc0000] text-white text-xs font-bold tracking-widest uppercase"
                    style={{ fontFamily: "var(--font-barlow-condensed)" }}
                  >
                    {champ.highlight}
                  </span>
                </div>
                <div>
                  <h3
                    className="text-2xl font-black text-white leading-tight"
                    style={{ fontFamily: "var(--font-barlow-condensed)" }}
                  >
                    {champ.title}
                  </h3>
                  <p
                    className="text-[#cc0000] text-sm font-bold tracking-widest uppercase mt-1"
                    style={{ fontFamily: "var(--font-barlow-condensed)" }}
                  >
                    {champ.subtitle}
                  </p>
                </div>
                <p
                  className="text-[#b0b8c1] leading-relaxed text-sm"
                  style={{ fontFamily: "var(--font-barlow)" }}
                  dangerouslySetInnerHTML={{ __html: champ.description }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Race Wins Log ── */}
      <section className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-14">
            <div className="w-12 h-0.5 bg-[#cc0000] mx-auto mb-4" />
            <h2
              className="text-5xl sm:text-6xl font-black text-white"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Race <span className="text-[#cc0000]">Wins</span>
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[#cc0000]">
                  {["Year", "Event", "Location / Round", "Class", "Result"].map((h) => (
                    <th
                      key={h}
                      className="text-left py-3 px-4 text-xs font-bold tracking-widest uppercase text-[#b0b8c1]"
                      style={{ fontFamily: "var(--font-barlow-condensed)" }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {raceWins.map((win, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-[#1a1a1a] hover:bg-[#0f0f0f] transition-colors"
                  >
                    <td
                      className="py-3 px-4 font-black text-[#cc0000]"
                      style={{ fontFamily: "var(--font-barlow-condensed)" }}
                    >
                      {win.year}
                    </td>
                    <td
                      className="py-3 px-4 text-white font-bold"
                      style={{ fontFamily: "var(--font-barlow-condensed)" }}
                    >
                      {win.event}
                    </td>
                    <td
                      className="py-3 px-4 text-[#b0b8c1] text-sm"
                      style={{ fontFamily: "var(--font-barlow)" }}
                    >
                      {win.location}
                    </td>
                    <td
                      className="py-3 px-4 text-[#b0b8c1] text-sm"
                      style={{ fontFamily: "var(--font-barlow)" }}
                    >
                      {win.class}
                    </td>
                    <td
                      className="py-3 px-4 font-bold text-[#cc0000]"
                      style={{ fontFamily: "var(--font-barlow-condensed)" }}
                    >
                      {win.result}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p
            className="text-[#555] text-xs text-center mt-6"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            13+ total career wins across SCCA and NASA. Selected victories shown above.
          </p>
        </div>
      </section>

      {/* ── Track Record ── */}
      <section className="bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <div className="w-12 h-0.5 bg-[#cc0000]" />
              <p
                className="text-[#b0b8c1] text-sm tracking-widest uppercase"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Track Records
              </p>
              <h2
                className="text-5xl font-black text-white leading-tight"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Buttonwillow
                <br />
                <span className="text-[#cc0000]">Raceway Park</span>
              </h2>

              <div className="bg-black border border-[#cc0000]/30 p-6 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#cc0000] rounded-full" />
                  <span
                    className="text-[#cc0000] text-sm font-bold tracking-widest uppercase"
                    style={{ fontFamily: "var(--font-barlow-condensed)" }}
                  >
                    Active Track Record
                  </span>
                </div>
                <div
                  className="text-2xl font-black text-white"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  STU Class — Buttonwillow Raceway Park
                </div>
                <div
                  className="text-[#b0b8c1] text-sm"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  Set during the 2019 SCCA Western Super Tour championship campaign. The record stands as testament to the pace that drove the undefeated season.
                </div>
              </div>

              <div className="bg-black border border-[#1a1a1a] p-6 flex flex-col gap-3">
                <div
                  className="text-lg font-black text-white"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  2022 Buttonwillow Sweep
                </div>
                <div
                  className="text-[#b0b8c1] text-sm"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  Saturday win + Sunday win at the 2022 Buttonwillow Hoosier Super Tour — a complete weekend sweep demonstrating consistent, elite-level performance.
                </div>
              </div>
            </div>

            {/* Trophy images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="/assets/22-trophy-celebration-v1-checkered-flags.png"
                  alt="Race win trophy celebration with checkered flags"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="/assets/22-trophy-celebration-v2-podium.png"
                  alt="Podium celebration"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
              <div className="col-span-2 relative aspect-video overflow-hidden">
                <Image
                  src="/assets/19-race-win-celebration-v1.png"
                  alt="Race win celebration"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-black py-20 text-center">
        <div className="w-12 h-0.5 bg-[#cc0000] mx-auto mb-6" />
        <h2
          className="text-4xl font-black text-white mb-4"
          style={{ fontFamily: "var(--font-barlow-condensed)" }}
        >
          Partner With a <span className="text-[#cc0000]">Champion</span>
        </h2>
        <p
          className="text-[#b0b8c1] mb-8 max-w-xl mx-auto"
          style={{ fontFamily: "var(--font-barlow)" }}
        >
          Two championships, 13+ wins, and a track record — El Dorado Motorsports brings
          proven performance to every sponsorship partner.
        </p>
        <Link
          href="/sponsors"
          className="px-8 py-3 bg-[#cc0000] text-white font-bold tracking-widest uppercase text-sm hover:bg-red-700 transition-colors"
          style={{ fontFamily: "var(--font-barlow-condensed)" }}
        >
          Sponsorship Info
        </Link>
      </section>
    </div>
  );
}
