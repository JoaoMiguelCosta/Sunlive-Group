export const catering = {
  id: "restaurante-catering",
  headerLabel: "Serviço de Catering",

  introEyebrow: "Eventos & Catering",

  description:
    "A Estalagem disponibiliza serviço de catering para eventos internos e externos, com ementas personalizadas, organização cuidada e apoio logístico completo.",

  processSteps: {
    ariaLabel: "Etapas do serviço de catering",
    detailsPanelLabel: "Detalhe da etapa selecionada",
    items: [
      {
        id: "catering-step-1",
        stepNumber: "1",
        title: "Pedido",
        description: "Partilhe connosco os detalhes e necessidades do evento.",
        iconKey: "calendar",
        detailTitle: "Começamos por perceber exatamente o que necessita",
        detailText:
          "Recolhemos as informações essenciais para construir uma proposta ajustada ao tipo de evento, número de participantes, contexto e expectativas de serviço.",
        highlights: [
          "Levantamento de requisitos",
          "Enquadramento do evento",
          "Primeiro contacto personalizado",
        ],
      },
      {
        id: "catering-step-2",
        stepNumber: "2",
        title: "Planeamento",
        description:
          "Desenvolvemos uma proposta personalizada e ajustada ao contexto.",
        iconKey: "chef",
        detailTitle: "Definimos uma solução cuidada e coerente",
        detailText:
          "Estruturamos a proposta com base na logística, no estilo do evento e no tipo de serviço pretendido, garantindo equilíbrio entre operacionalidade e experiência.",
        highlights: [
          "Ementa personalizada",
          "Planeamento logístico",
          "Proposta adaptada ao contexto",
        ],
      },
      {
        id: "catering-step-3",
        stepNumber: "3",
        title: "Execução",
        description:
          "Asseguramos a entrega com qualidade, rigor e pontualidade.",
        iconKey: "bus",
        detailTitle: "Executamos com rigor, presença e consistência",
        detailText:
          "Garantimos uma operação organizada, com atenção ao detalhe e foco na qualidade final do serviço, desde a montagem até ao acompanhamento no local.",
        highlights: [
          "Pontualidade na entrega",
          "Serviço com acompanhamento",
          "Qualidade e consistência",
        ],
      },
    ],
  },

  infoLists: {
    ariaLabel: "Informação do serviço de catering",
    items: [
      {
        id: "catering-included-services",
        tabLabel: "Serviços incluídos",
        title: "Serviços Incluídos",
        description:
          "Uma base de serviço pensada para assegurar organização, apoio e flexibilidade operacional.",
        entries: [
          "Ementas personalizadas",
          "Serviço presencial",
          "Entrega local",
          "Apoio logístico",
        ],
      },
      {
        id: "catering-event-types",
        tabLabel: "Tipos de eventos",
        title: "Tipos de Eventos",
        description:
          "Adaptamos o serviço a diferentes formatos e necessidades, com foco em contexto, escala e objetivo do evento.",
        entries: [
          "Coffee breaks",
          "Cocktails",
          "Jantares de gala",
          "Eventos corporativos",
        ],
      },
    ],
    cta: {
      label: "Contactar para pedir orçamento",
      href: "tel:+351234745133",
      ariaLabel: "Ligar para o número +351 234 745 133 para pedir orçamento",
      external: false,
    },
  },
};

export default catering;
