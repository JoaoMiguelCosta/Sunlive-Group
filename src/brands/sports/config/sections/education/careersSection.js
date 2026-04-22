const careersSection = {
  id: "education-careers",
  intro: {
    id: "education-careers-intro",
    eyebrow: "Especialização",
    title: "Percursos Profissionais",
    lead: "Criamos caminhos de continuidade para estudantes-atletas que pretendem transformar formação, experiência e vocação em opções académicas e profissionais ligadas ao desporto.",
  },
  selector: {
    ariaLabel: "Selecionar percurso profissional",
    label: "Áreas de especialização",
    defaultActiveId: "uefa-coach",
  },
  detailPanel: {
    ariaLabel: "Detalhe do percurso profissional selecionado",
  },
  items: [
    {
      id: "uefa-coach",
      tabLabel: "Treino UEFA",
      title: "Treinador UEFA",
      duration: "2–4 anos",
      summary:
        "Percurso orientado para certificação oficial e desenvolvimento de competências para treino competitivo.",
      description:
        "Formação destinada a quem pretende evoluir na área do treino, da liderança técnica e da preparação de equipas em contexto semi-profissional e profissional.",
      featuresLabel: "Níveis disponíveis:",
      features: ["UEFA C", "UEFA B", "UEFA A", "UEFA Pro"],
      outcomesLabel: "Saídas possíveis:",
      outcomes: [
        "Treino de equipas federadas",
        "Coordenação técnica",
        "Integração em estruturas competitivas",
      ],
    },
    {
      id: "sports-management",
      tabLabel: "Gestão",
      title: "Gestão Desportiva",
      duration: "3–5 anos",
      summary:
        "Percurso dirigido à gestão, coordenação e desenvolvimento de organizações e projetos desportivos.",
      description:
        "Via académica para quem procura competências em administração, organização, planeamento e liderança de estruturas ligadas ao desporto.",
      featuresLabel: "Níveis disponíveis:",
      features: ["Licenciatura", "Mestrado", "MBA Desportivo"],
      outcomesLabel: "Saídas possíveis:",
      outcomes: [
        "Gestão de clubes e academias",
        "Coordenação de operações",
        "Planeamento estratégico desportivo",
      ],
    },
    {
      id: "sports-science",
      tabLabel: "Ciências",
      title: "Ciências do Desporto",
      duration: "3–8 anos",
      summary:
        "Percurso científico orientado para performance, análise, preparação física e compreensão do corpo em contexto desportivo.",
      description:
        "Formação focada em áreas como fisiologia, biomecânica, controlo do treino e desenvolvimento humano aplicado ao rendimento.",
      featuresLabel: "Níveis disponíveis:",
      features: ["Licenciatura", "Mestrado", "Doutoramento"],
      outcomesLabel: "Saídas possíveis:",
      outcomes: [
        "Preparação física",
        "Investigação aplicada ao desporto",
        "Performance e apoio técnico-científico",
      ],
    },
  ],
};

export default careersSection;
