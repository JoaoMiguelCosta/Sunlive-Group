import styles from "./Accessibility.module.css";

export default function AccessibilitySection() {
  return (
    <section
      id="facilities-accessibility"
      className={styles.section}
      aria-label="Acessibilidade"
    >
      <div className={styles.inner}>
        <h2 className={styles.title}>Acessibilidade</h2>
        <p className={styles.text}>Conteúdo em construção.</p>
      </div>
    </section>
  );
}
