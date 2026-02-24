// src/brands/sports/content/infrastructures.js

const infrastructures = {
  id: "infrastructures",

  /* 1) Headline */
  hero: {
    title: "Infraestruturas",
    description:
      "Acesso exclusivo às melhores instalações desportivas do centro de Portugal. Infraestruturas de padrão internacional que elevam a performance e proporcionam experiências inesquecíveis a atletas de todo o mundo.",
  },

  /* 2) Bloco texto + imagem */
  overview: {
    id: "infrastructures-overview",
    layout: "text-left",
    eyebrow: "A base do",
    title: "Alto Rendimento.",
    paragraphs: [
      "Na Sunlive, oferecemos acesso privilegiado a um conjunto único de instalações de classe mundial, estrategicamente localizadas na região de Anadia e Sangalhos, no coração de Portugal. Estas infraestruturas elevam a performance e criam experiências memoráveis para atletas, equipas e espetadores.",
      "Cada instalação foi cuidadosamente selecionada e desenvolvida para responder aos mais altos padrões internacionais, proporcionando aos nossos atletas e equipas as condições ideais para treinar, competir e recuperar ao mais alto nível.",
    ],
    image: {
      src: null,
      alt: "Infraestruturas desportivas de alto rendimento da Sunlive Sports.",
    },
  },

  /* 3) Pilares — Localização / Disponibilidade / Capacidade */
  pillars: {
    items: [
      {
        key: "strategic-location",
        label: "Localização Estratégica",
        iconKey: "pin",
      },
      {
        key: "phone",
        label: "Disponibilidade 24/7",
        iconKey: "phone",
      },
      {
        key: "large-groups-capacity",
        label: "Capacidade Grandes Grupos",
        iconKey: "users",
      },
    ],
  },

  /* 4) Grelha de infraestruturas (9 cards) */
  facilitiesGrid: {
    id: "infrastructures-facilities",
    cards: [
      {
        key: "velodrome",
        title: "Velódromo Nacional",
        description:
          "Pista coberta de ciclismo de 250m, única em Portugal, com padrões olímpicos internacionais.",
        highlight: "Capacidade para acolher 1000 pessoas",
        image: null,
        features: [
          "Pista de madeira Siberian Pine de 250m.",
          "Sistema de cronometragem eletrónica.",
          "Inclinação máxima de 42 graus.",
          "Inclinação mínima das retas: 11,8º.",
        ],
      },
      {
        key: "bmx-track",
        title: "Pista Olímpica de BMX",
        description:
          "Instalação homologada com design competitivo de alto nível, preparada para receber provas internacionais e estágios de elite.",
        highlight: "Única pista BMX olímpica da Península Ibérica",
        image: null,
        features: [
          "Circuito com obstáculos técnicos e zonas de sprint.",
          "Curvas inclinadas e saltos desenhados para treino de técnica.",
          "Área de partida com diferentes níveis de dificuldade.",
          "Infraestrutura preparada para competições oficiais e estágios internacionais.",
        ],
      },
      {
        key: "xco-track",
        title: "Pista XCO Mountain Bike",
        description:
          "Circuito técnico de Cross-Country Olímpico construído segundo os regulamentos da UCI, ideal para treinos de alto rendimento e competições oficiais.",
        highlight: "Traçado olímpico com 3,6 km de extensão",
        image: null,
        features: [
          "Percurso com desnível acumulado e subidas íngremes (>25%).",
          "Obstáculos naturais e artificiais (pedras, raízes, troncos, pontes).",
          "Secções técnicas com curvas apertadas, drops e single tracks.",
          "Utilizada em provas da Taça de Portugal e estágios UCI.",
        ],
      },
      {
        key: "multiuse-pavilion",
        title: "Pavilhão Multiusos – Anadia",
        description:
          "Infraestrutura coberta destinada a treinos indoor, eventos desportivos e competições regionais.",
        highlight:
          "Versatilidade total para modalidades indoor com apoio logístico completo.",
        image: null,
        features: [
          "Bancadas para público e iluminação LED.",
          "Piso polivalente para basquetebol, voleibol, futsal e andebol.",
          "Usado por clubes locais, escolas e eventos federativos.",
          "Apoios técnicos: balneários, zonas de aquecimento e salas técnicas.",
        ],
      },
      {
        key: "training-centres",
        title: "Centro de Estágios – Oliveira do Bairro, Anadia, Aveiro e Luso",
        description:
          "Rede de infraestruturas desportivas ideais para estágios de clubes, seleções e preparação de alto rendimento.",
        highlight: "Espaços ideais para treino, recuperação e apoio técnico.",
        image: null,
        features: [
          "Campos de futebol com relva natural e sintética.",
          "Alojamento próximo e restauração disponível.",
          "Acessos rápidos a cidades, serra e litoral.",
          "Usado para pré-épocas, reabilitação e treinos técnicos.",
        ],
      },
      {
        key: "university-centres",
        title: "Centros Universitários – Aveiro e Coimbra",
        description:
          "Campus académicos com estruturas desportivas e apoio logístico, ideais para programas de formação e prática desportiva.",
        highlight:
          "Ambiente universitário com condições de treino e competição.",
        image: null,
        features: [
          "Pavilhões polivalentes e campos exteriores.",
          "Piscinas, pista de atletismo e zonas de musculação.",
          "Capacidade para receber grupos grandes.",
          "Localização central com bons acessos e serviços.",
        ],
      },
      {
        key: "gyms",
        title: "Ginásios – Sangalhos, Luso e Oliveira do Bairro",
        description:
          "Espaços de treino funcional e musculação integrados em centros desportivos e unidades de alojamento.",
        highlight:
          "Preparação física integrada com apoio à recuperação muscular.",
        image: null,
        features: [
          "Equipamentos de musculação e cardio.",
          "Acessíveis a atletas em estágio e hóspedes.",
          "Áreas de treino funcional e alongamento.",
          "Complemento ideal a treinos técnicos e recuperação.",
        ],
      },
      {
        key: "triathlon-circuit",
        title: "Circuito de Triatlo – Anadia, Luso e Oliveira do Bairro",
        description:
          "Percurso técnico e natural preparado para treino combinado de natação, ciclismo e corrida.",
        highlight:
          "Percursos combinados e naturais para simulação real de provas.",
        image: null,
        features: [
          "Utilizado em estágios de equipas nacionais.",
          "Ambientes variados: estrada, trilho e água.",
          "Áreas seguras e sinalizadas para treino.",
          "Segmentos adaptados para simulação real de prova e recuperação.",
        ],
      },
      {
        key: "golf-course",
        title: "Campo de Golfe – Curia",
        description:
          "Espaço natural e tranquilo dedicado à prática de golfe, ideal para momentos de lazer ativo e treino de foco mental.",
        highlight:
          "Golfe em ambiente termal – ideal para foco, lazer e recuperação ativa.",
        image: null,
        features: [
          "Campo de 9 buracos integrado na estância termal da Curia.",
          "Adequado a iniciantes e jogadores experientes.",
          "Promove concentração, relaxamento e convívio.",
          "Complementar a programas de reabilitação e team building.",
        ],
      },
    ],
  },

  /* 5) Painel de fecho / transição para Logística */
  closingPanel: {
    id: "infrastructures-closing-panel",
    chipLabel: "Próximo passo",
    title:
      "Queres saber mais sobre as nossas infraestruturas, localizações e condições? A nossa equipa está disponível para esclarecer.",
    bodyLines: [
      "Com as Infraestruturas no lugar, é hora de pôr tudo em movimento.",
      "Descobre a Logística que conecta cada elemento com propósito.",
    ],
    accentWords: ["Infraestruturas", "Logística"],
    primaryCta: {
      label: "Contactar",
      href: "/sunlive-group/sports/contacts",
      ariaLabel: "Contactar Sunlive Sports sobre as Infraestruturas",
      icon: "phone",
    },
    secondaryCta: {
      label: "Seguir para Logística",
      href: "/sunlive-group/sports/logistics",
      ariaLabel: "Seguir para a página de Logística da Sunlive Sports",
    },
    backCta: {
      label: "Voltar para Modalidades",
      href: "/sunlive-group/sports/sports-disciplines",
      ariaLabel: "Voltar para a página de Modalidades da Sunlive Sports",
    },
  },
};

export default infrastructures;
