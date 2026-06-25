import { SPORTS_PAGE_PATHS } from "../../../config/core/paths.js";

import cyclingImage from "../../../assets/modalities/cycling.webp";

const cyclingSection = {
  key: "cycling",
  id: "modalidade-ciclismo",

  identity: {
    title: "Ciclismo",
    shortLabel: "UCI / Performance",
    eyebrow: "Modalidade de referência",
    iconKey: "bike",
    lead: "Modalidade de referência da Sunlive Sports, com ligação direta à Anadia Cycling Academy, à Sunlive Cycling, a infraestruturas especializadas, eventos, estágios e projetos de performance.",
  },

  media: {
    src: cyclingImage,
    alt: "Ciclistas em contexto de treino e performance em pista",
    width: 1600,
    height: 1000,
    objectPosition: "center 47%",
  },

  summary: {
    items: [
      {
        key: "cycling-disciplines",
        value: "11",
        label: "Disciplinas oficiais UCI",
      },
      {
        key: "cycling-contexts",
        value: "Estrada / Pista / BMX / BTT",
        label: "Contextos principais",
      },
      {
        key: "cycling-focus",
        value: "Performance",
        label: "Foco de desenvolvimento",
      },
    ],
  },

  relatedAreas: {
    eyebrow: "Frentes associadas",
    heading: "Projetos associados ao ciclismo",
    description:
      "O ciclismo concentra uma das frentes mais completas da Sunlive Sports, ligando academia, treino, eventos, infraestruturas, programas especializados e soluções de performance.",

    blocks: [
      {
        key: "cycling-projects",
        type: "project-grid",
        heading: "Projetos",
        iconKey: "chart",
        items: [
          {
            key: "cycling-academy",
            type: "project-card",
            iconKey: "bike",
            title: "Anadia Cycling Academy",
            meta: "Academia de ciclismo",
            description:
              "Academia sediada em Anadia, orientada para desenvolvimento técnico em pista, BMX, XCO e estrada, com ligação à Sunlive Cycling, treino estruturado e utilização de infraestruturas especializadas.",
            links: [
              {
                label: "Ver academia",
                href: SPORTS_PAGE_PATHS.academies,
                ariaLabel: "Ver academia Sunlive Sports",
              },
            ],
          },
          {
            key: "cycling-events",
            type: "project-card",
            iconKey: "calendar",
            title: "Eventos",
            meta: "Events",
            description:
              "Eventos de ciclismo ligados a Anadia, ao velódromo e a contextos de pista, BMX, paraciclismo e preparação especializada, articulando competição, camps técnicos, operação logística e ambientes de performance.",
            links: [
              {
                label: "Ver eventos",
                href: SPORTS_PAGE_PATHS.events,
                ariaLabel: "Ver eventos Sunlive Sports",
              },
            ],
          },
          {
            key: "aero-edge",
            type: "project-card",
            iconKey: "chart-frame",
            title: "Aero Edge",
            meta: "Performance",
            description:
              "Projeto especializado em testes aerodinâmicos, análise técnica e otimização de performance, com foco em ganhos marginais, eficiência e tomada de decisão baseada em dados.",
            bookKey: "aeroEdge",
            bookLabel: "Abrir Book",
            websiteHref: "https://aeroedge.org/",
            websiteLabel: "Ver mais",
            instagramHref: "https://www.instagram.com/aeroedge1/",
          },
          {
            key: "training-from-pro",
            type: "project-card",
            iconKey: "athlete",
            title: "Training From Pro",
            shortTitle: "Training From Pro",
            meta: "High Performance",
            description:
              "Campos de treino de alto rendimento para ciclistas, combinando estrada, pista, ginásio, acompanhamento técnico e conteúdos complementares de preparação.",
            bookKey: "trainingFromPro",
            bookLabel: "Abrir Book",
          },
        ],
      },
    ],
  },

  technicalMap: {
    id: "mapa-tecnico-ciclismo",
    eyebrow: "Mapa técnico",
    heading: "Mapa técnico do ciclismo",
    description:
      "Organização das disciplinas oficiais UCI e das principais especialidades competitivas associadas ao ciclismo.",
    defaultOpen: false,
    ui: {
      expandLabel: "Ver Mapa Técnico",
      collapseLabel: "Ocultar Mapa Técnico",
      tabsAriaLabel: "Navegação do mapa técnico do ciclismo",
    },

    blocks: [
      {
        key: "cycling-official-disciplines",
        type: "discipline-grid",
        heading: "Disciplinas oficiais UCI",
        iconKey: "workflow",
        items: [
          {
            key: "road",
            title: "Estrada",
            titleEn: "Road",
            description:
              "Competições em estrada e circuitos pavimentados, incluindo provas de fundo, contrarrelógios, etapas, clássicas e formatos de resistência.",
          },
          {
            key: "track",
            title: "Pista",
            titleEn: "Track",
            description:
              "Competições realizadas em velódromo, com provas de velocidade, resistência, perseguição, estratégia coletiva e elevada exigência técnica.",
          },
          {
            key: "mountain-bike",
            title: "BTT",
            titleEn: "Mountain Bike",
            description:
              "Disciplina fora de estrada com percursos técnicos, obstáculos naturais e diferentes exigências de resistência, controlo, descida e explosão.",
          },
          {
            key: "bmx-racing",
            title: "BMX Racing",
            titleEn: "BMX Racing",
            description:
              "Corridas curtas e explosivas em pista própria, com saltos, curvas inclinadas, obstáculos e forte componente de arranque.",
          },
          {
            key: "bmx-freestyle",
            title: "BMX Freestyle",
            titleEn: "BMX Freestyle",
            description:
              "Disciplina centrada em manobras, criatividade, execução técnica, fluidez, controlo da bicicleta e estilo.",
          },
          {
            key: "cyclo-cross",
            title: "Ciclocrosse",
            titleEn: "Cyclo-cross",
            description:
              "Provas em circuitos mistos com terra, relva, lama, obstáculos e secções em que o atleta pode ter de correr com a bicicleta.",
          },
          {
            key: "trials",
            title: "Trial",
            titleEn: "Trials",
            description:
              "Disciplina altamente técnica focada na superação de obstáculos naturais ou artificiais sem apoio dos pés no solo.",
          },
          {
            key: "indoor-cycling",
            title: "Ciclismo Indoor",
            titleEn: "Indoor Cycling",
            description:
              "Área competitiva em recinto fechado, com variantes técnicas como ciclismo artístico e cycle-ball.",
          },
          {
            key: "gravel",
            title: "Gravel",
            titleEn: "Gravel",
            description:
              "Provas em percursos mistos, normalmente com estradas de terra, gravilha, segmentos longos e forte componente de resistência.",
          },
          {
            key: "cycling-esports",
            title: "Cycling Esports",
            titleEn: "Cycling Esports",
            description:
              "Competições virtuais em plataformas digitais, com esforço físico real, dados de potência e ambiente competitivo online.",
          },
          {
            key: "para-cycling",
            title: "Paraciclismo",
            titleEn: "ParaCycling",
            description:
              "Vertente adaptada do ciclismo competitivo, com categorias próprias em estrada e pista, ajustadas às classificações dos atletas.",
          },
        ],
      },
      {
        key: "cycling-specialities",
        type: "grouped-list",
        heading: "Especialidades, formatos e provas",
        iconKey: "workflow",
        groups: [
          {
            key: "road-specialities",
            title: "Estrada",
            items: [
              "Prova de fundo",
              "Contrarrelógio individual",
              "Contrarrelógio por equipas",
              "Critérium",
              "Granfondo",
            ],
          },
          {
            key: "track-specialities",
            title: "Pista",
            items: [
              "Sprint",
              "Keirin",
              "Contrarrelógio",
              "Perseguição individual",
              "Perseguição por equipas",
              "Scratch",
              "Corrida por pontos",
              "Madison",
              "Omnium",
              "Eliminação",
              "Velocidade por equipas",
            ],
          },
          {
            key: "mountain-bike-specialities",
            title: "BTT",
            items: [
              "Cross-country Olympic — XCO",
              "Cross-country Short Track — XCC",
              "Cross-country Marathon — XCM",
              "Downhill — DHI",
              "Enduro",
              "E-MTB",
            ],
          },
          {
            key: "bmx-specialities",
            title: "BMX",
            items: [
              "BMX Racing",
              "BMX Freestyle Park",
              "BMX Freestyle Flatland",
            ],
          },
          {
            key: "cyclo-cross-specialities",
            title: "Ciclocrosse",
            items: [
              "Circuitos mistos",
              "Obstáculos",
              "Segmentos de corrida apeada",
              "Provas de inverno",
            ],
          },
          {
            key: "trials-specialities",
            title: "Trial",
            items: [
              "20 polegadas",
              "26 polegadas",
              "Zonas técnicas",
              "Obstáculos naturais ou artificiais",
            ],
          },
          {
            key: "indoor-cycling-specialities",
            title: "Ciclismo Indoor",
            items: ["Ciclismo artístico", "Cycle-ball"],
          },
          {
            key: "para-cycling-specialities",
            title: "Paraciclismo",
            items: [
              "Estrada",
              "Pista",
              "Handbike",
              "Tandem",
              "Triciclo",
              "Bicicleta adaptada",
            ],
          },
        ],
      },
    ],
  },

  highlight: {
    id: "destaque-ciclismo",
    eyebrow: "Destaque",
    title: "Universo do Ciclismo",
    description:
      "Academia, estágios, velódromo, programas de treino, infraestruturas, projetos de performance e soluções especializadas que consolidam o ciclismo como uma das áreas centrais da Sunlive Sports.",
    iconKey: "bike",
    bookKey: "cycling",
    bookLabel: "Abrir Book",
    websiteHref: "https://cycling.sunlive.pt/",
    websiteLabel: "Ver mais",
    instagramHref: "https://www.instagram.com/sunlivecycling/",
  },
};

export default cyclingSection;
