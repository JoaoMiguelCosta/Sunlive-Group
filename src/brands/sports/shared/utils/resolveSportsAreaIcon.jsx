import { resolveSportsIcon } from "../../config/core/iconKeyMap.js";
import { ICONS } from "../../config/core/resolvedVisuals.js";

export function resolveSportsAreaIcon(iconKey, className) {
  const Icon = resolveSportsIcon(ICONS, iconKey);
  return Icon ? <Icon className={className} /> : null;
}
