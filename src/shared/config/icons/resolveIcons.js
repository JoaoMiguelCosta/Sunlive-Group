import { GLOBAL_ICONS } from "./global.icons.js";
import { GLOBAL_FLAGS } from "./flags.icons.js";

export function resolveIcons({ brandIcons = {}, brandFlags = {} } = {}) {
  const ICONS = Object.freeze({
    ...GLOBAL_ICONS,
    ...brandIcons,
  });

  const FLAGS = Object.freeze({
    ...GLOBAL_FLAGS,
    ...brandFlags,
  });

  return { ICONS, FLAGS };
}

export default resolveIcons;
