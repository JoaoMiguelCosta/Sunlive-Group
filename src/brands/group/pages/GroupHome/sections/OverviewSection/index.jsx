import styles from "./Overview.module.css";

import BrandHero from "./BrandHero.jsx";

export default function OverviewSection() {
  return (
    <section
      id="overview"
      className={styles.section}
      aria-labelledby="overview-title"
    >
      <h1 id="overview-title" className={styles.srOnly}>
        Sunlive Group
      </h1>

      <BrandHero />
    </section>
  );
}
