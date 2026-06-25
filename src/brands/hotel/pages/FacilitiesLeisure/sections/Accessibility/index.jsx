import facilitiesLeisurePage from "../../../../config/pages/facilitiesLeisure.js";
const accessibility = facilitiesLeisurePage.sections.accessibility;

import TitleAccessibility from "./TitleAccessibility.jsx";
import DescriptionAccessibility from "./DescriptionAccessibility.jsx";
import AccessibilitySupport from "./AccessibilitySupport.jsx";

import styles from "./Accessibility.module.css";

export default function AccessibilitySection() {
  if (!accessibility) return null;

  const sectionId = "instalacoes-acessibilidade";
  const titleId = `${sectionId}-title`;

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
    >
      <div className={styles.backgroundGlow} aria-hidden="true" />
      <div className={styles.backgroundGlowSecondary} aria-hidden="true" />

      <div className={styles.inner}>
        <header className={styles.introBlock}>
          <TitleAccessibility titleId={titleId} />

          <div className={styles.descriptionWrap}>
            <DescriptionAccessibility />
          </div>
        </header>

        <AccessibilitySupport />
      </div>
    </section>
  );
}
