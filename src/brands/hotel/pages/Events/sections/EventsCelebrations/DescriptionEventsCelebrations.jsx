import events from "../../../../config/pages/events.js";
const eventsCelebrations = events.sections.eventsCelebrations;
import HotelSectionDescription from "../../../../shared/ui/HotelSectionDescription/HotelSectionDescription.jsx";

export default function DescriptionEventsCelebrations() {
  const section = eventsCelebrations;

  if (!section?.description) return null;

  return (
    <HotelSectionDescription align="center">
      {section.description}
    </HotelSectionDescription>
  );
}
