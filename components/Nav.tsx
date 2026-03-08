"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/driver", label: "Driver" },
  { href: "/cars", label: "Cars" },
  { href: "/results", label: "Results" },
  { href: "/team", label: "Team" },
  { href: "/gallery", label: "Gallery" },
  { href: "/sponsors", label: "Sponsors" },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/assets/edm-logo.png"
              alt="El Dorado Motorsports"
              width={120}
              height={48}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-semibold tracking-widest uppercase transition-colors font-[var(--font-barlow-condensed)] ${
                    isActive
                      ? "text-[#cc0000] border-b-2 border-[#cc0000]"
                      : "text-[#b0b8c1] hover:text-white hover:text-[#cc0000]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0f0f0f] border-t border-[#1a1a1a]">
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-3 py-3 text-base font-bold tracking-widest uppercase font-[var(--font-barlow-condensed)] border-b border-[#1a1a1a] last:border-b-0 ${
                    isActive ? "text-[#cc0000]" : "text-[#b0b8c1]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
