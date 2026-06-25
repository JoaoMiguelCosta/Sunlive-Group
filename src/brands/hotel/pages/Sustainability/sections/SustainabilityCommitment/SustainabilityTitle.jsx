import sustainability from "../../../../config/pages/sustainability.js";
const sustainabilityCommitment = sustainability.sections.sustainabilityCommitment;
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

export default function SustainabilityTitle({ titleId }) {
  const section = sustainabilityCommitment;

  if (!section?.headerLabel) return null;

  return (
    <HotelSectionHeader
      id={titleId}
      label={section.headerLabel}
      align="center"
    />
  );
}
