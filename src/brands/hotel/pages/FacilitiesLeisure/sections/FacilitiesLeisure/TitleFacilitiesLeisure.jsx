import facilitiesLeisure from "../../../../config/sections/facilities/facilitiesLeisure.js";
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

export default function TitleFacilitiesLeisure({
  titleId = "facilities-leisure-title",
  className = "",
}) {
  const content = facilitiesLeisure;

  if (!content?.headerLabel) return null;

  return (
    <HotelSectionHeader
      id={titleId}
      label={content.headerLabel}
      as="h2"
      align="center"
      className={className}
    />
  );
}
