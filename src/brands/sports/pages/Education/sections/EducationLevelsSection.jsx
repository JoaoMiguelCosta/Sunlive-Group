import styles from "./EducationLevelsSection.module.css";

import SportsEducationCard from "../../../shared/ui/SportsEducationCard/SportsEducationCard.jsx";
import sportsBrand from "../../../config/index.js";

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
          {items.map((level, index) => {
            const resolvedBook = level.book?.bookKey
              ? sportsBrand.books?.[level.book.bookKey]
              : null;

            const bookCta = resolvedBook
              ? {
                  label: level.book?.label ?? resolvedBook.label,
                  href: resolvedBook.href,
                }
              : null;

            return (
              <SportsEducationCard
                key={level.id || index}
                title={level.title}
                ageRange={level.ageRange}
                subtitle={level.subtitle}
                description={level.description}
                features={level.features}
                bookCta={bookCta}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
