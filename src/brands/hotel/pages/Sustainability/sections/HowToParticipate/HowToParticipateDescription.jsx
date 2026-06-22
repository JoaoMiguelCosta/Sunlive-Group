import howToParticipate from "../../../../config/sections/sustainability/howToParticipate.js";
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
