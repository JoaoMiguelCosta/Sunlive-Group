import { SPORTS_PAGE_PATHS } from "../../../config/core/paths.js";

const cyclingSection = {
  key: "cycling",
  id: "modalidade-ciclismo",

  identity: {
    title: "Ciclismo",
    shortLabel: "UCI / Performance",
    eyebrow: "Modalidade de referência",
    iconKey: "bike",
    lead: "Modalidade de referência da Sunlive Sports, com ligação direta a treino, eventos, academia, infraestruturas e projetos especializados.",
  },

  summary: {
    items: [
      {
        key: "cycling-disciplines",
        value: "11",
        label: "disciplinas oficiais UCI",
      },
      {
        key: "cycling-contexts",
        value: "Estrada / Pista / BMX / BTT",
        label: "contextos principais",
      },
      {
        key: "cycling-focus",
        value: "Performance",
        label: "foco de desenvolvimento",
      },
    ],
  },

  technicalMap: {
    heading: "Mapa técnico do ciclismo",
    description:
      "Organização das disciplinas oficiais UCI e das principais especialidades competitivas associadas ao ciclismo.",

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
              "Competições em estrada e circuitos pavimentados, incluindo provas de fundo, contrarrelógios e formatos de resistência.",
          },
          {
            key: "track",
            title: "Pista",
            titleEn: "Track",
            description:
              "Competições realizadas em velódromo, com provas de velocidade, resistência, perseguição e estratégia coletiva.",
          },
          {
            key: "mountain-bike",
            title: "BTT",
            titleEn: "Mountain Bike",
            description:
              "Disciplina fora de estrada com provas técnicas, percursos naturais e diferentes exigências de resistência, descida e controlo.",
          },
          {
            key: "bmx-racing",
            title: "BMX Racing",
            titleEn: "BMX Racing",
            description:
              "Corridas curtas e explosivas em pista com saltos, curvas inclinadas e obstáculos.",
          },
          {
            key: "bmx-freestyle",
            title: "BMX Freestyle",
            titleEn: "BMX Freestyle",
            description:
              "Disciplina centrada em manobras, criatividade, execução técnica e estilo.",
          },
          {
            key: "cyclo-cross",
            title: "Ciclocrosse",
            titleEn: "Cyclo-cross",
            description:
              "Provas em circuitos mistos com terra, relva, lama, obstáculos e secções técnicas.",
          },
          {
            key: "trials",
            title: "Trial",
            titleEn: "Trials",
            description:
              "Disciplina técnica focada na superação de obstáculos sem apoio dos pés no solo.",
          },
          {
            key: "indoor-cycling",
            title: "Ciclismo Indoor",
            titleEn: "Indoor Cycling",
            description:
              "Área competitiva em recinto fechado, incluindo variantes técnicas como ciclismo artístico e cycle-ball.",
          },
          {
            key: "gravel",
            title: "Gravel",
            titleEn: "Gravel",
            description:
              "Provas em percursos mistos, normalmente com estradas de terra, gravilha e segmentos de resistência.",
          },
          {
            key: "cycling-esports",
            title: "Cycling Esports",
            titleEn: "Cycling Esports",
            description:
              "Competições virtuais em plataformas digitais, com esforço físico real e ambiente competitivo online.",
          },
          {
            key: "para-cycling",
            title: "Paraciclismo",
            titleEn: "Para Cycling",
            description:
              "Vertente adaptada do ciclismo competitivo, com categorias próprias em estrada e pista.",
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

  relatedAreas: {
    heading: "Projetos associados ao ciclismo",
    description:
      "Continuidade operacional entre academia, eventos, projetos técnicos e soluções de performance ligadas ao ciclismo.",

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
            title: "Academia",
            meta: "Desenvolvimento",
            description:
              "Programas estruturados de desenvolvimento técnico, preparação e progressão por contexto competitivo.",
            links: [
              {
                label: "Ver academias",
                href: SPORTS_PAGE_PATHS.academies,
                ariaLabel: "Ver academias Sunlive Sports",
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
              "Experiências, competições, contextos de treino e formatos de performance associados à operação Sunlive Sports.",
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
              "Testes de aerodinâmica de nível avançado com túnel de vento e análise de dados, orientados para otimização da performance.",
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
            shortTitle: "TFP",
            meta: "High Performance",
            description:
              "Campos de treino de alto rendimento com base científica, incluindo estrada, pista, ginásio e conteúdos técnicos complementares.",
            bookKey: "trainingFromPro",
            bookLabel: "Abrir Book",
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
      "Estágios, academia, velódromo, programas de treino, instalações, infraestruturas e projetos especializados ligados ao ciclismo.",
    iconKey: "bike",
    bookKey: "cycling",
    bookLabel: "Abrir Book",
    websiteHref: "https://cycling.sunlive.pt/",
    websiteLabel: "Ver mais",
    instagramHref: "https://www.instagram.com/sunlivecycling/",
  },
};

export default cyclingSection;
