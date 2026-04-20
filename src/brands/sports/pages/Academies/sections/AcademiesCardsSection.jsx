import styles from "./AcademiesCardsSection.module.css";

import sportsBrand from "../../../config/index.js";
import AcademiesShowcaseCard from "../../../shared/ui/AcademiesShowcaseCard/index.jsx";

export default function AcademiesCardsSection({ data }) {
  const cards = Array.isArray(data?.cards) ? data.cards : [];
  if (!cards.length) return null;

  const sectionId = data?.id ? `${data.id}-cards` : "academies-cards";

  return (
    <section
      id={sectionId}
      aria-label="Academias Sunlive — lista de academias"
      className={styles.cardsSection}
    >
      <div className={styles.cardsInner}>
        <div className={styles.cardsGrid}>
          {cards.map((card) => {
            const resolvedBook = card.book?.bookKey
              ? sportsBrand.books?.[card.book.bookKey]
              : null;

            return (
              <div key={card.key} className={styles.cardWrap}>
                <AcademiesShowcaseCard
                  eyebrow={card.eyebrow}
                  modelType={card.modelType}
                  logoTheme={card.logoTheme}
                  title={card.title}
                  logoSrc={card.logo?.src}
                  logoAlt={card.logo?.alt}
                  summary={card.summary}
                  description={card.description}
                  descriptionAccent={card.descriptionAccent}
                  positioning={card.positioning}
                  highlights={card.highlights}
                  ctaNote={card.ctaNote}
                  instagramHref={card.instagram?.href}
                  instagramLabel={card.instagram?.label}
                  facebookHref={card.facebook?.href}
                  facebookLabel={card.facebook?.label}
                  moreHref={card.more?.href}
                  moreLabel={card.more?.label}
                  bookHref={resolvedBook?.href}
                  bookLabel={card.book?.label}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
