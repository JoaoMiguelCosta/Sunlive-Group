import styles from "../OverviewSection/Overview.module.css";

import HeadlineStrip from "../OverviewSection/HeadlineStrip.jsx";
import DivisionsPanel from "../OverviewSection/DivisionsPanel.jsx";

export default function DivisionsSection() {
  return (
    <section
      id="divisions"
      className={styles.section}
      aria-label="Divisões Sunlive Group"
    >
      <HeadlineStrip />
      <DivisionsPanel />
    </section>
  );
}
