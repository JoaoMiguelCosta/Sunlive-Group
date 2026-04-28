const areas = {
  id: "areas-consultoria",
  intro: {
    eyebrow: "Áreas de atuação",
    title: "Áreas de Consultoria",
    lead: "Cobrimos as principais dimensões da gestão desportiva moderna, desde a estratégia organizacional até à implementação operacional, sempre com foco em decisões claras, execução eficiente e resultados mensuráveis.",
    markers: [
      "Estratégia, operação e desenvolvimento desportivo",
      "Apoio a clubes, federações, municípios e entidades privadas",
      "Intervenção ajustada ao contexto, escala e maturidade do projeto",
    ],
    markersAriaLabel: "Indicadores principais das áreas de consultoria",
  },
  ui: {
    sectionAriaLabel: "Áreas de consultoria da Sunlive Sports",
    selectorAriaLabel: "Lista de áreas de consultoria",
    selectorKicker: "Consultoria",
    selectorTitle: "Selecionar área",
    accordionAriaLabel: "Lista de áreas de consultoria",
    accordionKicker: "Consultoria",
    accordionTitle: "Selecionar área",
    markersAriaLabel: "Indicadores principais das áreas de consultoria",
    highlightsLabel: "Âmbitos de intervenção",
    highlightsAriaLabel: "Âmbitos de intervenção da área de consultoria",
  },
  items: [
    {
      key: "international-expansion",
      iconKey: "global",
      eyebrow: "Crescimento e presença global",
      navLabel: "Expansão Internacional",
      title: "Expansão Internacional",
      summary:
        "Estratégias para internacionalização e desenvolvimento de projetos desportivos em contextos globais, com leitura de mercado, adaptação cultural e estruturação de parcerias.",
      highlights: [
        "Análise de mercados internacionais",
        "Estratégias de entrada em novos países",
        "Parcerias estratégicas globais",
        "Adaptação cultural de programas",
        "Gestão de projetos transfronteiriços",
        "Apoio à estruturação de presença internacional",
      ],
      focusLabel: "Aplicação",
      focusText:
        "Projetos, organizações e programas desportivos com ambição internacional.",
      impactLabel: "Contributo",
      impactText:
        "Ajuda a reduzir risco, clarificar prioridades e preparar uma entrada mais consistente em novos mercados.",
      highlightsAriaLabel: "Âmbitos de intervenção em Expansão Internacional",
    },
    {
      key: "sports-management",
      iconKey: "luggage",
      eyebrow: "Gestão e estrutura organizacional",
      navLabel: "Gestão Desportiva",
      title: "Gestão Desportiva",
      summary:
        "Estratégias integradas para otimizar a gestão de clubes, federações e organizações desportivas, articulando visão institucional, performance e sustentabilidade.",
      highlights: [
        "Planeamento estratégico organizacional",
        "Estruturação de departamentos técnicos",
        "Sistemas de gestão de performance",
        "Políticas de desenvolvimento de atletas",
        "Modelos de sustentabilidade financeira",
        "Apoio à profissionalização da estrutura desportiva",
      ],
      focusLabel: "Aplicação",
      focusText:
        "Clubes, federações, academias, entidades públicas e estruturas privadas.",
      impactLabel: "Contributo",
      impactText:
        "Melhora a organização interna, a clareza de decisão e a capacidade de execução da estrutura.",
      highlightsAriaLabel: "Âmbitos de intervenção em Gestão Desportiva",
    },
    {
      key: "club-development",
      iconKey: "trendup",
      eyebrow: "Crescimento sustentável",
      navLabel: "Desenvolvimento de Clubes",
      title: "Desenvolvimento de Clubes",
      summary:
        "Soluções personalizadas para crescimento sustentável, modernização de estruturas clubísticas e consolidação de modelos desportivos, operacionais e financeiros.",
      highlights: [
        "Estratégias de captação de talentos",
        "Reestruturação de modelos de negócio",
        "Expansão para novos mercados",
        "Auditoria organizacional completa",
        "Desenvolvimento de academias juvenis",
        "Definição de planos de crescimento sustentado",
      ],
      focusLabel: "Aplicação",
      focusText:
        "Clubes em fase de crescimento, reestruturação, profissionalização ou expansão.",
      impactLabel: "Contributo",
      impactText:
        "Apoia a evolução do clube com maior coerência estratégica, estrutura e capacidade de crescimento.",
      highlightsAriaLabel:
        "Âmbitos de intervenção em Desenvolvimento de Clubes",
    },
    {
      key: "infrastructure-planning",
      iconKey: "building",
      eyebrow: "Espaços funcionais e operação real",
      navLabel: "Planeamento de Infraestruturas",
      title: "Planeamento de Infraestruturas",
      summary:
        "Conceção e desenvolvimento de instalações desportivas modernas, funcionais e ajustadas à operação real, considerando uso, sustentabilidade e eficiência.",
      highlights: [
        "Estudos de viabilidade técnica",
        "Desenho funcional de instalações",
        "Planeamento de equipamentos especializados",
        "Sustentabilidade e eficiência energética",
        "Gestão de projetos de construção",
        "Adequação da infraestrutura ao modelo operacional",
      ],
      focusLabel: "Aplicação",
      focusText:
        "Instalações desportivas, centros de treino, academias, equipamentos municipais e projetos privados.",
      impactLabel: "Contributo",
      impactText:
        "Ajuda a alinhar infraestrutura, utilização diária, investimento e sustentabilidade operacional.",
      highlightsAriaLabel:
        "Âmbitos de intervenção em Planeamento de Infraestruturas",
    },
    {
      key: "training-systems",
      iconKey: "goal",
      eyebrow: "Metodologia e progressão",
      navLabel: "Sistemas de Formação",
      title: "Sistemas de Formação",
      summary:
        "Desenvolvimento de metodologias, programas e estruturas de formação desportiva orientadas para progressão consistente de atletas, treinadores e equipas técnicas.",
      highlights: [
        "Metodologias de treino inovadoras",
        "Currículos de formação técnica",
        "Sistemas de avaliação de atletas",
        "Programas de desenvolvimento de treinadores",
        "Protocolos de progressão atlética",
        "Modelos de acompanhamento por fases de desenvolvimento",
      ],
      focusLabel: "Aplicação",
      focusText:
        "Academias, clubes, centros de treino, programas de formação e projetos de desenvolvimento.",
      impactLabel: "Contributo",
      impactText:
        "Cria maior coerência metodológica, progressão técnica e capacidade de acompanhamento ao longo do percurso formativo.",
      highlightsAriaLabel: "Âmbitos de intervenção em Sistemas de Formação",
    },
    {
      key: "modality-development",
      iconKey: "medal",
      eyebrow: "Crescimento técnico e competitivo",
      navLabel: "Desenvolvimento de Modalidades",
      title: "Desenvolvimento de Modalidades",
      summary:
        "Soluções estratégicas para potenciar o crescimento sustentável, técnico e competitivo de diferentes modalidades, desde a base até estruturas de rendimento.",
      highlights: [
        "Diagnóstico e planeamento de modalidades emergentes",
        "Definição de estruturas técnicas e competitivas",
        "Modelos de desenvolvimento por escalões",
        "Criação de centros de treino especializados",
        "Integração de metodologias de alto rendimento",
        "Apoio à consolidação de ecossistemas da modalidade",
      ],
      focusLabel: "Aplicação",
      focusText:
        "Modalidades em crescimento, projetos emergentes, federações, clubes e estruturas locais.",
      impactLabel: "Contributo",
      impactText:
        "Ajuda a organizar a modalidade com maior critério técnico, estrutura competitiva e visão de desenvolvimento.",
      highlightsAriaLabel:
        "Âmbitos de intervenção em Desenvolvimento de Modalidades",
    },
    {
      key: "event-management",
      iconKey: "circus",
      eyebrow: "Planeamento e execução de eventos",
      navLabel: "Gestão de Eventos",
      title: "Gestão de Eventos",
      summary:
        "Organização e gestão profissional de eventos desportivos com foco em excelência operacional, experiência dos participantes, coordenação técnica e impacto territorial.",
      highlights: [
        "Planeamento estratégico de eventos",
        "Gestão logística e técnica integral",
        "Coordenação de stakeholders e parceiros",
        "Estratégias de comunicação e promoção",
        "Avaliação de impacto e relatórios pós-evento",
        "Definição de modelos operacionais para o evento",
      ],
      focusLabel: "Aplicação",
      focusText:
        "Eventos desportivos, competições, torneios, programas institucionais e ativações territoriais.",
      impactLabel: "Contributo",
      impactText:
        "Aumenta a qualidade operacional, reduz falhas de execução e reforça a experiência global do evento.",
      highlightsAriaLabel: "Âmbitos de intervenção em Gestão de Eventos",
    },
    {
      key: "operational-logistics",
      iconKey: "cog",
      eyebrow: "Processos, recursos e eficiência",
      navLabel: "Logística Operacional",
      title: "Logística Operacional",
      summary:
        "Otimização de processos operacionais para eventos, competições, programas e atividades desportivas regulares, com foco em eficiência, segurança e coordenação.",
      highlights: [
        "Desenho de processos operacionais",
        "Gestão de recursos humanos especializados",
        "Sistemas de logística para eventos",
        "Gestão de fornecedores e parcerias",
        "Protocolos de segurança e emergência",
        "Coordenação de fluxos entre equipas e intervenientes",
      ],
      focusLabel: "Aplicação",
      focusText:
        "Operações desportivas, eventos, programas contínuos, competições e estruturas com múltiplos intervenientes.",
      impactLabel: "Contributo",
      impactText:
        "Melhora a coordenação operacional, reduz fricção entre equipas e aumenta a previsibilidade da execução.",
      highlightsAriaLabel: "Âmbitos de intervenção em Logística Operacional",
    },
  ],
};

export default areas;
