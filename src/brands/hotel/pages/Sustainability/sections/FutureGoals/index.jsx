import hotelBrand from "../../../../config/index.js";

import FutureGoalsTitle from "./FutureGoalsTitle.jsx";
import FutureGoalsDescription from "./FutureGoalsDescription.jsx";
import FutureGoalsCards from "./FutureGoalsCards.jsx";

import styles from "./FutureGoals.module.css";

export default function FutureGoalsSection() {
  const section =
    hotelBrand?.pages?.sustainability?.sections?.futureGoals ?? null;

  if (!section) return null;

  const sectionId = section.id ?? "sustentabilidade-objetivos-futuros";
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
          <FutureGoalsTitle titleId={titleId} />

          <div className={styles.descriptionWrap}>
            <FutureGoalsDescription />
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

        <div className={styles.cardsWrap}>
          <FutureGoalsCards />
        </div>
      </div>
    </section>
  );
}
