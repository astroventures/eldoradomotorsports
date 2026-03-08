import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/driver", label: "Driver" },
  { href: "/cars", label: "Cars" },
  { href: "/results", label: "Results" },
  { href: "/team", label: "Team" },
  { href: "/gallery", label: "Gallery" },
  { href: "/sponsors", label: "Sponsors" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/">
              <Image
                src="/assets/edm-logo.png"
                alt="El Dorado Motorsports"
                width={140}
                height={56}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-[#b0b8c1] text-sm leading-relaxed font-[var(--font-barlow)]">
              El Dorado Motorsports competes in SCCA and NASA road racing,
              campaigning Honda Preludes across the Western United States.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white text-sm font-bold tracking-widest uppercase mb-4 font-[var(--font-barlow-condensed)]">
              Navigation
            </h4>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#b0b8c1] hover:text-[#cc0000] transition-colors text-sm tracking-wider uppercase font-[var(--font-barlow-condensed)]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-white text-sm font-bold tracking-widest uppercase mb-4 font-[var(--font-barlow-condensed)]">
              Connect
            </h4>
            <div className="flex flex-col gap-3 text-sm text-[#b0b8c1] font-[var(--font-barlow)]">
              <div>
                <span className="block text-xs tracking-widest uppercase text-[#666] mb-1 font-[var(--font-barlow-condensed)]">Location</span>
                <span>Fremont, CA · Bay Area</span>
              </div>
              <div>
                <span className="block text-xs tracking-widest uppercase text-[#666] mb-1 font-[var(--font-barlow-condensed)]">Series</span>
                <span>SCCA · NASA</span>
              </div>
              <div>
                <span className="block text-xs tracking-widest uppercase text-[#666] mb-1 font-[var(--font-barlow-condensed)]">Instagram</span>
                <a
                  href="https://instagram.com/pope_motorsports"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#cc0000] transition-colors"
                >
                  @pope_motorsports
                </a>
              </div>
              <div>
                <a
                  href="https://instagram.com/_nathanpope_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#cc0000] transition-colors"
                >
                  @_nathanpope_
                </a>
              </div>
              <div>
                <span className="block text-xs tracking-widest uppercase text-[#666] mb-1 font-[var(--font-barlow-condensed)]">Sponsorship</span>
                <a
                  href="mailto:nathan.h.pope@gmail.com"
                  className="hover:text-[#cc0000] transition-colors"
                >
                  nathan.h.pope@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1a1a1a] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#555] text-xs tracking-widest uppercase font-[var(--font-barlow-condensed)]">
            El Dorado Motorsports · Fremont, CA · SCCA · NASA
          </p>
          <p className="text-[#555] text-xs font-[var(--font-barlow)]">
            &copy; {new Date().getFullYear()} El Dorado Motorsports. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
