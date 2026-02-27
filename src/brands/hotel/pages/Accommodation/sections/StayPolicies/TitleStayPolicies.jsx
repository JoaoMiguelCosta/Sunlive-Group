import HotelSectionHeader from "../../../../shared/ui//HotelSectionHeader/HotelSectionHeader.jsx";

export default function TitleStayPolicies({ label }) {
  if (!label) return null;

  return <HotelSectionHeader as="h2" align="center" label={label} />;
}
