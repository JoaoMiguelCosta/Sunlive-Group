// src/brands/hotel/components/Restoration/PanoramicRestaurant/TitlePanoramicRestaurant.jsx
import hotelBrand from "../../../configHotel.jsx";
import HotelSectionHeader from "../../../../../shared/components/hotel/HotelSectionHeader/HotelSectionHeader.jsx";

export default function TitlePanoramicRestaurant() {
  const content = hotelBrand?.pages?.restauracao?.sections?.panoramicRestaurant;

  if (!content) return null;

  return <HotelSectionHeader label={content.headerLabel} />;
}
