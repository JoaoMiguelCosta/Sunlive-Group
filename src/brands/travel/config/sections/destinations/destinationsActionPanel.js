import { TRAVEL_PAGE_PATHS } from "../../core/paths.js";

const destinationsActionPanel = {
  actionPanel: {
    eyebrow: "Planeamento de destinos",
    title: "Obtenha um itinerário personalizado",
    description:
      "Pronto para explorar? Diga-nos o seu destino, o tamanho do grupo, os objetivos e o ritmo de viagem preferido. Iremos criar um programa de viagem coordenado e de alta qualidade, feito à medida do seu grupo.",
    proofPoints: [
      "Proposta ajustada ao perfil do grupo",
      "Seleção criteriosa de destinos e programa",
      "Planeamento com acompanhamento próximo",
    ],
    ui: {
      proofListAriaLabel: "Vantagens do pedido de proposta para destinos",
    },
  },

  cta: {
    label: "Solicitar uma proposta",
    href: TRAVEL_PAGE_PATHS.contacts,
    ariaLabel: "Pedir proposta de viagem à Sunlive Travel",
    iconKey: "phone",
  },
};

export default destinationsActionPanel;
