import hotelBrand from "../../../../config/index.js";
import TitleWellBeing from "./TitleWellBeing.jsx";
import DescriptionWellBeing from "./DescriptionWellBeing.jsx";
import WellBeingExperiences from "./WellBeingExperiences.jsx";

import styles from "./WellBeing.module.css";

export default function WellBeingSection() {
  const section = hotelBrand?.pages?.facilities?.sections?.wellBeing ?? null;
  if (!section) return null;

  const sectionId = section.id ?? "well-being";
  const sectionAriaLabel = section?.ui?.sectionAriaLabel ?? "Bem-estar e Lazer";

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-label={sectionAriaLabel}
    >
      <div className={styles.inner}>
        <div className={styles.introBlock}>
          <TitleWellBeing />

          <div className={styles.descriptionWrap}>
            <DescriptionWellBeing />
          </div>
        </div>

        <WellBeingExperiences />
      </div>
    </section>
  );
}
