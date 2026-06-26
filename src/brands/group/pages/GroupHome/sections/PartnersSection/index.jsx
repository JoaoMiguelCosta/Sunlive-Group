import styles from "./PartnersSection.module.css";

import SectionLead from "./SectionLead.jsx";
import PartnersGrid from "./PartnersGrid.jsx";

import homePage from "../../../../config/pages/home.js";
const partnersSection = homePage.sections.partners;

function isValidText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function getValidCategories(items) {
  return Array.isArray(items)
    ? items.filter((item) => item && typeof item === "object" && item.key)
    : [];
}

export default function PartnersSection() {
  const partnersConfig = partnersSection;

  const id = isValidText(partnersConfig?.id) ? partnersConfig.id : "partners";

  const headline = partnersConfig?.headline;
  const categories = getValidCategories(partnersConfig?.categories);

  if (!categories.length) return null;

  const headingId = `${id}-title`;

  return (
    <section id={id} className={styles.section} aria-labelledby={headingId}>
      <SectionLead
        id={headingId}
        title={headline?.title}
        subtitle={headline?.subtitle}
      />

      <PartnersGrid items={categories} />
    </section>
  );
}
