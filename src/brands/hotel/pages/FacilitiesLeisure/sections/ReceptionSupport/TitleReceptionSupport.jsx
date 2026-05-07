import hotelBrand from "../../../../config/index.js";
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

export default function TitleReceptionSupport({ titleId }) {
  const content =
    hotelBrand?.pages?.facilities?.sections?.receptionSupport ?? null;

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
