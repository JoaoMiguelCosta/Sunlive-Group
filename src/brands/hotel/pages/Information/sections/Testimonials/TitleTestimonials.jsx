import information from "../../../../config/pages/information.js";
const testimonials = information.sections.testimonials;
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
