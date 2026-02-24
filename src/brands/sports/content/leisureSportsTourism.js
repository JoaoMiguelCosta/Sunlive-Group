// src/brands/sports/content/leisureSportsTourism.js

const leisureSportsTourism = {
  id: "leisure-sports-tourism",

  /* 1) Headline */
  hero: {
    title: "Turismo Desportivo Lúdico",
    description:
      "Onde o Desporto encontra a alma de Portugal. Encontramos soluções de excelência e respostas às necessidades de treino, com experiências autênticas que nutrem o corpo, a mente e o espírito dos nossos atletas.",
  },

  /* 2) Bloco texto + imagem */
  overview: {
    id: "leisure-sports-tourism-overview",
    layout: "text-left",
    eyebrow: "Mais do que Treino,",
    title: "Uma Jornada de Descoberta.",
    paragraphs: [
      "Acreditamos que os grandes atletas não se formam apenas nos campos e ginásios. Formam-se também nos momentos de contemplação junto ao mar, na partilha de uma refeição tradicional, na descoberta de uma tradição milenar ou no silêncio inspirador de uma floresta centenária.",
      "O nosso turismo desportivo é uma filosofia que reconhece que a performance máxima nasce do equilíbrio entre esforço e descanso, entre foco e descoberta, entre disciplina e prazer. Portugal oferece-nos o cenário perfeito para esta alquimia única.",
    ],
    image: {
      src: null,
      alt: "Atletas a viver experiências de turismo desportivo em Portugal.",
    },
  },

  /* 2.x) Headlines intermédios (3 blocos seguidos) */
  experiencesIntro: {
    id: "leisure-sports-tourism-experiences-intro",
    title: "Experiências Inesquecíveis",
    lead: "Uma seleção cuidadosa de atividades que despertam os sentidos, renovam energias e criam memórias que durarão para toda a vida.",
  },

  /* 2.x.a) Grelha de experiências (4 cartões) */
  leisureExperiences: {
    id: "leisure-sports-tourism-experiences-grid",
    items: [
      {
        key: "water-sports",
        title: "Desportos Aquáticos",
        description:
          "Ondas perfeitas no litoral. Desde a Praia da Barra à Costa Nova e Vagueira — ideais para todos os níveis.",
        experiences: [
          "Aulas de surf",
          "Bodyboard",
          "Canoagem costeira",
          "Stand-Up Paddle",
        ],
        image: {
          src: null,
          alt: "Desportos aquáticos na costa de Aveiro.",
        },
      },
      {
        key: "trails-hiking",
        title: "Trilhos e Caminhadas",
        description:
          "Descoberta da natureza exuberante da Serra do Caramulo e Buçaco.",
        experiences: [
          "Ecopista do Dão",
          "Rota dos Vinhos da Bairrada",
          "Trilhos da Serra da Lousã",
          "Ciclovias junto ao mar",
        ],
        image: {
          src: null,
          alt: "Trilhos pedestres e caminhadas na natureza.",
        },
      },
      {
        key: "cycle-tourism",
        title: "Cicloturismo",
        description:
          "Percursos únicos entre vinhas, florestas e aldeias tradicionais.",
        experiences: [
          "Trilho das Fragas de São Simão",
          "Mata Nacional do Buçaco",
          "Miradouros da Serra do Caramulo",
          "Caminho de Santiago português",
        ],
        image: {
          src: null,
          alt: "Cicloturismo em paisagens naturais e rurais.",
        },
      },
      {
        key: "padel",
        title: "Padel",
        description:
          "Modalidade em crescimento, com campos modernos e um ambiente social dinâmico e competitivo.",
        experiences: [
          "Sessões técnicas com treinadores",
          "Torneios internos e jogos entre grupos",
          "Campos indoor e outdoor de última geração",
          "Aulas para iniciantes e atletas experientes",
        ],
        image: {
          src: null,
          alt: "Jogo de padel em ambiente competitivo.",
        },
      },
    ],
  },

  destinationsIntro: {
    id: "leisure-sports-tourism-destinations-intro",
    title: "Destinos que Encantam",
    lead: "O centro de Portugal revela-se como um tesouro de paisagens, sabores e tradições que conquistam atletas de todo o mundo, criando ligações profundas e duradouras.",
  },

  /* 2.x.b) Grelha de destinos (5 cartões) */
  leisureDestinations: {
    id: "leisure-sports-tourism-destinations-grid",
    items: [
      {
        key: "aveiro",
        title: "Aveiro",
        description:
          'Conhecida como a "Veneza de Portugal", combina tradição, canais encantadores e uma identidade cultural única.',
        highlights: [
          "Passeios de moliceiro pelos canais",
          "Arquitetura Arte Nova e fachadas coloridas",
          "Doces regionais como os ovos moles",
          "Tradições ligadas à ria e salinas históricas",
        ],
        image: {
          src: null,
          alt: "Canais e moliceiros na cidade de Aveiro.",
        },
      },
      {
        key: "coimbra",
        title: "Coimbra",
        description:
          "Cidade universitária milenar, berço da cultura e conhecimento.",
        highlights: [
          "Universidade mais antiga de Portugal",
          "Biblioteca Joanina deslumbrante",
          "Fado de Coimbra autêntico",
          "Mosteiro de Santa Clara-a-Velha",
        ],
        image: {
          src: null,
          alt: "Vista sobre a cidade universitária de Coimbra.",
        },
      },
      {
        key: "serras",
        title: "Serras",
        description:
          "Montanhas majestosas, ar puro e vistas panorâmicas deslumbrantes.",
        highlights: [
          "Miradouros com vistas até ao mar",
          "Trilhos entre florestas centenárias",
          "Ar puro das montanhas",
          "Museu do Automóvel único (Serra do Caramulo)",
        ],
        image: {
          src: null,
          alt: "Paisagens de serra com vistas panorâmicas.",
        },
      },
      {
        key: "praias",
        title: "Praias",
        description:
          "Destino ideal para quem procura sol, mar e natureza, com paisagens únicas e experiências costeiras autênticas.",
        highlights: [
          "Ícones fotogénicos e cheios de história",
          "Ideal para surf, banhos de sol e caminhadas",
          "Gastronomia local com sabor a mar",
          "Falésias, dunas e paisagens imperdíveis",
        ],
        image: {
          src: null,
          alt: "Praias de areia dourada e mar azul.",
        },
      },
      {
        key: "bairrada",
        title: "Região da Bairrada",
        description:
          "Terra de vinhos espumantes, gastronomia rica e paisagens verdejantes.",
        highlights: [
          "Caves históricas com séculos de tradição",
          "Leitão da Bairrada mundialmente famoso",
          "Paisagens de vinhas ondulantes",
          "Aldeias pitorescas preservadas",
        ],
        image: {
          src: null,
          alt: "Vinhas e paisagens da região da Bairrada.",
        },
      },
    ],
  },

  benefitsIntro: {
    id: "leisure-sports-tourism-benefits-intro",
    title: "Benefícios para os Atletas",
    lead: "Cada experiência é cuidadosamente desenhada para complementar o treino intensivo, proporcionando benefícios tangíveis para a performance e bem-estar dos atletas.",
    items: [
      {
        key: "heart",
        iconKey: "heart",
        title: "Recuperação Ativa",
        description:
          "Atividades de baixo impacto que promovem a recuperação muscular e mental.",
      },
      {
        key: "smile",
        iconKey: "smile",
        title: "Equilíbrio Mental",
        description:
          "Momentos de desconexão que renovam a motivação e perspetiva.",
      },
      {
        key: "star",
        iconKey: "star",
        title: "Enriquecimento Cultural",
        description:
          "Aprendizagem e crescimento pessoal através de novas experiências.",
      },
      {
        key: "users",
        iconKey: "users",
        title: "Team Building Natural",
        description:
          "Experiências partilhadas que fortalecem os laços entre companheiros de equipa.",
      },
    ],
  },

  /* 3) Pilares — União / Bem-estar / Enriquecimento Global */
  pillars: {
    items: [
      {
        key: "union",
        label: "União",
        iconKey: "users",
      },
      {
        key: "wellbeing",
        label: "Bem Estar",
        iconKey: "heart",
      },
      {
        key: "globe",
        label: "Enriquecimento Global",
        iconKey: "globe",
      },
    ],
  },

  /* 4) Painel de fecho / transição para Modalidades */
  closingPanel: {
    id: "leisure-sports-tourism-closing-panel",
    chipLabel: "Próximo Passo",
    title:
      "Do lazer à prática: descobre como o desporto encontra o lazer no Turismo Desportivo.",
    bodyLines: ["Do lazer à prática.", "Entra no universo das Modalidades."],
    accentWords: ["lazer", "prática", "Modalidades"],
    primaryCta: {
      label: "Contactar",
      href: "/sunlive-group/sports/contacts",
      ariaLabel: "Contactar a Sunlive Sports sobre Turismo Desportivo Lúdico",
      icon: "phone",
    },
    backCta: {
      label: "Voltar para Educação",
      href: "/sunlive-group/sports/education",
      ariaLabel: "Voltar para a página de Educação da Sunlive Sports",
    },
    secondaryCta: {
      label: "Seguir para Modalidades",
      href: "/sunlive-group/sports/sports-disciplines",
      ariaLabel: "Seguir para a página de Modalidades da Sunlive Sports",
    },
  },
};

export default leisureSportsTourism;
