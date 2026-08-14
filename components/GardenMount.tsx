"use client";

import dynamic from "next/dynamic";

const SecretGardenPortfolio = dynamic(() => import("./SecretGardenPortfolio"), {
  ssr: false,
  loading: () => (
    <main className="garden-loading" aria-label="Abriendo portfolio">
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
      <p>Abriendo el jardín...</p>
    </main>
  ),
});

export default function GardenMount() {
  return <SecretGardenPortfolio />;
}
