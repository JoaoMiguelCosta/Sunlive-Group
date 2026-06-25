import facilitiesLeisurePage from "../../../../config/pages/facilitiesLeisure.js";
const receptionSupport = facilitiesLeisurePage.sections.receptionSupport;
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

export default function TitleReceptionSupport({ titleId }) {
  const content = receptionSupport;

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
