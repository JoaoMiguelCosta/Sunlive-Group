import hotelBrand from "../../../../config/index.js";
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

import styles from "./BarLounge.module.css";

export default function TitleBarLounge({
  titleId = "restaurant-bar-lounge-title",
}) {
  const content = hotelBrand?.pages?.dining?.sections?.barAndLounge ?? null;
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
