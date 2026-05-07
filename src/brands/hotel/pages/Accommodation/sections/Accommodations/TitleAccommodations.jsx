import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

export default function TitleAccommodations({
  id,
  label = "Alojamento",
  className = "",
}) {
  if (!label) return null;

  return (
    <div className={className}>
      <HotelSectionHeader id={id} label={label} align="center" as="h2" />
    </div>
  );
}
