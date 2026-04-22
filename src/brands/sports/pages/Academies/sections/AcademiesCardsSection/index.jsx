import styles from "./AcademiesCardsSection.module.css";
import AcademiesCardsGrid from "./AcademiesCardsGrid.jsx";

export default function AcademiesCardsSection({ data }) {
  const cards = Array.isArray(data?.cards)
    ? data.cards
    : Array.isArray(data)
      ? data
      : [];

  if (!cards.length) return null;

  const sectionId = data?.id ? `${data.id}-cards` : "academies-cards";

  return (
    <section
      id={sectionId}
      aria-label={data?.ariaLabel || "Academias Sunlive — lista de academias"}
      className={styles.cardsSection}
    >
      <div className={styles.cardsInner}>
        <AcademiesCardsGrid
          cards={cards}
          cardAriaLabelPrefix={data?.cardAriaLabelPrefix}
        />
      </div>
    </section>
  );
}
