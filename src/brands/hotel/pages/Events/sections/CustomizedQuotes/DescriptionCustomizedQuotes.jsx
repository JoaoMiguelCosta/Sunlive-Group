import customizedQuotes from "../../../../config/sections/events/customizedQuotes.js";
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
