import educationLevelsBackground from "../../../assets/Education/education1.webp";

const levelsSection = {
  id: "niveis-ensino",
  backgroundImage: {
    src: educationLevelsBackground,
    position: "center 48%",
    mobilePosition: "54% center",
  },
  intro: {
    id: "niveis-ensino-intro",
    eyebrow: "Percurso académico",
    title: "Níveis de Ensino",
    lead: "A proposta educativa da Sunlive Sports organiza-se por etapas claras, acompanhando o estudante-atleta desde a base escolar até às opções de continuidade académica e profissional.",
  },
  journey: {
    ariaLabel: "Percurso educativo da Sunlive Sports",
    progressionLabel: "Progressão académica",
  },
  items: [
    {
      id: "ensino-basico",
      step: "01",
      title: "Ensino Básico",
      ageRange: "7.º–9.º ano",
      subtitle: "Currículo nacional português",
      description:
        "O percurso começa com uma base académica estruturada, assente no currículo nacional português e pensada para acompanhar as primeiras exigências da rotina desportiva.",
      highlightsLabel: "Pontos-chave:",
      highlights: [
        "Do 7.º ao 9.º ano",
        "Ensino presencial",
        "Base académica reconhecida no sistema português",
        "Primeiro equilíbrio entre escola e futebol",
      ],
      outcome:
        "Uma base académica sólida para sustentar a transição para etapas seguintes.",
      book: {
        label: "Abrir Book",
        bookKey: "middleSchool",
        ariaLabel: "Abrir book do Ensino Básico",
      },
    },
    {
      id: "ensino-secundario",
      step: "02",
      title: "Ensino Secundário",
      ageRange: "10.º–12.º ano",
      subtitle: "Diploma Duplo",
      description:
        "No ensino secundário, o estudante-atleta entra numa fase mais exigente, com uma via de diploma duplo pensada para manter progressão académica sem perder compatibilidade com a rotina de treino.",
      highlightsLabel: "Pontos-chave:",
      highlights: [
        "Do 10.º ao 12.º ano",
        "Diploma português + American High School Diploma",
        "Aprendizagem online estruturada",
        "Apoio diário de tutores académicos",
        "Horários ajustados ao treino",
      ],
      outcome:
        "Um secundário mais flexível e orientado para continuidade académica futura.",
      book: {
        label: "Abrir Book",
        bookKey: "highSchool",
        ariaLabel: "Abrir book do Ensino Secundário",
      },
    },
    {
      id: "ensino-superior",
      step: "03",
      title: "Ensino Superior e Continuidade Profissional",
      ageRange: "18+",
      subtitle: "Licenciatura, Gap Year e cursos UEFA",
      description:
        "Depois do ensino secundário, o percurso pode prolongar-se com opções de continuidade que ajudam a transformar o desenvolvimento académico e desportivo em possibilidades reais de futuro.",
      highlightsLabel: "Áreas de continuidade:",
      highlights: [
        "Gap Year",
        "Licenciatura",
        "Cursos de Treinador UEFA",
        "Programas flexíveis compatíveis com treino",
        "Preparação para oportunidades além da carreira de jogador",
      ],
      outcome:
        "Mais opções de progressão académica e profissional dentro de um percurso de longo prazo.",
      book: {
        label: "Abrir Book",
        bookKey: "university",
        ariaLabel: "Abrir book do Ensino Superior e Continuidade Profissional",
      },
    },
  ],
};

export default levelsSection;
