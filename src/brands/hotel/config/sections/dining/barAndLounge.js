import barLounge1 from "../../../assets/bar-lounge1.webp";
import barLounge2 from "../../../assets/bar-lounge2.webp";
import barLounge3 from "../../../assets/bar-lounge3.webp";

export const barAndLounge = {
  id: "restaurant-bar-lounge",
  headerLabel: "Bar & Lounge",

  intro: {
    description:
      "O bar & lounge da Estalagem é ideal para relaxar, conviver ou reunir informalmente.",
  },

  features: {
    items: [
      {
        id: "bar-cafeteria",
        label: "Cafetaria completa",
        iconKey: "star",
      },
      {
        id: "bar-cocktails",
        label: "Cocktails",
        iconKey: "star",
      },
      {
        id: "bar-wines",
        label: "Vinhos regionais",
        iconKey: "star",
      },
      {
        id: "bar-snacks",
        label: "Snacks",
        iconKey: "star",
      },
      {
        id: "bar-outdoor-service",
        label: "Serviço exterior",
        iconKey: "star",
      },
      {
        id: "bar-relaxing-atmosphere",
        label: "Ambiente relaxante",
        iconKey: "star",
      },
    ],
  },

  highlightCard: {
    iconKey: "sun",
    title: "Serviço de Verão",
    text: "Durante a época alta, oferecemos serviço exterior junto à piscina.",
  },

  gallery: {
    fallbackLabel: "Bar & Lounge",
    items: [
      {
        id: "bl-01",
        src: barLounge1,
        alt: "Bar & Lounge — vista geral do balcão e garrafeira",
      },
      {
        id: "bl-02",
        src: barLounge2,
        alt: "Bar & Lounge — ambiente interior do espaço",
      },
      {
        id: "bl-03",
        src: barLounge3,
        alt: "Bar & Lounge — zona de convívio e serviço",
      },
    ],
  },
};

export default barAndLounge;
