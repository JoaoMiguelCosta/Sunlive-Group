import hotelBrand from "../../../../config/index.js";

import TitleContacts from "./TitleContacts.jsx";
import DescriptionContacts from "./DescriptionContacts.jsx";
import ContactDetails from "./ContactDetails.jsx";

import styles from "./Contacts.module.css";

export default function ContactsSection() {
  const section = hotelBrand?.pages?.information?.sections?.contacts ?? null;

  if (!section) return null;

  const sectionId = section.id ?? "informacoes-contactos";
  const titleId = `${sectionId}-title`;

  const backgroundImageSrc = section?.backgroundMedia?.imageSrc ?? null;
  const backgroundImageAlt = section?.backgroundMedia?.imageAlt ?? "";

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
    >
      {backgroundImageSrc ? (
        <div className={styles.mediaLayer} aria-hidden="true">
          <img
            src={backgroundImageSrc}
            alt={backgroundImageAlt}
            className={styles.backgroundImage}
          />
        </div>
      ) : null}

      <div className={styles.overlayLayer} aria-hidden="true" />

      <div className={styles.inner}>
        <TitleContacts titleId={titleId} />
        <DescriptionContacts />
        <ContactDetails />
      </div>
    </section>
  );
}
