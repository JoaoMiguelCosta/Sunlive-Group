import { IMG_COMMON, LANG_DEFAULT } from "../../../../shared/config/index.js";

import logoTravel from "../../assets/logo/travel.png";

import { TRAVEL_BASE_PATH, TRAVEL_PAGE_PATHS } from "./paths.js";
import { TRAVEL_SOCIALS } from "./socials.js";

const header = {
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
    href: TRAVEL_PAGE_PATHS.contacts,
    ariaLabel: "Ir para a página de contactos da Sunlive Travel",
  },
};

export default header;
