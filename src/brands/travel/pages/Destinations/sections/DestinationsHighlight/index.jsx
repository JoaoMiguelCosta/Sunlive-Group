import destinationsPage from "../../../../config/pages/destinations.js";

import styles from "./DestinationsHighlightSection.module.css";

export default function DestinationsHighlightSection() {
  const section = destinationsPage.sections.destinationsHighlight;

  if (!section) return null;

  const benefits = Array.isArray(section?.benefits) ? section.benefits : [];

  const hasContent =
    section?.eyebrow ||
    section?.title ||
    section?.description ||
    benefits.length > 0;

  if (!hasContent) return null;

  return (
    <section
      className={styles.section}
      data-section="destinations-highlight"
      aria-label={section?.eyebrow || section?.title || "Destaque geral"}
    >
      <div className={styles.inner}>
        <div className={styles.copyColumn}>
          {section?.eyebrow ? (
            <p className={styles.eyebrow}>{section.eyebrow}</p>
          ) : null}

          {section?.title ? (
            <h1 className={styles.title}>{section.title}</h1>
          ) : null}

          {section?.description ? (
            <p className={styles.description}>{section.description}</p>
          ) : null}
        </div>

        {benefits.length > 0 ? (
          <ul
            className={styles.benefits}
            aria-label={section?.ui?.benefitsAriaLabel ?? "Benefícios"}
          >
            {benefits.map((benefit) => (
              <li key={benefit?.key ?? benefit.title} className={styles.benefitCard}>
                <h2 className={styles.benefitTitle}>{benefit.title}</h2>
                <p className={styles.benefitDescription}>
                  {benefit.description}
                </p>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
