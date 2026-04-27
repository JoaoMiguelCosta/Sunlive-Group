import styles from "../../layouts/SportsPageLayout.module.css";

import sportsBrand from "../..//config/index.js";

import ContactsSection from "./sections/ContactsSection/index.jsx";
function getContactsSectionData() {
  return (
    sportsBrand.pages?.contacts?.sections?.contactsSection ||
    sportsBrand.sections?.contacts?.contactsSection ||
    null
  );
}

export default function ContactsPage() {
  const data = getContactsSectionData();

  if (!data) return null;

  return (
    <div className={styles.pageWrap} data-brand="sports">
      <main
        id={data.id || "sports-contacts"}
        className={styles.inner}
        role="region"
        aria-label={data.ui?.ariaLabel}
      >
        <div className={styles.contentFlow}>
          <ContactsSection data={data} iconSet={sportsBrand.icons} />
        </div>
      </main>
    </div>
  );
}
