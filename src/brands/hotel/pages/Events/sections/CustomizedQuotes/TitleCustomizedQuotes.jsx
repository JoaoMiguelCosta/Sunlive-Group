import customizedQuotes from "../../../../config/sections/events/customizedQuotes.js";
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
