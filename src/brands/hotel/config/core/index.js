import { LANG_DEFAULT } from "../../../../shared/config/BrandDefault.js";

import header from "./header.js";
import footer from "./footer.js";
import { HOTEL_BOOKS } from "./books.js";

import { HOTEL_BASE_PATH, HOTEL_PAGE_PATHS } from "./paths.js";
import { HOTEL_QUICK_LINKS, HOTEL_PRIMARY_NAV_ITEMS } from "./nav.js";

import { BRAND_ICONS } from "./icons.js";
import { BRAND_FLAGS } from "./flags.js";
import { ICONS, FLAGS } from "./resolvedVisuals.js";
import {
  BRAND_ICON_KEY_MAP,
  resolveHotelIcon,
  resolveHotelIconName,
} from "./iconKeyMap.js";

import * as pages from "../pages/index.js";

/** @type {import("../../../../shared/config/types/brand.js").BrandConfig} */
const hotelBrand = {
  key: "hotel",
  brandName: "Estalagem de Sangalhos - Sports & Nature Hotel",
  lang: LANG_DEFAULT,

  paths: {
    base: HOTEL_BASE_PATH,
    pages: HOTEL_PAGE_PATHS,
  },

  header,

  nav: {
    primaryItems: HOTEL_PRIMARY_NAV_ITEMS,
  },

  quickLinks: HOTEL_QUICK_LINKS,

  pages: {
    ...pages,
  },

  sections: {
    footer,
  },

  icons: ICONS,
  flags: FLAGS,
  books: HOTEL_BOOKS,
};

export default hotelBrand;

export {
  HOTEL_BASE_PATH,
  HOTEL_PAGE_PATHS,
  HOTEL_BOOKS,
  HOTEL_QUICK_LINKS,
  BRAND_ICONS,
  BRAND_FLAGS,
  ICONS,
  FLAGS,
  BRAND_ICON_KEY_MAP,
  resolveHotelIcon,
  resolveHotelIconName,
};
