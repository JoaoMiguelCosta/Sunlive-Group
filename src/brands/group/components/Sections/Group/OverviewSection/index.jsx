import styles from "./Overview.module.css";

import BrandHero from "./BrandHero.jsx";
import HeadlineStrip from "./HeadlineStrip.jsx";
import DivisionsPanel from "./DivisionsPanel.jsx";

export default function Overviewsection() {
  return (
    <section
      id="overview"
      className={styles.section}
      role="region"
      aria-labelledby="overview-title"
    >
      <BrandHero />
      <HeadlineStrip />
      <DivisionsPanel />
    </section>
  );
}
