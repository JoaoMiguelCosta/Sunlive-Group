import HotelSectionHeader from "../../../../../shared/components/Hotel/HotelSectionHeader/HotelSectionHeader.jsx";

export default function TitleWhyChooseUs({ label }) {
  if (!label) return null;
  return <HotelSectionHeader as="h2" align="center" label={label} />;
}
