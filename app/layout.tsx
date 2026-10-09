import type { Metadata } from "next";
import localFont from "next/font/local";
import { headers } from "next/headers";
import ScrollManager from "@/components/ScrollManager";
import WhatsAppButton from "@/components/WhatsAppButton";
import { localeFromAcceptLanguage } from "@/lib/locale";
import "./globals.css";

const cormorant = localFont({
  src: "./fonts/cormorant-garamond-latin.woff2",
  weight: "400 700",
  variable: "--font-cormorant",
});

const instrument = localFont({
  src: "./fonts/instrument-serif-latin.woff2",
  weight: "400",
  variable: "--font-instrument",
});

const inter = localFont({
  src: "./fonts/inter-latin.woff2",
  weight: "100 900",
  variable: "--font-inter",
});

const baseMetadata: Metadata = {
  metadataBase: new URL("https://claudiaruiz.es"),
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
    title: "Claudia Ruiz | Disseny web per a petits negocis i autònoms",
    description:
      "Dissenyo webs cuidades, ràpides i optimitzades per a petits negocis i autònoms. Una presència digital feta a mida per créixer amb claredat i propòsit.",
    url: "/",
    siteName: "Claudia Ruiz · Estudi de Disseny Web",
    locale: "ca_ES",
    type: "website",
    images: [
      {
        url: "/images/secret-garden-hero.png",
        width: 1792,
        height: 1024,
        alt: "Taula de treball en un jardí lluminós amb portàtil, flors i estètica editorial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Claudia Ruiz | Disseny web per a petits negocis i autònoms",
    description:
      "Disseny web a mida, landing pages, redisseny i manteniment web per a petits negocis i autònoms.",
    images: ["/images/secret-garden-hero.png"],
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = localeFromAcceptLanguage((await headers()).get("accept-language"));
  if (locale !== "ca") return baseMetadata;

  const title = "Claudia Ruiz | Disseny web per a petits negocis i autònoms";
  const description = "Dissenyo pàgines web elegants, ràpides i optimitzades per a petits negocis i autònoms. Disseny a mida, redisseny i manteniment web.";
  return {
    ...baseMetadata,
    title: { default: title, template: "%s | Claudia Ruiz" },
    description,
    keywords: ["disseny web", "disseny web per a petits negocis", "disseny web per a autònoms", "manteniment web", "redisseny web", "Claudia Ruiz"],
    openGraph: {
      title,
      description,
      url: "/",
      siteName: "Claudia Ruiz · Estudi de Disseny Web",
      locale: "ca_ES",
      type: "website",
      images: [{ url: "/images/secret-garden-hero.png", width: 1792, height: 1024, alt: "Taula de treball en un jardí lluminós amb portàtil i flors" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/secret-garden-hero.png"],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = localeFromAcceptLanguage((await headers()).get("accept-language"));

  return (
    <html lang={locale === "ca" ? "ca" : "es"}>
      <body
        className={`${cormorant.variable} ${instrument.variable} ${inter.variable}`}
      >
        <ScrollManager />
        {children}
        <WhatsAppButton locale={locale} />
      </body>
    </html>
  );
}
