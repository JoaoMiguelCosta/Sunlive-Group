import hotelBrand from "../../../../config/registry/index.js";
import HotelSectionDescription from "../../../../shared/ui/HotelSectionDescription/HotelSectionDescription.jsx";

export default function DescriptionPanoramicRestaurant() {
  const content =
    hotelBrand?.pages?.dining?.sections?.panoramicRestaurant ?? null;

  if (!content?.description) return null;

  return (
    <HotelSectionDescription>{content.description}</HotelSectionDescription>
  );
}
