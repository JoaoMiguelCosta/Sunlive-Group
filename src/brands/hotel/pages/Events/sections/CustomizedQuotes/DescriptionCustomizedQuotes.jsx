import events from "../../../../config/pages/events.js";
const customizedQuotes = events.sections.customizedQuotes;
import HotelSectionDescription from "../../../../shared/ui/HotelSectionDescription/HotelSectionDescription.jsx";

export default function DescriptionCustomizedQuotes() {
  const section = customizedQuotes;

  if (!section?.description) return null;

  return (
    <HotelSectionDescription align="center">
      {section.description}
    </HotelSectionDescription>
  );
}
