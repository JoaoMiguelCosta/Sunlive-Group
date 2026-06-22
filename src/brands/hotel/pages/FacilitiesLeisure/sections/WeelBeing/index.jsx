import wellBeing from "../../../../config/sections/facilities/wellBeing.js";
import TitleWellBeing from "./TitleWellBeing.jsx";
import DescriptionWellBeing from "./DescriptionWellBeing.jsx";
import WellBeingExperiences from "./WellBeingExperiences.jsx";

import styles from "./WellBeing.module.css";

export default function WellBeingSection() {
  const section = wellBeing;

  if (!section) return null;

  const sectionId = section.id ?? "well-being";
  const titleId = `${sectionId}-title`;
  const sectionAriaLabel = section?.ui?.sectionAriaLabel ?? "Bem-estar e Lazer";

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
      aria-label={sectionAriaLabel}
    >
      <div className={styles.inner}>
        <div className={styles.introBlock}>
          <TitleWellBeing id={titleId} />

          <div className={styles.descriptionWrap}>
            <DescriptionWellBeing />
          </div>
        </div>

        <WellBeingExperiences />
      </div>
    </section>
  );
}
