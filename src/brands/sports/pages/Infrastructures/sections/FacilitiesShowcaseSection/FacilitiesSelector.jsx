import styles from "./FacilitiesSelector.module.css";

export default function FacilitiesSelector({
  cards,
  activeKey,
  panelId,
  ariaLabel,
  onSelect,
  onKeyDown,
}) {
  return (
    <div className={styles.selector} role="tablist" aria-label={ariaLabel}>
      {cards.map((card, index) => {
        const isActive = card.key === activeKey;

        return (
          <button
            key={card.key}
            id={card.tabId}
            type="button"
            role="tab"
            className={styles.selectorCard}
            aria-selected={isActive}
            aria-controls={panelId}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onSelect(card.key)}
            onKeyDown={(event) => onKeyDown(event, index)}
          >
            <span className={styles.selectorIndex}>{card.counter}</span>

            <span className={styles.selectorContent}>
              <span className={styles.selectorTitle}>{card.title}</span>

              {card.highlight ? (
                <span className={styles.selectorHighlight}>
                  {card.highlight}
                </span>
              ) : null}
            </span>
          </button>
        );
      })}
    </div>
  );
}
