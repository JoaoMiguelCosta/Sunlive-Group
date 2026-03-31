import hotelBrand from "../../../../config/index.js";
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

export default function TitleRestaurant() {
  const content = hotelBrand?.pages?.dining?.sections?.restaurant ?? null;
  const label = content?.headerLabel?.trim();

  if (!label) return null;

  return <HotelSectionHeader id="restauracao-title" label={label} />;
}
