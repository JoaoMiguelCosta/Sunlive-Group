import { LANG_DEFAULT } from "../../../../shared/config/BrandDefault.js";

import header from "./header.js";
import footer from "./footer.js";
import { TRAVEL_NAV } from "./nav.js";
import { TRAVEL_BASE_PATH, TRAVEL_PAGE_PATHS } from "./paths.js";
import { ICONS, FLAGS } from "./resolvedVisuals.js";

import * as pages from "../pages/index.js";
import * as sections from "../sections/index.js";

/** @type {import("../../../../shared/config/types/brand.js").BrandConfig} */
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

  pages: { ...pages },

  sections: {
    ...sections,
    footer,
  },

  icons: ICONS,
  flags: FLAGS,
};

export default travelBrand;
