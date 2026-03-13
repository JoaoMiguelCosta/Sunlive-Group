import hotelBrand from "../../../../config/index.js";
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

export default function TitleContacts() {
  const section = hotelBrand?.pages?.information?.sections?.contacts ?? null;

  if (!section?.headerLabel) return null;

  return <HotelSectionHeader label={section.headerLabel} />;
}
