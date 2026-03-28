const customizedQuotes = {
  id: "customized-quotes",
  headerLabel: "Orçamentos Personalizados",
  description:
    "Cada evento é único. A nossa equipa faz propostas personalizadas adaptadas às suas ideias e necessidades específicas.",

  backgroundMedia: {
    imageSrc: null,
    imageAlt: "Ambiente elegante para pedidos de orçamento personalizados",
  },

  detailsCards: [
    {
      id: "event-type",
      title: "Tipo de Evento",
      description: "Casamento, aniversário, corporativo...",
      icon: "groups",
      ariaLabel: "Tipo de Evento",
    },
    {
      id: "participants-number",
      title: "Número de Participantes",
      description: "Até 200 pessoas",
      icon: "count",
      ariaLabel: "Número de Participantes",
    },
    {
      id: "gastronomic-preferences",
      title: "Preferências Gastronómicas",
      description: "Menu personalizado",
      icon: "cutlery",
      ariaLabel: "Preferências Gastronómicas",
    },
    {
      id: "schedule-duration",
      title: "Horário e Duração",
      description: "Flexibilidade total",
      icon: "clock",
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
        label: "Menu completo personalizado",
      },
      {
        id: "accommodation",
        label: "Alojamento (se aplicável)",
      },
      {
        id: "event-coordination",
        label: "Coordenação do evento",
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
      key: "phone",
      label: "Pedir Orçamento Personalizado",
      href: "tel:+351933600337",
      ariaLabel: "Ligar para +351 933 600 337",
      icon: {
        key: "phone",
        ariaLabel: "Ícone de telefone",
        component: null,
      },
    },
  ],
};

export default customizedQuotes;
