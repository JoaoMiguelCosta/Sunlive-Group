import location from "../../../../config/sections/information/location.js";
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

export default function TitleLocation({ titleId }) {
  const content = location;

  if (!content?.headerLabel) return null;

  return (
    <HotelSectionHeader
      id={titleId}
      label={content.headerLabel}
      align="center"
      as="h2"
    />
  );
}
