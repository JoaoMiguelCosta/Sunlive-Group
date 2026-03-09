import { LANG_DEFAULT } from "../../../../shared/config/BrandDefault.js";

import header from "./header.js";
import footer from "./footer.js";
import { SPORTS_BOOKS } from "./books.js";

import { SPORTS_BASE_PATH, SPORTS_PAGE_PATHS } from "./paths.js";
import { SPORTS_PRIMARY_NAV_ITEMS } from "./nav.js";
import { SPORTS_QUICK_LINKS, SPORTS_COLLABS } from "./footerLinks.js";
import { SPORTS_GATEWAY } from "./gateway.js";

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
    primaryItems: SPORTS_PRIMARY_NAV_ITEMS,
  },

  quickLinks: SPORTS_QUICK_LINKS,
  gateway: SPORTS_GATEWAY,
  collaborators: SPORTS_COLLABS,

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
