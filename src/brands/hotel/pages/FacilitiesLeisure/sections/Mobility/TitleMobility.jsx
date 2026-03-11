import hotelBrand from "../../../../config/index.js";
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

export default function TitleMobility() {
  const content = hotelBrand?.pages?.facilities?.sections?.mobility ?? null;

  if (!content) return null;

  return <HotelSectionHeader label={content.headerLabel} />;
}
