import sustainability from "../../../../config/pages/sustainability.js";
const howToParticipate = sustainability.sections.howToParticipate;

import HowToParticipateTitle from "./HowToParticipateTitle.jsx";
import HowToParticipateDescription from "./HowToParticipateDescription.jsx";
import HowToParticipateCards from "./HowToParticipateCards.jsx";
import HowToParticipateClosingQuote from "./HowToParticipateClosingQuote.jsx";

import styles from "./HowToParticipate.module.css";

export default function HowToParticipateSection() {
  const section = howToParticipate;

  if (!section) return null;

  const sectionId = section.id ?? "sustentabilidade-participar";
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
          <HowToParticipateTitle titleId={titleId} />

          <div className={styles.descriptionWrap}>
            <HowToParticipateDescription />
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
          <HowToParticipateCards />
        </div>

        <div className={styles.quoteWrap}>
          <HowToParticipateClosingQuote />
        </div>
      </div>
    </section>
  );
}
