export const catering = {
  id: "restaurant-catering",
  headerLabel: "Serviço de Catering",

  description:
    "A Estalagem disponibiliza serviço de catering para eventos internos e externos, com ementas personalizadas, organização cuidada e apoio logístico completo.",

  processSteps: {
    items: [
      {
        id: "catering-step-1",
        stepNumber: "1",
        title: "Pedido",
        description: "Partilhe connosco os detalhes e necessidades do evento.",
        iconKey: null,
      },
      {
        id: "catering-step-2",
        stepNumber: "2",
        title: "Planeamento",
        description:
          "Desenvolvemos uma proposta personalizada e ajustada ao contexto.",
        iconKey: null,
      },
      {
        id: "catering-step-3",
        stepNumber: "3",
        title: "Execução",
        description:
          "Asseguramos a entrega com qualidade, rigor e pontualidade.",
        iconKey: null,
      },
    ],
  },

  infoLists: {
    items: [
      {
        id: "catering-included-services",
        title: "Serviços Incluídos",
        entries: [
          "Ementas personalizadas",
          "Serviço presencial",
          "Entrega local",
          "Apoio logístico",
        ],
      },
      {
        id: "catering-event-types",
        title: "Tipos de Eventos",
        entries: [
          "Coffee breaks",
          "Cocktails",
          "Jantares de gala",
          "Eventos corporativos",
        ],
      },
    ],

    cta: {
      label: "Pedir Orçamento para Catering",
      href: "/sunlive-group/hotel/information#info-contacts",
      ariaLabel:
        "Ir para a secção de contactos para pedir orçamento de catering",
      external: false,
      iconKey: null,
    },
  },
};

export default catering;
