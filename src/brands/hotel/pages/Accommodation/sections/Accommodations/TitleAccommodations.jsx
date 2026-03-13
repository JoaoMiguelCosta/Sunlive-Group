import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

export default function TitleAccommodations({ id, label = "Alojamento" }) {
  return <HotelSectionHeader id={id} label={label} align="center" as="h2" />;
}
