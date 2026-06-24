import contacts from "../../config/pages/contacts.js";
import styles from "../../layouts/TravelPageLayout.module.css";

import ContactCTASection from "./sections/ContactCTA/index.jsx";

export default function ContactsPage() {
  return (
    <div className={styles.pageWrap} data-brand="travel">
      <main
        id={contacts.id}
        className={styles.inner}
        aria-label={contacts.ui.pageAriaLabel}
      >
        <div className={styles.contentFlow}>
          <ContactCTASection />
        </div>
      </main>
    </div>
  );
}
