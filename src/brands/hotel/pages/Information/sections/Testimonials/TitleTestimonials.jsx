import hotelBrand from "../../../../config/index.js";
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

export default function TitleTestimonials() {
  const content =
    hotelBrand?.pages?.information?.sections?.testimonials ?? null;

  if (!content) return null;

  return <HotelSectionHeader label={content.headerLabel} />;
}
