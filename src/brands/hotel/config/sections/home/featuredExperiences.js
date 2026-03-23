import featuredExperiences1 from "../../../assets/featured-experiences1.webp";
import featuredExperiences2 from "../../../assets/featured-experiences2.webp";
import twoRoom from "../../../assets/two-room.webp";

export const featuredExperiences = {
  id: "hotel-featured-experiences",
  header: {
    kicker: "Estadias & Momentos",
    title: "Experiências em Destaque",
    subtitle:
      "Serviços pensados para atletas, famílias, equipas e grupos que procuram conforto e bem-estar.",
    align: "center",
  },
  items: [
    {
      id: "panoramic-breakfast",
      title: "Pequeno-almoço Panorâmico",
      description:
        "Comece o dia com uma vista deslumbrante e variedade de sabores.",
      imageSrc: null,
      imageAlt: null,
      imagePosition: "center center",
    },
    {
      id: "pool-sauna",
      title: "Piscina e Sauna",
      description:
        "Relaxe com conforto em ambientes pensados para o seu bem-estar.",
      imageSrc: featuredExperiences2,
      imageAlt: "Piscina interior e zona de bem-estar do hotel",
      imagePosition: "center center",
    },
    {
      id: "personal-events",
      title: "Eventos com toque pessoal",
      description: "Celebre momentos únicos com soluções personalizadas.",
      imageSrc: featuredExperiences1,
      imageAlt: "Espaço de eventos do hotel preparado para ocasiões especiais",
      imagePosition: "center center",
    },
    {
      id: "comfortable-rooms",
      title: "Quartos Confortáveis",
      description:
        "Tipologias versáteis com comodidades para atletas, famílias ou casais.",
      imageSrc: twoRoom,
      imageAlt: "Quarto confortável do hotel com cama e comodidades modernas",
      imagePosition: "center center",
    },
  ],
};

export default featuredExperiences;
