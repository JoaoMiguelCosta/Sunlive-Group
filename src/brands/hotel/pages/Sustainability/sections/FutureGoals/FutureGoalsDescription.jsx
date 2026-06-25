import sustainability from "../../../../config/pages/sustainability.js";
const futureGoals = sustainability.sections.futureGoals;
import HotelSectionDescription from "../../../../shared/ui/HotelSectionDescription/HotelSectionDescription.jsx";

export default function FutureGoalsDescription() {
  const section = futureGoals;

  if (!section?.description) return null;

  return (
    <HotelSectionDescription align="center">
      {section.description}
    </HotelSectionDescription>
  );
}
