// src/brands/hotel/components/Accommodation/Accommodations/TitleAccomodations.jsx
import HotelSectionHeader from "../../../../../shared/components/Hotel/HotelSectionHeader/HotelSectionHeader.jsx";

export default function TitleAccomodations({ label = "Accommodations" }) {
  return <HotelSectionHeader label={label} align="center" as="h2" />;
}
