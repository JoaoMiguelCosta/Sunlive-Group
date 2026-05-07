import hotelBrand from "../../../../config/index.js";
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

export default function TitleFacilitiesLeisure({
  titleId = "facilities-leisure-title",
  className = "",
}) {
  const content =
    hotelBrand?.pages?.facilities?.sections?.facilitiesLeisure ?? null;

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
