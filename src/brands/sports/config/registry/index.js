// src/brands/sports/config/registry/index.js
import { LANG_DEFAULT } from "../../../../shared/config/BrandDefault.js";
import { resolveIcons } from "../../../../shared/config/registry/icons/resolveIcons.js";

import header from "./header.js";
import footer from "./footer.js";

import { SPORTS_BASE_PATH, SPORTS_PAGE_PATHS } from "./paths.js";
import { SPORTS_QUICKLINKS, SPORTS_PRIMARY_NAV_ITEMS } from "./nav.js";

import { BRAND_ICONS } from "./icons.js";
import { BRAND_FLAGS } from "./flags.js";

import * as pages from "../pages/index.js"; // ✅ config/pages
import * as sections from "../sections/index.js";
export { SPORTS_BASE_PATH, SPORTS_PAGE_PATHS };
export { BRAND_ICONS, BRAND_FLAGS };

export const { ICONS, FLAGS } = resolveIcons({
  brand: "sports",
  brandIcons: BRAND_ICONS,
  brandFlags: BRAND_FLAGS,
});

/** @type {import("../../../shared/config/types/brand.js").BrandConfig} */
const sportsBrand = {
  key: "sports",
  brandName: "Sunlive Sports",
  lang: LANG_DEFAULT,

  paths: {
    base: SPORTS_BASE_PATH,
    pages: SPORTS_PAGE_PATHS,
  },

  header,

  nav: {
    quickLinks: SPORTS_QUICKLINKS,
    primaryItems: SPORTS_PRIMARY_NAV_ITEMS,
  },

  pages: {
    ...pages,
  },

  // ✅ mantém API: sections inclui footer (agora vem do registry)
  sections: {
    ...sections,
    footer,
  },

  icons: ICONS,
  flags: FLAGS,
};

export default sportsBrand;
