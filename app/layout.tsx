import type { Metadata } from "next";
import { Cormorant_Garamond, Instrument_Serif, Inter } from "next/font/google";
import ScrollManager from "@/components/ScrollManager";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-instrument",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://claudiaruiz.studio"),
  title: {
    default: "Claudia Ruiz | Diseño web para pequeños negocios y autónomos",
    template: "%s | Claudia Ruiz",
  },
  description:
    "Diseño páginas web elegantes, rápidas y optimizadas para pequeños negocios y autónomos en España. Diseño web a medida, rediseño, landing pages y mantenimiento web.",
  keywords: [
    "diseño web",
    "diseño web para pequeños negocios",
    "diseño web para autónomos",
    "mantenimiento web",
    "landing page",
    "rediseño web",
    "Claudia Ruiz",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Claudia Ruiz | Diseño web para pequeños negocios y autónomos",
    description:
      "Diseño webs cuidadas, rápidas y optimizadas para pequeños negocios y autónomos. Una presencia digital hecha a medida para crecer con claridad y propósito.",
    url: "/",
    siteName: "Claudia Ruiz · Estudio de Diseño Web",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/images/secret-garden-hero.png",
        width: 1792,
        height: 1024,
        alt: "Mesa de trabajo en un jardín luminoso con portátil, flores y estética editorial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Claudia Ruiz | Diseño web para pequeños negocios y autónomos",
    description:
      "Diseño web a medida, landing pages, rediseño y mantenimiento web para pequeños negocios y autónomos.",
    images: ["/images/secret-garden-hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${cormorant.variable} ${instrument.variable} ${inter.variable}`}
      >
        <ScrollManager />
        {children}
      </body>
    </html>
  );
}
