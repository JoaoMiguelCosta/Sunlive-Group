import TitleWellBeing from "./TitleWellBeing.jsx";
import DescriptionWellBeing from "./DescriptionWellBeing.jsx";

import styles from "./WellBeing.module.css";

export default function WellBeingSection() {
  return (
    <section id="facilities-wellbeing" className={styles.section}>
      <TitleWellBeing />
      <DescriptionWellBeing />
    </section>
  );
}
