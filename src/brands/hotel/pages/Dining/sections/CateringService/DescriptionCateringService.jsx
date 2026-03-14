import hotelBrand from "../../../../config/index.js";
import HotelSectionDescription from "../../../../shared/ui/HotelSectionDescription/HotelSectionDescription.jsx";

export default function DescriptionCateringService() {
  const content = hotelBrand?.pages?.dining?.sections?.catering ?? null;

  const text = content?.description?.trim();

  if (!text) return null;

  return (
    <HotelSectionDescription align="center">{text}</HotelSectionDescription>
  );
}
