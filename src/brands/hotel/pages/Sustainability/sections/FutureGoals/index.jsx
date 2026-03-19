import FutureGoalsTitle from "./FutureGoalsTitle.jsx";
import FutureGoalsDescription from "./FutureGoalsDescription.jsx";
import FutureGoalsCards from "./FutureGoalsCards.jsx";

import styles from "./FutureGoals.module.css";

export default function FutureGoalsSection() {
  const titleId = "sustentabilidade-objetivos";

  return (
    <section
      id="sustentabilidade-objetivos-futuros"
      className={styles.section}
      aria-labelledby={titleId}
    >
      <div className={styles.inner}>
        <div className={styles.introBlock}>
          <FutureGoalsTitle titleId={titleId} />

          <div className={styles.descriptionWrap}>
            <FutureGoalsDescription />
          </div>
        </div>

        <div className={styles.cardsWrap}>
          <FutureGoalsCards />
        </div>
      </div>
    </section>
  );
}
