// src/brands/sports/pages/Education/EducationBilingualSection.jsx
import styles from "./EducationBilingualSection.module.css";

import SportsEducationCard from "../../../../shared/components/Sports/SportsEducationCard/SportsEducationCard.jsx";

/**
 * Secção "Ensino Bilingue" — 2 cards sem Book
 *
 * Uso:
 *   <EducationBilingualSection data={education} />
 */
export default function EducationBilingualSection({ data }) {
  if (!data) return null;

  const { bilingual } = data;
  const items = bilingual?.items || [];
  if (!items.length) return null;

  const { id = "education-bilingual" } = bilingual;

  return (
    <section id={id} className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {items.map((item, index) => (
            <SportsEducationCard
              key={item.id || index}
              title={item.title}
              description={item.description}
              features={item.features}
              featuresLabel={item.featuresLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
