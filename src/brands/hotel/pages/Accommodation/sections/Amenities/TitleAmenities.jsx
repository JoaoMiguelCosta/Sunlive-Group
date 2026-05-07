import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

export default function TitleAmenities({
  id,
  label = "Comodidades Incluídas",
}) {
  if (!label) return null;

  return <HotelSectionHeader id={id} label={label} align="center" as="h2" />;
}
