const BRAND_ICON_KEY_MAP = Object.freeze({});

export function resolveGroupIconName(iconKey) {
  if (!iconKey) return null;
  return BRAND_ICON_KEY_MAP[iconKey] ?? iconKey;
}

export function resolveGroupIcon(icons, iconKey) {
  if (!icons || !iconKey) return null;

  const resolvedIconName = resolveGroupIconName(iconKey);
  return icons[resolvedIconName] ?? null;
}

export { BRAND_ICON_KEY_MAP };
export default BRAND_ICON_KEY_MAP;
