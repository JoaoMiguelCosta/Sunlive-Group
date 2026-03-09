import { LANG_DEFAULT } from "../../../shared/config/index.js";

import {
  header,
  footer,
  SPORTS_BOOKS,
  SPORTS_BASE_PATH,
  SPORTS_PAGE_PATHS,
  SPORTS_PRIMARY_NAV_ITEMS,
  SPORTS_QUICK_LINKS,
  SPORTS_COLLABS,
  SPORTS_GATEWAY,
  BRAND_ICONS,
  BRAND_FLAGS,
  ICONS,
  FLAGS,
  BRAND_ICON_KEY_MAP,
  resolveSportsIcon,
  resolveSportsIconName,
} from "./core/index.js";

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

  header,

  nav: {
    primaryItems: SPORTS_PRIMARY_NAV_ITEMS,
  },

  quickLinks: SPORTS_QUICK_LINKS,
  gateway: SPORTS_GATEWAY,

  pages: {
    ...pages,
  },

  sections: {
    ...sections,
    footer,
  },

  icons: ICONS,
  flags: FLAGS,
  books: SPORTS_BOOKS,
};

export default sportsBrand;

export { SPORTS_BASE_PATH, SPORTS_PAGE_PATHS };
export { SPORTS_BOOKS };
export { SPORTS_GATEWAY };
export { SPORTS_QUICK_LINKS, SPORTS_COLLABS };
export { BRAND_ICONS, BRAND_FLAGS };
export { ICONS, FLAGS };
export { BRAND_ICON_KEY_MAP, resolveSportsIcon, resolveSportsIconName };
