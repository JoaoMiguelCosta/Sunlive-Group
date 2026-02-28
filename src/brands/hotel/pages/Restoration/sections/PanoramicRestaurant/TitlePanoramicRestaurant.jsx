// src/brands/hotel/components/Restoration/PanoramicRestaurant/TitlePanoramicRestaurant.jsx
import hotelBrand from "../../../../config/index.js";
import HotelSectionHeader from "../../../../shared/ui//HotelSectionHeader/HotelSectionHeader.jsx";

export default function TitlePanoramicRestaurant() {
  const content = hotelBrand?.pages?.restauracao?.sections?.panoramicRestaurant;

  if (!content) return null;

  return <HotelSectionHeader label={content.headerLabel} />;
}
