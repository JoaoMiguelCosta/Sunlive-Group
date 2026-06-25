import facilitiesLeisurePage from "../../../../config/pages/facilitiesLeisure.js";
const accessibility = facilitiesLeisurePage.sections.accessibility;
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
