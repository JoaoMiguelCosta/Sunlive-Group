import ScrollReveal from "../../../../../../shared/ui/ScrollReveal/ScrollReveal.jsx";

import styles from "./SolutionPathsSection.module.css";
import home from "../../../../config/pages/home.js";

export default function SolutionPathsSection() {
  const section = home.sections.solutionPaths;
  if (!section) return null;

  const showcase = section?.showcase ?? {};
  const paths = Array.isArray(section?.paths) ? section.paths : [];
  const sectionId = section?.id ?? "travel-home-solution-paths";

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-label={showcase?.title ?? "Soluções disponíveis"}
      data-section="solution-paths"
    >
      <div className={styles.inner}>
        <div className={styles.surface}>
          <div className={styles.introPanel}>
            <ScrollReveal as="header" className={styles.header}>
              {showcase?.eyebrow ? (
                <p className={styles.eyebrow}>{showcase.eyebrow}</p>
              ) : null}

              {showcase?.title ? (
                <h1 className={styles.title}>{showcase.title}</h1>
              ) : null}

              {showcase?.description ? (
                <p className={styles.description}>{showcase.description}</p>
              ) : null}
            </ScrollReveal>
          </div>

          {paths.length ? (
            <div className={styles.gridShell}>
              <div
                className={styles.grid}
                aria-label={showcase?.cardsAriaLabel ?? "Soluções disponíveis"}
              >
                {paths.map((item, index) => (
                  <article key={item.key} className={styles.card}>
                    <ScrollReveal
                      className={styles.cardContent}
                      staggerIndex={index}
                    >
                      <div className={styles.cardTop}>
                        {item?.eyebrow ? (
                          <p className={styles.cardEyebrow}>{item.eyebrow}</p>
                        ) : null}

                        {item?.title ? (
                          <h3 className={styles.cardTitle}>{item.title}</h3>
                        ) : null}

                        {item?.description ? (
                          <p className={styles.cardDescription}>
                            {item.description}
                          </p>
                        ) : null}
                      </div>

                      {item?.href && item?.ctaLabel ? (
                        <a
                          href={item.href}
                          className={styles.cardLink}
                          aria-label={`${item.ctaLabel} — ${
                            item.title ?? "solução"
                          }`}
                        >
                          <span className={styles.cardLinkLabel}>
                            {item.ctaLabel}
                          </span>
                        </a>
                      ) : null}
                    </ScrollReveal>
                  </article>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
