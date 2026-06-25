import facilitiesLeisurePage from "../../../../config/pages/facilitiesLeisure.js";
const wellBeing = facilitiesLeisurePage.sections.wellBeing;
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

export default function TitleWellBeing({ id }) {
  const content = wellBeing;

  if (!content?.headerLabel) return null;

  return <HotelSectionHeader id={id} label={content.headerLabel} />;
}
