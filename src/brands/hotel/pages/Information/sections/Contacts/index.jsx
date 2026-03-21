import hotelBrand from "../../../../config/index.js";

import TitleContacts from "./TitleContacts.jsx";
import DescriptionContacts from "./DescriptionContacts.jsx";
import ContactDetails from "./ContactDetails.jsx";

import styles from "./Contacts.module.css";

export default function ContactsSection() {
  const section = hotelBrand?.pages?.information?.sections?.contacts ?? null;

  if (!section) return null;

  const sectionId = section.id ?? "info-contacts";
  const titleId = `${sectionId}-title`;

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
    >
      <div className={styles.inner}>
        <TitleContacts titleId={titleId} />
        <DescriptionContacts />
        <ContactDetails />
      </div>
    </section>
  );
}
