import sustainability from "../../../../config/pages/sustainability.js";
const environmentalImpact = sustainability.sections.environmentalImpact;
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

export default function EnvironmentalImpactTitle({ titleId }) {
  const section = environmentalImpact;

  if (!section?.headerLabel) return null;

  return (
    <HotelSectionHeader
      id={titleId}
      label={section.headerLabel}
      align="center"
    />
  );
}
