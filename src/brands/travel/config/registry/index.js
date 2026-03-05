// src/brands/travel/config/registry/index.js
import { LANG_DEFAULT } from "../../../../shared/config/BrandDefault.js";
import { resolveIcons } from "../../../../shared/config/registry/icons/resolveIcons.js";

import paths from "./paths.js";
import nav from "./nav.js";
import header from "./header.js";
import footer from "./footer.js";

import { BRAND_ICONS } from "./icons.js";
import { BRAND_FLAGS } from "./flags.js";

import { home } from "../pages/index.js";
import * as sections from "../sections/index.js";

export { paths, nav, header, footer };
export { BRAND_ICONS, BRAND_FLAGS };

export const { ICONS, FLAGS } = resolveIcons({
  brand: "travel",
  brandIcons: BRAND_ICONS,
  brandFlags: BRAND_FLAGS,
});

const travelBrand = {
  key: "travel",
  brandName: "Sunlive Travel",
  lang: LANG_DEFAULT,

  paths,
  header,
  nav,

  pages: {
    home,
  },

  // ✅ footer vem do registry e é injetado aqui
  sections: {
    ...sections,
    footer,
  },

  icons: ICONS,
  flags: FLAGS,
};

export default travelBrand;
