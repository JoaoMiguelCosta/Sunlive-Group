export const complementaryServices = {
  id: "facilities-services",
  headerLabel: "Serviços Complementares",
  description:
    "Serviços adicionais úteis para atletas, empresas ou estadias prolongadas.",

  services: {
    id: "complementary-services-grid",
    items: [
      {
        key: "laundry",
        title: "Lavandaria",
        description: "Serviço completo para estadias prolongadas",
        badge: "Disponível",
        icon: {
          key: "laundry",
          ariaLabel: "Ícone de lavandaria",
          component: null,
        },
      },
      {
        key: "extra-towels",
        title: "Toalhas Extra",
        description: "Toalhas adicionais para piscina",
        badge: "Disponível",
        icon: {
          key: "towel",
          ariaLabel: "Ícone de toalhas extra",
          component: null,
        },
      },
      {
        key: "wake-up-service",
        title: "Serviço de Despertar",
        description: "Chamadas personalizadas",
        badge: "Disponível",
        icon: {
          key: "alarm",
          ariaLabel: "Ícone de serviço de despertar",
          component: null,
        },
      },
      {
        key: "luggage-support",
        title: "Apoio a Bagagem",
        description: "Transporte e armazenamento",
        badge: "Disponível",
        icon: {
          key: "luggage",
          ariaLabel: "Ícone de apoio a bagagem",
          component: null,
        },
      },
    ],
  },
};

export default complementaryServices;
