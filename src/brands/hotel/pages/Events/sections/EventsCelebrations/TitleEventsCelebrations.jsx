import events from "../../../../config/pages/events.js";
const eventsCelebrations = events.sections.eventsCelebrations;
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

export default function TitleEventsCelebrations({ titleId }) {
  const section = eventsCelebrations;

  if (!section?.headerLabel) return null;

  return (
    <HotelSectionHeader
      id={titleId}
      label={section.headerLabel}
      align="center"
    />
  );
}
