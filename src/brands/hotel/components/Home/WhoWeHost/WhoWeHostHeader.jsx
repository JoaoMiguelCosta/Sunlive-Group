// src/brands/hotel/components/Home/WhoWeHost/WhoWeHostHeader.jsx
import HotelSectionHeader from "../../../../../shared/components/Hotel/HotelSectionHeader/HotelSectionHeader.jsx"
import styles from "./WhoWeHostHeader.module.css";

export default function WhoWeHostHeader({ label }) {
  return (
    <div className={styles.wrap}>
      <HotelSectionHeader label={label} />
    </div>
  );
}
