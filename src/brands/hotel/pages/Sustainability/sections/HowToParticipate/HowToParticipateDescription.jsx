import sustainability from "../../../../config/pages/sustainability.js";
const howToParticipate = sustainability.sections.howToParticipate;
import HotelSectionDescription from "../../../../shared/ui/HotelSectionDescription/HotelSectionDescription.jsx";

export default function HowToParticipateDescription() {
  const section = howToParticipate;

  if (!section?.description) return null;

  return (
    <HotelSectionDescription align="center">
      {section.description}
    </HotelSectionDescription>
  );
}
