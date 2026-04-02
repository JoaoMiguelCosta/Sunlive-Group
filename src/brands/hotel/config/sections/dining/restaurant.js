import buffetStartersImage from "../../../assets/buffet-starters.webp";
import hotBuffetMainDishesImage from "../../../assets/hot-buffet-main-dishes.webp";
import buffetDessertsImage from "../../../assets/buffet-desserts.webp";

export const restaurant = {
  id: "restauracao",

  headerLabel: "Restauração",

  introEyebrow: "Buffet dinâmico",

  description:
    "A restauração assenta num buffet dinâmico, pensado para oferecer variedade, frescura e equilíbrio em cada refeição.",

  highlights: {
    ariaLabel: "Destaques da restauração",
    items: [
      {
        id: "restaurant-highlight-01",
        label: "Variedade diária",
      },
      {
        id: "restaurant-highlight-02",
        label: "Seleção fresca",
      },
      {
        id: "restaurant-highlight-03",
        label: "Equilíbrio em cada refeição",
      },
    ],
  },

  gallery: {
    fallbackLabel: "Estações de Buffet",
    ui: {
      fallbackEyebrow: "Restauração",
      fallbackTitle: "Estações do buffet",
    },
    items: [
      {
        id: "restaurant-01",
        src: buffetStartersImage,
        alt: "Restauração buffet — seleção de entradas frescas e variadas",
        label: "Entradas",
        imagePosition: "center center",
      },
      {
        id: "restaurant-02",
        src: hotBuffetMainDishesImage,
        alt: "Restauração buffet — pratos principais quentes em serviço buffet",
        label: "Pratos principais",
        imagePosition: "center center",
      },
      {
        id: "restaurant-03",
        src: buffetDessertsImage,
        alt: "Restauração buffet — seleção de sobremesas e fruta fresca",
        label: "Sobremesas",
        imagePosition: "center center",
      },
    ],
  },
};

export default restaurant;
