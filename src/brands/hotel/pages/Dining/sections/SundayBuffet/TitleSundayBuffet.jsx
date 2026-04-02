import hotelBrand from "../../../../config/index.js";
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

import styles from "./SundayBuffet.module.css";

export default function TitleSundayBuffet({
  titleId = "restaurant-buffet-title",
}) {
  const content = hotelBrand?.pages?.dining?.sections?.sundayBuffet ?? null;
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
