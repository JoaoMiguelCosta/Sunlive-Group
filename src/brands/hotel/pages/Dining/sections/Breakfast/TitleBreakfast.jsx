import hotelBrand from "../../../../config/index.js";
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

export default function TitleBreakfast() {
  const content = hotelBrand?.pages?.dining?.sections?.breakfast ?? null;

  if (!content) return null;

  return <HotelSectionHeader label={content.headerLabel} />;
}
