import HotelSectionDescription from "../../../../shared/ui/HotelSectionDescription/HotelSectionDescription.jsx";
import hotelBrand from "../../../../config/registry/index.js";

export default function DescriptionRoomsAndSuites() {
  const content =
    hotelBrand?.pages?.accommodation?.sections?.accommodations
      ?.roomsAndSuites ?? null;

  if (!content?.description) return null;

  return (
    <HotelSectionDescription align="center">
      {content.description}
    </HotelSectionDescription>
  );
}
