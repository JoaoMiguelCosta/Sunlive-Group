import hotelBrand from "../../../../config/index.js";

import TitleAccessibility from "./TitleAccessibility.jsx";
import DescriptionAccessibility from "./DescriptionAccessibility.jsx";
import AccessibilitySupport from "./AccessibilitySupport.jsx";

import styles from "./Accessibility.module.css";

export default function AccessibilitySection() {
  const accessibility =
    hotelBrand?.pages?.facilities?.sections?.accessibility ?? null;

  if (!accessibility) return null;

  const sectionId = "facilities-accessibility";
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
