// src/brands/hotel/components/Accommodation/Accommodations/DescriptionRoomsAndSuites.jsx
import HotelSectionDescription from "../../../../shared/ui/HotelSectionDescription/HotelSectionDescription.jsx";
import hotelBrand from "../../../../configHotel.jsx";

export default function DescriptionRoomsAndSuites() {
  const content =
    hotelBrand?.pages?.estadia?.sections?.accommodations?.roomsAndSuites ??
    null;

  if (!content?.description) return null;

  return (
    <HotelSectionDescription align="center">
      {content.description}
    </HotelSectionDescription>
  );
}
