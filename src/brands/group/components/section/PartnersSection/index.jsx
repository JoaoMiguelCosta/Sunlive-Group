// src/brands/group/components/section/PartnersSection/PartnersSection.jsx
import styles from "./PartnersSection.module.css";
import SectionLead from "./SectionLead.jsx";
import PartnersGrid from "./PartnersGrid.jsx";
import { partners as partnersConfig } from "../../../config.js";

export default function PartnersSection() {
  const { id, headline, categories } = partnersConfig ?? {};
  if (!categories?.length) return null;

  return (
    <section
      id={id}
      className={styles.sectionWrap}
      aria-labelledby={`${id}-title`}
    >
      {/* Camada de brilho/gradiente global da secção */}
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
