import barLounge1 from "../../../assets/dining/bar-lounge/bar-lounge1.webp";
import barLounge2 from "../../../assets/dining/bar-lounge/bar-lounge2.webp";
import barLounge3 from "../../../assets/dining/bar-lounge/bar-lounge3.webp";

export const barAndLounge = {
  id: "restaurante-bar-lounge",
  headerLabel: "Bar & Lounge",

  intro: {
    eyebrow: "Convívio & Relaxamento",
    title: "Um espaço pensado para desacelerar",
    description:
      "O bar & lounge da Estalagem é ideal para relaxar, conviver ou reunir informalmente, num ambiente confortável e acolhedor.",
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

  atmosphereCard: {
    eyebrow: "Lounge Mood",
    title: "Entre a pausa e o convívio",
    text: "Ideal para um café tranquilo, um cocktail ao final do dia ou um encontro informal num ambiente sereno.",
  },

  highlightCard: {
    iconKey: "sun",
    title: "Serviço de Verão",
    text: "Durante a época alta, oferecemos serviço exterior junto à piscina.",
  },

  gallery: {
    fallbackLabel: "Bar & Lounge",
    ui: {
      fallbackEyebrow: "Lounge",
      fallbackTitle: "Ambiente interior",
    },
    items: [
      {
        id: "bl-01",
        src: barLounge1,
        alt: "Bar & Lounge — vista geral do balcão e garrafeira",
        label: "Balcão e Garrafeira",
        imagePosition: "center center",
        fitMode: "cover",
      },
      {
        id: "bl-02",
        src: barLounge2,
        alt: "Bar & Lounge — ambiente interior do espaço",
        label: "Ambiente interior",
        imagePosition: "center center",
        fitMode: "cover",
      },
      {
        id: "bl-03",
        src: barLounge3,
        alt: "Bar & Lounge — zona de convívio e serviço",
        label: "Zona de Convívio",
        imagePosition: "center center",
        fitMode: "cover",
      },
    ],
  },
};

export default barAndLounge;
