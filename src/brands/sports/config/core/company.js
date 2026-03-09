import {
  CONTACTS_SECTION_TITLE,
  SUNLIVE_HQ_LOCATION,
} from "../../../../shared/config/BrandDefault.js";

export const SPORTS_COMPANY = Object.freeze({
  key: "sports",
  brandName: "Sunlive Sports",
  tagline: "Transformando vidas através do Desporto.",
  about:
    "Na Sunlive Sports, acreditamos no desporto como motor de desenvolvimento pessoal, educativo e profissional — providenciamos programas integrados que elevam a performance, promovem o bem-estar e criam experiências memoráveis.",
  aboutIntro:
    "Na Sunlive Sports, acreditamos no desporto como motor de desenvolvimento pessoal, educativo e profissional.",
  location: SUNLIVE_HQ_LOCATION,
  contacts: {
    title: CONTACTS_SECTION_TITLE,
    email: {
      href: "mailto:lucas@sunlive.pt",
      label: "lucas@sunlive.pt",
      ariaLabel: "Enviar email para a Sunlive Sports",
    },
    phone: {
      href: "tel:+351933600362",
      label: "+351 933 600 362",
      ariaLabel: "Ligar para a Sunlive Sports",
    },
    extraPhones: [],
  },
});

export default SPORTS_COMPANY;
