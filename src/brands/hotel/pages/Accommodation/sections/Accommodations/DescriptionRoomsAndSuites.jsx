import HotelSectionDescription from "../../../../shared/ui/HotelSectionDescription/HotelSectionDescription.jsx";
import accommodations from "../../../../config/sections/accommodation/accommodations.js";

export default function DescriptionRoomsAndSuites() {
  const content = accommodations?.roomsAndSuites ?? null;

  if (!content?.description) return null;

  return (
    <HotelSectionDescription align="center">
      {content.description}
    </HotelSectionDescription>
  );
}
