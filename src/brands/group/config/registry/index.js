// src/brands/group/config/registry/index.js

import { resolveIcons } from "../../../../shared/config/registry/icons/resolveIcons.js";

import { BRAND_ICONS } from "./icons.js";
import { BRAND_FLAGS } from "./flags.js";

import { groupHomePage, groupLogosPage } from "../pages/index.js";
import { makeGroupFooter } from "./footer.js";

export { BRAND_ICONS, BRAND_FLAGS };

export const { ICONS, FLAGS } = resolveIcons({
  brand: "group",
  brandIcons: BRAND_ICONS,
  brandFlags: BRAND_FLAGS,
});

export const groupBrand = {
  key: "group",

  icons: ICONS,
  flags: FLAGS,

  pages: {
    home: groupHomePage,
    logos: groupLogosPage,
  },

  sections: {
    footer: makeGroupFooter({ contacts: groupHomePage.contacts }),
  },
};

export default groupBrand;
