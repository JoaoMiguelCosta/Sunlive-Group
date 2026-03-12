import hotelBrand from "../../../../config/index.js";
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

export default function TitleLocation() {
  const content = hotelBrand?.pages?.information?.sections?.location ?? null;

  if (!content) return null;

  return <HotelSectionHeader label={content.headerLabel} />;
}
