import hotelBrand from "../../../../config/index.js";
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

export default function TitleCateringService() {
  const content = hotelBrand?.pages?.dining?.sections?.catering ?? null;
  const label = content?.headerLabel?.trim();

  if (!label) return null;

  return <HotelSectionHeader id="restaurant-catering-title" label={label} />;
}
