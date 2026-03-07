// src/brands/group/components/SectionGroup/PartnersSection/index.jsx
import styles from "./PartnersSection.module.css";
import SectionLead from "./SectionLead.jsx";
import PartnersGrid from "./PartnersGrid.jsx";

import { groupHomePage } from "../../../../config/pages/index.js";

export default function PartnersSection() {
  const partnersConfig = groupHomePage?.sections?.partners;
  const { id, headline, categories } = partnersConfig ?? {};

  if (!categories?.length) return null;

  return (
    <section
      id={id}
      className={styles.sectionWrap}
      aria-labelledby={`${id}-title`}
    >
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.inner}>
        <SectionLead
          id={`${id}-title`}
          title={headline?.title}
          subtitle={headline?.subtitle}
        />

        <PartnersGrid items={categories} />
      </div>
    </section>
  );
}


