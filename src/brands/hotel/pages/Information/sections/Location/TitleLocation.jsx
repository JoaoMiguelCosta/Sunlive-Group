import hotelBrand from "../../../../config/index.js";
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

export default function TitleLocation({ id }) {
  const content = hotelBrand?.pages?.information?.sections?.location ?? null;

  if (!content?.headerLabel) return null;

  return (
    <HotelSectionHeader
      id={id}
      label={content.headerLabel}
      align="center"
      as="h2"
    />
  );
}
