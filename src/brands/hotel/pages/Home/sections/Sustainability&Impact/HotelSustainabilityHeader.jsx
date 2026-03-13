import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";
import styles from "./HotelSustainabilityHeader.module.css";

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
    <div id={titleId} className={styles.headerWrap}>
      <HotelSectionHeader label={label} as="h2" align="center" />
    </div>
  );
}
