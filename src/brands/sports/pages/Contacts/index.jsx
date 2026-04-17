import styles from "../../layouts/SportsPageLayout.module.css";

import sportsBrand from "../../config/index.js";
import HeadlineBlock from "../../shared/ui/HeadlineBlock/index.jsx";
import ContactsJourneySection from "./sections/ContactsJourneySection.jsx";
import ContactCardsSection from "./sections/ContactCardsSection.jsx";

export default function ContactsPage() {
  const data = sportsBrand.sections?.contacts;
  if (!data) return null;

  return (
    <div className={styles.pageWrap} data-brand="sports">
      <main
        id="sports-contacts"
        className={styles.inner}
        role="region"
        aria-label="Contactos Sunlive Sports"
      >
        <div className={styles.contentFlow}>
          <header className={styles.heroSection}>
            <HeadlineBlock
              theme="sports"
              variant="banded"
              align="center"
              max="lg"
              title={data.hero?.title}
              lead={data.hero?.description}
            />
          </header>

          <div className={styles.sections}>
            <ContactCardsSection />
            <ContactsJourneySection />
          </div>
        </div>
      </main>
    </div>
  );
}
