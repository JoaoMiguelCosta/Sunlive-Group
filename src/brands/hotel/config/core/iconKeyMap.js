const BRAND_ICON_KEY_MAP = Object.freeze({
  energy: "BoltIcon",
  water: "WaterIcon",
  recycling: "RecycleIcon",
  "local-products": "FruitBasketIcon",

  bolt: "BoltIcon",
  recycle: "RecycleIcon",
  basket: "FruitBasketIcon",
  fruit: "FruitBasketIcon",
});

export function resolveHotelIconName(iconKey) {
  if (!iconKey) return null;
  return BRAND_ICON_KEY_MAP[iconKey] ?? iconKey;
}

export function resolveHotelIcon(icons, iconKey) {
  if (!icons || !iconKey) return null;

  const resolvedIconName = resolveHotelIconName(iconKey);
  return icons[resolvedIconName] ?? null;
}

export { BRAND_ICON_KEY_MAP };
export default BRAND_ICON_KEY_MAP;
