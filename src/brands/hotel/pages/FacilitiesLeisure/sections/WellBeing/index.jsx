import facilitiesLeisurePage from "../../../../config/pages/facilitiesLeisure.js";
const wellBeing = facilitiesLeisurePage.sections.wellBeing;
import TitleWellBeing from "./TitleWellBeing.jsx";
import DescriptionWellBeing from "./DescriptionWellBeing.jsx";
import WellBeingExperiences from "./WellBeingExperiences.jsx";

import styles from "./WellBeing.module.css";

export default function WellBeingSection() {
  const section = wellBeing;

  if (!section) return null;

  const sectionId = section.id ?? "well-being";
  const titleId = `${sectionId}-title`;
  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
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
