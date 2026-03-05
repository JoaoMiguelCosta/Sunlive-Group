// src/brands/sports/config/index.js
import { LANG_DEFAULT } from "../../../shared/config/BrandDefault.js";

import header from "./header.js";
import { SPORTS_BASE_PATH, SPORTS_PAGE_PATHS } from "./paths.js";
import { SPORTS_QUICKLINKS, SPORTS_PRIMARY_NAV_ITEMS } from "./nav.js";

import * as pages from "./pages/index.js";
import * as sections from "./sections/index.js";

/** @type {import("../../../shared/config/types/brand.js").BrandConfig} */
const sportsBrand = {
  key: "sports",
  brandName: "Sunlive Sports",
  lang: LANG_DEFAULT,

  paths: {
    base: SPORTS_BASE_PATH,
    pages: SPORTS_PAGE_PATHS,
  },

  // ✅ fonte única: vem do header.js
  header,

  nav: {
    quickLinks: SPORTS_QUICKLINKS,
    primaryItems: SPORTS_PRIMARY_NAV_ITEMS,
  },

  // ✅ fonte única: vem do pages/index.js
  pages: {
    ...pages,
  },

  // ✅ fonte única: vem do sections/index.js
  // inclui: academies, athletes, consultancy, ... + footer
  sections: {
    ...sections,
  },
};

export default sportsBrand;
