import howToParticipate from "../../../../config/sections/sustainability/howToParticipate.js";
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

export default function HowToParticipateTitle({ titleId }) {
  const section = howToParticipate;

  if (!section?.headerLabel) return null;

  return (
    <HotelSectionHeader
      id={titleId}
      label={section.headerLabel}
      align="center"
    />
  );
}
