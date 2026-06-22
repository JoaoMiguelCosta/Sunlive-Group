import restaurant from "../../../../config/sections/dining/restaurant.js";
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

import styles from "./Restaurant.module.css";

export default function TitleRestaurant({ titleId = "restauracao-title" }) {
  const content = restaurant;
  const label = String(content?.headerLabel ?? "").trim();

  if (!label) return null;

  return (
    <HotelSectionHeader
      id={titleId}
      label={label}
      className={styles.sectionTitle}
    />
  );
}
