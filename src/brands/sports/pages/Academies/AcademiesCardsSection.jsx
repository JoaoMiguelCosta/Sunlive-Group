// src/brands/sports/pages/Academies/AcademiesCardsSection.jsx
import styles from "./AcademiesCardsSection.module.css";

import SportsAcademyCard from "../../../../shared/components/Sports/SportsAcademyCard/SportsAcademyCard.jsx";
import useStaggeredInView from "../../../../shared/hooks/useStaggeredInView.js";

export default function AcademiesCardsSection({ data }) {
  const cards = data?.cards ?? [];
  if (!cards.length) return null;

  const sectionId = data?.id ? `${data.id}-cards` : "academies-cards";

  const { sectionRef, isActive, getItemDelay } = useStaggeredInView({
    itemCount: cards.length,
    baseDelay: 80,
    threshold: 0.25,
    rootMargin: "0px 0px -20% 0px",
    once: false, // 👈 permitir repetir a animação sempre que entra/sai da viewport
  });

  return (
    <section
      id={sectionId}
      ref={sectionRef}
      aria-label="Academias Sunlive — lista de academias"
      className={styles.cardsSection}
    >
      <div className={styles.cardsInner}>
        <div className={styles.cardsGrid}>
          {cards.map((card, index) => (
            <div
              key={card.key}
              className={styles.cardWrap}
              data-visible={isActive ? "true" : "false"}
              style={{ transitionDelay: getItemDelay(index) }}
            >
              <SportsAcademyCard
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
