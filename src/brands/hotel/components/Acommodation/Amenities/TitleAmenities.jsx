import HotelSectionHeader from "../../../../../shared/components/Hotel/HotelSectionHeader/HotelSectionHeader.jsx";

export default function TitleAmenities({ label = "Comodidades Incluídas" }) {
  return <HotelSectionHeader label={label} align="center" as="h2" />;
}
