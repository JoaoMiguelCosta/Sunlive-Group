import hotelBrand from "../../../../config/index.js";
import HotelSectionDescription from "../../../../shared/ui/HotelSectionDescription/HotelSectionDescription.jsx";

import styles from "./Restaurant.module.css";

export default function DescriptionRestaurant() {
  const content = hotelBrand?.pages?.dining?.sections?.restaurant ?? null;
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
