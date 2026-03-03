import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

/**
 * HotelSustainabilityHeader
 * Wrapper que usa a HotelSectionHeader reutilizável.
 *
 * Props:
 *  - label: string (obrigatório)
 *  - titleId?: string
 */
export default function HotelSustainabilityHeader({ label, titleId }) {
  if (!label) return null;

  return (
    <div id={titleId}>
      <HotelSectionHeader label={label} as="h2" />
    </div>
  );
}
