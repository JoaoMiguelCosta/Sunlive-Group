// src/brands/hotel/components/Home/WhoWeHost/WhoWeHostHeader.jsx
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";
import styles from "./WhoWeHostHeader.module.css";

export default function WhoWeHostHeader({ label, titleId }) {
  if (!label) return null;

  return (
    <div className={styles.wrap} id={titleId}>
      <HotelSectionHeader label={label} as="h2" align="center" />
    </div>
  );
}
