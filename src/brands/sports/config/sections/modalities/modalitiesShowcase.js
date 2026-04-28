const modalitiesShowcase = {
  id: "detalhe-modalidades",
  intro: {
    eyebrow: "Modalidades",
    title: "Disciplinas, projetos e academias",
    lead: "Cada modalidade combina disciplinas específicas, projetos próprios e ligações ao ecossistema Sunlive Sports, criando uma base mais sólida para treino, progressão e desenvolvimento.",
  },
  ui: {
    ariaLabel: "Detalhe das modalidades da Sunlive Sports",
    navigationAriaLabel: "Navegação entre modalidades",
    disciplinesLabel: "Disciplinas",
    projectsLabel: "Projetos",
    highlightLabel: "Destaque",
  },
  items: [
    {
      key: "cycling",
      id: "modalidade-ciclismo",
      title: "Ciclismo",
      iconKey: "bike",
      lead: "Modalidade de referência da Sunlive, com infraestruturas de excelência, programas especializados e organização regular de eventos nacionais e internacionais.",
      disciplines: {
        id: "disciplinas-ciclismo",
        heading: "Disciplinas",
        headingIconKey: "workflow",
        items: [
          {
            key: "road",
            title: "Estrada",
            description:
              "Provas realizadas em estradas e circuitos pavimentados, incluindo contrarrelógios, criteriums e granfondos.",
          },
          {
            key: "mtb",
            title: "BTT (Mountain Bike)",
            description:
              "Modalidades fora de estrada, como cross-country (XCO), maratona (XCM), downhill, enduro, entre outras.",
          },
          {
            key: "bmx",
            title: "BMX",
            description:
              "Corridas em pistas curtas com obstáculos e modalidades freestyle, focadas em manobras e estilo.",
          },
          {
            key: "track",
            title: "Pista",
            description:
              "Competições em velódromos, com diversas disciplinas como contrarrelógio, scratch, perseguição individual e por equipas.",
          },
          {
            key: "trial",
            title: "Trial Bike",
            description:
              "Modalidade que exige alta habilidade técnica para superar obstáculos sem tocar o chão com os pés.",
          },
        ],
      },
      projects: {
        id: "projetos-ciclismo",
        heading: "Projetos",
        headingIconKey: "chart",
        items: [
          {
            key: "cycling-academy",
            type: "academy-card",
            academyKey: "cycling-academy",
          },
          {
            key: "aero-edge",
            type: "project-card",
            iconKey: "chart-frame",
            title: "Aero Edge",
            description:
              "Testes de aerodinâmica de nível avançado com túnel de vento e análise de dados. Programas especializados como “Hour Record” e “Outdoor Aero Testing” para otimização da performance.",
            bookKey: "aeroEdge",
            bookLabel: "Abrir Book",
          },
          {
            key: "training-from-pro",
            type: "project-card",
            iconKey: "athlete",
            title: "Training From Pro (TFP)",
            description:
              "Campos de treino de alto rendimento com base científica, incluindo treinos em estrada, pista e ginásio, além de palestras sobre nutrição, biomecânica e sono.",
            bookKey: "trainingFromPro",
            bookLabel: "Abrir Book",
          },
        ],
      },
      highlight: {
        id: "destaque-ciclismo",
        title: "Explore o Universo Ciclismo Sunlive",
        description:
          "O universo do ciclismo na Sunlive — estágios, velódromo, programas de treino, instalações, infraestruturas e muito mais.",
        instagramHref: "https://www.instagram.com/sunlivecycling/",
        bookKey: "cycling",
        bookLabel: "Abrir Book",
        iconKey: "bike",
      },
    },
    {
      key: "gymnastics",
      id: "modalidade-ginastica",
      title: "Ginástica",
      iconKey: "medal",
      lead: "Programas dedicados à Ginástica com foco na evolução técnica, formação integral e acesso a infraestruturas especializadas para treino e desenvolvimento desportivo.",
      disciplines: {
        id: "disciplinas-ginastica",
        heading: "Disciplinas",
        headingIconKey: "workflow",
        items: [
          {
            key: "artistic-men",
            title: "Ginástica Artística Masculina",
            description:
              "Inclui provas em solo, cavalo com arções, argolas, paralelas e barra fixa, destacando força e precisão.",
          },
          {
            key: "artistic-women",
            title: "Ginástica Artística Feminina",
            description:
              "Provas em aparelhos como solo, salto, trave e paralelas assimétricas, com foco em força e elegância.",
          },
          {
            key: "rhythmic",
            title: "Ginástica Rítmica",
            description:
              "Coreografias com corda, arco, bola, maças e fita, unindo música, dança e expressividade.",
          },
          {
            key: "acrobatic",
            title: "Ginástica Acrobática",
            description:
              "Exercícios em pares ou grupos com equilíbrio, força e movimentos sincronizados.",
          },
          {
            key: "aerobic",
            title: "Ginástica Aeróbica",
            description:
              "Rotinas dinâmicas de alta intensidade com coreografias, música e exigência física.",
          },
          {
            key: "trampolines",
            title: "Trampolins",
            description:
              "Saltos acrobáticos em trampolim, duplo mini-trampolim e trampolim sincronizado.",
          },
          {
            key: "parkour",
            title: "Parkour",
            description:
              "Centrado em ultrapassar obstáculos com fluidez, força e agilidade em ambientes urbanos ou naturais.",
          },
          {
            key: "gym-for-all",
            title: "Ginástica para Todos",
            description:
              "Atividade inclusiva, com foco na participação, bem-estar e expressão corporal, sem vertente competitiva.",
          },
          {
            key: "teamgym",
            title: "TeamGym",
            description:
              "Modalidade em equipa com exercícios de solo, mini-trampolim e tumbling, promovendo espírito coletivo e técnica.",
          },
        ],
      },
      projects: {
        id: "projetos-ginastica",
        heading: "Projetos",
        headingIconKey: "chart",
        items: [],
      },
    },
    {
      key: "basketball",
      id: "modalidade-basquetebol",
      title: "Basquetebol",
      iconKey: "goal",
      lead: "Programas da Academia Basquetebol Sunlive para a evolução técnica e competitiva. Ideal para jovens atletas em fase de crescimento desportivo.",
      projects: {
        id: "projetos-basquetebol",
        heading: "Projetos",
        headingIconKey: "chart",
        items: [
          {
            key: "basket-academy",
            type: "academy-card",
            academyKey: "basket-academy",
          },
        ],
      },
    },
    {
      key: "football",
      id: "modalidade-futebol",
      title: "Futebol",
      iconKey: "athlete",
      lead: "Programas de futebol orientados para desenvolvimento técnico, acompanhamento multidisciplinar e articulação entre treino, competição e percurso académico.",
      projects: {
        id: "projetos-futebol",
        heading: "Projetos",
        headingIconKey: "chart",
        items: [
          {
            key: "pro-football-academy",
            type: "academy-card",
            academyKey: "pro-football-academy",
          },
        ],
      },
    },
    {
      key: "karate",
      id: "modalidade-karate",
      title: "Karaté",
      iconKey: "biceps",
      lead: "Formação contínua através da Sunlive Karate Academy (SKA), com treinos técnicos e valorização de princípios como disciplina, respeito e superação. Ambiente ideal para o crescimento desportivo e pessoal.",
      projects: {
        id: "projetos-karate",
        heading: "Projetos",
        headingIconKey: "chart",
        items: [
          {
            key: "karate-academy",
            type: "academy-card",
            academyKey: "karate-academy",
          },
        ],
      },
    },
  ],
};

export default modalitiesShowcase;
