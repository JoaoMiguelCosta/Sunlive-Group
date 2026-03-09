import { LANG_DEFAULT } from "../../../shared/config/index.js";

import {
  header,
  footer,
  TRAVEL_BOOKS,
  TRAVEL_BASE_PATH,
  TRAVEL_PAGE_PATHS,
  TRAVEL_NAV,
  TRAVEL_CONTACT_CHANNELS,
  BRAND_ICONS,
  BRAND_FLAGS,
  ICONS,
  FLAGS,
  BRAND_ICON_KEY_MAP,
  resolveTravelIcon,
  resolveTravelIconName,
} from "./core/index.js";

import * as pages from "./pages/index.js";
import * as sections from "./sections/index.js";

/** @type {import("../../../shared/config/types/brand.js").BrandConfig} */
const travelBrand = {
  key: "travel",
  brandName: "Sunlive Travel",
  lang: LANG_DEFAULT,

  paths: {
    base: TRAVEL_BASE_PATH,
    pages: TRAVEL_PAGE_PATHS,
  },

  header,

  nav: {
    primaryItems: TRAVEL_NAV,
  },

  pages: {
    ...pages,
  },

  sections: {
    ...sections,
    footer,
  },

  icons: ICONS,
  flags: FLAGS,
  books: TRAVEL_BOOKS,

  contactChannels: TRAVEL_CONTACT_CHANNELS,
};

export default travelBrand;

export { TRAVEL_BASE_PATH, TRAVEL_PAGE_PATHS };
export { TRAVEL_BOOKS };
export { BRAND_ICONS, BRAND_FLAGS };
export { ICONS, FLAGS };
export { BRAND_ICON_KEY_MAP, resolveTravelIcon, resolveTravelIconName };
export { TRAVEL_CONTACT_CHANNELS };
