import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import styles from "./PartnersSection.module.css";
import useDisclosure from "../../../../../../shared/hooks/useDisclosure.js";
import SectionDisclosureTrigger from "../_shared/SectionDisclosureTrigger.jsx";
import PartnersGrid from "./PartnersGrid.jsx";
import homePage from "../../../../config/pages/home.js";
import { isValidText } from "../../../../shared/utils/contentGuards.js";

const partnersSection = homePage.sections.partners;

function getValidCategories(items) {
  return Array.isArray(items)
    ? items.filter((item) => item && typeof item === "object" && item.key)
    : [];
}

export default function PartnersSection() {
  const { isOpen, toggle, open } = useDisclosure(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#partners") open();
  }, [location.hash, location.key, open]);

  const partnersConfig = partnersSection;
  const id = isValidText(partnersConfig?.id) ? partnersConfig.id : "partners";
  const headline = partnersConfig?.headline;
  const categories = getValidCategories(partnersConfig?.categories);

  if (!categories.length) return null;

  const triggerId = `${id}-btn`;
  const panelId = `${id}-panel`;
  const title = isValidText(headline?.title) ? headline.title : "Parceiros";

  return (
    <section id={id} className={styles.section} aria-labelledby={triggerId}>
      <div className={styles.disclosureWrap}>
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

        {isOpen && (
          <div
            id={panelId}
            role="region"
            aria-labelledby={triggerId}
            className={styles.panel}
          >
            <PartnersGrid items={categories} />
          </div>
        )}
      </div>
    </section>
  );
}
