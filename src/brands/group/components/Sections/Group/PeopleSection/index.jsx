import styles from "./PeopleSection.module.css";

import PeopleStatement from "./PeopleStatement.jsx";
import TeamCollage from "./TeamCollage.jsx";

export default function PeopleSection() {
  return (
    <section id="people" className={styles.section} aria-label="People">
      <div className={styles.inner}>
        <PeopleStatement />

        <div className={styles.band}>
          <TeamCollage />
        </div>
      </div>
    </section>
  );
}
