import facilitiesLeisurePage from "../../../../config/pages/facilitiesLeisure.js";
const accessibility = facilitiesLeisurePage.sections.accessibility;
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
