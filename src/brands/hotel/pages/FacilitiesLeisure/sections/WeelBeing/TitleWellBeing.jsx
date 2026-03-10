import hotelBrand from "../../../../config/index.js";
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

export default function TitleWellBeing() {
  const content = hotelBrand?.pages?.facilities?.sections?.wellBeing ?? null;

  if (!content) return null;

  return <HotelSectionHeader label={content.headerLabel} />;
}
