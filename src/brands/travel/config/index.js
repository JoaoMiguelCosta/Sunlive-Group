// src/brands/travel/config/index.js
import { LANG_DEFAULT } from "../../../shared/config/BrandDefault.jsx";

import travelHeader from "./header.js";
import travelIcons from "./icons.js";
import travelFlags from "./flags.js";
import TRAVEL_NAV from "./nav.js";
import { TRAVEL_BASE_PATH, TRAVEL_PAGE_PATHS } from "./paths.js";

import { home } from "./pages/index.js";

import {
  logisticsSolutions,
  domesticDestinations,
  internationalDestinations,
  partnerHotels,
  travelPartners,
  testimonialsAndMetrics,
  contactCTA,
  footer,
} from "./sections/index.js";

/** @type {any} */
const travelBrand = {
  key: "travel",
  brandName: "Sunlive Travel",
  lang: LANG_DEFAULT,

  paths: {
    base: TRAVEL_BASE_PATH,
    pages: TRAVEL_PAGE_PATHS,
  },

  header: {
    backLink: travelHeader.backLink,
    logo: travelHeader.logo,
    lang: travelHeader.lang,
    socials: travelHeader.socials,
  },

  nav: {
    primaryItems: TRAVEL_NAV,
  },

  pages: {
    home,
  },

  sections: {
    logisticsSolutions,
    domesticDestinations,
    internationalDestinations,
    partnerHotels,
    travelPartners,
    testimonialsAndMetrics,
    contactCTA,
    footer,
  },

  // extras úteis (se o UI já os consumir)
  icons: travelIcons,
  flags: travelFlags,
};

export default travelBrand;
