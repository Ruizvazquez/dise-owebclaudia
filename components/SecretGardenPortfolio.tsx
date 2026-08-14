"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type FormEvent, type MouseEvent, type ReactNode } from "react";
import { projectCases } from "@/lib/project-cases";

const gardenImage = "/images/secret-garden-hero.png";
const aboutImage = "/images/claudia-ruiz-about.jpg";
type Locale = "es" | "en";
type Service = [title: string, text: string, points: string[]];
type ProjectDetail = {
  summary: string;
  highlights: string[];
  cta: string;
  close: string;
};
type Copy = {
  studio: string;
  homeLabel: string;
  menu: { open: string; close: string; label: string };
  nav: string[][];
  talk: string;
  hero: {
    label: string;
    titleA: string;
    titleEm: string;
    titleB: string;
    text: string;
    cta: string;
    imageAlt: string;
  };
  projectsLabel: string;
  projectsTitle: string;
  projectsText: string;
  exploreProjects: string;
  moreWork: string;
  projects: string[][];
  projectDetails: ProjectDetail[];
  servicesLabel: string;
  servicesTitle: string;
  servicesText: string;
  services: Service[];
  about: {
    label: string;
    titleA: string;
    titleEm: string;
    titleB: string;
    text: string;
    points: string[];
    imageAlt: string;
  };
  processHeading: string;
  process: string[][];
  faq: {
    label: string;
    title: string;
    items: string[][];
  };
  quote: string;
  quoteBy: string;
  contact: {
    label: string;
    titleA: string;
    titleEm: string;
    titleB: string;
    text: string;
    cta: string;
    email: string;
    phone: string;
    form: {
      name: string;
      email: string;
      project: string;
      projectPlaceholder: string;
      projectOptions: string[];
      message: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
      activation: string;
      projectRequired: string;
    };
    imageAlt: string;
    seal: string;
  };
  gardenBand: string;
  footer: {
    description: string;
    line: string;
    social: string[];
    legal: string[][];
    copyright: string;
  };
};

const copy: Record<Locale, Copy> = {
  es: {
    studio: "Estudio de diseño web",
    homeLabel: "Inicio de Verde Luna",
    menu: {
      open: "Abrir menú",
      close: "Cerrar menú",
      label: "Navegación principal",
    },
    nav: [
      ["Servicios", "servicios"],
      ["Proyectos", "archivo-de-proyectos"],
      ["Sobre mí", "sobre-mi"],
      ["El proceso", "proceso"],
      ["FAQ", "faq"],
      ["Contacto", "contacto"],
    ],
    talk: "Hablemos",
    hero: {
      label: "Webs que se sienten vivas",
      titleA: "Diseño web para",
      titleEm: "pequeños negocios",
      titleB: "que quieren crecer",
      text: "Creo páginas web elegantes, rápidas y optimizadas para autónomos y pequeños negocios de toda España. También mantengo tu web actualizada para que tú puedas centrarte en tu negocio.",
      cta: "Ver proyectos",
      imageAlt: "Mesa en un jardín secreto con portátil y luz de amanecer",
    },
    projectsLabel: "Trabajo destacado",
    projectsTitle: "Archivo de proyectos",
    projectsText:
      "Entre estas páginas encontrarás historias que comenzaron con una idea y florecieron en la web. Cada proyecto ha sido diseñado a medida para reflejar la esencia de cada negocio y ofrecer una experiencia cuidada, clara y cercana.",
    exploreProjects: "Haz click en un libro para ver el proyecto",
    moreWork: "Más proyectos",
    projects: [
      ["La Terra Viva", "E-commerce"],
      ["Glamour Perruquería", "Diseño web"],
      ["Serenia", "Web de servicios"],
    ],
    projectDetails: [
      {
        summary: "Una tienda online editorial para una marca orgánica, con una experiencia visual limpia, filtros sencillos y una colección de productos presentada como piezas de autor.",
        highlights: ["E-commerce visual", "Dirección estética", "Experiencia responsive"],
        cta: "Ver enfoque",
        close: "Cerrar libro",
      },
      {
        summary: "Una web de servicios para salón de belleza pensada para presentar tratamientos, generar confianza y guiar a la reserva con una estructura clara y visual.",
        highlights: ["Servicios claros", "Contenido modular", "Conversion suave"],
        cta: "Ver enfoque",
        close: "Cerrar libro",
      },
      {
        summary: "Un catálogo digital para productos de cabina con composición de escaparate, fichas limpias y una atmósfera calmada para facilitar la exploración.",
        highlights: ["Catálogo visual", "Arquitectura simple", "Estilo premium accesible"],
        cta: "Ver enfoque",
        close: "Cerrar libro",
      },
    ],
    servicesLabel: "Servicios",
    servicesTitle: "Soluciones digitales a medida",
    servicesText:
      "Un taller suave para diseñar, desarrollar y cuidar experiencias web con intención.",
    services: [
      [
        "Diseño web",
        "Diseño páginas web profesionales que transmiten confianza y reflejan la esencia de tu negocio. Cada proyecto se crea a medida, pensando en tus objetivos y en la experiencia de tus clientes.",
        ["Diseño personalizado", "Adaptada a móviles", "SEO básico incluido", "Carga rápida"],
      ],
      [
        "Desarrollo y maquetación",
        "Transformo cada diseño en una web rápida, estable y bien estructurada, cuidando tanto la experiencia visual como el rendimiento.",
        ["Código limpio", "Alto rendimiento", "Diseño responsive", "Optimización técnica"],
      ],
      [
        "Mantenimiento web",
        "Tu web necesita pequeños cuidados para seguir funcionando como el primer día. Yo me encargo de las actualizaciones y cambios para que tú solo tengas que ocuparte de tu negocio.",
        ["Cambios de contenido", "Actualización de imágenes", "Copias de seguridad", "Soporte técnico"],
      ],
      [
        "¿Necesitas algo diferente?",
        "Si tu proyecto necesita una landing page, renovar una web existente o cualquier mejora puntual, encontraremos la solución que mejor se adapte a tu negocio.",
        ["Landing Pages", "Rediseño web", "Cambios puntuales", "Soluciones a medida"],
      ],
    ],
    about: {
      label: "Sobre mí",
      titleA: "Diseño webs con",
      titleEm: "cercanía, detalle",
      titleB: "y mucho cuidado",
      text: "Soy Claudia, diseñadora y desarrolladora web especializada en crear páginas para pequeños negocios y autónomos que buscan una presencia profesional, cuidada y hecha a medida. Cada proyecto lo trabajo de forma cercana, escuchando tus necesidades y prestando atención a cada detalle para que tu web no solo sea bonita, sino que también represente tu negocio y genere confianza desde el primer vistazo.",
      points: [
        "Trato cercano durante todo el proyecto.",
        "Diseño cuidado y totalmente personalizado.",
        "Comunicación directa y sin complicaciones.",
        "Acompañamiento también después del lanzamiento.",
      ],
      imageAlt: "Retrato de Claudia Ruiz",
    },
    processHeading: "Mi proceso",
    process: [
      ["01", "Sembrar", "Conocemos tu negocio, tus ideas y tus objetivos para crear una base sólida sobre la que construir tu web."],
      ["02", "Crecer", "Diseño y desarrollo una propuesta personalizada, cuidando cada detalle para que refleje la esencia de tu marca."],
      ["03", "Florecer", "Revisamos juntos el proyecto y afinamos cada elemento hasta que todo encaje de forma natural y armoniosa."],
      ["04", "Lanzar", "Publicamos tu web y, si lo necesitas, continúo cuidándola para que siga creciendo junto a tu negocio."],
    ],
    faq: {
      label: "Preguntas frecuentes",
      title: "Todo lo que necesitas saber antes de empezar",
      items: [
        ["¿Cuánto tarda en estar lista mi página web?", "Depende del tipo de proyecto y de los contenidos disponibles. Una web sencilla suele necesitar entre 3 y 6 semanas para diseñarla, desarrollarla y revisarla con calma."],
        ["¿Qué necesito para empezar?", "Una idea inicial, tus objetivos, referencias visuales si las tienes y los textos o contenidos principales de tu negocio."],
        ["¿Incluyes dominio y hosting?", "Puedo orientarte para elegir dominio y hosting y dejar la web preparada, aunque ambos servicios se contratan siempre a tu nombre."],
        ["¿Trabajas con clientes de toda España?", "Sí. Trabajo de forma online con pequeños negocios y autónomos de toda España mediante videollamadas y contacto directo durante todo el proyecto."],
        ["¿Qué incluye el mantenimiento web?", "Incluye cambios de texto, imágenes, promociones, nuevos servicios, eventos, soporte, copias de seguridad y pequeñas actualizaciones para que tu web siga cuidada."],
        ["¿Mi web será adaptable a móviles?", "Sí. Todas las páginas web se diseñan y desarrollan para verse correctamente en móvil, tablet y ordenador, cuidando la experiencia en cada pantalla."],
        ["¿Puedo solicitar cambios durante el diseño?", "Sí. Durante el proceso revisaremos juntos el proyecto para asegurarnos de que el resultado refleje exactamente lo que buscas."],
        ["¿Podré actualizar mi web yo mismo?", "Las webs que desarrollo están pensadas para que yo pueda encargarme de su mantenimiento y actualizaciones. Así tendrás la tranquilidad de que todo seguirá funcionando correctamente sin preocuparte por aspectos técnicos. Si necesitas hacer un cambio, solo tendrás que decírmelo."],
        ["¿Cuánto cuesta una página web?", "Cada proyecto es diferente, por eso preparo un presupuesto personalizado según las necesidades de tu negocio. Puedes escribirme sin compromiso y te orientaré sobre la mejor opción."],
      ],
    },
    quote:
      "Trabajar con Verde Luna fue como un sueño. Entendieron mi visión y la transformaron en una web que se siente como el alma de mi marca.",
    quoteBy: "- Isabella M. / Solena Retreat",
    contact: {
      label: "Hablemos",
      titleA: "Hagamos crecer",
      titleEm: "tu",
      titleB: "proyecto",
      text: "No importa si tu proyecto acaba de empezar o si buscas renovar tu página web. Cuéntame tu idea y diseñaremos un espacio digital que refleje la esencia de tu marca y te ayude a crecer.",
      cta: "Enviar mensaje",
      email: "ruizvazquezclaudia@gmail.com",
      phone: "+34 682 649 545",
      form: {
        name: "Tu nombre",
        email: "Tu email",
        project: "¿Qué necesitas?",
        projectPlaceholder: "Selecciona una opción",
        projectOptions: [
          "Diseño web desde cero",
          "Rediseño de una web",
          "Landing Page",
          "Mantenimiento web",
          "Cambios o mejoras en una web",
          "Dominio y hosting",
          "No lo tengo claro, necesito asesoramiento",
        ],
        message: "Cuéntame tu idea o qué necesitas...",
        submit: "Empecemos a crear",
        sending: "Enviando...",
        success: "Mensaje enviado. Te responderé lo antes posible.",
        error: "No se ha podido enviar el mensaje. Escríbeme directamente a ruizvazquezclaudia@gmail.com.",
        activation: "Revisa tu correo y activa el formulario desde el email de FormSubmit. Después los mensajes llegarán correctamente.",
        projectRequired: "Selecciona qué necesitas antes de enviar.",
      },
      imageAlt: "Camino hacia un jardín escondido",
      seal: "Crezcamos juntos",
    },
    gardenBand:
      "Cada gran proyecto comienza con una idea. Mi trabajo es ayudarla a crecer hasta convertirse en una web que represente la esencia de tu negocio.",
    footer: {
      description: "Diseño web para pequeños negocios y autónomos.",
      line: "Diseñando webs con calma, detalle y propósito.",
      social: [],
      legal: [
        ["Aviso Legal", "/aviso-legal"],
        ["Privacidad", "/privacidad"],
        ["Cookies", "/cookies"],
      ],
      copyright: "© 2026 Claudia Ruiz · Estudio de Diseño Web",
    },
  },
  en: {
    studio: "Web Design Studio",
    homeLabel: "Verde Luna home",
    menu: {
      open: "Open menu",
      close: "Close menu",
      label: "Main navigation",
    },
    nav: [
      ["Services", "servicios"],
      ["Projects", "archivo-de-proyectos"],
      ["About me", "sobre-mi"],
      ["The process", "proceso"],
      ["FAQ", "faq"],
      ["Contact", "contacto"],
    ],
    talk: "Let's talk",
    hero: {
      label: "Websites that feel alive",
      titleA: "Websites that",
      titleEm: "grow",
      titleB: "with purpose",
      text: "I design and build thoughtful websites inspired by nature, storytelling and meaningful brands.",
      cta: "View my work",
      imageAlt: "Secret garden desk with laptop and morning light",
    },
    projectsLabel: "Featured work",
    projectsTitle: "Project Archive",
    projectsText:
      "Inside these pages you will find stories that began with an idea and bloomed on the web. Each project was designed around the essence of its business, with a careful, clear and warm experience.",
    exploreProjects: "Click a book to view the project",
    moreWork: "More work",
    projects: [
      ["Wild Roots", "Brand & Website"],
      ["Solena Retreat", "Website Design"],
      ["Forest Whisper", "Brand & Website"],
    ],
    projectDetails: [
      {
        summary: "An editorial online shop for an organic brand, with a clean visual experience, simple filters and products presented as crafted pieces.",
        highlights: ["Visual e-commerce", "Art direction", "Responsive experience"],
        cta: "View approach",
        close: "Close book",
      },
      {
        summary: "A service website for a beauty salon, designed to present treatments, build trust and guide visitors toward booking with clarity.",
        highlights: ["Clear services", "Modular content", "Soft conversion"],
        cta: "View approach",
        close: "Close book",
      },
      {
        summary: "A digital product catalogue with a curated display feeling, clean product cards and a calm atmosphere for easy exploration.",
        highlights: ["Visual catalogue", "Simple structure", "Accessible premium style"],
        cta: "View approach",
        close: "Close book",
      },
    ],
    servicesLabel: "Services",
    servicesTitle: "Tailored digital solutions",
    servicesText:
      "A gentle studio for designing, developing and caring for intentional web experiences.",
    services: [
      [
        "Web design",
        "Professional websites that build trust and reflect the essence of your business. Every project is tailored around your goals and your clients' experience.",
        ["Custom design", "Mobile responsive", "Basic SEO included", "Fast loading"],
      ],
      [
        "Development and build",
        "I transform each design into a fast, stable and well-structured website, taking care of both the visual experience and performance.",
        ["Clean code", "High performance", "Responsive design", "Technical optimization"],
      ],
      [
        "Website maintenance",
        "Your website needs small regular care to keep working like the first day. I handle updates and changes so you can focus on your business.",
        ["Content changes", "Image updates", "Backups", "Technical support"],
      ],
      [
        "Need something different?",
        "If your project needs a landing page, a website refresh or any specific improvement, we will find the solution that best fits your business.",
        ["Landing pages", "Website redesign", "Specific changes", "Tailored solutions"],
      ],
    ],
    about: {
      label: "About me",
      titleA: "I design websites with",
      titleEm: "closeness, detail",
      titleB: "and real care",
      text: "I am Claudia, a web designer and developer specialized in creating websites for small businesses and self-employed professionals who want a professional, polished and tailored online presence. I work on every project closely, listening to your needs and paying attention to each detail so your website is not only beautiful, but also represents your business and builds trust from the first glance.",
      points: [
        "Close support throughout the whole project.",
        "Careful and fully personalized design.",
        "Direct, uncomplicated communication.",
        "Guidance also after launch.",
      ],
      imageAlt: "Portrait of Claudia Ruiz",
    },
    processHeading: "My process",
    process: [
      ["01", "Seed", "We get to know your business, ideas and goals to create a solid foundation for your website."],
      ["02", "Grow", "I design and develop a tailored proposal, caring for every detail so it reflects your brand essence."],
      ["03", "Bloom", "We review the project together and refine each element until everything feels natural and harmonious."],
      ["04", "Launch", "We publish your website and, if you need it, I continue caring for it so it grows with your business."],
    ],
    faq: {
      label: "Frequently asked questions",
      title: "Everything you need to know before getting started",
      items: [
        ["How long does it take to finish my website?", "It depends on the type of project and the available content. A simple website usually takes between 3 and 6 weeks to design, build and review properly."],
        ["What do I need to start?", "An initial idea, your goals, visual references if you have them, and the main copy or content for your business."],
        ["Do you include domain and hosting?", "I can guide you when choosing domain and hosting and prepare the website, although both services should always be registered in your name."],
        ["Do you work with clients across Spain?", "Yes. I work online with small businesses and self-employed professionals across Spain through video calls and direct contact throughout the project."],
        ["What does website maintenance include?", "It includes text changes, images, promotions, new services, events, support, backups and small updates so your website stays cared for."],
        ["Will my website be mobile-friendly?", "Yes. Every website is designed and developed to work properly on mobile, tablet and desktop, with a careful experience on every screen."],
        ["Can I request changes during the design process?", "Yes. During the process we will review the project together to make sure the result reflects exactly what you are looking for."],
        ["Will I be able to update my website myself?", "The websites I develop are designed so I can take care of maintenance and updates for you. This gives you peace of mind that everything keeps working properly without worrying about technical details. If you need a change, you only have to tell me."],
        ["How much does a website cost?", "Every project is different, so I prepare a tailored quote based on your business needs. You can write to me with no commitment and I will guide you toward the best option."],
      ],
    },
    quote:
      "Working with Verde Luna was like a dream. They truly understood my vision and translated it into a website that feels like my brand's soul.",
    quoteBy: "- Isabella M. / Solena Retreat",
    contact: {
      label: "Let's talk",
      titleA: "Let's help",
      titleEm: "your project",
      titleB: "grow",
      text: "Whether your project is just beginning or you want to renew your website, tell me your idea and we will design a digital space that reflects your brand essence and helps it grow.",
      cta: "Send message",
      email: "ruizvazquezclaudia@gmail.com",
      phone: "+34 682 649 545",
      form: {
        name: "Your name",
        email: "Your email",
        project: "What do you need?",
        projectPlaceholder: "Select an option",
        projectOptions: [
          "Website design from scratch",
          "Website redesign",
          "Landing page",
          "Website maintenance",
          "Changes or improvements to a website",
          "Domain and hosting",
          "I'm not sure, I need guidance",
        ],
        message: "Tell me about your project...",
        submit: "Let's start creating",
        sending: "Sending...",
        success: "Message sent. I will reply as soon as possible.",
        error: "The message could not be sent. Please write directly to ruizvazquezclaudia@gmail.com.",
        activation: "Check your inbox and activate the form from the FormSubmit email. After that, messages will arrive correctly.",
        projectRequired: "Select what you need before sending.",
      },
      imageAlt: "Path into a hidden garden",
      seal: "Let's grow together",
    },
    gardenBand:
      "Every great project begins with an idea. My work is to help it grow into a website that reflects the essence of your business.",
    footer: {
      description: "Web design for small businesses and self-employed professionals.",
      line: "Designing websites with calm, detail and purpose.",
      social: [],
      legal: [
        ["Legal Notice", "/aviso-legal"],
        ["Privacy", "/privacidad"],
        ["Cookies", "/cookies"],
      ],
      copyright: "© 2026 Claudia Ruiz · Web Design Studio",
    },
  },
};

const projectPositions = projectCases.map((project) => project.imagePosition);
const projectImages = projectCases.map((project) => project.image);
const projectImageAlts = projectCases.map((project) => project.imageAlt);
const projectSlugs = projectCases.map((project) => project.slug);

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

function getBrowserLocale(): Locale {
  if (typeof navigator === "undefined") {
    return "es";
  }

  return navigator.languages?.some((language) =>
    language.toLowerCase().startsWith("es")
  )
    ? "es"
    : "en";
}

function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 1.05, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Logo({ studio, label }: { studio: string; label: string }) {
  return (
    <a className="vl-brand" href="#home" aria-label={label}>
      <span className="vl-mark" aria-hidden="true">CR</span>
      <span>
        <strong>Claudia Ruiz</strong>
        <small>{studio}</small>
      </span>
    </a>
  );
}

function BotanicalInk({ className = "" }: { className?: string }) {
  return (
    <span className={`botanical-ink ${className}`} aria-hidden="true">
      <span />
    </span>
  );
}

function Butterfly({ className = "" }: { className?: string }) {
  return <span className={`vl-butterfly ${className}`} aria-hidden="true" />;
}

function Sparkles({ className = "" }: { className?: string }) {
  return (
    <span className={`sparkles ${className}`} aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  );
}

export default function SecretGardenPortfolio() {
  const reduceMotion = useReducedMotion();
  const lenisRef = useRef<{ scrollTo: (target: HTMLElement | string | number, options?: { duration?: number }) => void } | null>(null);
  const projectSelectRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [locale] = useState<Locale>(getBrowserLocale);
  const [projectSelectOpen, setProjectSelectOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState("");
  const [contactStatus, setContactStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [contactMessage, setContactMessage] = useState("");
  const t = copy[locale];

  const handleAnchorClick = (id: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const target = document.getElementById(id);

    if (!target) {
      return;
    }

    document.documentElement.classList.remove("mobile-menu-locked");
    document.body.classList.remove("mobile-menu-locked");
    setMenuOpen(false);
    window.history.pushState(null, "", `#${id}`);

    window.setTimeout(() => {
      if (!reduceMotion && lenisRef.current) {
        lenisRef.current.scrollTo(target, { duration: 1.1 });
        window.setTimeout(() => {
          const currentTop = target.getBoundingClientRect().top + window.scrollY;

          if (Math.abs(window.scrollY - currentTop) > 24) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 180);
        return;
      }

      target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    }, 80);
  };

  const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedProject) {
      setContactStatus("error");
      setContactMessage(t.contact.form.projectRequired);
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      setContactStatus("error");
      setContactMessage(t.contact.form.error);
      return;
    }

    setContactStatus("sending");
    setContactMessage("");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${t.contact.email}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          project: selectedProject,
          message,
          _subject: `Nuevo mensaje desde la web de Claudia Ruiz: ${selectedProject}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (!response.ok) {
        throw new Error("FormSubmit request failed");
      }

      const result = (await response.json()) as { success?: boolean | string; message?: string };

      if (result.success !== true && result.success !== "true") {
        const message = result.message?.toLowerCase() || "";

        if (message.includes("activation")) {
          setContactStatus("error");
          setContactMessage(t.contact.form.activation);
          return;
        }

        throw new Error(result.message || "FormSubmit rejected the submission");
      }

      form.reset();
      setSelectedProject("");
      setContactStatus("success");
      setContactMessage(t.contact.form.success);
    } catch {
      setContactStatus("error");
      setContactMessage(t.contact.form.error);
    }
  };

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    document.documentElement.classList.toggle("mobile-menu-locked", menuOpen);
    document.body.classList.toggle("mobile-menu-locked", menuOpen);

    return () => {
      document.documentElement.classList.remove("mobile-menu-locked");
      document.body.classList.remove("mobile-menu-locked");
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!projectSelectOpen) {
      return;
    }

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!projectSelectRef.current?.contains(event.target as Node)) {
        setProjectSelectOpen(false);
      }
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
    };
  }, [projectSelectOpen]);

  useEffect(() => {
    const section = new URLSearchParams(window.location.search).get("section");

    if (!section) {
      return;
    }

    const scrollToRequestedSection = () => {
      const target = document.getElementById(section);

      if (!target) {
        return;
      }

      const top = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top, behavior: reduceMotion ? "auto" : "smooth" });
      window.history.replaceState(null, "", `#${section}`);
    };

    const timeout = window.setTimeout(scrollToRequestedSection, 320);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [reduceMotion]);

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    let lenis: import("lenis").default | undefined;
    let frame = 0;
    let ctx: { revert: () => void } | undefined;
    let active = true;

    const setup = async () => {
      const [{ default: Lenis }, gsapModule, triggerModule] = await Promise.all([
        import("lenis"),
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      if (!active) {
        return;
      }

      lenis = new Lenis({
        duration: 1.35,
        easing: (time) => Math.min(1, 1.001 - Math.pow(2, -10 * time)),
        smoothWheel: true,
      });
      lenisRef.current = lenis;

      const raf = (time: number) => {
        lenis?.raf(time);
        frame = requestAnimationFrame(raf);
      };
      frame = requestAnimationFrame(raf);

      const gsap = gsapModule.gsap;
      const ScrollTrigger = triggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>("[data-float]").forEach((el, index) => {
          gsap.to(el, {
            y: index % 2 ? 34 : -42,
            x: index % 2 ? -18 : 14,
            rotate: index % 2 ? -6 : 7,
            ease: "none",
            scrollTrigger: {
              trigger: ".vl-page",
              start: "top top",
              end: "bottom bottom",
              scrub: 2,
            },
          });
        });

        gsap.to(".vl-hero-photo img", {
          scale: 1.07,
          ease: "none",
          scrollTrigger: {
            trigger: ".vl-hero",
            start: "top top",
            end: "bottom top",
            scrub: 2,
          },
        });
      });
    };

    setup();

    return () => {
      active = false;
      cancelAnimationFrame(frame);
      lenis?.destroy();
      lenisRef.current = null;
      ctx?.revert();
    };
  }, [reduceMotion]);

  return (
    <main className="vl-page">
      <span className="paper-grain" aria-hidden="true" />
      <span className="page-sparkles" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, index) => (
          <span key={index} />
        ))}
      </span>
      <span className="watercolor wash-left" aria-hidden="true" />
      <span className="watercolor wash-right" aria-hidden="true" />
      <div className="left-garden-veil" aria-hidden="true">
        <span className="left-mist left-mist-a" />
        <span className="left-mist left-mist-b" />
        <span className="left-mist left-mist-c" />
        <span className="left-mist left-mist-d" />
        <span className="left-branch left-branch-a"><span /></span>
        <span className="left-branch left-branch-b"><span /></span>
        <span className="left-branch left-branch-c"><span /></span>
        <span className="left-mushrooms">
          <span />
          <span />
        </span>
        <span className="left-ground-leaves"><span /></span>
        <span className="left-glow left-glow-a" />
        <span className="left-glow left-glow-b" />
        <span className="left-glow left-glow-c" />
      </div>

      <section id="home" className="vl-hero" aria-label="Hero">
        <header className={`vl-header ${menuOpen ? "menu-open" : ""}`}>
          <Logo studio={t.studio} label={t.homeLabel} />
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? t.menu.close : t.menu.open}
            aria-expanded={menuOpen}
            aria-controls="main-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
          <nav id="main-menu" aria-label={t.menu.label}>
            {t.nav.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={handleAnchorClick(id)}>
                {label}
              </a>
            ))}
          </nav>
        </header>
        {menuOpen ? (
          <button
            className="menu-backdrop"
            type="button"
            aria-label={t.menu.close}
            onClick={() => setMenuOpen(false)}
          />
        ) : null}

        <div className="vl-hero-paper">
          <span className="organic-paper-edge" aria-hidden="true" />
          <Sparkles className="hero-sparkles" />
          <BotanicalInk className="hero-leaf-left" />
          <BotanicalInk className="hero-leaf-bottom" />
          <Butterfly className="hero-butterfly" />

          <motion.p
            className="mini-label"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {t.hero.label}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {t.hero.titleA} <em>{t.hero.titleEm}</em> {t.hero.titleB}
          </motion.h1>
          <motion.span
            className="short-rule"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.p
            className="hero-copy"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
          >
            {t.hero.text}
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
          >
            <a className="small-button" href="#archivo-de-proyectos" onClick={handleAnchorClick("archivo-de-proyectos")}>
              {t.hero.cta}
            </a>
            <a className="small-button small-button-secondary" href="#contacto" onClick={handleAnchorClick("contacto")}>
              {t.talk}
            </a>
          </motion.div>
        </div>

        <div className="vl-hero-photo">
          <Image
            src={gardenImage}
            alt={t.hero.imageAlt}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 58vw"
          />
        </div>
      </section>

      <section id="servicios" className="vl-services">
        <Sparkles className="services-sparkles" />
        <span className="gold-thread thread-one" aria-hidden="true" />
        <span className="gold-thread thread-two" aria-hidden="true" />
        <BotanicalInk className="services-leaf" />
        <span className="services-watercolor services-watercolor-a" aria-hidden="true" />
        <span className="services-watercolor services-watercolor-b" aria-hidden="true" />
        <span className="services-sprig services-sprig-a" aria-hidden="true"><span /></span>
        <span className="services-sprig services-sprig-b" aria-hidden="true"><span /></span>
        <FadeIn className="services-heading">
          <p className="mini-label">{t.servicesLabel}</p>
          <h2>{t.servicesTitle}</h2>
          <p>{t.servicesText}</p>
        </FadeIn>

        <div className="service-arches">
          {t.services.map(([title, text, points], index) => (
            <FadeIn className="service-arch" key={title} delay={index * 0.08}>
              <span className={`service-miniature service-miniature-${index}`} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
              <ul>
                {points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>
      </section>

      <section id="archivo-de-proyectos" className="vl-projects">
        <BotanicalInk className="projects-left-leaf" />
        <Butterfly className="projects-butterfly" data-float />
        <FadeIn className="project-intro">
          <p className="mini-label">{t.projectsLabel}</p>
          <h2>{t.projectsTitle}</h2>
          <span className="short-rule" />
          <p>{t.projectsText}</p>
          <span className="text-link text-link-static">
            {t.exploreProjects}
          </span>
        </FadeIn>

        <div className="book-projects" aria-label={t.projectsTitle}>
          <div className="book-stack book-stack-art">
            <Image
              className="project-books-image"
              src="/images/project-books-desktop-v6.png"
              alt="Libros apilados con los nombres de los proyectos del archivo"
              fill
              sizes="(max-width: 1180px) 62vw, 52vw"
            />
            {t.projects.map(([name, type], index) => (
              <a
                className={`desktop-book-hit desktop-book-hit-${index}`}
                key={name}
                href={`/proyectos/${projectSlugs[index]}`}
                aria-label={`${name} - ${type}`}
              />
            ))}
          </div>
        </div>

        <div className="mobile-project-books mobile-book-shelf" aria-label={t.projectsTitle}>
          <Image
            className="mobile-book-shelf-image"
            src="/images/project-books-mobile-v6.png"
            alt="Libros verticales con los nombres de los proyectos para navegar el portfolio"
            fill
            sizes="(max-width: 760px) 88vw"
          />
          {t.projects.map(([name, type], index) => (
            <a
              className={`mobile-book-hit mobile-book-hit-${index}`}
              key={name}
              href={`/proyectos/${projectSlugs[index]}`}
              aria-label={`${name} - ${type}`}
            />
          ))}
        </div>

        <div className="arched-projects">
          {t.projects.map(([name, type], index) => (
            <FadeIn className="arched-project" key={name} delay={index * 0.08}>
              <a href={`/proyectos/${projectSlugs[index]}`}>
                <div className="arched-photo">
                  <Image
                    src={projectImages[index]}
                    alt={projectImageAlts[index]}
                    fill
                    sizes="(max-width: 760px) 74vw, 22vw"
                    style={{ objectPosition: projectPositions[index] }}
                  />
                </div>
                <div className="project-caption">
                  <h3>{name}</h3>
                  <span aria-hidden="true">-&gt;</span>
                </div>
                <p>{type}</p>
              </a>
            </FadeIn>
          ))}
        </div>

        <a className="side-note" href="#contacto">
          {t.moreWork}
        </a>
      </section>

      <section id="sobre-mi" className="vl-about">
        <FadeIn className="about-photo">
          <Image
            src={aboutImage}
            alt={t.about.imageAlt}
            fill
            sizes="(max-width: 760px) 82vw, 34vw"
            style={{ objectPosition: "58% 46%" }}
          />
        </FadeIn>
        <FadeIn className="about-copy" delay={0.08}>
          <p className="mini-label">{t.about.label}</p>
          <h2>
            {t.about.titleA} <em>{t.about.titleEm}</em> {t.about.titleB}
          </h2>
          <span className="short-rule" />
          <p>{t.about.text}</p>
          <ul>
            {t.about.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </FadeIn>
      </section>

      <section id="proceso" className="vl-process">
        <BotanicalInk className="process-left-leaf" />
        <div className="process-heading">{t.processHeading}</div>
        <svg className="process-trail process-trail-desktop" viewBox="0 0 960 110" aria-hidden="true">
          <path d="M132 54 C188 12 244 96 300 54" />
          <path d="M396 54 C452 12 508 96 564 54" />
          <path d="M660 54 C716 12 772 96 828 54" />
          <path className="trail-arrow" d="M292 47 L306 54 L292 61" />
          <path className="trail-arrow" d="M556 47 L570 54 L556 61" />
          <path className="trail-arrow" d="M820 47 L834 54 L820 61" />
        </svg>
        <svg className="process-trail process-trail-mobile" viewBox="0 0 320 980" aria-hidden="true">
          <path d="M250 60 C318 150 30 178 82 292" />
          <path d="M70 382 C8 482 308 506 246 636" />
          <path d="M250 728 C318 814 28 842 86 944" />
          <path className="trail-arrow" d="M78 280 L86 296 L70 292" />
          <path className="trail-arrow" d="M242 624 L250 640 L234 636" />
          <path className="trail-arrow" d="M82 932 L90 948 L74 944" />
        </svg>
        <div className="process-row">
          {t.process.map(([number, title, text], index) => (
            <FadeIn className="process-item" key={title} delay={index * 0.08}>
              <span className="process-number">{number}</span>
              <span className={`process-icon process-icon-${index}`} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="vl-quote" aria-label="Garden statement">
        <Sparkles className="quote-sparkles" />
        <Butterfly className="quote-butterfly" data-float />
        <FadeIn>
          <p>{t.gardenBand}</p>
        </FadeIn>
      </section>

      <section id="faq" className="vl-faq">
        <Butterfly className="faq-butterfly" data-float />
        <FadeIn className="faq-copy">
          <p className="mini-label">{t.faq.label}</p>
          <h2>{t.faq.title}</h2>
          <span className="short-rule" />
        </FadeIn>
        <div className="faq-list">
          {t.faq.items.map(([question, answer], index) => (
            <FadeIn key={question} delay={index * 0.06}>
              <details>
                <summary>
                  <span>{question}</span>
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{answer}</p>
              </details>
            </FadeIn>
          ))}
        </div>
      </section>

      <section id="contacto" className="vl-contact">
        <BotanicalInk className="contact-left-leaf" />
        <FadeIn className="contact-copy">
          <p className="mini-label">{t.contact.label}</p>
          <h2>
            {t.contact.titleA} <em>{t.contact.titleEm}</em> {t.contact.titleB}
          </h2>
          <span className="short-rule" />
          <p>{t.contact.text}</p>
          <div className="contact-details">
            <a href={`mailto:${t.contact.email}`}>{t.contact.email}</a>
            <a href={`tel:${t.contact.phone.replaceAll(" ", "")}`}>{t.contact.phone}</a>
          </div>
        </FadeIn>

        <FadeIn className="contact-form-wrap" delay={0.1}>
          <form className="contact-form" onSubmit={handleContactSubmit}>
            <label>
              <span>{t.contact.form.name}</span>
              <input name="name" type="text" autoComplete="name" required />
            </label>
            <label>
              <span>{t.contact.form.email}</span>
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <div className="form-field">
              <span>{t.contact.form.project}</span>
              <input name="project" type="hidden" value={selectedProject} />
              <div
                className={`garden-select ${projectSelectOpen ? "is-open" : ""}`}
                ref={projectSelectRef}
              >
                <button
                  type="button"
                  aria-expanded={projectSelectOpen}
                  onClick={() => setProjectSelectOpen((open) => !open)}
                >
                  <span className={selectedProject ? "" : "is-placeholder"}>
                    {selectedProject || t.contact.form.projectPlaceholder}
                  </span>
                  <span aria-hidden="true">⌄</span>
                </button>
                {projectSelectOpen ? (
                  <ul>
                    {t.contact.form.projectOptions.map((option) => (
                      <li key={option}>
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedProject(option);
                            setProjectSelectOpen(false);
                          }}
                        >
                          {option}
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
            <label>
              <span>{t.contact.form.message}</span>
              <textarea name="message" rows={5} required />
            </label>
            <button className="small-button" type="submit" disabled={contactStatus === "sending"}>
              {contactStatus === "sending" ? t.contact.form.sending : t.contact.form.submit}
            </button>
            {contactMessage ? (
              <p className={`form-status is-${contactStatus}`} role="status">
                {contactMessage}
              </p>
            ) : null}
          </form>
        </FadeIn>
      </section>

      <footer className="vl-footer">
        <Sparkles className="footer-sparkles" />
        <Butterfly className="footer-butterfly" data-float />
        <div className="footer-block footer-brand">
          <Logo studio={t.studio} label={t.homeLabel} />
          <p>{t.footer.description}</p>
        </div>
        <nav className="footer-block footer-nav" aria-label={t.menu.label}>
          {t.nav.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={handleAnchorClick(id)}>
              {label}
            </a>
          ))}
        </nav>
        <div className="footer-block footer-contact">
          <a href={`mailto:${t.contact.email}`}>{t.contact.email}</a>
          <a href={`tel:${t.contact.phone.replaceAll(" ", "")}`}>{t.contact.phone}</a>
        </div>
        <p className="footer-line">{t.footer.line}</p>
        <div className="footer-bottom">
          <p className="footer-copy">{t.footer.copyright}</p>
          <div className="footer-legal">
            {t.footer.legal.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
