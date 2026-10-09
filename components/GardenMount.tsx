"use client";

import dynamic from "next/dynamic";
import { localeFromLanguages } from "@/lib/locale";

const SecretGardenPortfolio = dynamic(() => import("./SecretGardenPortfolio"), {
  ssr: false,
  loading: () => {
    const locale = typeof navigator === "undefined" ? "es" : localeFromLanguages(navigator.languages?.length ? navigator.languages : [navigator.language]);
    const label = locale === "ca" ? "Obrint el portafolis" : locale === "en" ? "Opening portfolio" : "Abriendo portfolio";
    const text = locale === "ca" ? "Obrint el jardí..." : locale === "en" ? "Opening the garden..." : "Abriendo el jardín...";
    return (
    <main className="garden-loading" aria-label={label}>
      <span className="loading-sparkles" aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
      <span className="loading-plant" aria-hidden="true">
        <span />
      </span>
      <span className="loading-butterfly" aria-hidden="true" />
      <span className="loading-mark">CR</span>
      <p>{text}</p>
    </main>
    );
  },
});

export default function GardenMount() {
  return <SecretGardenPortfolio />;
}
