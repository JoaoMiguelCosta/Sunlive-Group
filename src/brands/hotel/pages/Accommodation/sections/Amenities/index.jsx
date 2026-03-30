import styles from "./Amenities.module.css";

import TitleAmenities from "./TitleAmenities.jsx";
import DescriptionAmenities from "./DescriptionAmenities.jsx";
import AmenitiesPills from "./AmenitiesPills.jsx";

import hotelBrand from "../../../../config/index.js";

export default function Amenities() {
  const content = hotelBrand?.pages?.accommodation?.sections?.amenities ?? null;

  if (!content) return null;

  const sectionId = content.id ?? "accommodation-amenities";
  const titleId = `${sectionId}-title`;

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
    >
      <div className={styles.inner}>
        <div className={styles.headerBlock}>
          <TitleAmenities id={titleId} label={content.headerLabel} />
          <DescriptionAmenities>{content.description}</DescriptionAmenities>
        </div>

        <div className={styles.pillsWrap}>
          <AmenitiesPills />
        </div>
      </div>
    </section>
  );
}
