import EnvironmentalImpactTitle from "./EnvironmentalImpactTitle.jsx";
import EnvironmentalImpactDescription from "./EnvironmentalImpactDescription.jsx";
import EnvironmentalImpactStats from "./EnvironmentalImpactStats.jsx";

import styles from "./EnvironmentalImpact.module.css";

export default function EnvironmentalImpactSection() {
  const titleId = "sustentabilidade-impacto-title";

  return (
    <section
      id="sustentabilidade-impacto"
      className={styles.section}
      aria-labelledby={titleId}
    >
      <div className={styles.inner}>
        <EnvironmentalImpactTitle titleId={titleId} />
        <EnvironmentalImpactDescription />
        <EnvironmentalImpactStats />
      </div>
    </section>
  );
}
