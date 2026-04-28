import styles from "./LeisureSelectorList.module.css";

const VARIANTS = Object.freeze({
  DESTINATIONS: "destinations",
  EXPERIENCES: "experiences",
});

function DestinationSelectorCard({ item, index, isActive, panelId, onSelect }) {
  return (
    <button
      id={item.buttonId}
      type="button"
      className={[
        styles.selectorCard,
        styles.destinationCard,
        isActive ? styles.isActive : "",
      ]
        .filter(Boolean)
        .join(" ")}
      aria-pressed={isActive}
      aria-controls={panelId}
      onClick={onSelect}
    >
      <span className={styles.cardTopline}>
        {item.eyebrow ? (
          <span className={styles.cardEyebrow}>{item.eyebrow}</span>
        ) : null}

        <span className={styles.cardIndex}>
          {String(index + 1).padStart(2, "0")}
        </span>
      </span>

      {item.title ? (
        <span className={styles.cardTitle}>{item.title}</span>
      ) : null}

      {item.description ? (
        <span className={styles.cardDescription}>{item.description}</span>
      ) : null}
    </button>
  );
}

function ExperienceSelectorCard({ item, index, isActive, panelId, onSelect }) {
  return (
    <button
      id={item.buttonId}
      type="button"
      className={[
        styles.selectorCard,
        styles.experienceCard,
        isActive ? styles.isActive : "",
      ]
        .filter(Boolean)
        .join(" ")}
      aria-pressed={isActive}
      aria-controls={panelId}
      onClick={onSelect}
    >
      <span className={styles.cardIndex}>
        {String(index + 1).padStart(2, "0")}
      </span>

      <span className={styles.cardBody}>
        {item.eyebrow ? (
          <span className={styles.cardEyebrow}>{item.eyebrow}</span>
        ) : null}

        {item.title ? (
          <span className={styles.cardTitle}>{item.title}</span>
        ) : null}

        {item.description ? (
          <span className={styles.cardDescription}>{item.description}</span>
        ) : null}
      </span>
    </button>
  );
}

export default function LeisureSelectorList({
  items,
  selectedKey,
  panelId,
  variant,
  ariaLabel,
  onSelect,
}) {
  const isExperiencesVariant = variant === VARIANTS.EXPERIENCES;
  const SelectorCard = isExperiencesVariant
    ? ExperienceSelectorCard
    : DestinationSelectorCard;

  return (
    <div
      className={
        isExperiencesVariant ? styles.cardsGrid : styles.destinationList
      }
      role="group"
      aria-label={ariaLabel}
    >
      {items.map((item, index) => {
        const isActive = item.key === selectedKey;

        return (
          <SelectorCard
            key={item.key}
            item={item}
            index={index}
            isActive={isActive}
            panelId={panelId}
            onSelect={() => onSelect(item.key)}
          />
        );
      })}
    </div>
  );
}
