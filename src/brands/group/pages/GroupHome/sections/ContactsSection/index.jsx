import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import styles from "./ContactsSection.module.css";
import useDisclosure from "../../../../../../shared/hooks/useDisclosure.js";
import ScrollReveal from "../../../../../../shared/ui/ScrollReveal/ScrollReveal.jsx";
import SectionDisclosureTrigger from "../_shared/SectionDisclosureTrigger.jsx";
import GroupHub from "./GroupHub.jsx";
import BusinessUnits from "./BusinessUnits.jsx";
import RegionalOffices from "./RegionalOffices.jsx";
import homePage from "../../../../config/pages/home.js";
import { isValidObject } from "../../../../shared/utils/contentGuards.js";

const contactsSection = homePage.sections.contacts;

function hasItems(items) {
  return Array.isArray(items) && items.length > 0;
}

export default function ContactsSection() {
  const { isOpen, toggle, open } = useDisclosure(false);
  const location = useLocation();

  useEffect(() => {
    if (
      location.hash === "#contacts" ||
      location.hash.startsWith("#unidade-") ||
      location.hash.startsWith("#pais-")
    ) {
      open();
    }
  }, [location.hash, location.key, open]);

  const contacts = contactsSection;
  if (!contacts) return null;

  const {
    id = "contacts",
    title = "Contactos",
    groupHub,
    businessUnits = [],
    regionalOffices = [],
  } = contacts;

  const triggerId = `${id}-btn`;
  const panelId = `${id}-panel`;

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
      aria-labelledby={triggerId}
      data-theme="prestige-noir"
    >
      <ScrollReveal>
        <div
          className={`${styles.triggerCard}${isOpen ? ` ${styles.triggerCardOpen}` : ""}`}
        >
          <SectionDisclosureTrigger
            id={triggerId}
            label={title}
            panelId={panelId}
            isOpen={isOpen}
            onToggle={toggle}
          />
        </div>
      </ScrollReveal>

      {isOpen && (
        <div
          id={panelId}
          role="region"
          aria-labelledby={triggerId}
          className={styles.panel}
        >
          {shouldRenderGroupHub && (
            <div className={styles.container}>
              <GroupHub data={groupHub} />
            </div>
          )}
          {shouldRenderBusinessUnits && (
            <div className={styles.container}>
              <BusinessUnits items={businessUnits} />
            </div>
          )}
          {shouldRenderRegionalOffices && (
            <div className={styles.container}>
              <RegionalOffices items={regionalOffices} />
            </div>
          )}
        </div>
      )}
    </section>
  );
}
