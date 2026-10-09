type LegalContent = {
  eyebrow: string;
  title: string;
  description: string;
  updated: string;
  sections: { title: string; paragraphs?: string[]; items?: string[] }[];
};

export const legalCopyCa: Record<"avisoLegal" | "privacidad" | "cookies", LegalContent> = {
  avisoLegal: {
    eyebrow: "Informació legal",
    title: "Avís legal",
    description: "En aquesta pàgina trobaràs informació general sobre la titularitat i les condicions bàsiques d'ús d'aquest web.",
    updated: "13 d'agost de 2026",
    sections: [
      {
        title: "Titular del web",
        paragraphs: ["Aquest web pertany a Claudia Ruiz, estudi de disseny web especialitzat en pàgines web per a petits negocis i autònoms."],
        items: [
          "Correu electrònic de contacte: ruizvazquezclaudia@gmail.com",
          "Telèfon: +34 682 649 545",
          "Activitat: disseny web, desenvolupament web, redisseny, landing pages i manteniment web.",
        ],
      },
      {
        title: "Objecte del web",
        paragraphs: ["L'objectiu d'aquest web és presentar els serveis professionals de disseny i desenvolupament web de Claudia Ruiz, mostrar projectes i facilitar un canal de contacte a les persones interessades a sol·licitar informació o un pressupost."],
      },
      {
        title: "Ús del web",
        paragraphs: [
          "La persona usuària es compromet a utilitzar aquest web de manera adequada, sense dur a terme accions que puguin danyar, bloquejar, sobrecarregar o deteriorar-ne el funcionament.",
          "Els continguts d'aquest web s'ofereixen amb finalitats informatives i comercials. Claudia Ruiz es reserva el dret d'actualitzar, modificar o eliminar continguts quan sigui necessari.",
        ],
      },
      {
        title: "Propietat intel·lectual",
        paragraphs: [
          "Els textos, el disseny, l'estructura, les imatges, els elements gràfics i la composició visual d'aquest web formen part del portafolis i de la comunicació professional de Claudia Ruiz, excepte els recursos que pertanyin a tercers o s'indiquin expressament.",
          "No es permet reproduir, distribuir ni transformar els continguts sense autorització prèvia.",
        ],
      },
      {
        title: "Responsabilitat",
        paragraphs: [
          "Claudia Ruiz treballa per mantenir la informació actualitzada i el funcionament correcte del web, però no pot garantir l'absència absoluta d'errors tècnics o interrupcions puntuals.",
          "Aquesta pàgina legal és una base informativa. Per a un llançament comercial definitiu, es recomana validar el text amb un professional especialitzat en protecció de dades i normativa digital.",
        ],
      },
    ],
  },
  privacidad: {
    eyebrow: "Protecció de dades",
    title: "Política de privacitat",
    description: "Aquí s'explica quines dades es poden recollir a través del web, amb quina finalitat s'utilitzen i com pots exercir els teus drets.",
    updated: "13 d'agost de 2026",
    sections: [
      {
        title: "Responsable del tractament",
        paragraphs: ["La responsable del tractament de les dades enviades a través d'aquest web és Claudia Ruiz."],
        items: [
          "Correu electrònic de contacte: ruizvazquezclaudia@gmail.com",
          "Telèfon: +34 682 649 545",
          "Activitat: serveis de disseny, desenvolupament i manteniment web.",
        ],
      },
      {
        title: "Dades que es recullen",
        paragraphs: [
          "Mitjançant el formulari de contacte es poden sol·licitar dades com el nom, el correu electrònic, el tipus de projecte i el missatge. També pots contactar directament per correu electrònic o telèfon.",
          "No se sol·liciten dades especialment protegides. Es recomana no enviar informació sensible a través del formulari.",
        ],
      },
      {
        title: "Finalitat del tractament",
        items: [
          "Respondre les consultes rebudes a través del formulari o del correu electrònic.",
          "Preparar informació, propostes o pressupostos relacionats amb serveis web.",
          "Mantenir una comunicació directa sobre un possible projecte.",
          "Gestionar sol·licituds relacionades amb el disseny web, el redisseny, les landing pages o el manteniment.",
        ],
      },
      {
        title: "Base legal",
        paragraphs: ["La base legal per tractar les dades és el consentiment de la persona que contacta voluntàriament mitjançant el formulari, el correu electrònic o el telèfon, així com l'aplicació de mesures precontractuals quan se sol·licita informació sobre un servei."],
      },
      {
        title: "Conservació de les dades",
        paragraphs: ["Les dades es conservaran durant el temps necessari per respondre la consulta i gestionar la relació professional, llevat que hi hagi una obligació legal de conservar-les durant més temps."],
      },
      {
        title: "Comunicació a tercers",
        paragraphs: ["No es venen ni se cedeixen dades personals a tercers. El formulari pot utilitzar serveis externs necessaris per enviar el missatge, com FormSubmit, que actua com a proveïdor tècnic de l'enviament."],
      },
      {
        title: "Drets",
        paragraphs: [
          "Pots sol·licitar l'accés, la rectificació, la supressió, l'oposició, la limitació o la portabilitat de les teves dades escrivint a ruizvazquezclaudia@gmail.com.",
          "Si consideres que les teves dades no s'han tractat correctament, pots presentar una reclamació davant l'Agència Espanyola de Protecció de Dades.",
        ],
      },
    ],
  },
  cookies: {
    eyebrow: "Galetes",
    title: "Política de galetes",
    description: "Aquesta pàgina explica què són les galetes i com es gestionen en aquest web.",
    updated: "13 d'agost de 2026",
    sections: [
      {
        title: "Què són les galetes",
        paragraphs: ["Les galetes són petits fitxers que un web pot emmagatzemar al navegador per recordar informació tècnica, millorar la navegació o mesurar l'ús de la pàgina."],
      },
      {
        title: "Ús actual de galetes",
        paragraphs: [
          "Actualment aquest web no incorpora galetes analítiques, publicitàries ni de seguiment configurades per Claudia Ruiz.",
          "El web pot utilitzar funcionalitats tècniques pròpies del navegador o del proveïdor d'allotjament necessàries per carregar correctament la pàgina i mantenir-ne la seguretat.",
        ],
      },
      {
        title: "Galetes de tercers",
        paragraphs: ["Si en el futur s'afegeixen eines com analítica web, píxels publicitaris, mapes, vídeos incrustats, xat o serveis similars, aquesta política s'actualitzarà i, quan correspongui, es mostrarà un bàner de consentiment."],
      },
      {
        title: "Com gestionar les galetes",
        paragraphs: ["Pots permetre, bloquejar o eliminar les galetes des de la configuració del navegador. Cada navegador ofereix les seves pròpies opcions de privacitat i seguretat."],
        items: [
          "Google Chrome: configuració de privacitat i seguretat.",
          "Safari: preferències de privacitat.",
          "Firefox: configuració de privacitat i protecció contra el seguiment.",
          "Microsoft Edge: galetes i permisos del lloc.",
        ],
      },
      {
        title: "Actualització d'aquesta política",
        paragraphs: ["Aquesta política es podrà actualitzar si canvia la configuració tècnica del web o s'incorporen noves eines que impliquin l'ús de galetes."],
      },
    ],
  },
};
