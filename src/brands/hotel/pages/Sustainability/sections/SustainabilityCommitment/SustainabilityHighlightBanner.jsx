import hotelBrand from "../../../../config/index.js";
import HotelHighlightBanner from "../../../../shared/ui/HotelHighlightBanner/HotelHighlightBanner.jsx";

export default function SustainabilityHighlightBanner() {
  const section =
    hotelBrand?.pages?.sustainability?.sections?.sustainabilityCommitment ??
    null;

  const banner = section?.highlightBanner ?? null;

  if (!banner?.title && !banner?.description) return null;

  return (
    <HotelHighlightBanner
      title={banner.title}
      description={banner.description}
      variant={banner.variant ?? "centered"}
      iconsEnabled={banner.iconsEnabled ?? false}
      leftIcon={null}
      rightIcon={null}
    />
  );
}
