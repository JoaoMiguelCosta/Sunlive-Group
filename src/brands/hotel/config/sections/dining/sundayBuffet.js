import sundayBuffet1 from "../../../assets/dining/sunday-buffet/sunday-buffet1.webp";
import sundayBuffet2 from "../../../assets/dining/sunday-buffet/sunday-buffet2.webp";
import { HOTEL_COMPANY } from "../../core/company.js";

export const sundayBuffet = {
  id: "restaurant-buffet",
  headerLabel: "Buffet de Domingo",

  introEyebrow: "Tradição à mesa",

  description:
    "Ao domingo, celebramos a tradição e o convívio em família.\n\nNo nosso restaurante, valorizamos os momentos partilhados à mesa e damos destaque à gastronomia portuguesa com um buffet mais completo, pensado para tornar o seu almoço de domingo ainda mais memorável.",

  highlights: {
    ariaLabel: "Destaques do buffet de domingo",
    items: [
      {
        id: "sunday-buffet-highlight-01",
        label: "Convívio em família",
      },
      {
        id: "sunday-buffet-highlight-02",
        label: "Sabores tradicionais",
      },
      {
        id: "sunday-buffet-highlight-03",
        label: "Experiência de domingo",
      },
    ],
  },

  gallery: {
    ariaLabel: "Galeria do buffet de domingo",
    featuredImage: {
      id: "sb-01",
      src: sundayBuffet1,
      alt: "Buffet de Domingo — mesa de buffet com variedade de pratos tradicionais",
      label: "Buffet tradicional em ambiente familiar",
      imagePosition: "center center",
    },
    secondaryImage: {
      id: "sb-02",
      src: sundayBuffet2,
      alt: "Buffet de Domingo — seleção variada de entradas e marisco",
      label: "Seleção cuidada de entradas e marisco",
      imagePosition: "center center",
    },
  },

  detailsCard: {
    eyebrow: "Domingo especial",
    title: "Um almoço pensado para partilhar",
    text: "Uma proposta mais completa, inspirada na tradição portuguesa e preparada para valorizar o convívio à mesa.",
  },

  cta: {
    label: "Contactar para mais informações",
    href: HOTEL_COMPANY.contacts.extraPhones[0].href,
    ariaLabel: "Ligar para o número +351 234 745 133 para mais informações",
    external: false,
  },
};

export default sundayBuffet;
