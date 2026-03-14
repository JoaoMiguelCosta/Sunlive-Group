import TitleAccessibility from "./TitleAccessibility.jsx";
import DescriptionAccessibility from "./DescriptionAccessibility.jsx";
import AccessibilitySupport from "./AccessibilitySupport.jsx";

import styles from "./Accessibility.module.css";

export default function AccessibilitySection() {
  return (
    <section
      id="facilities-accessibility"
      className={styles.section}
      aria-label="Acessibilidade"
    >
      <div className={styles.inner}>
        <div className={styles.introBlock}>
          <TitleAccessibility />
          <div className={styles.descriptionWrap}>
            <DescriptionAccessibility />
          </div>
        </div>

        <AccessibilitySupport />
      </div>
    </section>
  );
}
