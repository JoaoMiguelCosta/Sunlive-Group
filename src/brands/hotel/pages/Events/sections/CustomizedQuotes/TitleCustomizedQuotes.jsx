import events from "../../../../config/pages/events.js";
const customizedQuotes = events.sections.customizedQuotes;
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

export default function TitleCustomizedQuotes({ titleId }) {
  const section = customizedQuotes;

  if (!section?.headerLabel) return null;

  return (
    <HotelSectionHeader
      id={titleId}
      label={section.headerLabel}
      align="center"
    />
  );
}
