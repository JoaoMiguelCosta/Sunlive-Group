import breakfastImage1 from "../../../assets/breakfast1.webp";
import breakfastImage2 from "../../../assets/breakfast2.webp";
import breakfastImage3 from "../../../assets/breakfast3.webp";
import breakfastImage4 from "../../../assets/breakfast4.webp";

export const breakfast = {
  id: "restaurant-breakfast",
  headerLabel: "Pequeno-Almoço",

  intro: {
    eyebrow: "Morning Ritual",
    title: "Comece o dia com um Pequeno-Almoço completo",
    paragraphs: [
      "A oferta combina opções saudáveis, saborosas e pensadas para diferentes rotinas e necessidades alimentares.",
      "Privilegiamos variedade, frescura e equilíbrio em cada serviço.",
      "Inclui cereais, pão, fruta fresca, queijo, presunto, ovos, bacon, feijão, iogurtes e outras opções complementares.",
    ],
    highlightsAriaLabel: "Destaques do pequeno-almoço",
    highlights: [
      "Buffet diário",
      "Opções equilibradas",
      "Flexível para grupos",
    ],
  },

  highlightCard: {
    iconKey: "clock",
    title: "Horário: 7h00 - 10h00",
    text: "Disponibilidade de horários flexíveis para grupos, mediante pedido prévio.",
  },

  gallery: {
    fallbackLabel: "Pequeno-Almoço",
    fallbackEyebrow: "Galeria",
    fallbackTitle: "Pequeno-Almoço",
    items: [
      {
        id: "bf-01",
        src: breakfastImage2,
        alt: "Pequeno-almoço buffet — seleção de pães, bolos e pastelaria",
        label: "Pastelaria e Padaria fresca",
        imagePosition: "center center",
        fitMode: "cover",
      },
      {
        id: "bf-02",
        src: breakfastImage3,
        alt: "Pequeno-almoço buffet — cereais, fruta e estação complementar",
        label: "Opções leves e equilibradas",
        imagePosition: "center center",
        fitMode: "cover",
      },
      {
        id: "bf-03",
        src: breakfastImage4,
        alt: "Pequeno-almoço buffet — queijos, fiambre, iogurtes e acompanhamentos",
        label: "Frios e Complementos selecionados",
        imagePosition: "center center",
        fitMode: "cover",
      },
      {
        id: "bf-04",
        src: breakfastImage1,
        alt: "Pequeno-almoço buffet — vista geral da estação com variedade de produtos",
        label: "Experiência Buffet completa",
        imagePosition: "center center",
        fitMode: "cover",
      },
    ],
  },
};

export default breakfast;
