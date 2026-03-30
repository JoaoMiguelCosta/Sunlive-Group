import hotelBrand from "../../../../config/index.js";
import TitleFacilitiesLeisure from "./TitleFacilitiesLeisure.jsx";
import DescriptionFacilitiesLeisure from "./DescriptionFacilitiesLeisure.jsx";
import FacilitiesLeisureGallery from "./FacilitiesLeisureGallery.jsx";

import styles from "./FacilitiesLeisure.module.css";

export default function FacilitiesLeisureSection() {
  const section =
    hotelBrand?.pages?.facilities?.sections?.facilitiesLeisure ?? null;

  if (!section) return null;

  const sectionId = section.id ?? "facilities-leisure";
  const sectionAriaLabel =
    section?.ui?.sectionAriaLabel ?? "Instalações e Lazer";

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-label={sectionAriaLabel}
    >
      <div className={styles.inner}>
        <div className={styles.headerBlock}>
          <TitleFacilitiesLeisure />

          <div className={styles.descriptionWrap}>
            <DescriptionFacilitiesLeisure />
          </div>
        </div>

        <FacilitiesLeisureGallery />
      </div>
    </section>
  );
}
