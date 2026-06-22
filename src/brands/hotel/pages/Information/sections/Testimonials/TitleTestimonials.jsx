import testimonials from "../../../../config/sections/information/testimonials.js";
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

export default function TitleTestimonials({ titleId }) {
  const content = testimonials;

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
