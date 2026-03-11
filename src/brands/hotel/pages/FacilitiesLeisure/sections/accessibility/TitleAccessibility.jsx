import hotelBrand from "../../../../config/index.js";
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

export default function TitleAccessibility() {
  const content =
    hotelBrand?.pages?.facilities?.sections?.accessibility ?? null;

  if (!content) return null;

  return <HotelSectionHeader label={content.headerLabel} />;
}
