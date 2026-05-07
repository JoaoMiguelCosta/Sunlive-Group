const customizedQuotes = {
  id: "eventos-orcamentos",
  headerLabel: "Orçamentos personalizados",
  description:
    "Cada evento é único. A nossa equipa prepara propostas adaptadas às suas ideias, necessidades específicas e contexto da celebração.",

  backgroundMedia: {
    imageSrc: null,
    imageAlt: "Ambiente elegante para pedidos de orçamento personalizados",
  },

  ui: {
    detailsAriaLabel: "Detalhes necessários para orçamento personalizado",
    includedAriaLabel: "O que está incluído no orçamento personalizado",
    actionsAriaLabel: "Ações para pedir orçamento personalizado",
  },

  detailsCards: [
    {
      id: "event-type",
      title: "Tipo de evento",
      description:
        "Casamento, aniversário, evento corporativo ou celebração privada.",
      icon: "groups",
      ariaLabel: "Tipo de evento",
    },
    {
      id: "participants-number",
      title: "Número de participantes",
      description: "Soluções ajustadas à dimensão e formato do evento.",
      icon: "count",
      ariaLabel: "Número de participantes",
    },
    {
      id: "gastronomic-preferences",
      title: "Preferências gastronómicas",
      description: "Menus personalizados, serviço de mesa e bebidas.",
      icon: "cutlery",
      ariaLabel: "Preferências gastronómicas",
    },
    {
      id: "schedule-duration",
      title: "Horário e duração",
      description: "Planeamento flexível de acordo com o ritmo do evento.",
      icon: "clock",
      ariaLabel: "Horário e duração",
    },
  ],

  includedInQuote: {
    id: "customized-quotes-included",
    title: "O que incluímos no orçamento",
    items: [
      {
        id: "space-decoration",
        label: "Espaços e decoração",
      },
      {
        id: "drinks-table-service",
        label: "Bebidas e serviço de mesa",
      },
      {
        id: "logistics-support",
        label: "Apoio logístico completo",
      },
      {
        id: "custom-menu",
        label: "Menu personalizado",
      },
      {
        id: "accommodation",
        label: "Alojamento, quando aplicável",
      },
      {
        id: "event-coordination",
        label: "Coordenação do evento",
      },
    ],
  },

  quoteCallout: {
    id: "customized-quotes-callout",
    text: "Contacte-nos para um orçamento adaptado às suas ideias. Respondemos com acompanhamento próximo e proposta ajustada ao evento.",
  },

  actions: [
    {
      id: "request-quote",
      key: "phone",
      label: "Pedir orçamento personalizado",
      href: "tel:+351933600337",
      ariaLabel:
        "Ligar para +351 933 600 337 para pedir orçamento personalizado",
      icon: {
        key: "phone",
        ariaLabel: "Ícone de telefone",
        component: null,
      },
    },
  ],
};

export default customizedQuotes;
