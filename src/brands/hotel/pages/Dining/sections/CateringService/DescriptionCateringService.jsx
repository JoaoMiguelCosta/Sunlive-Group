import hotelBrand from "../../../../config/index.js";
import HotelSectionDescription from "../../../../shared/ui/HotelSectionDescription/HotelSectionDescription.jsx";

export default function DescriptionCateringService() {
  const content = hotelBrand?.pages?.dining?.sections?.catering ?? null;

  if (!content?.description) return null;

  return (
    <HotelSectionDescription>{content.description}</HotelSectionDescription>
  );
}
