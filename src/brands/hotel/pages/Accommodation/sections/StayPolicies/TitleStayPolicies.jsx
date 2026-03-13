import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

export default function TitleStayPolicies({ id, label }) {
  if (!label) return null;

  return <HotelSectionHeader id={id} as="h2" align="center" label={label} />;
}
