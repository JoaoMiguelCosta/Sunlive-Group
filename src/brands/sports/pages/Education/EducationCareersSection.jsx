// src/brands/sports/pages/Education/EducationCareersSection.jsx
import styles from "./EducationCareersSection.module.css";

import SportsEducationCard from "../../../../shared/components/Sports/SportsEducationCard/SportsEducationCard.jsx";

/**
 * Secção "Percursos Profissionais"
 *
 * Uso:
 *   <EducationCareersSection data={education} />
 * Lê data.careers (configSports).
 */
export default function EducationCareersSection({ data }) {
  if (!data) return null;

  const { careers } = data;
  const items = careers?.items || [];
  if (!items.length) return null;

  const { id = "education-careers" } = careers;

  return (
    <section id={id} className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {items.map((item, index) => (
            <SportsEducationCard
              key={item.id || index}
              title={item.title}
              ageRange={item.ageRange}
              description={item.description}
              features={item.features}
              featuresLabel={item.featuresLabel}
              // sem bookCta
            />
          ))}
        </div>
      </div>
    </section>
  );
}
