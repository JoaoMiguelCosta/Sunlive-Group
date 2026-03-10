import TitleBarLounge from "./TitleBarLounge.jsx";
import BarLoungeShowcase from "./BarLoungeShowcase.jsx";

import styles from "./BarLounge.module.css";

export default function BarLoungeSection() {
  return (
    <section id="restaurant-bar-lounge" className={styles.section}>
      <TitleBarLounge />
      <BarLoungeShowcase />
    </section>
  );
}
