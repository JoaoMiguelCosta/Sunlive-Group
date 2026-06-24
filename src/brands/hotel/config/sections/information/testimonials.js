export const testimonials = {
  id: "informacoes-testemunhos",
  headerLabel: "Testemunhos",
  description:
    "Ao longo dos anos, temos acolhido atletas, famílias, casais, empresas e grupos com um serviço centrado na confiança, atenção ao detalhe e conforto.",

  backgroundMedia: {
    imageSrc: null,
    imageAlt: "",
  },

  averageRating: {
    id: "informacoes-testemunhos-average-rating",
    ratingValue: "4.9/5",
    ratingLabel: "Classificação Média",
    supportingText: "Baseado em mais de 200 avaliações verificadas",
    trustItems: [
      { id: "athletes", label: "Atletas e equipas" },
      { id: "families", label: "Famílias e casais" },
      { id: "groups", label: "Empresas e grupos" },
    ],

    stars: {
      total: 5,
      filled: 5,
      icon: null,
      iconName: "star",
      ariaLabel: "5 estrelas",
    },
  },

  spotlight: {
    id: "informacoes-testemunhos-spotlight",
    autoplayMs: 4500,

    cardsPerView: {
      desktop: 3,
      tablet: 2,
      mobile: 1,
    },

    labels: {
      stageEyebrow: "Prova social",
      stageTitle: "Experiências reais, serviço consistente",
      stageDescription:
        "Uma seleção de testemunhos representativos de diferentes perfis e contextos de estadia.",
      verifiedLabel: "Avaliação verificada",
    },

    navigation: {
      previousIcon: null,
      previousIconName: "chevron-left",
      nextIcon: null,
      nextIconName: "chevron-right",
      profileIcon: null,
      profileIconName: "testimonial-badge",
      quoteIcon: null,
      quoteIconName: "quote",
      locationIcon: null,
      locationIconName: "pin",
      dateIcon: null,
      dateIconName: "calendar",
      starIcon: null,
      starIconName: "star",
    },

    items: [
      {
        id: "testimonial-federacao-ginastica-artistica",
        organisation: "Federação Desportiva",
        context: "Estágio Nacional",
        category: "Ginástica Artística",
        rating: 5,
        quote:
          "Excelente acolhimento para a nossa equipa de ginástica. Alimentação equilibrada, staff disponível e logística impecável.",
        dateLabel: "Março 2024",
        imageSrc: null,
        imageAlt: "",
      },
      {
        id: "testimonial-federacao-ginastica-ritmica",
        organisation: "Federação Desportiva",
        context: "Estágio Nacional",
        category: "Ginástica Rítmica",
        rating: 5,
        quote:
          "Instalações muito bem preparadas para estágios desportivos. Equipa sempre disponível e ambiente muito profissional.",
        dateLabel: "Abril 2024",
        imageSrc: null,
        imageAlt: "",
      },
      {
        id: "testimonial-clube-alto-rendimento-natacao",
        organisation: "Clube de Alto Rendimento",
        context: "Concentração Pré-Competitiva",
        category: "Natação",
        rating: 5,
        quote:
          "A logística foi exemplar do início ao fim. A alimentação e o conforto durante a estadia estiveram num nível muito alto.",
        dateLabel: "Maio 2024",
        imageSrc: null,
        imageAlt: "",
      },
      {
        id: "testimonial-associacao-regional-atletismo",
        organisation: "Associação Regional",
        context: "Estágio de Preparação",
        category: "Atletismo",
        rating: 5,
        quote:
          "Espaço muito bem enquadrado, staff simpático e resposta rápida a todas as necessidades do grupo.",
        dateLabel: "Junho 2024",
        imageSrc: null,
        imageAlt: "",
      },
      {
        id: "testimonial-equipa-universitaria-voleibol",
        organisation: "Equipa Universitária",
        context: "Retiro Desportivo",
        category: "Voleibol",
        rating: 5,
        quote:
          "Encontrámos o equilíbrio certo entre descanso, organização e apoio diário. Experiência muito positiva para toda a equipa.",
        dateLabel: "Julho 2024",
        imageSrc: null,
        imageAlt: "",
      },
      {
        id: "testimonial-federacao-desportiva-judo",
        organisation: "Federação Desportiva",
        context: "Estágio Nacional",
        category: "Judo",
        rating: 5,
        quote:
          "Excelente capacidade de adaptação a grupos grandes. O acompanhamento foi consistente e muito competente.",
        dateLabel: "Agosto 2024",
        imageSrc: null,
        imageAlt: "",
      },
      {
        id: "testimonial-clube-profissional-futebol",
        organisation: "Clube Profissional",
        context: "Pré-Época",
        category: "Futebol",
        rating: 5,
        quote:
          "Boa qualidade de alojamento, refeições adequadas ao contexto competitivo e ótimo suporte operacional.",
        dateLabel: "Setembro 2024",
        imageSrc: null,
        imageAlt: "",
      },
      {
        id: "testimonial-delegacao-internacional-ciclismo",
        organisation: "Delegação Internacional",
        context: "Programa de Estadia",
        category: "Ciclismo",
        rating: 5,
        quote:
          "A equipa demonstrou atenção ao detalhe e grande profissionalismo. Foi uma base muito sólida para o nosso estágio.",
        dateLabel: "Outubro 2024",
        imageSrc: null,
        imageAlt: "",
      },
      {
        id: "testimonial-academia-desportiva-basquetebol",
        organisation: "Academia Desportiva",
        context: "Campus de Treino",
        category: "Basquetebol",
        rating: 5,
        quote:
          "Condições muito consistentes, comunicação clara e excelente apoio durante toda a permanência do grupo.",
        dateLabel: "Novembro 2024",
        imageSrc: null,
        imageAlt: "",
      },
    ],
  },
};

export default testimonials;
