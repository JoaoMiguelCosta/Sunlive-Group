import {
  IMG_COMMON,
  LANG_DEFAULT,
  makeBackLink,
} from "../../../../shared/config/BrandDefault.js";

import logoTravel from "../../assets/LogoSunliveTravel/travel.png";

import { TRAVEL_BASE_PATH } from "./paths.js";
import { TRAVEL_SOCIALS } from "./socials.js";

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

  cta: {
    label: "Contactar",
    href: "#contactar",
  },
};

export default travelHeader;
