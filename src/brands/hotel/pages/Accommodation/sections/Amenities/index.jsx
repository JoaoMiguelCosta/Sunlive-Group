import styles from "./Amenities.module.css";

import TitleAmenities from "./TitleAmenities.jsx";
import DescriptionAmenities from "./DescriptionAmenities.jsx";
import AmenitiesPills from "./AmenitiesPills.jsx";

import hotelBrand from "../../../../configHotel.jsx";

export default function Amenities() {
  const content = hotelBrand?.pages?.estadia?.sections?.amenities ?? null;
  if (!content) return null;

  return (
    <section id={content.id} className={styles.section} aria-label="Amenities">
      <div className={styles.inner}>
        <TitleAmenities label={content.headerLabel} />
        <DescriptionAmenities>{content.description}</DescriptionAmenities>
        <AmenitiesPills />
      </div>
    </section>
  );
}
