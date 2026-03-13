import styles from "./Contacts.module.css";

import TitleContacts from "./TitleContacts.jsx";
import DescriptionContacts from "./DescriptionContacts.jsx";
import ContactDetails from "./ContactDetails.jsx";

export default function ContactsSection() {
  return (
    <section
      id="info-contacts"
      className={styles.section}
      aria-label="Contactos"
    >
      <div className={styles.inner}>
        <TitleContacts />
        <DescriptionContacts />
        <ContactDetails />
      </div>
    </section>
  );
}
