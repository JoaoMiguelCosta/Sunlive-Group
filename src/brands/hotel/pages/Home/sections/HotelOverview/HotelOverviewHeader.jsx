// src/brands/hotel/pages/HotelHome/sections/HotelOverview/HotelOverviewHeader.jsx
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader//HotelSectionHeader.jsx";
import styles from "./HotelOverviewHeader.module.css";

export default function HotelOverviewHeader({ label }) {
  return (
    <div className={styles.wrap}>
      <HotelSectionHeader label={label} />
    </div>
  );
}
