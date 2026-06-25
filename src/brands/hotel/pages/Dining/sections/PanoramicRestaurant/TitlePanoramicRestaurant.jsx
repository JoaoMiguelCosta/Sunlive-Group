import dining from "../../../../config/pages/dining.js";
const panoramicRestaurant = dining.sections.panoramicRestaurant;
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

import styles from "./PanoramicRestaurant.module.css";

export default function TitlePanoramicRestaurant({
  titleId = "restaurante-panoramico-title",
}) {
  const content = panoramicRestaurant;

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
