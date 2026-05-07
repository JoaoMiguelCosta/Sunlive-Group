import { HOTEL_PAGE_PATHS } from "../../core/paths.js";

export const accessibility = {
  id: "accessibility",
  headerLabel: "Acessibilidade",
  description:
    "A unidade foi concebida para receber hóspedes com diferentes níveis de mobilidade.",

  support: {
    id: "accessibility-support",
    highlightText: "Garantimos conforto, segurança e autonomia para todos.",
    title: "Apoio Personalizado",
    description:
      "A nossa equipa está sempre disponível para prestar apoio adicional quando necessário.",
    featuresTitle: "Características Acessíveis:",
    cta: {
      label: "Contactar Receção",
      href: `${HOTEL_PAGE_PATHS.information}#informacoes-contactos`,
      ariaLabel: "Contactar a receção para apoio e esclarecimentos adicionais",
    },
    icon: {
      key: "groups",
      ariaLabel: "Ícone de apoio personalizado",
      component: null,
    },

    features: [
      {
        key: "ground-floor-rooms",
        label: "Quartos acessíveis no rés-do-chão",
        detail:
          "Algumas tipologias localizam-se ao nível térreo, facilitando o acesso e reduzindo a necessidade de percursos com desnível.",
        defaultOpen: true,
      },
      {
        key: "wide-doors",
        label: "Portas alargadas nos quartos acessíveis",
        detail:
          "Os quartos preparados para acessibilidade incluem soluções de circulação mais cómodas, com foco na entrada, manobra e utilização diária.",
      },
      {
        key: "adapted-bathrooms",
        label: "WC adaptados com barras de apoio",
        detail:
          "As unidades acessíveis incluem casas de banho preparadas com barras de apoio e condições reforçadas de segurança e autonomia.",
      },
      {
        key: "ramps",
        label: "Rampas em todas as áreas comuns",
        detail:
          "As principais zonas comuns foram pensadas para promover deslocações mais fluidas e confortáveis ao longo da estadia.",
      },
      {
        key: "trained-team",
        label: "Equipa treinada para apoio adicional",
        detail:
          "Sempre que necessário, a nossa equipa presta acompanhamento e apoio adicional, antes da chegada e durante toda a estadia.",
      },
    ],
  },
};

export default accessibility;
