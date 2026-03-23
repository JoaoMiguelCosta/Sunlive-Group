import sundayBuffet1 from "../../../assets/sunday-buffet1.webp";
import sundayBuffet2 from "../../../assets/sunday-buffet2.webp";
import sundayBuffet3 from "../../../assets/sunday-buffet3.webp";

export const sundayBuffet = {
  id: "restaurant-buffet",
  headerLabel: "Buffet de Domingo",

  description:
    "Ao domingo, celebramos a tradição e o convívio em família.\n\nNo nosso restaurante, valorizamos os momentos partilhados à mesa e damos destaque à gastronomia portuguesa com um buffet mais completo, pensado para tornar o seu almoço de domingo ainda mais memorável.",

  gallery: {
    fallbackLabel: "Buffet de Domingo",
    items: [
      {
        id: "sb-01",
        src: sundayBuffet1,
        alt: "Buffet de Domingo — mesa de buffet com variedade de pratos tradicionais",
        fitMode: "contain",
        imagePosition: "center center",
      },
      {
        id: "sb-02",
        src: sundayBuffet2,
        alt: "Buffet de Domingo — seleção variada de entradas e pratos frios",
        fitMode: "contain",
        imagePosition: "center center",
      },
      {
        id: "sb-03",
        src: sundayBuffet3,
        alt: "Buffet de Domingo — vista geral do buffet com marisco e pratos quentes",
        fitMode: "contain",
        imagePosition: "center center",
      },
    ],
  },

  cta: {
    label: "Contactar para mais informações",
    href: "tel:+351234745133",
    ariaLabel: "Ligar para o número +351 234 745 133 para mais informações",
    external: false,
  },
};

export default sundayBuffet;
