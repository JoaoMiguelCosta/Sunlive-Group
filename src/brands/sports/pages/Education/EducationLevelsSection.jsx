// src/brands/sports/pages/Education/EducationLevelsSection.jsx
import styles from "./EducationLevelsSection.module.css";

import SportsEducationCard from "../../../../shared/components/Sports/SportsEducationCard/SportsEducationCard.jsx";

/**
 * Secção "Níveis de Ensino" — apenas os cards
 *
 * Uso:
 *   <EducationLevelsSection data={education} />
 */
export default function EducationLevelsSection({ data }) {
  if (!data) return null;

  const { levels } = data;
  const items = levels?.items || [];

  if (!items.length) return null;

  const { id = "education-levels" } = levels;

  return (
    <section id={id} className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {items.map((level, index) => (
            <SportsEducationCard
              key={level.id || index}
              title={level.title}
              ageRange={level.ageRange}
              subtitle={level.subtitle}
              description={level.description}
              features={level.features}
              bookCta={level.book}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
