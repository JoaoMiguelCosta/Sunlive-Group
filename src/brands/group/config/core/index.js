import { LANG_DEFAULT } from "../../../../shared/config/BrandDefault.js";

import header from "./header.js";
import { makeGroupFooter } from "./footer.js";
import { GROUP_BOOKS } from "./books.js";
import { GROUP_CONTACTS } from "./contacts.js";

import { BRAND_ICONS } from "./icons.js";
import { BRAND_FLAGS } from "./flags.js";
import { ICONS, FLAGS } from "./resolvedVisuals.js";
import {
  BRAND_ICON_KEY_MAP,
  resolveGroupIcon,
  resolveGroupIconName,
} from "./iconKeyMap.js";
import {
  GROUP_BASE_PATH,
  GROUP_LOGOS_PATH,
  GROUP_PAGE_PATHS,
} from "./paths.js";

import * as pages from "../pages/index.js";

/** @type {import("../../../../shared/config/types/brand.js").BrandConfig} */
const groupBrand = {
  key: "group",
  brandName: "Sunlive Group",
  lang: LANG_DEFAULT,

  paths: {
    base: GROUP_BASE_PATH,
    logos: GROUP_LOGOS_PATH,
    pages: GROUP_PAGE_PATHS,
  },

  header,

  nav: {
    primaryItems: [],
  },

  pages: {
    ...pages,
  },

  sections: {
    footer: makeGroupFooter({
      contacts: GROUP_CONTACTS,
    }),
  },

  icons: ICONS,
  flags: FLAGS,
  books: GROUP_BOOKS,
};

export default groupBrand;

export {
  GROUP_BASE_PATH,
  GROUP_LOGOS_PATH,
  GROUP_PAGE_PATHS,
  GROUP_BOOKS,
  GROUP_CONTACTS,
  BRAND_ICONS,
  BRAND_FLAGS,
  ICONS,
  FLAGS,
  BRAND_ICON_KEY_MAP,
  resolveGroupIcon,
  resolveGroupIconName,
};
