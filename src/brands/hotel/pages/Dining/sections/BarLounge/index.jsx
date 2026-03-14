import TitleBarLounge from "./TitleBarLounge.jsx";
import BarLoungeShowcase from "./BarLoungeShowcase.jsx";

import styles from "./BarLounge.module.css";

export default function BarLoungeSection() {
  return (
    <section
      id="restaurant-bar-lounge"
      className={styles.section}
      aria-labelledby="restaurant-bar-lounge-title"
    >
      <div className={styles.inner}>
        <div className={styles.headerBlock}>
          <TitleBarLounge />
        </div>

        <div className={styles.contentStack}>
          <BarLoungeShowcase />
        </div>
      </div>
    </section>
  );
}
