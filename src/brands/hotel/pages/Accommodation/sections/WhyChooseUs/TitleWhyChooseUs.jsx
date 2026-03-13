import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

export default function TitleWhyChooseUs({ id, label }) {
  if (!label) return null;

  return <HotelSectionHeader id={id} as="h2" align="center" label={label} />;
}
