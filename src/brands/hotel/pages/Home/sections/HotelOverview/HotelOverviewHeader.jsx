import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";
import styles from "./HotelOverviewHeader.module.css";

export default function HotelOverviewHeader({ label, titleId }) {
  if (!label) return null;

  return (
    <div className={styles.wrap} id={titleId}>
      <HotelSectionHeader label={label} />
    </div>
  );
}
