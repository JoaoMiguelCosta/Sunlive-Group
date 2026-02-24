// src/brands/sports/content/specialisedServices.js

const specialisedServices = {
  id: "specialised-services",

  /* 1) Headline */
  hero: {
    title: "Serviços Especializados",
    description:
      "Criamos uma rede completa de profissionais especializados ao serviço da excelência desportiva. Oferecemos apoio integral para otimizar a performance, acelerar a recuperação e garantir o bem-estar de cada atleta.",
  },

  /* 2) Bloco texto + imagem */
  overview: {
    id: "specialised-services-overview",
    layout: "text-left",
    eyebrow: "O que faz a",
    title: "Diferença no Alto Rendimento.",
    paragraphs: [
      "Os nossos serviços especializados representam o apoio científico e técnico que permite aos atletas alcançar o seu máximo potencial, mantendo-se saudáveis e motivados ao longo de toda a sua carreira.",
      "Cada serviço é prestado por profissionais altamente qualificados, com credenciais internacionais e experiência comprovada no trabalho com atletas de elite. Esta abordagem multidisciplinar garante que todos os aspetos da performance são otimizados de forma integrada e harmoniosa.",
    ],
    image: {
      src: null,
      alt: "Equipa técnica a apoiar atletas em contexto de alto rendimento.",
    },
  },

  /* 2.1) Headline intermédio — Áreas de Especialização */
  areasIntro: {
    id: "specialised-services-areas-intro",
    title: "Áreas de Especialização",
    lead: "Cobrimos todas as dimensões do apoio ao atleta, desde a preparação física até ao suporte psicológico, passando pela análise técnica e cuidados médicos especializados.",
  },

  /* 3) Pilares — Prevenção / Performance / Recuperação */
  pillars: {
    items: [
      { key: "prevention", label: "Prevenção", iconKey: "prevention" },
      { key: "monitor", label: "Performance", iconKey: "monitor" },
      { key: "recycle", label: "Recuperação Acelerada", iconKey: "recycle" },
    ],
  },

  /* 3.1) Serviços Especializados — cards principais */
  serviceCards: [
    {
      key: "apple",
      iconKey: "apple",
      title: "Nutrição Desportiva",
      badge: "Nutricionistas desportivos",
      description:
        "Planos alimentares científicos para otimizar performance, recuperação e composição corporal.",
      listTitle: "Serviços incluídos:",
      items: [
        "Avaliação nutricional completa",
        "Planos alimentares personalizados",
        "Suplementação orientada",
        "Hidratação estratégica",
        "Nutrição pré e pós-treino",
        "Controlo de peso corporal",
      ],
    },
    {
      key: "video",
      iconKey: "video",
      title: "Análise de Vídeo",
      badge: "Analistas técnicos especializados",
      description:
        "Tecnologia avançada para análise técnica e tática detalhada, proporcionando feedback objetivo e preciso.",
      listTitle: "Serviços incluídos:",
      items: [
        "Análise técnica individual",
        "Análise tática coletiva",
        "Comparação de performance",
        "Relatórios detalhados",
        "Feedback visual imediato",
        "Arquivo de dados históricos",
      ],
    },
    {
      key: "physical",
      iconKey: "physical",
      title: "Fisioterapia Desportiva",
      badge: "Fisioterapeutas certificados",
      description:
        "Prevenção, tratamento e recuperação de lesões com técnicas avançadas e equipamento de última geração.",
      listTitle: "Serviços incluídos:",
      items: [
        "Prevenção de lesões",
        "Eletroterapia avançada",
        "Terapia manual especializada",
        "Reabilitação funcional",
        "Hidroterapia e crioterapia",
        "Massagem desportiva",
      ],
    },
    {
      key: "search",
      iconKey: "search",
      title: "Scouting e Observação",
      badge: "Scouts e observadores certificados",
      description:
        "Identificação e avaliação de talentos através de metodologias científicas e observação especializada.",
      listTitle: "Serviços incluídos:",
      items: [
        "Identificação de talentos",
        "Avaliação técnica detalhada",
        "Relatórios de observação",
        "Análise de adversários",
        "Base de dados de atletas",
        "Recomendações estratégicas",
      ],
    },
    {
      key: "brain",
      iconKey: "brain",
      title: "Psicologia Desportiva",
      badge: "Psicólogos desportivos certificados",
      description:
        "Desenvolvimento da mentalidade vencedora e gestão de pressão competitiva através de técnicas comprovadas.",
      listTitle: "Serviços incluídos:",
      items: [
        "Gestão de ansiedade competitiva",
        "Técnicas de concentração",
        "Motivação e autoconfiança",
        "Trabalho em equipa",
        "Gestão de stress",
        "Visualização mental",
      ],
    },
    {
      key: "bicipe",
      iconKey: "bicipe",
      title: "Preparação Física",
      badge: "Preparadores Físicos Especializados",
      description:
        "Programas personalizados de condicionamento físico adaptados às necessidades específicas de cada modalidade.",
      listTitle: "Serviços incluídos:",
      items: [
        "Avaliação física completa",
        "Treino de força e potência",
        "Condicionamento cardiovascular",
        "Flexibilidade e mobilidade",
        "Prevenção de lesões",
        "Periodização do treino",
      ],
    },
    {
      key: "chart",
      iconKey: "chart",
      title: "Consultoria Especializada",
      badge: "Consultores em Estratégia Desportiva",
      description:
        "Planos personalizados de desenvolvimento estratégico para organizações, projetos e estruturas desportivas.",
      listTitle: "Serviços incluídos:",
      items: [
        "Diagnóstico estratégico e operacional",
        "Planeamento de projetos desportivos",
        "Apoio técnico a clubes, federações e entidades públicas",
        "Criação de modelos de gestão eficientes",
        "Acompanhamento de implementação e avaliação",
      ],
    },
  ],

  /* 4) Painel de fecho / transição para Educação */
  closingPanel: {
    id: "specialised-services-closing-panel",
    chipLabel: "Próximo passo",
    title:
      "Queres potenciar a tua performance com apoio especializado? Estamos aqui para te acompanhar.",
    bodyLines: [
      "Conhecimento também faz parte do treino.",
      "Entra no universo da Educação.",
    ],
    accentWords: ["Educação", "Conhecimento", "treino"],
    primaryCta: {
      label: "Contactar",
      href: "/sunlive-group/sports/contacts",
      ariaLabel: "Contactar Sunlive Sports sobre Serviços Especializados",
      icon: "phone",
    },
    secondaryCta: {
      label: "Seguir para Educação",
      href: "/sunlive-group/sports/education",
      ariaLabel: "Seguir para a página de Educação da Sunlive Sports",
    },
    backCta: {
      label: "Voltar para Atletas Sunlive",
      href: "/sunlive-group/sports/sunlive-athletes",
      ariaLabel: "Voltar para a página de Atletas Sunlive da Sunlive Sports",
    },
  },
};

export default specialisedServices;
