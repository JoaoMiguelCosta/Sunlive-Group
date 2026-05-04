import sportsBrand from "../../../../config/index.js";

import SportsFeatureCard from "../../../../shared/ui/SportsFeatureCard/index.jsx";
import { mapAcademiesToFeatureCards } from "../../../../shared/utils/mapAcademyToFeatureCard.js";

import styles from "./AcademiesCardsSection.module.css";

function getCards(data) {
  if (Array.isArray(data?.cards)) return data.cards;
  if (Array.isArray(data)) return data;

  return [];
}

export default function AcademiesCardsSection({ data }) {
  const cards = getCards(data);

  if (!cards.length) return null;

  const sectionId = data?.id ? `${data.id}-cards` : "academies-cards";

  const items = mapAcademiesToFeatureCards(cards, {
    cardAriaLabelPrefix: data?.cardAriaLabelPrefix,
    ui: data?.ui,
    books: sportsBrand.books,
  });

  if (!items.length) return null;

  return (
    <section
      id={sectionId}
      aria-label={data?.ariaLabel || "Academias Sunlive — lista de academias"}
      className={styles.cardsSection}
    >
      <div className={styles.cardsInner}>
        <div className={styles.cardsGrid}>
          {items.map((item) => (
            <SportsFeatureCard
              key={item.id}
              id={item.id}
              ariaLabel={item.ariaLabel}
              eyebrow={item.eyebrow}
              title={item.title}
              visualTheme={item.visualTheme}
              logo={item.logo}
              media={item.media}
              summary={item.summary}
              description={item.description}
              descriptionAccent={item.descriptionAccent}
              meta={item.meta}
              highlights={item.highlights}
              highlightsAriaLabel={item.highlightsAriaLabel}
              note={item.note}
              actions={item.actions}
              socials={item.socials}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
