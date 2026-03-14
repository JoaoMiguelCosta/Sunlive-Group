import hotelBrand from "../../../../config/index.js";
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

export default function TitleBarLounge() {
  const content = hotelBrand?.pages?.dining?.sections?.barAndLounge ?? null;
  const label = content?.headerLabel?.trim();

  if (!label) return null;

  return <HotelSectionHeader id="restaurant-bar-lounge-title" label={label} />;
}
