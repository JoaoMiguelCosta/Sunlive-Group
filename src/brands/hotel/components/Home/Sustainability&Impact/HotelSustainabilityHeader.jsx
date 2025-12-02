// src/brands/hotel/pages/home/sections/Sustainability&Impact/HotelSustainabilityHeader.jsx
import HotelSectionHeader from "../../../../../shared/components/Hotel/HotelSectionHeader//HotelSectionHeader.jsx"
/**
 * HotelSustainabilityHeader
 * Wrapper que usa a HotelSectionHeader reutilizável.
 *
 * Props:
 *  - label: string (obrigatório)
 *  - id?: string
 */
export default function HotelSustainabilityHeader({ label, id }) {
  if (!label) return null;

  return <HotelSectionHeader id={id} label={label} as="h2" />;
}
