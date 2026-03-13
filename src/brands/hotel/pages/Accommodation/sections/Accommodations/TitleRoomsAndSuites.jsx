import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";
import hotelBrand from "../../../../config/index.js";

export default function TitleRoomsAndSuites() {
  const content =
    hotelBrand?.pages?.accommodation?.sections?.accommodations
      ?.roomsAndSuites ?? null;

  if (!content?.headerLabel) return null;

  return (
    <HotelSectionHeader label={content.headerLabel} align="center" as="h2" />
  );
}
