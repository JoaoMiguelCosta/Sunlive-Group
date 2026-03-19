import HowToParticipateTitle from "./HowToParticipateTitle.jsx";
import HowToParticipateDescription from "./HowToParticipateDescription.jsx";
import HowToParticipateCards from "./HowToParticipateCards.jsx";
import HowToParticipateClosingQuote from "./HowToParticipateClosingQuote.jsx";

import styles from "./HowToParticipate.module.css";

export default function HowToParticipateSection() {
  const titleId = "sustentabilidade-participar-title";

  return (
    <section
      id="sustentabilidade-participar"
      className={styles.section}
      aria-labelledby={titleId}
    >
      <div className={styles.inner}>
        <div className={styles.introBlock}>
          <HowToParticipateTitle titleId={titleId} />

          <div className={styles.descriptionWrap}>
            <HowToParticipateDescription />
          </div>
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
