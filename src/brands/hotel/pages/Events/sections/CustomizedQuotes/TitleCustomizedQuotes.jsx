import hotelBrand from "../../../../config/index.js";
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

export default function TitleCustomizedQuotes() {
  const section = hotelBrand?.pages?.events?.sections?.customizedQuotes ?? null;

  if (!section?.headerLabel) return null;

  return <HotelSectionHeader label={section.headerLabel} align="center" />;
}
