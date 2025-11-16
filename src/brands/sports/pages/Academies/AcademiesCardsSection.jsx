// src/brands/sports/pages/Academies/AcademiesCardsSection.jsx
import styles from "./AcademiesCardsSection.module.css";

import SportsAcademyCard from "../../../../shared/components/Sports/SportsAcademyCard/SportsAcademyCard.jsx";

export default function AcademiesCardsSection({ data }) {
  const cards = data?.cards ?? [];
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
          {cards.map((card) => (
            <SportsAcademyCard
              key={card.key}
              logoSrc={card.logo?.src}
              logoAlt={card.logo?.alt}
              title={card.title}
              description={card.description}
              instagramHref={card.instagram?.href}
              facebookHref={card.facebook?.href}
              moreHref={card.more?.href}
              moreLabel={card.more?.label}
              bookHref={card.book?.href}
              bookLabel={card.book?.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
