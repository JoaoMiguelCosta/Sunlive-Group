import styles from "./ContactsSection.module.css";

import GroupHub from "./GroupHub.jsx";
import BusinessUnits from "./BusinessUnits.jsx";
import RegionalOffices from "./RegionalOffices.jsx";

import homePage from "../../../../config/pages/home.js";
const contactsSection = homePage.sections.contacts;

function isValidObject(value) {
  return value && typeof value === "object" && !Array.isArray(value);
}

function hasItems(items) {
  return Array.isArray(items) && items.length > 0;
}

export default function ContactsSection() {
  const contacts = contactsSection;

  if (!contacts) return null;

  const {
    id = "contacts",
    title = "Contactos",
    groupHub,
    businessUnits = [],
    regionalOffices = [],
  } = contacts;

  const headingId = `${id}-heading`;

  const shouldRenderGroupHub = isValidObject(groupHub);
  const shouldRenderBusinessUnits = hasItems(businessUnits);
  const shouldRenderRegionalOffices = hasItems(regionalOffices);

  if (
    !shouldRenderGroupHub &&
    !shouldRenderBusinessUnits &&
    !shouldRenderRegionalOffices
  ) {
    return null;
  }

  return (
    <section
      id={id}
      className={styles.section}
      aria-labelledby={headingId}
      data-theme="prestige-noir"
    >
      <header className={styles.header}>
        <h2 id={headingId} className={styles.title}>
          {title}
        </h2>
      </header>

      {shouldRenderGroupHub ? (
        <div className={styles.container}>
          <GroupHub data={groupHub} />
        </div>
      ) : null}

      {shouldRenderBusinessUnits ? (
        <div className={styles.container}>
          <BusinessUnits items={businessUnits} />
        </div>
      ) : null}

      {shouldRenderRegionalOffices ? (
        <div className={styles.container}>
          <RegionalOffices items={regionalOffices} />
        </div>
      ) : null}
    </section>
  );
}
