import styles from "../../layouts/TravelPageLayout.module.css";

import ContactCTASection from "./sections/ContactCTA/index.jsx";

export default function ContactsPage() {
  return (
    <div className={styles.pageWrap} data-brand="travel">
      <main
        id="contacts"
        className={styles.inner}
        aria-label="Sunlive Travel — Contactos"
      >
        <div className={styles.contentFlow}>
          <ContactCTASection />
        </div>
      </main>
    </div>
  );
}
