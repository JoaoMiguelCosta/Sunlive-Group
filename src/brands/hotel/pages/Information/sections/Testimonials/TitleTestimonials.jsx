import hotelBrand from "../../../../config/index.js";
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

export default function TitleTestimonials({ titleId }) {
  const content =
    hotelBrand?.pages?.information?.sections?.testimonials ?? null;

  if (!content?.headerLabel) return null;

  return (
    <HotelSectionHeader
      id={titleId}
      label={content.headerLabel}
      align="center"
      as="h2"
    />
  );
}
