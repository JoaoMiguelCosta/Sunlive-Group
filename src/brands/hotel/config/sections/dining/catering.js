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
        iconKey: "calendar",
      },
      {
        id: "catering-step-2",
        stepNumber: "2",
        title: "Planeamento",
        description:
          "Desenvolvemos uma proposta personalizada e ajustada ao contexto.",
        iconKey: "chef",
      },
      {
        id: "catering-step-3",
        stepNumber: "3",
        title: "Execução",
        description:
          "Asseguramos a entrega com qualidade, rigor e pontualidade.",
        iconKey: "bus",
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
  label: "Contactar para pedir orçamento",
  href: "tel:+351234745133",
  ariaLabel: "Ligar para o número +351 234 745 133 para mais informações",
  external: false,
},
  },
};

export default catering;