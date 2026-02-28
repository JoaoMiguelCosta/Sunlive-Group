// src/brands/travel/config/header.js
import {
  IMG_COMMON,
  LANG_DEFAULT,
  withSocialIcons,
  makeBackLink,
} from "../../../shared/config/BrandDefault.jsx";

import { TRAVEL_BASE_PATH } from "./paths.js";
import logoTravel from "../assets/LogoSunliveTravel/travel.png";

export const TRAVEL_SOCIALS = withSocialIcons([
  {
    key: "fb",
    label: "Facebook",
    href: "https://www.facebook.com/travelsunlive/?locale=pt_PT",
  },
  {
    key: "ig",
    label: "Instagram",
    href: "https://www.instagram.com/sunlivetravel/",
  },
]);

const travelHeader = {
  backLink: makeBackLink({
    href: "/sunlive-group",
    label: "Voltar Sunlive Group",
  }),

  logo: {
    src: logoTravel,
    alt: "Sunlive Travel",
    href: TRAVEL_BASE_PATH,
    ...IMG_COMMON,
  },

  lang: LANG_DEFAULT,
  socials: TRAVEL_SOCIALS,

  // ✅ CTA DO HEADER (define aqui)
  cta: {
    label: "Contactar",
    href: `${TRAVEL_BASE_PATH}/contacto`,
    // opcional: variant/target/etc se o teu CTAButton suportar
  },
};

export default travelHeader;
