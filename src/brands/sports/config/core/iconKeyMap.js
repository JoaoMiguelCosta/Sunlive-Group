const BRAND_ICON_KEY_MAP = Object.freeze({
  apple: "AppleIcon",
  athlete: "AthleteBarbellIcon",
  bed: "BedIcon",
  biceps: "BicepsFlexedIcon",
  bike: "BikeIcon",
  bolt: "BoltIcon",
  brain: "BrainIcon",
  brush: "BrushCleaningIcon",
  building: "Building2Icon",
  bus: "TourBusIcon",
  card: "CardIcon",
  chart: "ChartIcon",
  "chart-frame": "ChartFrameIcon",
  circus: "CircusTentIcon",
  clock: "ClockIcon",
  cog: "CogIcon",
  compass: "CompassIcon",
  consulting: "ConsultingExperienceIcon",
  dream: "DreamIcon",
  experience: "ConsultingExperienceIcon",
  eye: "EyeIcon",
  flag: "FlagIcon",
  global: "GlobeIcon",
  globe: "GlobeIcon",
  goal: "GoalIcon",
  graduation: "GraduationCapIcon",
  handshake: "HandshakeIcon",
  heart: "HeartIcon",
  luggage: "LuggageIcon",
  mail: "MailIcon",
  medal: "MedalIcon",
  monitor: "MonitorIcon",
  phone: "PhoneIcon",
  physio: "PhysicalTherapyIcon",
  pin: "PinIcon",
  plane: "PlaneIcon",
  recycle: "RecycleIcon",
  search: "SearchIcon",
  shield: "ShieldIcon",
  shirt: "ShirtIcon",
  smile: "SmileIcon",
  soup: "SoupIcon",
  speed: "SpeedIcon",
  star: "StarIcon",
  sun: "SunIcon",
  trend: "TrendUpIcon",
  trendup: "TrendUpIcon",
  users: "UsersIcon",
  video: "VideoIcon",
  workflow: "WorkflowIcon",
  basket: "BasketIcon",
  gymnastics: "GymnasticsIcon",
});

export function resolveSportsIconName(iconKey) {
  if (!iconKey) {
    return null;
  }

  return BRAND_ICON_KEY_MAP[iconKey] ?? iconKey;
}

export function resolveSportsIcon(icons, iconKey) {
  if (!icons || !iconKey) {
    return null;
  }

  const resolvedIconName = resolveSportsIconName(iconKey);

  return icons[resolvedIconName] ?? null;
}

export { BRAND_ICON_KEY_MAP };
export default BRAND_ICON_KEY_MAP;
