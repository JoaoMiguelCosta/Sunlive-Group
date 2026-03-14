import hotelBrand from "../../../../config/index.js";
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

export default function TitleSundayBuffet() {
  const content = hotelBrand?.pages?.dining?.sections?.sundayBuffet ?? null;
  const label = content?.headerLabel?.trim();

  if (!label) return null;

  return <HotelSectionHeader id="restaurant-buffet-title" label={label} />;
}
