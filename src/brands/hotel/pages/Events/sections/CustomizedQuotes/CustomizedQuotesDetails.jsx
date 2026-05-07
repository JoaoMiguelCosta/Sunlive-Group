import { useMemo } from "react";

import hotelBrand, { resolveHotelIcon } from "../../../../config/index.js";

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

export default function CustomizedQuotesDetails() {
  const section = hotelBrand?.pages?.events?.sections?.customizedQuotes ?? null;
  const rawCards = Array.isArray(section?.detailsCards)
    ? section.detailsCards
    : [];

  const cards = useMemo(() => {
    return rawCards
      .filter((card) => card?.id && card?.title)
      .map((card) => {
        const Icon = card?.icon
          ? resolveHotelIcon(hotelBrand?.icons, card.icon)
          : null;

        return {
          ...card,
          iconComponent: Icon ? <Icon /> : null,
        };
      });
  }, [rawCards]);

  if (!cards.length) return null;

  return (
    <div
      className={styles.grid}
      aria-label={
        section?.ui?.detailsAriaLabel ??
        "Detalhes necessários para orçamento personalizado"
      }
    >
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
