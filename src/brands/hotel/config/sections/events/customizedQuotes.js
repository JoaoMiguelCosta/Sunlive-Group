const customizedQuotes = {
  id: "customized-quotes",
  headerLabel: "Orçamentos Personalizados",
  description:
    "Cada evento é único. A nossa equipa faz propostas personalizadas adaptadas às suas ideias e necessidades específicas.",

  detailsCards: [
    {
      id: "event-type",
      title: "Tipo de Evento",
      description: "Casamento, aniversário, corporativo...",
      icon: null,
      ariaLabel: "Tipo de Evento",
    },
    {
      id: "participants-number",
      title: "Número de Participantes",
      description: "Até 200 pessoas",
      icon: null,
      ariaLabel: "Número de Participantes",
    },
    {
      id: "gastronomic-preferences",
      title: "Preferências Gastronómicas",
      description: "Menu personalizado",
      icon: null,
      ariaLabel: "Preferências Gastronómicas",
    },
    {
      id: "schedule-duration",
      title: "Horário e Duração",
      description: "Flexibilidade total",
      icon: null,
      ariaLabel: "Horário e Duração",
    },
  ],

  includedInQuote: {
    id: "customized-quotes-included",
    title: "O que incluímos no orçamento:",
    items: [
      {
        id: "space-decoration",
        label: "Espaços e decoração",
        icon: null,
      },
      {
        id: "drinks-table-service",
        label: "Bebidas e serviço de mesa",
        icon: null,
      },
      {
        id: "logistics-support",
        label: "Apoio logístico completo",
        icon: null,
      },
      {
        id: "custom-menu",
        label: "Menu completo personalizado",
        icon: null,
      },
      {
        id: "accommodation",
        label: "Alojamento (se aplicável)",
        icon: null,
      },
      {
        id: "event-coordination",
        label: "Coordenação do evento",
        icon: null,
      },
    ],
  },

  quoteCallout: {
    id: "customized-quotes-callout",
    text: "Contacte-nos para um orçamento adaptado às suas ideias. Resposta em 24 horas.",
  },

  actions: [
    {
      id: "request-quote",
      label: "Pedir Orçamento Personalizado",
      href: "/sunlive-group/hotel/information#info-contacts",
      icon: null,
      ariaLabel: "Pedir Orçamento Personalizado",
    },
  ],
};

export default customizedQuotes;
