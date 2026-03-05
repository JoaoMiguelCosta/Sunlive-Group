// src/brands/sports/pages/Contacts/index.jsx
import styles from "./Contacts.module.css";

import sportsBrand from "../../config/registry/index.js";
import HeadlineBlock from "../../../../shared/components/HeadlineBlock/index.jsx";
import ContactsJourneySection from "./sections/ContactsJourneySection.jsx";
import ContactCardsSection from "./sections/ContactCardsSection.jsx";

export default function ContactsPage() {
  const data = sportsBrand.sections?.contacts;
  if (!data) return null;

  return (
    <div className={styles.pageWrap} data-brand="sports">
      <main className={styles.inner} aria-label="Contactos Sunlive Sports">
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
      </main>
    </div>
  );
}
