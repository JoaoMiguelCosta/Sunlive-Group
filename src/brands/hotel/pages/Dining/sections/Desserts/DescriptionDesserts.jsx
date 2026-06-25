import dining from "../../../../config/pages/dining.js";
const desserts = dining.sections.desserts;
import HotelSectionDescription from "../../../../shared/ui/HotelSectionDescription/HotelSectionDescription.jsx";

import styles from "./Desserts.module.css";

export default function DescriptionDesserts() {
  const content = desserts;
  const text = String(content?.description ?? "").trim();

  if (!text) return null;

  return (
    <HotelSectionDescription
      align="center"
      className={styles.sectionDescription}
    >
      {text}
    </HotelSectionDescription>
  );
}
