import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { headers } from "next/headers";
import type { Metadata } from "next";
import { getProjectCase, projectCases } from "@/lib/project-cases";
import { localeFromAcceptLanguage } from "@/lib/locale";

const projectUi = {
  es: {
    backHome: "Volver al inicio", backProjects: "Volver a proyectos",
    client: "Cliente", year: "Año", service: "Servicio", projectType: "Tipo de proyecto",
    talk: "Hablemos de tu proyecto", mockupsOf: "Mockups de", mainMockup: "Mockup principal de",
    about: "Sobre el proyecto", defaultSummary: "Una experiencia web con raíz visual y estrategia clara",
    process: "Proceso del proyecto", result: "El resultado", moreProjects: "Ver más proyectos",
    showcaseLabel: "Mockups responsive", showcaseTitle: "El proyecto adaptado a cada pantalla",
    desktop: "Desktop", tablet: "Tablet", mobile: "Móvil", view: "en vista",
    ctaLabel: "¿Tienes una idea para tu web?",
    ctaTitle: "Diseñemos un espacio digital pensado para tu negocio, tus clientes y la forma en la que quieres crecer.",
    studio: "Estudio de diseño web", footerDescription: "Diseño web para pequeños negocios y autónomos.",
    footerLine: "Diseñando webs con calma, detalle y propósito.",
    copyright: "© 2026 Claudia Ruiz · Estudio de Diseño Web",
    nav: [["Servicios", "servicios"], ["Proyectos", "archivo-de-proyectos"], ["Sobre mí", "sobre-mi"], ["Proceso", "proceso"], ["FAQ", "faq"], ["Contacto", "contacto"]],
    legal: [["Aviso Legal", "/aviso-legal"], ["Privacidad", "/privacidad"], ["Cookies", "/cookies"]],
    navigation: "Navegación principal",
  },
  ca: {
    backHome: "Tornar a l'inici", backProjects: "Tornar als projectes",
    client: "Client", year: "Any", service: "Servei", projectType: "Tipus de projecte",
    talk: "Parlem del teu projecte", mockupsOf: "Mockups de", mainMockup: "Mockup principal de",
    about: "Sobre el projecte", defaultSummary: "Una experiència web amb arrels visuals i una estratègia clara",
    process: "Procés del projecte", result: "El resultat", moreProjects: "Veure més projectes",
    showcaseLabel: "Mockups adaptables", showcaseTitle: "El projecte adaptat a cada pantalla",
    desktop: "Ordinador", tablet: "Tauleta", mobile: "Mòbil", view: "en vista de",
    ctaLabel: "Tens una idea per al teu web?",
    ctaTitle: "Dissenyem un espai digital pensat per al teu negoci, els teus clients i la manera com vols créixer.",
    studio: "Estudi de disseny web", footerDescription: "Disseny web per a petits negocis i autònoms.",
    footerLine: "Dissenyant webs amb calma, detall i propòsit.",
    copyright: "© 2026 Claudia Ruiz · Estudi de Disseny Web",
    nav: [["Serveis", "servicios"], ["Projectes", "archivo-de-proyectos"], ["Sobre mi", "sobre-mi"], ["Procés", "proceso"], ["FAQ", "faq"], ["Contacte", "contacto"]],
    legal: [["Avís legal", "/aviso-legal"], ["Privacitat", "/privacidad"], ["Galetes", "/cookies"]],
    navigation: "Navegació principal",
  },
};

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projectCases.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const locale = localeFromAcceptLanguage((await headers()).get("accept-language"));
  const project = getProjectCase(slug, locale);

  if (!project) {
    return {};
  }

  return {
    title: {
      absolute: `${project.name} | ${locale === "ca" ? "Projecte de disseny web" : "Proyecto de diseño web"} de Claudia Ruiz`,
    },
    description: project.intro,
    openGraph: {
      title: `${project.name} | ${locale === "ca" ? "Projecte de disseny web" : "Proyecto de diseño web"} de Claudia Ruiz`,
      description: project.intro,
      type: "article",
      locale: locale === "ca" ? "ca_ES" : "es_ES",
      siteName: locale === "ca" ? "Claudia Ruiz · Estudi de Disseny Web" : "Claudia Ruiz · Estudio de Diseño Web",
      url: `/proyectos/${project.slug}`,
      images: [
        {
          url: project.image,
          alt: project.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} | ${locale === "ca" ? "Projecte de disseny web" : "Proyecto de diseño web"} de Claudia Ruiz`,
      description: project.intro,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const locale = localeFromAcceptLanguage((await headers()).get("accept-language"));
  const project = getProjectCase(slug, locale);
  const ui = projectUi[locale === "ca" ? "ca" : "es"];

  if (!project) {
    notFound();
  }

  return (
    <main className={`project-case-page project-case-${project.slug}`}>
      <span className="paper-grain" aria-hidden="true" />
      <span className="watercolor wash-left" aria-hidden="true" />
      <span className="watercolor wash-right" aria-hidden="true" />
      <span className="left-garden-veil project-case-veil" aria-hidden="true" />
      <header className="project-case-header">
        <Link className="project-case-brand" href="/#home" aria-label={ui.backHome}>
          <span aria-hidden="true">CR</span>
          <strong>Claudia Ruiz</strong>
        </Link>
      </header>

      <section className="project-case-hero">
        <div className="project-case-copy">
          <a className="project-back-link" href="/?section=archivo-de-proyectos">
            &larr; {ui.backProjects}
          </a>
          <p className="mini-label">{project.service}</p>
          <h1>{project.name}</h1>
          <p>{project.intro}</p>

          <dl className="project-facts">
            <div>
              <dt>{ui.client}</dt>
              <dd>{project.client}</dd>
            </div>
            <div>
              <dt>{ui.year}</dt>
              <dd>{project.year}</dd>
            </div>
            <div>
              <dt>{ui.service}</dt>
              <dd>{project.service}</dd>
            </div>
            <div>
              <dt>{ui.projectType}</dt>
              <dd>{project.projectType}</dd>
            </div>
          </dl>

          <a className="small-button" href="/?section=contacto">
            {ui.talk}
          </a>
        </div>

        <div
          className={`project-case-image project-main-mockup${project.heroMockupImage ? " project-main-mockup-static" : ""}`}
          aria-label={`${ui.mockupsOf} ${project.name}`}
        >
          {project.heroMockupImage ? (
            <Image
              className="project-main-mockup-image"
              src={project.heroMockupImage}
              alt={project.heroMockupAlt ?? `${ui.mainMockup} ${project.name}`}
              fill
              priority
              sizes="(max-width: 760px) 92vw, 54vw"
            />
          ) : (
            <>
              <div className="device-laptop">
                <div className="device-screen">
                  <Image
                    src={project.image}
                    alt={`${project.imageAlt} en portátil`}
                    fill
                    priority
                    sizes="(max-width: 760px) 78vw, 38vw"
                    style={{ objectPosition: project.imagePosition }}
                  />
                </div>
                <span className="device-laptop-base" aria-hidden="true" />
              </div>
              <div className="device-phone">
                <div className="device-screen">
                  <Image
                    src={project.image}
                    alt={`${project.imageAlt} en móvil`}
                    fill
                    sizes="(max-width: 760px) 24vw, 12vw"
                    style={{ objectPosition: project.imagePosition }}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      <section className="project-case-summary">
        <p className="mini-label">{ui.about}</p>
        <h2>{project.summaryTitle ?? ui.defaultSummary}</h2>
        <p>{project.summary}</p>
      </section>

      <section className="project-case-stages" aria-label={ui.process}>
        <svg className="case-stage-trail case-stage-trail-desktop" viewBox="0 0 920 120" aria-hidden="true">
          <path d="M26 70 C 138 22, 214 118, 326 70 S 516 22, 626 70 S 792 116, 894 70" />
          <path className="trail-arrow" d="M888 64 L898 70 L888 76" />
        </svg>
        <svg className="case-stage-trail case-stage-trail-mobile" viewBox="0 0 320 760" aria-hidden="true">
          <path d="M206 50 C 96 108, 96 190, 202 242 S 226 382, 118 430 S 92 600, 210 704" />
          <path className="trail-arrow" d="M204 696 L214 706 L199 710" />
        </svg>
        {project.stages.map((stage, index) => (
          <article key={stage.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{stage.title}</h3>
            <p>{stage.text}</p>
          </article>
        ))}
      </section>

      <section className="project-case-result">
        <span className="result-light result-light-a" aria-hidden="true" />
        <span className="result-light result-light-b" aria-hidden="true" />
        <span className="sparkles result-sparkles" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <span className="vl-butterfly result-butterfly" aria-hidden="true" />
        <p className="mini-label">{ui.result}</p>
        <h2>{project.result}</h2>
        <a className="small-button small-button-secondary" href="/?section=archivo-de-proyectos">
          {ui.moreProjects}
        </a>
      </section>

      <section className="project-case-showcase">
        <p className="mini-label">{ui.showcaseLabel}</p>
        <h2>{ui.showcaseTitle}</h2>
        <div className="project-mockup-grid">
          <article className="showcase-device showcase-desktop">
            <span>{ui.desktop}</span>
            {project.showcaseDesktopImage ? (
              <div className="showcase-static-mockup showcase-static-desktop">
                <Image
                  src={project.showcaseDesktopImage}
                  alt={project.showcaseDesktopAlt ?? `${project.imageAlt} ${ui.view} ${ui.desktop.toLowerCase()}`}
                  fill
                  sizes="(max-width: 760px) 84vw, 48vw"
                />
              </div>
            ) : (
              <div className="device-desktop">
                <div className="device-screen">
                  <Image
                    src={project.image}
                    alt={`${project.imageAlt} ${ui.view} ${ui.desktop.toLowerCase()}`}
                    fill
                    sizes="(max-width: 760px) 84vw, 46vw"
                    style={{ objectPosition: project.imagePosition }}
                  />
                </div>
              </div>
            )}
          </article>
          <article className="showcase-device showcase-tablet">
            <span>{ui.tablet}</span>
            {project.showcaseTabletImage ? (
              <div className="showcase-static-mockup showcase-static-tablet">
                <Image
                  src={project.showcaseTabletImage}
                  alt={project.showcaseTabletAlt ?? `${project.imageAlt} ${ui.view} ${ui.tablet.toLowerCase()}`}
                  fill
                  sizes="(max-width: 760px) 46vw, 20vw"
                />
              </div>
            ) : (
              <div className="device-tablet">
                <div className="device-screen">
                  <Image
                    src={project.image}
                    alt={`${project.imageAlt} ${ui.view} ${ui.tablet.toLowerCase()}`}
                    fill
                    sizes="(max-width: 760px) 46vw, 20vw"
                    style={{ objectPosition: project.imagePosition }}
                  />
                </div>
              </div>
            )}
          </article>
          <article className="showcase-device showcase-mobile">
            <span>{ui.mobile}</span>
            {project.showcaseMobileImage ? (
              <div className="showcase-static-mockup showcase-static-mobile">
                <Image
                  src={project.showcaseMobileImage}
                  alt={project.showcaseMobileAlt ?? `${project.imageAlt} ${ui.view} ${ui.mobile.toLowerCase()}`}
                  fill
                  sizes="(max-width: 760px) 34vw, 13vw"
                />
              </div>
            ) : (
              <div className="device-phone device-phone-showcase">
                <div className="device-screen">
                  <Image
                    src={project.image}
                    alt={`${project.imageAlt} ${ui.view} ${ui.mobile.toLowerCase()}`}
                    fill
                    sizes="(max-width: 760px) 34vw, 13vw"
                    style={{ objectPosition: project.imagePosition }}
                  />
                </div>
              </div>
            )}
          </article>
        </div>
      </section>

      <section className="project-case-cta">
        <p className="mini-label">{ui.ctaLabel}</p>
        <h2>{ui.ctaTitle}</h2>
        <a className="small-button" href="/?section=contacto">
          {ui.talk}
        </a>
      </section>

      <footer className="vl-footer">
        <span className="sparkles footer-sparkles" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <span className="vl-butterfly footer-butterfly" aria-hidden="true" />
        <div className="footer-block footer-brand">
          <Link className="vl-brand" href="/#home" aria-label={ui.backHome}>
            <span className="vl-mark" aria-hidden="true">CR</span>
            <span>
              <strong>Claudia Ruiz</strong>
              <small>{ui.studio}</small>
            </span>
          </Link>
          <p>{ui.footerDescription}</p>
        </div>
        <nav className="footer-block footer-nav" aria-label={ui.navigation}>
          {ui.nav.map(([label, id]) => (
            <Link key={id} href={`/?section=${id}`}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="footer-block footer-contact">
          <a href="mailto:ruizvazquezclaudia@gmail.com">ruizvazquezclaudia@gmail.com</a>
          <a href="tel:+34682649545">+34 682 649 545</a>
        </div>
        <p className="footer-line">{ui.footerLine}</p>
        <div className="footer-bottom">
          <p className="footer-copy">{ui.copyright}</p>
          <div className="footer-legal">
            {ui.legal.map(([label, href]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}

