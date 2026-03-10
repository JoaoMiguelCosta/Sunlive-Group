import hotelBrand from "../../../../config/index.js";
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

export default function TitleSundayBuffet() {
  const content = hotelBrand?.pages?.dining?.sections?.sundayBuffet ?? null;

  if (!content) return null;

  return <HotelSectionHeader label={content.headerLabel} />;
}
