import dining from "../../../../config/pages/dining.js";
const catering = dining.sections.catering;
import HotelSectionDescription from "../../../../shared/ui/HotelSectionDescription/HotelSectionDescription.jsx";

import styles from "./CateringService.module.css";

export default function DescriptionCateringService() {
  const content = catering;
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
