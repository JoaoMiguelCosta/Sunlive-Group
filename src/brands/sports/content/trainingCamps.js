// src/brands/sports/content/trainingCamps.js

const trainingCamps = {
  id: "training-camps",

  /* 1) Headline */
  hero: {
    title: "Training Camps",
    description:
      "Estágios desportivos de excelência que combinam rigor profissional com espírito familiar, proporcionando experiências inesquecíveis a atletas e equipas de todo o mundo.",
  },

  /* 2) Bloco texto + imagem */
  overview: {
    id: "solutions",
    layout: "text-left",
    eyebrow: "Soluções",
    title: "Training Camps",
    paragraphs: [
      "Programas intensivos de treino e desenvolvimento desportivo que decorrem em infraestruturas de elite, com apoio técnico especializado e uma atmosfera única que combina profissionalismo com camaradagem.",
      "Destinam-se a atletas individuais, equipas, clubes e federações que procuram elevar o seu nível de performance através de experiências imersivas e metodologias comprovadas.",
    ],
    image: {
      src: null,
      alt: "Atletas em treino num campo desportivo.",
    },
  },

  /* 3) Pilares */
  pillars: {
    items: [
      {
        key: "community",
        label: "Comunidade",
        iconKey: "users",
      },
      {
        key: "culture",
        label: "Imersão Cultura Única",
        iconKey: "handshake",
      },
      {
        key: "personal-development",
        label: "Desenvolvimento Pessoal",
        iconKey: "brain",
      },
    ],
  },

  /* 4) Programas */
  programs: [
    {
      key: "sports-camps",
      imageSide: "right",
      iconKey: "trophy",
      title: "Estágios Desportivos",
      description:
        "Programas personalizados para equipas profissionais e semi-profissionais que procuram excelência, com foco em performance, recuperação e preparação estratégica.",
      idealForTitle: "Ideal para:",
      idealFor:
        "Clubes de alto rendimento, seleções e equipas técnicas que exigem um ambiente controlado, infraestrutura de topo e suporte técnico de nível internacional.",
      activitiesTitle: "Atividades-chave:",
      activities: [
        "Staff Técnico Especializado – presença de treinadores, preparadores físicos, fisioterapeutas e analistas com experiência em desporto de elite.",
        "Análise de Performance – avaliação detalhada de dados físicos, técnicos e táticos para maximizar a eficiência individual e coletiva.",
        "Recuperação Avançada – acesso a sauna, piscina, protocolos de crioterapia, fisioterapia e programas de reabilitação personalizados.",
        "Logística Completa – transporte, alojamento, alimentação, equipamentos e assistência total durante toda a estadia.",
      ],
      image: {
        src: null,
        alt: "Equipas em estágio desportivo Sunlive Sports.",
      },
    },
    {
      key: "pre-season-camps",
      imageSide: "left",
      iconKey: "runner",
      title: "Estágios de Pré-Época",
      description:
        "Preparação intensiva para o arranque competitivo da temporada, com foco em desempenho físico, entrosamento coletivo e afinação tática.",
      idealForTitle: "Ideal para:",
      idealFor:
        "Clubes, equipas técnicas e atletas que procuram um ambiente estruturado para acelerar a sua performance e alinhar objetivos desportivos.",
      activitiesTitle: "Atividades-chave:",
      activities: [
        "Preparação Física Intensiva – treinos de resistência, força, agilidade e recuperação ativa, com foco na condição atlética ideal.",
        "Trabalho Tático – sessões específicas para sistemas de jogo, posicionamentos, transições e estratégias de equipa.",
        "Jogos-Treino – simulações competitivas para aplicação prática dos conceitos e avaliação em tempo real.",
        "Análise de Vídeo – feedback técnico individual e coletivo com apoio audiovisual e orientação especializada.",
      ],
      image: {
        src: null,
        alt: "Treino de pré-época em contexto de estágio.",
      },
    },
    {
      key: "summer-camps",
      imageSide: "right",
      iconKey: "sun",
      title: "Campos de Verão",
      description:
        "Programas completos que combinam treino desportivo de alta qualidade com experiências culturais e de lazer inesquecíveis.",
      idealForTitle: "Ideal para:",
      idealFor:
        "Jovens atletas, clubes de formação e famílias que procuram uma experiência enriquecedora durante as férias, unindo desporto, convivência e diversão.",
      activitiesTitle: "Atividades-chave:",
      activities: [
        "Treino Diário Especializado – sessões orientadas por técnicos experientes, com foco em desenvolvimento técnico, físico e tático.",
        "Atividades Culturais – visitas guiadas, experiências gastronómicas e eventos temáticos que promovem a descoberta da cultura portuguesa.",
        "Torneios Internos – jogos amigáveis e desafios entre participantes, incentivando o espírito competitivo e o trabalho em equipa.",
        "Certificados de Participação – entrega de diploma oficial ao final do programa, reconhecendo o esforço e o progresso dos atletas.",
      ],
      image: {
        src: null,
        alt: "Campo de verão com jovens atletas em atividade.",
      },
    },
    {
      key: "exchange-programs",
      imageSide: "left",
      iconKey: "globe",
      title: "Intercâmbios",
      description:
        "Experiências internacionais imersivas que combinam desporto, cultura e formação, com integração total em clubes portugueses.",
      idealForTitle: "Ideal para:",
      idealFor:
        "Jovens talentos estrangeiros que pretendem viver uma experiência transformadora em Portugal, unindo treino desportivo de qualidade com desenvolvimento pessoal e cultural.",
      activitiesTitle: "Atividades-chave:",
      activities: [
        "Integração em Clubes Locais – participação em treinos regulares com equipas portuguesas.",
        "Mentoria com Atletas Locais – trocas inspiradoras com atletas portugueses.",
        "Imersão Linguística e Cultural – aulas básicas de português e experiências culturais.",
        "Desafios Interculturais – dinâmicas em grupo que promovem a colaboração entre atletas de diferentes origens.",
      ],
      image: {
        src: null,
        alt: "Atletas internacionais em intercâmbio desportivo em Portugal.",
      },
    },
  ],

  /* 5) Painel de fecho / transição para Academias */
  closingPanel: {
    id: "training-camps-closing-panel",
    chipLabel: "Próximo passo",
    title:
      "Fala connosco sobre criar ou integrar um Training Camp personalizado.",
    bodyLines: [
      "Aqui começa o caminho, onde o treino molda atitude e resiliência.",
      "Agora, é tempo de conhecer onde o talento cresce: as nossas Academias.",
    ],
    accentWords: ["Academias", "atitude", "resiliência", "caminho"],
    primaryCta: {
      label: "Contactar",
      href: "/sunlive-group/sports/contacts",
      ariaLabel: "Contactar Sunlive Sports sobre Training Camps",
      icon: "phone",
    },
    secondaryCta: {
      label: "Seguir para Academias",
      href: "/sunlive-group/sports/academies",
      ariaLabel: "Seguir para a página de Academias da Sunlive Sports",
    },
  },
};

export default trainingCamps;
