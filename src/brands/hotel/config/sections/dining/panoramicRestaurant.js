import panoramicRestaurantImage1 from "../../../assets/panoramic-restaurant1.webp";
import panoramicRestaurantImage2 from "../../../assets/panoramic-restaurant2.webp";
import panoramicRestaurantImage3 from "../../../assets/panoramic-restaurant3.webp";

export const panoramicRestaurant = {
  id: "restaurante-panoramico",

  headerLabel: "Restaurante Panorâmico",

  introEyebrow: "Vista sobre a Bairrada",

  description:
    "O Restaurante Panorâmico oferece um ambiente elegante e luminoso, com vista privilegiada sobre a Bairrada e uma experiência tranquila à mesa.",

  highlights: {
    ariaLabel: "Destaques do restaurante panorâmico",
    items: [
      {
        id: "panoramic-highlight-01",
        label: "Ambiente luminoso",
      },
      {
        id: "panoramic-highlight-02",
        label: "Vista privilegiada",
      },
      {
        id: "panoramic-highlight-03",
        label: "Experiência tranquila",
      },
    ],
  },

  gallery: {
    fallbackLabel: "Restaurante Panorâmico",
    ui: {
      fallbackEyebrow: "Panorâmica",
      fallbackTitle: "Experiência com vista",
    },
    items: [
      {
        id: "pr-01",
        src: panoramicRestaurantImage1,
        alt: "Restaurante Panorâmico — vista panorâmica sobre a envolvente",
        label: "Vista Panorâmica",
        imagePosition: "center center",
      },
      {
        id: "pr-02",
        src: panoramicRestaurantImage2,
        alt: "Restaurante Panorâmico — refeição em grupo no terraço",
        label: "Experiência Partilhada",
        imagePosition: "center center",
      },
      {
        id: "pr-03",
        src: panoramicRestaurantImage3,
        alt: "Restaurante Panorâmico — terraço panorâmico com vista exterior",
        label: "Terraço Panorâmico",
        imagePosition: "center center",
      },
    ],
  },
};

export default panoramicRestaurant;
