import { resolveIcons } from "../../../../shared/config/icons/resolveIcons.js";
import { BRAND_ICONS } from "./icons.js";
import { BRAND_FLAGS } from "./flags.js";

export const { ICONS, FLAGS } = resolveIcons({
  brand: "hotel",
  brandIcons: BRAND_ICONS,
  brandFlags: BRAND_FLAGS,
});
