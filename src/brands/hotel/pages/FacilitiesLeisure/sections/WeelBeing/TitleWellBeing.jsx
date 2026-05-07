import hotelBrand from "../../../../config/index.js";
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

export default function TitleWellBeing({ id }) {
  const content = hotelBrand?.pages?.facilities?.sections?.wellBeing ?? null;

  if (!content?.headerLabel) return null;

  return <HotelSectionHeader id={id} label={content.headerLabel} />;
}
