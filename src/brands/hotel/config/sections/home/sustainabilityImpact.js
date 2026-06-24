import { HOTEL_PAGE_PATHS } from "../../core/paths.js";

export const sustainabilityImpact = {
  id: "hotel-sustentabilidade-impacto",

  header: {
    label: "Sustentabilidade",
  },

  intro: {
    eyebrow: "Impacto positivo",
    title: "Comprometidos com um futuro mais verde",
    text: "Valorizamos práticas responsáveis que protegem o ambiente, reduzem desperdícios e reforçam a ligação à comunidade local.",
    noteTitle: "Compromisso contínuo",
    noteText:
      "Cada decisão procura equilibrar conforto, eficiência e responsabilidade ambiental.",
  },

  cta: {
    label: "Saber mais sobre Sustentabilidade",
    href: HOTEL_PAGE_PATHS.sustainability,
    ariaLabel: "Ir para a página de sustentabilidade do hotel",
  },

  stats: [
    {
      id: "waste-recycled",
      label: "Reciclagem",
      value: "80%",
      description: "dos resíduos são reciclados",
      iconKey: "recycling",
    },
    {
      id: "local-products",
      label: "Origem local",
      value: "70%",
      description: "dos produtos são de origem local",
      iconKey: "local-products",
    },
    {
      id: "water-saving",
      label: "Eficiência hídrica",
      value: "25%",
      description: "de poupança no consumo de água",
      iconKey: "water",
    },
    {
      id: "energy-reduction",
      label: "Eficiência energética",
      value: "30%",
      description: "de redução no consumo energético",
      iconKey: "energy",
    },
  ],
};

export default sustainabilityImpact;
