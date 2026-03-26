import hotelBrand from "../../../../config/index.js";
import EnvironmentalImpactTitle from "./EnvironmentalImpactTitle.jsx";
import EnvironmentalImpactDescription from "./EnvironmentalImpactDescription.jsx";
import EnvironmentalImpactStats from "./EnvironmentalImpactStats.jsx";

import styles from "./EnvironmentalImpact.module.css";

export default function EnvironmentalImpactSection() {
  const section =
    hotelBrand?.pages?.sustainability?.sections?.environmentalImpact ?? null;

  if (!section) return null;

  const sectionId = section.id ?? "sustentabilidade-impacto";
  const titleId = `${sectionId}-title`;
  const introPanel = section?.introPanel ?? null;

  const hasIntroPanel =
    introPanel?.eyebrow || introPanel?.title || introPanel?.description;

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
    >
      <div className={styles.inner}>
        <div className={styles.introBlock}>
          <EnvironmentalImpactTitle titleId={titleId} />

          <div className={styles.descriptionWrap}>
            <EnvironmentalImpactDescription />
          </div>

          {hasIntroPanel ? (
            <div className={styles.introPanel}>
              {introPanel?.eyebrow ? (
                <span className={styles.introEyebrow}>
                  {introPanel.eyebrow}
                </span>
              ) : null}

              {introPanel?.title ? (
                <h3 className={styles.introTitle}>{introPanel.title}</h3>
              ) : null}

              {introPanel?.description ? (
                <p className={styles.introText}>{introPanel.description}</p>
              ) : null}
            </div>
          ) : null}
        </div>

        <div className={styles.contentBlock}>
          <EnvironmentalImpactStats />
        </div>
      </div>
    </section>
  );
}
