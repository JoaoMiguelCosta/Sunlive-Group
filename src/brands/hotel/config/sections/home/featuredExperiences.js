import featuredExperiences1 from "../../../assets/featured-experiences1.webp";
import featuredExperiences2 from "../../../assets/featured-experiences2.webp";
import twoRoom from "../../../assets/two-room.webp";
import panoramicRestaurant1 from "../../../assets/panoramic-restaurant1.webp";

import { HOTEL_PAGE_PATHS } from "../../core/paths.js";

export const featuredExperiences = {
  id: "hotel-experiencias-destaque",
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
      eyebrow: "Comece o dia",
      badge: "Gastronomia",
      description:
        "Pequeno-almoço com vista panorâmica, num ambiente tranquilo e luminoso.",
      imageSrc: panoramicRestaurant1,
      imageAlt:
        "Espaço panorâmico do hotel com vista exterior e zona de refeições",
      imagePosition: "center center",
      href: `${HOTEL_PAGE_PATHS.dining}#restaurante-pequeno-almoco`,
      featured: true,
    },
    {
      id: "pool-sauna",
      title: "Piscina e Sauna",
      eyebrow: "Bem-estar",
      badge: "Relaxamento",
      description:
        "Relaxe com conforto em ambientes pensados para o seu bem-estar.",
      imageSrc: featuredExperiences2,
      imageAlt: "Piscina interior e zona de bem-estar do hotel",
      imagePosition: "center center",
      href: `${HOTEL_PAGE_PATHS.facilities}#instalacoes-bem-estar`,
      featured: false,
    },
    {
      id: "personal-events",
      title: "Eventos com toque pessoal",
      eyebrow: "Momentos especiais",
      badge: "Eventos",
      description: "Celebre momentos únicos com soluções personalizadas.",
      imageSrc: featuredExperiences1,
      imageAlt: "Espaço de eventos do hotel preparado para ocasiões especiais",
      imagePosition: "center center",
      href: HOTEL_PAGE_PATHS.events,
      featured: false,
    },
    {
      id: "comfortable-rooms",
      title: "Quartos Confortáveis",
      eyebrow: "Descanso",
      badge: "Alojamento",
      description:
        "Tipologias versáteis com comodidades para atletas, famílias ou casais.",
      imageSrc: twoRoom,
      imageAlt: "Quarto confortável do hotel com cama e comodidades modernas",
      imagePosition: "center center",
      href: `${HOTEL_PAGE_PATHS.accommodation}#estadia-quartos`,
      featured: false,
    },
  ],
};

export default featuredExperiences;
