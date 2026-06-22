import accessibility from "../../../../config/sections/facilities/accessibility.js";
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

export default function TitleAccessibility({ titleId }) {
  const content = accessibility;

  if (!content?.headerLabel) return null;

  return (
    <HotelSectionHeader
      id={titleId}
      label={content.headerLabel}
      as="h2"
      align="center"
    />
  );
}
