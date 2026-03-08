import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Cars | El Dorado Motorsports",
  description:
    "The El Dorado Motorsports fleet — #42, #22, #23 Honda Preludes (STU/STL) and #24 Honda CRX (NASA ST4).",
};

const cars = [
  {
    number: "#42",
    make: "Honda Prelude",
    class: "STU Class",
    series: "SCCA",
    status: "Current Season",
    livery: "Black / Red / Silver",
    detail:
      "The current primary car — a striking black, red, and silver livery that represents El Dorado Motorsports on track today. Competing in the highly contested STU class at SCCA events across the Western United States.",
    img: "/assets/27-42-clean-side-profile-night-v1.png",
    imgAlt: "#42 Honda Prelude — night side profile",
    badge: "Current",
    badgeColor: "#cc0000",
  },
  {
    number: "#22",
    make: "Honda Prelude",
    class: "STU Class",
    series: "SCCA",
    status: "Championship Car",
    livery: "STU Championship Build",
    detail:
      "The championship machine from the 2019 Super Tour campaign — 8 starts, 8 wins. Immortalized in iconic dusk and night shots under the Budweiser sign at Las Vegas Motor Speedway. Also raced at Buttonwillow where the STU track record was set.",
    img: "/assets/33-22-dusk-shot-v2.png",
    imgAlt: "#22 Honda Prelude — dusk shot at Las Vegas",
    badge: "2019 Champion",
    badgeColor: "#cc0000",
  },
  {
    number: "#23",
    make: "Honda Prelude",
    class: "Multiple Classes",
    series: "SCCA",
    status: "N. POPE on Door",
    livery: "SCCA Road Racing",
    detail:
      'Raced at Sonoma Raceway with "N. POPE" on the door — one of the most recognizable circuits in North American road racing. The #23 has seen competitive action across multiple class configurations.',
    img: "/assets/31-23-prelude-car-shot-v1.png",
    imgAlt: "#23 Honda Prelude",
    badge: "Sonoma Raceway",
    badgeColor: "#b0b8c1",
  },
  {
    number: "#24",
    make: "Honda CRX",
    class: "NASA ST4",
    series: "NASA",
    status: "NASA Program",
    livery: "ST4 Spec Build",
    detail:
      "The NASA arm of the program — a Honda CRX campaigned in the ST4 class. Expanding El Dorado Motorsports&apos; reach beyond SCCA into NASA competition, bringing the same development philosophy to a different platform.",
    img: "/assets/15-in-the-cockpit-crx-v1.png",
    imgAlt: "#24 Honda CRX — cockpit view",
    badge: "NASA ST4",
    badgeColor: "#b0b8c1",
  },
];

export default function CarsPage() {
  return (
    <div className="bg-black pt-16">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <Image
          src="/assets/23-on-track-front-view-42-v1.png"
          alt="#42 on track — front view"
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
            The <span className="text-[#cc0000]">Cars</span>
          </h1>
          <p
            className="mt-4 text-[#b0b8c1] text-xl tracking-widest uppercase"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Honda Preludes &middot; Honda CRX &middot; SCCA &middot; NASA
          </p>
        </div>
      </section>

      {/* ── Cars Grid ── */}
      <section className="bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col gap-16">
            {cars.map((car, idx) => (
              <div
                key={car.number}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${idx % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                {/* Image */}
                <div className={`relative ${idx % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="relative aspect-video overflow-hidden border border-[#1a1a1a]">
                    <Image
                      src={car.img}
                      alt={car.imgAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                    {/* Car number overlay */}
                    <div
                      className="absolute top-4 left-4 text-6xl font-black text-white/20 leading-none select-none"
                      style={{ fontFamily: "var(--font-barlow-condensed)" }}
                    >
                      {car.number}
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#cc0000]" />
                </div>

                {/* Content */}
                <div className={`flex flex-col gap-5 ${idx % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className="flex items-center gap-4">
                    <div
                      className="text-7xl font-black text-[#cc0000] leading-none"
                      style={{ fontFamily: "var(--font-barlow-condensed)" }}
                    >
                      {car.number}
                    </div>
                    <div>
                      <span
                        className="inline-block px-2 py-0.5 text-xs font-bold tracking-widest uppercase border"
                        style={{
                          fontFamily: "var(--font-barlow-condensed)",
                          borderColor: car.badgeColor,
                          color: car.badgeColor,
                        }}
                      >
                        {car.badge}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h2
                      className="text-4xl font-black text-white leading-tight"
                      style={{ fontFamily: "var(--font-barlow-condensed)" }}
                    >
                      {car.make}
                    </h2>
                    <p
                      className="text-[#cc0000] text-sm font-bold tracking-widest uppercase mt-1"
                      style={{ fontFamily: "var(--font-barlow-condensed)" }}
                    >
                      {car.class} &middot; {car.series}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: "Status", value: car.status },
                      { label: "Series", value: car.series },
                      { label: "Class", value: car.class },
                      { label: "Livery", value: car.livery },
                    ].map((item) => (
                      <div key={item.label} className="bg-black border border-[#1a1a1a] p-3">
                        <div
                          className="text-[#555] text-xs tracking-widest uppercase mb-0.5"
                          style={{ fontFamily: "var(--font-barlow-condensed)" }}
                        >
                          {item.label}
                        </div>
                        <div
                          className="text-white text-sm font-bold"
                          style={{ fontFamily: "var(--font-barlow-condensed)" }}
                        >
                          {item.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  <p
                    className="text-[#b0b8c1] leading-relaxed"
                    style={{ fontFamily: "var(--font-barlow)" }}
                    dangerouslySetInnerHTML={{ __html: car.detail }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── On Track ── */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-12 h-0.5 bg-[#cc0000] mx-auto mb-4" />
            <h2
              className="text-5xl font-black text-white"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              On <span className="text-[#cc0000]">Track</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src="/assets/24-on-track-side-profile-42-v1.png"
                alt="#42 on track — side profile"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-4 left-4">
                <span
                  className="text-white font-bold tracking-widest uppercase text-sm bg-black/60 px-3 py-1"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  #42 Side Profile
                </span>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden">
              <Image
                src="/assets/32-23-at-sonoma-v1.png"
                alt="#23 at Sonoma Raceway"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-4 left-4">
                <span
                  className="text-white font-bold tracking-widest uppercase text-sm bg-black/60 px-3 py-1"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  #23 at Sonoma Raceway
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#cc0000] py-14 text-center">
        <h2
          className="text-4xl font-black text-white"
          style={{ fontFamily: "var(--font-barlow-condensed)" }}
        >
          Put Your Brand on the Car
        </h2>
        <p
          className="text-white/80 mt-3 mb-6 text-lg"
          style={{ fontFamily: "var(--font-barlow)" }}
        >
          Championship-proven livery. Visible at SCCA and NASA events across the Western US.
        </p>
        <Link
          href="/sponsors"
          className="inline-flex items-center gap-3 px-8 py-3 bg-black text-white font-bold tracking-widest uppercase text-sm hover:bg-[#0f0f0f] transition-colors"
          style={{ fontFamily: "var(--font-barlow-condensed)" }}
        >
          Sponsorship Information
        </Link>
      </section>
    </div>
  );
}
