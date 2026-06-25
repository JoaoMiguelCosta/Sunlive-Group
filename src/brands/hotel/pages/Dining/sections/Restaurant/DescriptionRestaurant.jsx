import dining from "../../../../config/pages/dining.js";
const restaurant = dining.sections.restaurant;
import HotelSectionDescription from "../../../../shared/ui/HotelSectionDescription/HotelSectionDescription.jsx";

import styles from "./Restaurant.module.css";

export default function DescriptionRestaurant() {
  const content = restaurant;
  const description = String(content?.description ?? "").trim();

  if (!description) return null;

  return (
    <HotelSectionDescription
      align="center"
      className={styles.sectionDescription}
    >
      {description}
    </HotelSectionDescription>
  );
}
