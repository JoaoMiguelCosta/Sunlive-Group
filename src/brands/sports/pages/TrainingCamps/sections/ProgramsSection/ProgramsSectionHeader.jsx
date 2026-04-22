import styles from "./ProgramsSectionHeader.module.css";
import useInView from "../../../../shared/hooks/useInView.js";

export default function ProgramsSectionHeader({ intro, titleId }) {
  const { ref, inView } = useInView({
    threshold: 0.18,
    once: true,
  });

  if (!intro) return null;

  const hasContent = intro.eyebrow || intro.title || intro.description;
  if (!hasContent) return null;

  return (
    <header
      ref={ref}
      className={`${styles.sectionHeader} ${styles.reveal} ${
        inView ? styles.isVisible : ""
      }`}
    >
      {intro.eyebrow ? <p className={styles.eyebrow}>{intro.eyebrow}</p> : null}

      {intro.title ? (
        <h2 id={titleId} className={styles.title}>
          {intro.title}
        </h2>
      ) : null}

      {intro.description ? (
        <p className={styles.description}>{intro.description}</p>
      ) : null}
    </header>
  );
}
