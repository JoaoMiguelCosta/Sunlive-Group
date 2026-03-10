import hotelBrand from "../../../../config/index.js";
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

export default function TitleCateringService() {
  const content = hotelBrand?.pages?.dining?.sections?.catering ?? null;

  if (!content) return null;

  return <HotelSectionHeader label={content.headerLabel} />;
}
