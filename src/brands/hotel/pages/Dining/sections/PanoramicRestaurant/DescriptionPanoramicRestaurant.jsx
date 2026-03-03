// src/brands/hotel/components/Restoration/PanoramicRestaurant/DescriptionPanoramicRestaurant.jsx
import hotelBrand from "../../../../config/index.js";
import HotelSectionDescription from "../../../../shared/ui/HotelSectionDescription/HotelSectionDescription.jsx";

export default function DescriptionPanoramicRestaurant() {
  const content = hotelBrand?.pages?.restauracao?.sections?.panoramicRestaurant;

  if (!content?.description) return null;

  return (
    <HotelSectionDescription>{content.description}</HotelSectionDescription>
  );
}
