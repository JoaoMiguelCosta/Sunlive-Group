import { TRAVEL_PAGE_PATHS } from "../../core/paths.js";

const destinationsActionPanel = {
  actionPanel: {
    eyebrow: "Planeamento de destinos",
    title:
      "Peça uma proposta ajustada ao destino, ao grupo e ao formato da viagem",
    description:
      "Desenhamos programas nacionais e internacionais em função do destino pretendido, número de participantes, objetivos da deslocação, ritmo da viagem e enquadramento logístico necessário para uma execução fluida e consistente.",
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
    label: "Pedir proposta",
    href: TRAVEL_PAGE_PATHS.contacts,
    ariaLabel: "Pedir proposta de viagem à Sunlive Travel",
    iconKey: "phone",
  },
};

export default destinationsActionPanel;
