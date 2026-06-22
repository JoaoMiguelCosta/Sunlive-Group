import panoramicRestaurant from "../../../../config/sections/dining/panoramicRestaurant.js";
import HotelSectionDescription from "../../../../shared/ui/HotelSectionDescription/HotelSectionDescription.jsx";

import styles from "./PanoramicRestaurant.module.css";

export default function DescriptionPanoramicRestaurant() {
  const content = panoramicRestaurant;

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
