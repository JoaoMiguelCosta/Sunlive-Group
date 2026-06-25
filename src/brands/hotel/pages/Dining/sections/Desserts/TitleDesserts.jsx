import dining from "../../../../config/pages/dining.js";
const desserts = dining.sections.desserts;
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

import styles from "./Desserts.module.css";

export default function TitleDesserts({
  titleId = "restaurante-sobremesas-title",
}) {
  const content = desserts;
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
