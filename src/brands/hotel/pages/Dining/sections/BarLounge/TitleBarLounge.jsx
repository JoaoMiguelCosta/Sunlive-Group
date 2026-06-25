import dining from "../../../../config/pages/dining.js";
const barAndLounge = dining.sections.barAndLounge;
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

import styles from "./BarLounge.module.css";

export default function TitleBarLounge({
  titleId = "restaurante-bar-lounge-title",
}) {
  const content = barAndLounge;
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
