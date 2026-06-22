import accessibility from "../../../../config/sections/facilities/accessibility.js";
import HotelSectionDescription from "../../../../shared/ui/HotelSectionDescription/HotelSectionDescription.jsx";

export default function DescriptionAccessibility() {
  const content = accessibility;

  if (!content?.description) return null;

  return (
    <HotelSectionDescription align="center">
      {content.description}
    </HotelSectionDescription>
  );
}
