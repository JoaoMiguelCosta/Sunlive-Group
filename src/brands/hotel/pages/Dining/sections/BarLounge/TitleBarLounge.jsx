import hotelBrand from "../../../../config/index.js";
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

export default function TitleBarLounge() {
  const content = hotelBrand?.pages?.dining?.sections?.barAndLounge ?? null;

  if (!content) return null;

  return <HotelSectionHeader label={content.headerLabel} />;
}
