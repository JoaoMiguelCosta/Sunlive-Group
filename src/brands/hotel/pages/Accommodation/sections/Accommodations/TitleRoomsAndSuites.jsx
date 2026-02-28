// src/brands/hotel/components/Accommodation/Accommodations/TitleRoomsAndSuites.jsx
import HotelSectionHeader from "../../../../shared/ui//HotelSectionHeader/HotelSectionHeader.jsx";
import hotelBrand from "../../../../config/index.js";

export default function TitleRoomsAndSuites() {
  const content =
    hotelBrand?.pages?.estadia?.sections?.accommodations?.roomsAndSuites ??
    null;

  if (!content) return null;

  return (
    <HotelSectionHeader
      id={content.id}
      label={content.headerLabel}
      align="center"
      as="h2"
    />
  );
}
