import hotelBrand from "../../../../config/index.js";
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

import styles from "./Restaurant.module.css";

export default function TitleRestaurant({ titleId = "restauracao-title" }) {
  const content = hotelBrand?.pages?.dining?.sections?.restaurant ?? null;
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
