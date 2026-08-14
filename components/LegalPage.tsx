import Link from "next/link";

type LegalSection = {
  title: string;
  paragraphs?: string[];
  items?: string[];
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  updated: string;
  sections: LegalSection[];
};

export default function LegalPage({ eyebrow, title, description, updated, sections }: LegalPageProps) {
  return (
    <main className="legal-page">
      <span className="paper-grain" aria-hidden="true" />
      <span className="watercolor wash-left" aria-hidden="true" />
      <span className="watercolor wash-right" aria-hidden="true" />
      <span className="left-garden-veil legal-veil" aria-hidden="true" />

      <header className="legal-header">
        <Link className="vl-brand" href="/#home" aria-label="Volver al inicio">
          <span className="vl-mark" aria-hidden="true">CR</span>
          <span>
            <strong>Claudia Ruiz</strong>
            <small>Estudio de diseño web</small>
          </span>
        </Link>
        <Link className="project-back-link" href="/#home">
          &larr; Volver a la web
        </Link>
      </header>

      <article className="legal-content">
        <p className="mini-label">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="legal-lead">{description}</p>
        <p className="legal-updated">Última actualización: {updated}</p>

        {sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.items ? (
              <ul>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </article>
    </main>
  );
}
