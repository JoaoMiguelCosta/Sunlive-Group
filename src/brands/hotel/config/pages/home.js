import { ICONS } from "../../../../shared/config/BrandDefault.jsx";
import { HOTEL_SECTION_PATHS } from "../paths.js";

export const hotelHomePage = {
  sections: {
    overview: {
      id: "hotel-overview",
      headerLabel: "Sobre a Estalagem",
      introPrefix: "A ",
      introHighlight: "Estalagem de Sangalhos – Sport & Nature Hotel",
      introSuffix:
        " é uma unidade de referência na região centro de Portugal, distinguida pela sua localização tranquila e serviços especializados.",
      bodyText:
        "Aliamos a hospitalidade tradicional à funcionalidade moderna, oferecendo uma estadia confortável, adaptada a diferentes perfis — desde famílias e casais a equipas desportivas e grupos empresariais.",
      cta: {
        label: "Saber mais sobre a Estalagem",
        href: `${HOTEL_SECTION_PATHS.sobre}#sobre-estalagem`,
      },
    },

    whoWeHost: {
      id: "hotel-who-we-host",
      headerLabel: "Para quem é?",
      items: [
        {
          id: "athletes-clubs",
          iconKey: "TrophyIcon",
          title: "Atletas e Clubes",
          description: "Alojamento especializado com apoio logístico.",
        },
        {
          id: "celebrations",
          iconKey: "PartyPopperIcon",
          title: "Celebrações",
          description: "Aniversários, festas e casamentos com toque pessoal.",
        },
        {
          id: "couples",
          iconKey: "HeartIcon",
          title: "Casais",
          description: "Escapadinhas românticas e turismo ativo.",
        },
        {
          id: "companies",
          iconKey: "UserIcon",
          title: "Empresas",
          description: "Retiros e eventos com espaços adaptados.",
        },
        {
          id: "families",
          iconKey: "UsersIcon",
          title: "Famílias",
          description: "Fins de semana relaxantes em ambiente natural.",
        },
      ],
    },

    featuredExperiences: {
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
        },
        {
          id: "pool-sauna",
          title: "Piscina e Sauna",
          description:
            "Relaxe com conforto em ambientes pensados para o seu bem-estar.",
          imageSrc: null,
          imageAlt: null,
        },
        {
          id: "personal-events",
          title: "Eventos com toque pessoal",
          description: "Celebre momentos únicos com soluções personalizadas.",
          imageSrc: null,
          imageAlt: null,
        },
        {
          id: "comfortable-rooms",
          title: "Quartos Confortáveis",
          description:
            "Tipologias versáteis com comodidades para atletas, famílias ou casais.",
          imageSrc: null,
          imageAlt: null,
        },
      ],
    },

    sustainabilityImpact: {
      id: "hotel-sustainability-impact",
      header: { label: "Sustentabilidade" },
      intro: {
        title: "Comprometidos com um futuro mais verde",
        text: "Valorizamos práticas responsáveis que protegem o ambiente e a comunidade local.",
      },
      stats: [
        {
          id: "energy",
          value: "30%",
          description: "de redução no consumo energético",
        },
        {
          id: "water",
          value: "25%",
          description: "de poupança no consumo de água",
        },
        { id: "recycling", value: "80%", description: "de taxa de reciclagem" },
        {
          id: "local-products",
          value: "70%",
          description: "dos produtos são de origem local",
        },
      ],
    },

    planYourStay: {
      id: "hotel-plan-your-stay",
      boxTitle: "Tem dúvidas ou quer planear a sua estadia?",
      boxSubtitle: "Estamos disponíveis todos os dias, das 07h00 às 24h00.",
      actions: [
        {
          id: "phone",
          label: "Contactar por Telefone",
          href: "tel:+351933600337",
          Icon: ICONS.PhoneIcon,
        },
        {
          id: "email",
          label: "Contactar por Email",
          href: "mailto:hotel@sunlive.pt",
          Icon: ICONS.MailIcon,
        },
      ],
    },
  },
};
