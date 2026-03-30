import HotelHighlightBanner from "../../../../shared/ui/HotelHighlightBanner/HotelHighlightBanner.jsx";
import hotelBrand, {
  ICONS,
  resolveHotelIcon,
} from "../../../../config/index.js";

export default function ForWhomHero() {
  const content =
    hotelBrand?.pages?.accommodation?.sections?.forAllProfiles ?? null;

  if (!content) return null;

  const title = content.headerLabel || "Para Todos os Perfis";
  const description = content.description || "";
  const eyebrow = content.eyebrow || "";
  const Icon = resolveHotelIcon(ICONS, content.iconKey);

  const leftIcon = Icon ? <Icon /> : null;
  const rightIcon = Icon ? <Icon /> : null;

  return (
    <HotelHighlightBanner
      eyebrow={eyebrow}
      title={title}
      description={description}
      variant="centered"
      theme="sectionFeatured"
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      iconsEnabled={Boolean(Icon)}
    />
  );
}
