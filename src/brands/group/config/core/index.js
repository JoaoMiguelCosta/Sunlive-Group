import * as pages from "../pages/index.js";

import { makeGroupFooter } from "./footer.js";
import { ICONS, FLAGS } from "./resolvedVisuals.js";
import {
  GROUP_BASE_PATH,
  GROUP_LOGOS_PATH,
  GROUP_PAGE_PATHS,
} from "./paths.js";
import {
  BRAND_ICON_KEY_MAP,
  resolveGroupIcon,
  resolveGroupIconName,
} from "./iconKeyMap.js";
import { BRAND_ICONS } from "./icons.js";
import { BRAND_FLAGS } from "./flags.js";

const groupBrand = {
  key: "group",
  brandName: "Sunlive Group",

  icons: ICONS,
  flags: FLAGS,

  paths: {
    base: GROUP_BASE_PATH,
    logos: GROUP_LOGOS_PATH,
    pages: GROUP_PAGE_PATHS,
  },

  pages: {
    ...pages,
  },

  sections: {
    footer: makeGroupFooter({
      contacts: pages.home?.sections?.contacts,
    }),
  },
};

export default groupBrand;

export {
  GROUP_BASE_PATH,
  GROUP_LOGOS_PATH,
  GROUP_PAGE_PATHS,
  BRAND_ICONS,
  BRAND_FLAGS,
  ICONS,
  FLAGS,
  BRAND_ICON_KEY_MAP,
  resolveGroupIcon,
  resolveGroupIconName,
};
