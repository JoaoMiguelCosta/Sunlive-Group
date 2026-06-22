import breakfast from "../../../../config/sections/dining/breakfast.js";
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

import styles from "./Breakfast.module.css";

export default function TitleBreakfast({
  titleId = "restaurante-pequeno-almoco-title",
}) {
  const content = breakfast;
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
