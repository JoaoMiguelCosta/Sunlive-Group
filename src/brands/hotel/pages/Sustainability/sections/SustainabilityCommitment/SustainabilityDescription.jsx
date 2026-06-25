import sustainability from "../../../../config/pages/sustainability.js";
const sustainabilityCommitment = sustainability.sections.sustainabilityCommitment;
import HotelSectionDescription from "../../../../shared/ui/HotelSectionDescription/HotelSectionDescription.jsx";

export default function SustainabilityDescription() {
  const section = sustainabilityCommitment;

  if (!section?.description) return null;

  return (
    <HotelSectionDescription align="center">
      {section.description}
    </HotelSectionDescription>
  );
}
