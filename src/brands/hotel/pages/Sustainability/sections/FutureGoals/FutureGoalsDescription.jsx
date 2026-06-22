import futureGoals from "../../../../config/sections/sustainability/futureGoals.js";
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
