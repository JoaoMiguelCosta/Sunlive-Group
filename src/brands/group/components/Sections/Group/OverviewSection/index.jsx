import styles from "./Overview.module.css";

import BrandHero from "./BrandHero.jsx";
import HeadlineStrip from "./HeadlineStrip.jsx";
import DivisionsPanel from "./DivisionsPanel.jsx";

export default function OverviewSection() {
  return (
    <section
      id="overview"
      className={styles.section}
      role="region"
      aria-labelledby="overview-title"
    >
      <h1 id="overview-title" className={styles.srOnly}>
        Sunlive Group
      </h1>

      <BrandHero />
      <HeadlineStrip />
      <DivisionsPanel />
    </section>
  );
}
