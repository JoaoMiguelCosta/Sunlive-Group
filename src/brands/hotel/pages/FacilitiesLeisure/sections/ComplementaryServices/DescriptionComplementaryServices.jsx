import facilitiesLeisurePage from "../../../../config/pages/facilitiesLeisure.js";
const complementaryServices = facilitiesLeisurePage.sections.complementaryServices;
import HotelSectionDescription from "../../../../shared/ui/HotelSectionDescription/HotelSectionDescription.jsx";

export default function DescriptionComplementaryServices() {
  const content = complementaryServices;

  if (!content?.description) return null;

  return (
    <HotelSectionDescription align="center">
      {content.description}
    </HotelSectionDescription>
  );
}
