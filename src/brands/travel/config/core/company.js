import {
  CONTACTS_SECTION_TITLE,
  SUNLIVE_HQ_LOCATION,
} from "../../../../shared/config/index.js";

export const TRAVEL_COMPANY = Object.freeze({
  key: "travel",
  brandName: "Sunlive Travel",
  tagline: "Transformando viagens em experiências memoráveis.",
  aboutIntro:
    "Na Sunlive Travel, acreditamos que viajar é mais do que deslocar-se. É criar ligações, conhecer culturas e viver experiências com significado.",
  about:
    "Na Sunlive Travel, acreditamos que viajar é mais do que deslocar-se. É criar ligações, conhecer culturas e viver experiências com significado.\n\n" +
    "Comprometemo-nos a oferecer soluções de mobilidade e alojamento com qualidade, conforto e segurança.",
  location: SUNLIVE_HQ_LOCATION,
  contacts: {
    title: CONTACTS_SECTION_TITLE,
    email: {
      href: "mailto:travel@sunlive.pt",
      label: "travel@sunlive.pt",
      ariaLabel: "Enviar email para a Sunlive Travel",
    },
    phone: {
      href: "tel:+351935630798",
      label: "+351 935 630 798",
      ariaLabel: "Ligar para a Sunlive Travel",
    },
    extraPhones: [],
  },
});
