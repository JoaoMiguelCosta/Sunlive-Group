import { LANG_DEFAULT } from "../../../shared/config/index.js";

import {
  header,
  groupFooter,
  GROUP_BOOKS,
  GROUP_COMPANY,
  GROUP_CONTACTS,
  GROUP_BUSINESS_UNITS,
  GROUP_REGIONAL_OFFICES,
  PARTNER_LINKS,
  PARTNERS_TITLE,
  GROUP_SOCIALS,
  GROUP_NAV_PRIMARY,
  BRAND_ICONS,
  BRAND_FLAGS,
  ICONS,
  FLAGS,
  BRAND_ICON_KEY_MAP,
  resolveGroupIcon,
  resolveGroupIconName,
  GROUP_BASE_PATH,
  GROUP_LOGOS_PATH,
  CONTACT_UNIT_SLUGS,
  GROUP_PAGE_PATHS,
} from "./core/index.js";

import * as pages from "./pages/index.js";

/** @type {import("../../../shared/config/types/brand.js").BrandConfig} */
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
    primaryItems: GROUP_NAV_PRIMARY,
  },

  pages: {
    ...pages,
  },

  sections: {
    footer: groupFooter,
  },

  icons: ICONS,
  flags: FLAGS,
  books: GROUP_BOOKS,
};

export default groupBrand;

export {
  GROUP_BASE_PATH,
  GROUP_LOGOS_PATH,
  CONTACT_UNIT_SLUGS,
  GROUP_PAGE_PATHS,
  GROUP_BOOKS,
  GROUP_COMPANY,
  GROUP_CONTACTS,
  GROUP_BUSINESS_UNITS,
  GROUP_REGIONAL_OFFICES,
  PARTNER_LINKS,
  PARTNERS_TITLE,
  GROUP_SOCIALS,
  GROUP_NAV_PRIMARY,
  BRAND_ICONS,
  BRAND_FLAGS,
  ICONS,
  FLAGS,
  BRAND_ICON_KEY_MAP,
  resolveGroupIcon,
  resolveGroupIconName,
};
