import styles from "./AcademiesCardsGrid.module.css";
import sportsBrand from "../../../../config/index.js";
import AcademiesCard from "./AcademiesCard.jsx";

function resolveCardAriaLabel(card, cardAriaLabelPrefix) {
  if (card?.ariaLabel) return card.ariaLabel;
  if (cardAriaLabelPrefix && card?.title) {
    return `${cardAriaLabelPrefix}: ${card.title}`;
  }

  return card?.title || "Academia";
}

export default function AcademiesCardsGrid({ cards, cardAriaLabelPrefix }) {
  return (
    <div className={styles.cardsGrid}>
      {cards.map((card) => {
        const resolvedBook = card.book?.bookKey
          ? sportsBrand.books?.[card.book.bookKey]
          : null;

        return (
          <div key={card.key} className={styles.cardWrap}>
            <AcademiesCard
              cardKey={card.key}
              ariaLabel={resolveCardAriaLabel(card, cardAriaLabelPrefix)}
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
  );
}
