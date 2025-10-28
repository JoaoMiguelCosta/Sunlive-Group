import styles from "./index.module.css";
import GroupHub from "./GroupHub.jsx";
import BusinessUnits from "./BusinessUnits.jsx";
import RegionalOffices from "./RegionalOffices.jsx";
import { contacts } from "../../../ConfigGroup.jsx";

/**
 * Contactssection — orquestra os 3 blocos
 * - Acessibilidade: aria-labelledby + id estável
 * - i18n-ready: usa contacts.title se existir
 */
export default function ContactsSection() {
  if (!contacts) return null;

  const {
    id = "contacts",
    title = "Contacts Sunlive Group",
    ariaLabel = "Contacts Sunlive Group",
    groupHub,
    businessUnits = [],
    regionalOffices = [],
  } = contacts;

  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      className={styles.section}
      aria-label={ariaLabel}
      aria-labelledby={headingId}
      data-theme="prestige-noir"
    >
      <header className={styles.header}>
        <h2 id={headingId} className={styles.title}>
          {title}
        </h2>
      </header>

      <div className={styles.container}>
        <GroupHub data={groupHub} />
      </div>

    

      <div className={styles.container}>
        <BusinessUnits items={businessUnits} />
      </div>

    

      <div className={styles.container}>
        <RegionalOffices items={regionalOffices} />
      </div>
    </section>
  );
}
