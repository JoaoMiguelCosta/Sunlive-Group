import catering from "../../../../config/sections/dining/catering.js";
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

import styles from "./CateringService.module.css";

export default function TitleCateringService({
  titleId = "restaurant-catering-title",
}) {
  const content = catering;
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
