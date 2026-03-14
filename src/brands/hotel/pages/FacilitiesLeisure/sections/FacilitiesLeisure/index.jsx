import TitleFacilitiesLeisure from "./TitleFacilitiesLeisure.jsx";
import DescriptionFacilitiesLeisure from "./DescriptionFacilitiesLeisure.jsx";
import FacilitiesLeisureGallery from "./FacilitiesLeisureGallery.jsx";

import styles from "./FacilitiesLeisure.module.css";

export default function FacilitiesLeisureSection() {
  return (
    <section
      id="facilities-leisure"
      className={styles.section}
      aria-label="Instalações e Lazer"
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
