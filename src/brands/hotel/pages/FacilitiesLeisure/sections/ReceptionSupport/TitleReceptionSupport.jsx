import hotelBrand from "../../../../config/index.js";
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

export default function TitleReceptionSupport() {
  const content =
    hotelBrand?.pages?.facilities?.sections?.receptionSupport ?? null;

  if (!content) return null;

  return <HotelSectionHeader label={content.headerLabel} />;
}
