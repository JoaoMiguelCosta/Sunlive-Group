import styles from "./OperationFlowSection.module.css";
import travelBrand from "../../../../config/index.js";

export default function OperationFlowSection() {
  const section = travelBrand?.pages?.home?.sections?.operationFlow ?? null;
  if (!section) return null;

  const editorial = section?.editorial ?? {};
  const sidePanel = section?.sidePanel ?? {};
  const steps = Array.isArray(section?.steps) ? section.steps : [];
  const proofPoints = Array.isArray(sidePanel?.proofPoints)
    ? sidePanel.proofPoints
    : [];
  const sectionId = section?.id ?? "travel-home-operation-flow";
  const cta = sidePanel?.cta ?? null;
  const hasCta = Boolean(cta?.href && cta?.label);

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-label={editorial?.title ?? "Fluxo operacional"}
      data-section="operation-flow"
    >
      <div className={styles.inner}>
        <div className={styles.mainColumn}>
          <div className={styles.editorialBlock}>
            <header className={styles.header}>
              {editorial?.eyebrow ? (
                <p className={styles.eyebrow}>{editorial.eyebrow}</p>
              ) : null}

              {editorial?.title ? (
                <h2 className={styles.title}>{editorial.title}</h2>
              ) : null}

              {editorial?.description ? (
                <p className={styles.description}>{editorial.description}</p>
              ) : null}
            </header>

            {steps.length ? (
              <ol
                className={styles.stepsGrid}
                aria-label={editorial?.stepsAriaLabel ?? "Etapas do processo"}
              >
                {steps.map((item) => (
                  <li key={item.key} className={styles.stepItem}>
                    <article className={styles.stepCard}>
                      <div className={styles.stepCardInner}>
                        <div className={styles.stepHeader}>
                          <span className={styles.stepIndex}>
                            {item.indexLabel}
                          </span>
                        </div>

                        <h3 className={styles.stepTitle}>{item.title}</h3>

                        <p className={styles.stepDescription}>
                          {item.description}
                        </p>
                      </div>
                    </article>
                  </li>
                ))}
              </ol>
            ) : null}
          </div>
        </div>

        <aside className={styles.sideColumn}>
          <div className={styles.sidePanel}>
            <div className={styles.sidePanelInner}>
              <header className={styles.sideHeader}>
                {sidePanel?.eyebrow ? (
                  <p className={styles.sideEyebrow}>{sidePanel.eyebrow}</p>
                ) : null}

                {sidePanel?.title ? (
                  <h3 className={styles.sideTitle}>{sidePanel.title}</h3>
                ) : null}

                {sidePanel?.description ? (
                  <p className={styles.sideDescription}>
                    {sidePanel.description}
                  </p>
                ) : null}
              </header>

              {proofPoints.length ? (
                <ul className={styles.proofList}>
                  {proofPoints.map((item) => (
                    <li key={item} className={styles.proofItem}>
                      <span className={styles.proofDot} aria-hidden="true" />
                      <span className={styles.proofText}>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>

          {hasCta ? (
            <div className={styles.sideFooter}>
              <a
                href={cta.href}
                className={styles.sideAction}
                aria-label={cta.ariaLabel || cta.label}
              >
                <span>{cta.label}</span>
              </a>
            </div>
          ) : null}
        </aside>
      </div>
    </section>
  );
}
