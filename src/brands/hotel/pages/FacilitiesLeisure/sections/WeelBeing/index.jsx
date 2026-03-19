import TitleWellBeing from "./TitleWellBeing.jsx";
import DescriptionWellBeing from "./DescriptionWellBeing.jsx";
import WellBeingExperiences from "./WellBeingExperiences.jsx";

import styles from "./WellBeing.module.css";

export default function WellBeingSection() {
  return (
    <section
      id="facilities-wellbeing"
      className={styles.section}
      aria-label="Bem-estar"
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
