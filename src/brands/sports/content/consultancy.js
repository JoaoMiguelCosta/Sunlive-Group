// src/brands/sports/content/consultancy.js

const consultancy = {
  id: "consultancy",

  /* 1) Headline */
  hero: {
    title: "Consultoria",
    description:
      "Transformamos desafios desportivos em oportunidades de crescimento. Com mais de 15 anos de experiência prática, oferecemos consultoria estratégica que gera resultados reais e sustentáveis.",
  },

  /* 2) Bloco texto + imagem */
  overview: {
    id: "consultancy-overview",
    layout: "text-left",
    eyebrow: "Consultoria que",
    title: "Faz a Diferença.",
    paragraphs: [
      "A consultoria Sunlive nasce da nossa experiência prática no terreno.",
      "Não somos apenas consultores teóricos — somos profissionais que vivem o desporto diariamente, organizando eventos, gerindo academias e desenvolvendo atletas de alto rendimento.",
      "Esta experiência real permite-nos oferecer soluções práticas e implementáveis para clubes, federações, municípios e organizações que procuram crescer, modernizar-se ou resolver desafios complexos no mundo do desporto e turismo ativo.",
    ],
    image: {
      src: null,
      alt: "Reunião de consultoria estratégica Sunlive Sports com parceiros do desporto.",
    },
  },

  /* 2.x) Headline intermédio — Áreas de Consultoria */
  areasIntro: {
    id: "consultancy-areas-intro",
    title: "Áreas de Consultoria",
    lead: "Cobrimos todas as dimensões da gestão desportiva moderna, desde a estratégia organizacional até à implementação operacional, sempre com foco em resultados mensuráveis.",
  },

  /* 3) Áreas de Consultoria — cards em acordeão (ServiceFeaturePanel) */
  areasPanels: {
    id: "consultancy-areas-panels",
    items: [
      {
        key: "global",
        iconKey: "global",
        title: "Expansão Internacional",
        summary:
          "Estratégias para internacionalização e desenvolvimento de projetos desportivos globais.",
        items: [
          "Análise de mercados internacionais",
          "Estratégias de entrada em novos países",
          "Parcerias estratégicas globais",
          "Adaptação cultural de programas",
          "Gestão de projetos transfronteiriços",
        ],
      },
      {
        key: "luggage",
        iconKey: "luggage",
        title: "Gestão Desportiva",
        summary:
          "Estratégias integradas para otimizar a gestão de clubes, federações e organizações desportivas.",
        items: [
          "Planeamento estratégico organizacional",
          "Estruturação de departamentos técnicos",
          "Sistemas de gestão de performance",
          "Políticas de desenvolvimento de atletas",
          "Modelos de sustentabilidade financeira",
        ],
      },
      {
        key: "trendup",
        iconKey: "trendup",
        title: "Desenvolvimento de Clubes",
        summary:
          "Soluções personalizadas para crescimento sustentável e modernização de estruturas clubísticas.",
        items: [
          "Estratégias de captação de talentos",
          "Reestruturação de modelos de negócio",
          "Expansão para novos mercados",
          "Auditoria organizacional completa",
          "Desenvolvimento de academias juvenis",
        ],
      },
      {
        key: "build2",
        iconKey: "build2",
        title: "Planeamento de Infraestruturas",
        summary:
          "Conceção e desenvolvimento de instalações desportivas modernas e funcionais.",
        items: [
          "Estudos de viabilidade técnica",
          "Desenho funcional de instalações",
          "Planeamento de equipamentos especializados",
          "Sustentabilidade e eficiência energética",
          "Gestão de projetos de construção",
        ],
      },
      {
        key: "goal",
        iconKey: "goal",
        title: "Sistemas de Formação",
        summary:
          "Desenvolvimento de metodologias e programas de formação desportiva de excelência.",
        items: [
          "Metodologias de treino inovadoras",
          "Currículos de formação técnica",
          "Sistemas de avaliação de atletas",
          "Programas de desenvolvimento de treinadores",
          "Protocolos de progressão atlética",
        ],
      },
      {
        key: "medal",
        iconKey: "medal",
        title: "Desenvolvimento de Modalidades",
        summary:
          "Soluções estratégicas para potenciar o crescimento sustentável e competitivo de diferentes modalidades desportivas.",
        items: [
          "Diagnóstico e planeamento de modalidades emergentes",
          "Definição de estruturas técnicas e competitivas",
          "Modelos de desenvolvimento por escalões",
          "Criação de centros de treino especializados",
          "Integração de metodologias de alto rendimento",
        ],
      },
      {
        key: "circus",
        iconKey: "circus",
        title: "Gestão de Eventos",
        summary:
          "Organização e gestão profissional de eventos desportivos com foco em excelência operacional e impacto internacional.",
        items: [
          "Planeamento estratégico de eventos",
          "Gestão logística e técnica integral",
          "Coordenação de stakeholders e parceiros",
          "Estratégias de comunicação e promoção",
          "Avaliação de impacto e relatórios pós-evento",
        ],
      },
      {
        key: "cog",
        iconKey: "cog",
        title: "Logística Operacional",
        summary:
          "Otimização de processos operacionais para eventos, competições e atividades desportivas regulares.",
        items: [
          "Desenho de processos operacionais",
          "Gestão de recursos humanos especializados",
          "Sistemas de logística para eventos",
          "Gestão de fornecedores e parcerias",
          "Protocolos de segurança e emergência",
        ],
      },
    ],
  },

  /* 4) Entidades com quem colaboramos */
  entities: {
    id: "consultancy-entities",
    title: "Entidades com quem colaboramos:",
    items: [
      "Clubes Profissionais e Amadores",
      "Municípios, Autarquias, Escolas e Privados",
      "Organizações de Turismo Ativo",
      "Federações Internacionais, Nacionais e Regionais",
    ],
  },

  /* 5) Pilares — Experiência / Estratégia / Resultados */
  pillars: {
    items: [
      {
        key: "experience",
        label: "Experiência de Campo",
        iconKey: "experience",
      },
      {
        key: "eye",
        label: "Visão Estratégica",
        iconKey: "eye",
      },
      {
        key: "chart",
        label: "Resultados Sustentáveis",
        iconKey: "chart",
      },
    ],
  },

  /* 6) Painel de fecho / fim da jornada Sports */
  closingPanel: {
    id: "consultancy-closing-panel",
    chipLabel: "Próximo passo",
    title:
      "Contacta a nossa equipa para qualquer informação sobre a Sunlive Sports.",
    bodyLines: [
      "Construímos este caminho contigo.",
      "Agora é o momento de transformar planos em ação.",
    ],
    accentWords: ["caminho contigo", "planos", "ação"],
    primaryCta: {
      label: "Contactar",
      href: "/sunlive-group/sports/contacts",
      ariaLabel: "Contactar Sunlive Sports sobre Consultoria",
      icon: "phone",
    },
    backCta: {
      label: "Voltar para Logística",
      href: "/sunlive-group/sports/logistics",
      ariaLabel: "Voltar para a página de Logística da Sunlive Sports",
    },
  },
};

export default consultancy;
