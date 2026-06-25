import HotelSectionDescription from "../../../../shared/ui/HotelSectionDescription/HotelSectionDescription.jsx";
import accommodation from "../../../../config/pages/accommodation.js";
const accommodations = accommodation.sections.accommodations;

export default function DescriptionRoomsAndSuites() {
  const content = accommodations?.roomsAndSuites ?? null;

  if (!content?.description) return null;

  return (
    <HotelSectionDescription align="center">
      {content.description}
    </HotelSectionDescription>
  );
}
