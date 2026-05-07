export const complementaryServices = {
  id: "instalacoes-servicos",
  headerLabel: "Serviços Complementares",
  description:
    "Serviços adicionais úteis para atletas, empresas ou estadias prolongadas.",

  services: {
    id: "complementary-services-grid",
    detailPanelLabel: "Detalhes do serviço selecionado",
    items: [
      {
        key: "laundry",
        title: "Lavandaria",
        description: "Serviço completo para estadias prolongadas",
        badge: "Disponível",
        defaultOpen: true,
        detailTitle: "Lavandaria pensada para estadias prolongadas",
        detailDescription:
          "Uma solução prática para hóspedes em estágios, viagens de trabalho ou permanências mais longas, com apoio adicional para maior comodidade no dia a dia.",
        detailNote: "Solicitação e articulação disponíveis através da receção.",
        highlights: [
          "Apoio útil para estadias de média e longa duração",
          "Maior conveniência para atletas, grupos e empresas",
          "Integração simples no planeamento diário da estadia",
        ],
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
        detailTitle: "Toalhas extra sempre que necessário",
        detailDescription:
          "Disponibilização adicional de toalhas para reforçar o conforto dos hóspedes em momentos de lazer, descanso ou utilização da piscina.",
        detailNote: "Pedido sujeito à disponibilidade operacional da unidade.",
        highlights: [
          "Apoio adicional para piscina e bem-estar",
          "Mais conforto ao longo da estadia",
          "Resposta prática para necessidades pontuais",
        ],
        icon: {
          key: "bed-linen-towels",
          ariaLabel: "Ícone de toalhas extra",
          component: null,
        },
      },
      {
        key: "wake-up-service",
        title: "Serviço de Despertar",
        description: "Chamadas personalizadas",
        badge: "Disponível",
        detailTitle: "Serviço de despertar com foco na pontualidade",
        detailDescription:
          "Ideal para atletas, equipas, reuniões ou partidas antecipadas, assegurando apoio adicional à organização da rotina e maior tranquilidade.",
        detailNote: "Pode ser solicitado previamente junto da receção.",
        highlights: [
          "Chamadas personalizadas em função do horário pedido",
          "Particularmente útil para treinos, reuniões e deslocações",
          "Mais segurança operacional para agendas exigentes",
        ],
        icon: {
          key: "clock",
          ariaLabel: "Ícone de serviço de despertar",
          component: null,
        },
      },
      {
        key: "luggage-support",
        title: "Apoio a Bagagem",
        description: "Transporte e armazenamento",
        badge: "Disponível",
        detailTitle: "Apoio à bagagem para uma chegada mais fluida",
        detailDescription:
          "Um serviço complementar pensado para simplificar entradas, saídas e momentos de transição, especialmente útil para grupos, famílias ou hóspedes com necessidades específicas.",
        detailNote:
          "Apoio prestado de acordo com o contexto da chegada e partida.",
        highlights: [
          "Facilita check-in, check-out e períodos de espera",
          "Mais conforto para grupos e estadias com maior logística",
          "Contribui para uma experiência mais fluida e assistida",
        ],
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
