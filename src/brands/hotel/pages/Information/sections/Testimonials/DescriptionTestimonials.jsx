import hotelBrand from "../../../../config/index.js";
import HotelSectionDescription from "../../../../shared/ui/HotelSectionDescription/HotelSectionDescription.jsx";

export default function DescriptionTestimonials() {
  const section = hotelBrand?.pages?.information?.sections?.testimonials;

  if (!section?.description) return null;

  return (
    <HotelSectionDescription>{section.description}</HotelSectionDescription>
  );
}
