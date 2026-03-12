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
      <FutureGoalsTitle titleId={titleId} />
      <FutureGoalsDescription />
      <FutureGoalsCards />
    </section>
  );
}
