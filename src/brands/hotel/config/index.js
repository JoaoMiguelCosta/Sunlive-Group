import { LANG_DEFAULT } from "../../../shared/config/index.js";

import {
  header,
  footer,
  HOTEL_BOOKS,
  HOTEL_COMPANY,
  HOTEL_BASE_PATH,
  HOTEL_PAGE_PATHS,
  HOTEL_QUICK_LINKS,
  HOTEL_PRIMARY_NAV_ITEMS,
  BRAND_ICONS,
  BRAND_FLAGS,
  ICONS,
  FLAGS,
  BRAND_ICON_KEY_MAP,
  resolveHotelIcon,
  resolveHotelIconName,
} from "./core/index.js";

import * as pages from "./pages/index.js";
import * as sections from "./sections/index.js";

/** @type {import("../../../shared/config/types/brand.js").BrandConfig} */
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
    ...sections,
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
  HOTEL_COMPANY,
  HOTEL_QUICK_LINKS,
  HOTEL_PRIMARY_NAV_ITEMS,
  BRAND_ICONS,
  BRAND_FLAGS,
  ICONS,
  FLAGS,
  BRAND_ICON_KEY_MAP,
  resolveHotelIcon,
  resolveHotelIconName,
};
