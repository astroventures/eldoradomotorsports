import type { Metadata } from "next";
import { Barlow_Condensed, Barlow } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "El Dorado Motorsports | SCCA & NASA Road Racing",
  description:
    "El Dorado Motorsports — Two-time SCCA Western Conference Champions. Competing in SCCA and NASA road racing. Based in Fremont, CA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlowCondensed.variable} ${barlow.variable} antialiased bg-black text-white`}
      >
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
