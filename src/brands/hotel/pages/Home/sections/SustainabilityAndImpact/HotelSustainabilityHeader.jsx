import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

import styles from "./HotelSustainabilityHeader.module.css";

export default function HotelSustainabilityHeader({ label, titleId }) {
  if (!label) return null;

  return (
    <div className={styles.headerWrap}>
      <HotelSectionHeader id={titleId} label={label} as="h2" align="center" />
    </div>
  );
}
