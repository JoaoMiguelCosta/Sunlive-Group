const BRAND_ICON_KEY_MAP = Object.freeze({
  bus: "BusIcon",
  mail: "MailIcon",
  package: "PackageIcon",
  phone: "PhoneIcon",
  pin: "PinIcon",
  plane: "PlaneIcon",
  star: "StarIcon",
  "tour-bus": "TourBusIcon",
});

function resolveTravelIconName(iconKey) {
  if (!iconKey) return null;
  return BRAND_ICON_KEY_MAP[iconKey] ?? iconKey;
}

export function resolveTravelIcon(icons, iconKey) {
  if (!icons || !iconKey) return null;

  const resolvedIconName = resolveTravelIconName(iconKey);
  return icons[resolvedIconName] ?? null;
}
