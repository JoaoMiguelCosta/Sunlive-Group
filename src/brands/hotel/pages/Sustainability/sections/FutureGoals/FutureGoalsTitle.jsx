import futureGoals from "../../../../config/sections/sustainability/futureGoals.js";
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

export default function FutureGoalsTitle({ titleId }) {
  const section = futureGoals;

  if (!section?.headerLabel) return null;

  return (
    <HotelSectionHeader
      id={titleId}
      label={section.headerLabel}
      align="center"
    />
  );
}
