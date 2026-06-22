import complementaryServices from "../../../../config/sections/facilities/complementaryServices.js";
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

export default function TitleComplementaryServices({ titleId }) {
  const content = complementaryServices;

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
