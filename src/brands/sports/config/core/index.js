import { LANG_DEFAULT } from "../../../../shared/config/BrandDefault.js";

import header from "./header.js";
import footer from "./footer.js";
import { SPORTS_BOOKS } from "./books.js";

import { SPORTS_BASE_PATH, SPORTS_PAGE_PATHS } from "./paths.js";
import { SPORTS_QUICKLINKS, SPORTS_PRIMARY_NAV_ITEMS } from "./nav.js";

import { BRAND_ICONS } from "./icons.js";
import { BRAND_FLAGS } from "./flags.js";
import { ICONS, FLAGS } from "./resolvedVisuals.js";
import {
  BRAND_ICON_KEY_MAP,
  resolveSportsIcon,
  resolveSportsIconName,
} from "./iconKeyMap.js";

import * as pages from "../pages/index.js";
import * as sections from "../sections/index.js";

/** @type {import("../../../../shared/config/types/brand.js").BrandConfig} */
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

  pages: { ...pages },

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
export { BRAND_ICONS, BRAND_FLAGS };
export { ICONS, FLAGS };
export { BRAND_ICON_KEY_MAP, resolveSportsIcon, resolveSportsIconName };
