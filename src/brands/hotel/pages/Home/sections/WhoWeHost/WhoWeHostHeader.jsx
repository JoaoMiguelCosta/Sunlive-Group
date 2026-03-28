import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

export default function WhoWeHostHeader({ label, titleId }) {
  if (!label) return null;

  return (
    <HotelSectionHeader id={titleId} label={label} as="h2" align="center" />
  );
}
