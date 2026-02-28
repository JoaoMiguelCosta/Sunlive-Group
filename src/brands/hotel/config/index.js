import {
  LANG_DEFAULT,
  makeBackLink,
} from "../../../shared/config/BrandDefault.jsx";

import { HOTEL_BASE_PATH, HOTEL_SECTION_PATHS } from "./paths.js";
import {
  HOTEL_SOCIALS,
  HOTEL_QUICK_LINKS,
  HOTEL_PRIMARY_NAV_ITEMS,
} from "./nav.js";

import { hotelHomePage } from "./pages/home.js";
import { hotelAboutPage } from "./pages/about.js";
import { hotelAccommodationPage } from "./pages/accommodation.js";
import { hotelRestorationPage } from "./pages/restoration.js";

import { hotelFooterSection } from "./footer.js";

/* ✅ Re-exports (para imports simples noutros ficheiros) */
export { HOTEL_BASE_PATH, HOTEL_SECTION_PATHS };

const hotelBrand = {
  key: "hotel",
  brandName: "Estalagem de Sangalhos - Sports & Nature Hotel",
  lang: LANG_DEFAULT,

  paths: {
    base: HOTEL_BASE_PATH,
    sections: HOTEL_SECTION_PATHS,
  },

  header: {
    lang: LANG_DEFAULT,
    socials: HOTEL_SOCIALS,
  },

  backLink: makeBackLink({
    href: "/sunlive-group",
    label: "Voltar Sunlive Group",
  }),

  nav: {
    quickLinks: HOTEL_QUICK_LINKS,
    primaryItems: HOTEL_PRIMARY_NAV_ITEMS,
  },

  pages: {
    home: hotelHomePage,
    about: hotelAboutPage,
    accommodation: hotelAccommodationPage,
    restoration: hotelRestorationPage,

    facilities: { sections: {} },
    events: { sections: {} },
    information: { sections: {} },
  },

  sections: {
    ...hotelFooterSection,
  },
};

export default hotelBrand;
