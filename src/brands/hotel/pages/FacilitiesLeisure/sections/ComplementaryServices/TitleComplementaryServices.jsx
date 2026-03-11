import hotelBrand from "../../../../config/index.js";
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

export default function TitleComplementaryServices() {
  const content =
    hotelBrand?.pages?.facilities?.sections?.complementaryServices ?? null;

  if (!content) return null;

  return <HotelSectionHeader label={content.headerLabel} />;
}
