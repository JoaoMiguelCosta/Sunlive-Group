import hotelBrand from "../../../../config/index.js";
import HotelSectionDescription from "../../../../shared/ui/HotelSectionDescription/HotelSectionDescription.jsx";

import styles from "./Desserts.module.css";

export default function DescriptionDesserts() {
  const content = hotelBrand?.pages?.dining?.sections?.desserts ?? null;
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
