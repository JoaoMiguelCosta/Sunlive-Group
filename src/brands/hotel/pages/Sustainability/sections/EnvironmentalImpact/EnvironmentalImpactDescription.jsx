import sustainability from "../../../../config/pages/sustainability.js";
const environmentalImpact = sustainability.sections.environmentalImpact;
import HotelSectionDescription from "../../../../shared/ui/HotelSectionDescription/HotelSectionDescription.jsx";

export default function EnvironmentalImpactDescription() {
  const section = environmentalImpact;

  if (!section?.description) return null;

  return (
    <HotelSectionDescription align="center">
      {section.description}
    </HotelSectionDescription>
  );
}
