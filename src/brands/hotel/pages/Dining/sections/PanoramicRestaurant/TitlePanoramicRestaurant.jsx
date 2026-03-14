import hotelBrand from "../../../../config/index.js";
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

export default function TitlePanoramicRestaurant() {
  const content =
    hotelBrand?.pages?.dining?.sections?.panoramicRestaurant ?? null;

  const label = content?.headerLabel?.trim();

  if (!label) return null;

  return <HotelSectionHeader id="restaurante-panoramico-title" label={label} />;
}
