
// src/shared/config/icons/resolveIcons.js
import { GLOBAL_ICONS } from "./global.icons.js";
import { GLOBAL_FLAGS } from "./flags.icons.js";

/**
 * Junta registry global + registry da brand.
 * - Brand pode fazer override a uma key global (prioridade da brand).
 * - Flags são globais por defeito; brandFlags é apenas para casos raros.
 */
export function resolveIcons({ brand, brandIcons = {}, brandFlags = {} } = {}) {
  const ICONS = Object.freeze({
    ...GLOBAL_ICONS,
    ...brandIcons,
  });

  const FLAGS = Object.freeze({
    ...GLOBAL_FLAGS,
    ...brandFlags,
  });

  return { brand, ICONS, FLAGS };
}