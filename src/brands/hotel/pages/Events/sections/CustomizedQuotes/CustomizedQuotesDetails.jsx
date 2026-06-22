import customizedQuotes from "../../../../config/sections/events/customizedQuotes.js";
import { resolveHotelIcon } from "../../../../config/core/iconKeyMap.js";
import { ICONS } from "../../../../config/core/resolvedVisuals.js";

import styles from "./CustomizedQuotesDetails.module.css";

function DetailIcon({ icon = null, label = "" }) {
  if (icon) {
    return (
      <span className={styles.iconCircle} aria-label={label}>
        {icon}
      </span>
    );
  }

  return (
    <span className={styles.iconCircle} aria-hidden="true">
      <span className={styles.iconPlaceholder} />
    </span>
  );
}

function buildDetailCards(detailsCards) {
  if (!Array.isArray(detailsCards)) {
    return [];
  }

  return detailsCards
    .filter((card) => card?.id && card?.title)
    .map((card) => {
      const Icon = card?.icon
        ? resolveHotelIcon(ICONS, card.icon)
        : null;

      return {
        ...card,
        iconComponent: Icon ? <Icon /> : null,
      };
    });
}

export default function CustomizedQuotesDetails() {
  const section = customizedQuotes;

  const cards = buildDetailCards(section?.detailsCards);

  if (cards.length === 0) {
    return null;
  }

  const detailsAriaLabel =
    section?.ui?.detailsAriaLabel ??
    "Detalhes necessários para orçamento personalizado";

  return (
    <div className={styles.grid} aria-label={detailsAriaLabel}>
      {cards.map((card) => (
        <article key={card.id} className={styles.card}>
          <div className={styles.topBand} aria-hidden="true" />

          <div className={styles.iconWrap}>
            <DetailIcon
              icon={card.iconComponent}
              label={card.ariaLabel ?? card.title}
            />
          </div>

          <div className={styles.content}>
            <h3 className={styles.title}>{card.title}</h3>

            {card.description ? (
              <p className={styles.description}>{card.description}</p>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}
