import {
  CONTACTS_SECTION_TITLE,
  SUNLIVE_HQ_LOCATION,
} from "../../../../shared/config/index.js";

import { HOTEL_BASE_PATH } from "./paths.js";

export const HOTEL_COMPANY = Object.freeze({
  key: "hotel",
  brandName: "Estalagem de Sangalhos - Sports & Nature Hotel",
  shortName: "Estalagem de Sangalhos",
  tagline: "Transformando estadias em experiências inesquecíveis.",
  about:
    "Proporcionamos conforto, bem-estar e experiências memoráveis numa localização privilegiada entre natureza, desporto e tradição.",
  aboutIntro: "Transformando estadias em experiências inesquecíveis.",
  location: SUNLIVE_HQ_LOCATION,
  contacts: {
    title: CONTACTS_SECTION_TITLE,
    email: {
      href: "mailto:hotel@sunlive.pt",
      label: "hotel@sunlive.pt",
      ariaLabel: "Enviar email para o hotel",
    },
    phone: {
      href: "tel:+351933600337",
      label: "+351 933 600 337",
      ariaLabel: "Ligar para o hotel",
    },
    extraPhones: [
      {
        href: "tel:+351234745133",
        label: "+351 234 745 133",
        ariaLabel: "Ligar para o hotel",
      },
    ],
  },
  footerLink: {
    label: "Estalagem de Sangalhos",
    href: HOTEL_BASE_PATH,
  },
});
