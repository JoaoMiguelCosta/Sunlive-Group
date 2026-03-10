export const catering = {
  id: "restaurant-catering",
  headerLabel: "Serviço de Catering",
  description:
    "A Estalagem fornece serviço de catering para eventos internos e externos, com ementas personalizadas e apoio logístico completo.",

  processSteps: {
    items: [
      {
        id: "catering-step-1",
        stepNumber: "1",
        title: "Pedido",
        description: "Contacte-nos com os detalhes do evento",
        iconKey: null,
      },
      {
        id: "catering-step-2",
        stepNumber: "2",
        title: "Planeamento",
        description: "Criamos uma proposta personalizada",
        iconKey: null,
      },
      {
        id: "catering-step-3",
        stepNumber: "3",
        title: "Execução",
        description: "Entregamos com qualidade e pontualidade",
        iconKey: null,
      },
    ],
  },

  infoLists: {
    items: [
      {
        id: "catering-included-services",
        title: "Serviços Incluídos:",
        entries: [
          "Ementas personalizadas",
          "Serviço presencial",
          "Entrega local",
          "Apoio logístico",
        ],
      },
      {
        id: "catering-event-types",
        title: "Tipos de Eventos:",
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
      href: "/hotel/contactos",
      ariaLabel:
        "Ir para a página de contactos para pedir orçamento de catering",
      external: false,
      iconKey: null,
    },
  },
};

export default catering;
