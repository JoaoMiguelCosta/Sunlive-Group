import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";
import styles from "./HotelOverviewHeader.module.css";

export default function HotelOverviewHeader({ label, titleId }) {
  if (!label) return null;

  return (
    <div className={styles.wrap} id={titleId}>
      <HotelSectionHeader label={label} as="h2" align="center" />
    </div>
  );
}
