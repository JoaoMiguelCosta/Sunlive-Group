import {
  CONTACTS_SECTION_TITLE,
  SUNLIVE_HQ_LOCATION,
} from "../../../../shared/config/index.js";

export const TRAVEL_COMPANY = Object.freeze({
  key: "travel",
  brandName: "Sunlive Travel",
  tagline:
    "Acreditamos que viajar é mais do que simplesmente deslocar-se de um lugar para outro.",
  about:
    "Trata-se de estabelecer laços, descobrir novas culturas e criar memórias.\n\n" +
    "Estamos totalmente empenhados em proporcionar transporte e alojamento seguros, confortáveis e de qualidade a cada um dos nossos clientes.",
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
