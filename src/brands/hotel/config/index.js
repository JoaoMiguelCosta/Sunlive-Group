import {
  LANG_DEFAULT,
  makeBackLink,
} from "../../../shared/config/BrandDefault.js";

import { HOTEL_BASE_PATH, HOTEL_SECTION_PATHS } from "./paths.js";
import {
  HOTEL_SOCIALS,
  HOTEL_QUICK_LINKS,
  HOTEL_PRIMARY_NAV_ITEMS,
} from "./nav.js";
import { hotelHeader } from "./header.js";
import { hotelFooterSection } from "./footer.js";

import {
  hotelHomePage,
  hotelAboutPage,
  hotelAccommodationPage,
  hotelDiningPage,
  hotelFacilitiesPage,
  hotelEventsPage,
  hotelInformationPage,
} from "./pages/index.js";

/* ✅ Re-exports */
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
    ...hotelHeader,
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
    dining: hotelDiningPage,
    facilities: hotelFacilitiesPage,
    events: hotelEventsPage,
    information: hotelInformationPage,
  },

  sections: {
    ...hotelFooterSection,
  },
};

export default hotelBrand;
