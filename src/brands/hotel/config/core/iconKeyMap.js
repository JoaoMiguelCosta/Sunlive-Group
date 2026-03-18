const BRAND_ICON_KEY_MAP = Object.freeze({
  water: "WaterIcon",
  "local-products": "FruitBasketIcon",
  celebration: "CelebrationIcon",
  trophy: "TrophyIcon",
  business: "BusinessPersonIcon",
  trail: "MountainIcon",
  wine: "WineIcon",
  cutlery: "UtensilsIcon",
  thermal: "ThermalIcon",
  energy: "BoltIcon",
  recycling: "RecycleIcon",
  star: "StarIcon",
  bus: "BusIcon",
  location: "PinIcon",
  heart: "HeartIcon",
  groups: "UsersIcon",
  families: "FamiliesIcon",
  athletes: "BicepsFlexedIcon",
  beds: "BedIcon",
  bike: "BikeIcon",
  waves: "WavesIcon",
  coffee: "CoffeeIcon",
  calendar: "CalendarIcon",
  chef: "ChefIcon",
  thermometer: "ThermometerIcon",
  ball: "BallIcon",
  wrench: "WrenchIcon",
  garage: "GarageIcon",
  helmet: "HelmetIcon",

  bath: "BathIcon",
  "air-conditioning": "AirVentIcon",
  tv: "TvIcon",
  wardrobe: "WardrobeIcon",
  desk: "DeskIcon",
  wifi: "WifiIcon",
  "daily-cleaning": "BrushCleaningIcon",
  "bed-linen-towels": "TowelRackIcon",

  croissant: "CroissantIcon",
  egg: "EggIcon",
  cereals: "CerealsIcon",
  milk: "MilkIcon",
  glass: "GlassIcon",
  grape: "GrapeIcon",
  honey: "HoneyIcon",
  sun: "SunIcon",
  
  clock: "ClockIcon",
  card: "CardIcon",
  refresh: "RefreshIcon",
  "cigarette-off": "CigaretteOffIcon",
  "circle-off": "CircleOffIcon",
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