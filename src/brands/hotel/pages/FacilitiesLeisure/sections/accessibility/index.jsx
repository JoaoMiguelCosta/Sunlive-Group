import TitleAccessibility from "./TitleAccessibility.jsx";
import DescriptionAccessibility from "./DescriptionAccessibility.jsx";
import AccessibilitySupport from "./AccessibilitySupport.jsx";

import styles from "./Accessibility.module.css";

export default function AccessibilitySection() {
  return (
    <section id="facilities-accessibility" className={styles.section}>
      <TitleAccessibility />
      <DescriptionAccessibility />
      <AccessibilitySupport />
    </section>
  );
}
