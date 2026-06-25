import sustainability from "../../../../config/pages/sustainability.js";
const futureGoals = sustainability.sections.futureGoals;
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
