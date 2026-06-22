import environmentalImpact from "../../../../config/sections/sustainability/environmentalImpact.js";
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
