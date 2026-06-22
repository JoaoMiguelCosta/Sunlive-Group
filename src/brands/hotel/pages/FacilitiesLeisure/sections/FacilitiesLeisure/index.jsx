import facilitiesLeisure from "../../../../config/sections/facilities/facilitiesLeisure.js";
import TitleFacilitiesLeisure from "./TitleFacilitiesLeisure.jsx";
import DescriptionFacilitiesLeisure from "./DescriptionFacilitiesLeisure.jsx";
import FacilitiesLeisureGallery from "./FacilitiesLeisureGallery.jsx";

import styles from "./FacilitiesLeisure.module.css";

export default function FacilitiesLeisureSection() {
  const section = facilitiesLeisure;

  if (!section) return null;

  const sectionId = section.id ?? "facilities-leisure";
  const titleId = `${sectionId}-title`;

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
    >
      <div className={styles.inner}>
        <div className={styles.headerBlock}>
          <TitleFacilitiesLeisure
            titleId={titleId}
            className={styles.sectionTitle}
          />

          <DescriptionFacilitiesLeisure className={styles.sectionDescription} />
        </div>

        <FacilitiesLeisureGallery />
      </div>
    </section>
  );
}
