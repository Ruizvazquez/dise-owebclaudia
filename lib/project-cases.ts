export type ProjectCase = {
  slug: string;
  name: string;
  type: string;
  client: string;
  year: string;
  service: string;
  projectType: string;
  image: string;
  imagePosition: string;
  imageAlt: string;
  heroMockupImage?: string;
  heroMockupAlt?: string;
  showcaseDesktopImage?: string;
  showcaseDesktopAlt?: string;
  showcaseTabletImage?: string;
  showcaseTabletAlt?: string;
  showcaseMobileImage?: string;
  showcaseMobileAlt?: string;
  intro: string;
  summaryTitle?: string;
  summary: string;
  visitLabel: string;
  stages: Array<{
    title: string;
    text: string;
  }>;
  result: string;
};

export const projectCases: ProjectCase[] = [
  {
    slug: "wild-roots",
    name: "La Terra Viva",
    type: "Marca y web",
    client: "La Terra Viva",
    year: "2026",
    service: "E-commerce, dirección visual, SEO",
    projectType: "Tienda online editorial",
    image: "/images/project-jewelry-shop.jpg",
    imagePosition: "18% 58%",
    imageAlt:
      "Mockup de tienda online editorial con joyería artesanal y productos naturales",
    heroMockupImage: "/images/project-la-terra-viva-main-mockup.png",
    heroMockupAlt:
      "Mockup de tienda online orgánica mostrado en portátil y móvil sobre una base de piedra",
    showcaseDesktopImage: "/images/project-la-terra-viva-desktop-mockup-v2.png",
    showcaseDesktopAlt:
      "Mockup desktop de La Terra Viva con catálogo de recetas en pantalla de ordenador",
    showcaseTabletImage: "/images/project-la-terra-viva-tablet-mockup-v2.png",
    showcaseTabletAlt:
      "Mockup tablet de La Terra Viva con catálogo de pastas artesanas",
    showcaseMobileImage: "/images/project-la-terra-viva-mobile-mockup.png",
    showcaseMobileAlt:
      "Mockup móvil de La Terra Viva con página de productos ecológicos y de proximidad",
    intro:
      "Una tienda online con aire editorial para una marca orgánica que necesitaba presentar sus productos como piezas cuidadas.",
    summaryTitle: "Una tienda online para productos ecológicos con esencia natural",
    summary:
      "La Terra Viva necesitaba una web capaz de presentar productos orgánicos, ecológicos y de proximidad con una imagen cuidada, clara y coherente. Trabajé una estructura visual sencilla para ordenar la oferta, destacar los valores de la marca y facilitar que el usuario entendiera rápidamente qué productos podía descubrir, siempre manteniendo una experiencia limpia, responsive y fácil de recorrer.",
    visitLabel: "Ver enfoque",
    stages: [
      {
        title: "Estrategia",
        text: "Definición de categorías, recorrido de compra y tono visual.",
      },
      {
        title: "Diseño",
        text: "Sistema editorial con detalles orgánicos y ritmo limpio.",
      },
      {
        title: "Desarrollo",
        text: "Maquetación responsive, ligera y fácil de mantener.",
      },
      {
        title: "Resultado",
        text: "Una tienda clara, delicada y preparada para crecer.",
      },
    ],
    result:
      "La marca gana una presencia digital más cuidada, con una experiencia que acompaña al usuario desde la inspiración hasta la compra.",
  },
  {
    slug: "solena-retreat",
    name: "Glamour Perruquería",
    type: "Diseño web",
    client: "Glamour Perruquería",
    year: "2026",
    service: "Diseño web, servicios, reservas",
    projectType: "Web de servicios",
    image: "/images/project-hair-salon.jpg",
    imagePosition: "76% 51%",
    imageAlt:
      "Mockup de página web para salón de belleza con servicios de cabello y tratamientos",
    heroMockupImage: "/images/project-glamour-main-mockup-v4.png",
    heroMockupAlt:
      "Mockup principal de Glamour Perruquers mostrado en desktop y móvil",
    showcaseDesktopImage: "/images/project-glamour-desktop-mockup-v2.png",
    showcaseDesktopAlt:
      "Mockup desktop de Glamour Perruquers con sección de servicios de peluquería",
    showcaseTabletImage: "/images/project-glamour-tablet-mockup.png",
    showcaseTabletAlt:
      "Mockup tablet de Glamour Perruquers con servicios y tratamientos",
    showcaseMobileImage: "/images/project-glamour-mobile-mockup.png",
    showcaseMobileAlt:
      "Mockup móvil de Glamour Perruquers con servicios de peluquería en formato responsive",
    intro:
      "Una web de servicios para salón de belleza, creada para ordenar tratamientos y guiar a la reserva con confianza.",
    summaryTitle: "Una web clara para mostrar servicios y generar confianza",
    summary:
      "Glamour Perruquería necesitaba una presencia digital que transmitiera profesionalidad y cercanía desde el primer vistazo. Organicé los servicios para que el usuario entendiera rápidamente qué ofrece el salón, planteé una imagen de inicio con vídeo de fondo para aportar movimiento y cuidé una composición limpia con fotografías protagonistas y adaptación responsive para que la experiencia fuese clara tanto en móvil como en escritorio.",
    visitLabel: "Ver enfoque",
    stages: [
      {
        title: "Estrategia",
        text: "Organización de servicios y mensajes principales.",
      },
      {
        title: "Diseño",
        text: "Dirección visual limpia, femenina y accesible.",
      },
      {
        title: "Desarrollo",
        text: "Secciones modulares para editar contenido con facilidad.",
      },
      {
        title: "Resultado",
        text: "Una web clara que genera confianza y facilita la reserva.",
      },
    ],
    result:
      "El proyecto convierte una oferta de servicios en una experiencia ordenada, visual y fácil de recorrer desde móvil.",
  },
  {
    slug: "forest-whisper",
    name: "Serenia",
    type: "Diseño web",
    client: "Serenia Masajes",
    year: "2026",
    service: "Diseño web, dirección visual, responsive",
    projectType: "Web de servicios",
    image: "/images/project-cabina-ester.jpg",
    imagePosition: "52% 58%",
    imageAlt:
      "Mockup de página web responsive para un centro de masajes y bienestar",
    heroMockupImage: "/images/project-serenia-main-mockup-transparent-v2.png",
    heroMockupAlt:
      "Mockup principal de Serenia Masajes mostrado en ordenador y móvil",
    showcaseDesktopImage: "/images/project-serenia-desktop-mockup-v3.png",
    showcaseDesktopAlt:
      "Mockup desktop de Serenia Masajes con tratamientos en pantalla de ordenador",
    showcaseTabletImage: "/images/project-serenia-tablet-mockup-v3.png",
    showcaseTabletAlt:
      "Mockup tablet de Serenia Masajes con listado de tratamientos",
    showcaseMobileImage: "/images/project-serenia-mobile-mockup-v3.png",
    showcaseMobileAlt:
      "Mockup móvil de Serenia Masajes con servicios y botón de reserva",
    intro:
      "Una web de servicios creada para transmitir calma, confianza y bienestar desde el primer vistazo.",
    summaryTitle: "Una experiencia digital tranquila para un espacio de bienestar",
    summary:
      "El proyecto organiza los tratamientos de Serenia con una estructura clara, una estética suave y llamadas a la reserva visibles. La dirección visual busca que el usuario entienda rápidamente los servicios y sienta una experiencia cercana antes de pedir cita.",
    visitLabel: "Ver experiencia",
    stages: [
      {
        title: "Estrategia",
        text: "Definición de una navegación sencilla para presentar tratamientos, beneficios y reserva sin fricción.",
      },
      {
        title: "Diseño",
        text: "Una composición visual serena, orgánica y profesional, alineada con un negocio de bienestar.",
      },
      {
        title: "Desarrollo",
        text: "Web responsive preparada para verse con claridad en móvil, tablet y escritorio.",
      },
      {
        title: "Resultado",
        text: "Una experiencia clara y calmada que ayuda al cliente a conocer los servicios y reservar con confianza.",
      },
    ],
    result:
      "Una web pensada para mostrar tratamientos de masaje con claridad, coherencia visual y una navegación sencilla desde cualquier dispositivo.",
  },
];

export function getProjectCase(slug: string) {
  return projectCases.find((project) => project.slug === slug);
}

