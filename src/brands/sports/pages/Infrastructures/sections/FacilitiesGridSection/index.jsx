import { useEffect, useMemo, useRef, useState } from "react";

import styles from "./FacilitiesGridSection.module.css";

function isValidText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function isValidCard(card) {
  return card && typeof card === "object" && isValidText(card.title);
}

function getValidCards(cards) {
  return Array.isArray(cards) ? cards.filter(isValidCard) : [];
}

function getValidFeatures(features) {
  return Array.isArray(features) ? features.filter(isValidText) : [];
}

function getCardKey(card, index) {
  return isValidText(card?.key) ? card.key : `facility-${index + 1}`;
}

function getInitialCardKey(cards) {
  return cards[0] ? getCardKey(cards[0], 0) : null;
}

function formatCounter(value) {
  return String(value).padStart(2, "0");
}

function toDomSafeId(value) {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9-_]+/gi, "-")
    .replace(/^-+|-+$/g, "");
}

function shouldScrollToPanel() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 820px)").matches
  );
}

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export default function FacilitiesGridSection({ data }) {
  const panelRef = useRef(null);

  const cards = useMemo(() => getValidCards(data?.cards), [data?.cards]);
  const [activeKey, setActiveKey] = useState(() => getInitialCardKey(cards));

  useEffect(() => {
    const initialCardKey = getInitialCardKey(cards);

    if (!initialCardKey) return;

    const hasActiveCard = cards.some(
      (card, index) => getCardKey(card, index) === activeKey,
    );

    if (!hasActiveCard) {
      setActiveKey(initialCardKey);
    }
  }, [activeKey, cards]);

  if (!data || cards.length === 0) return null;

  const sectionId = data.id || "infrastructures-facilities";
  const intro = data.intro || {};
  const ui = data.ui || {};

  const activeIndex = Math.max(
    cards.findIndex((card, index) => getCardKey(card, index) === activeKey),
    0,
  );

  const activeCard = cards[activeIndex];
  const activeCardKey = getCardKey(activeCard, activeIndex);
  const activeFeatures = getValidFeatures(activeCard.features);

  const hasIntro =
    isValidText(intro.eyebrow) ||
    isValidText(intro.title) ||
    isValidText(intro.description);

  const titleId = isValidText(intro.title) ? `${sectionId}-title` : undefined;
  const panelId = `${sectionId}-panel`;
  const activeTabId = `${sectionId}-tab-${toDomSafeId(activeCardKey)}`;

  function scrollToPanelOnSmallScreens() {
    if (!shouldScrollToPanel()) return;

    window.requestAnimationFrame(() => {
      panelRef.current?.scrollIntoView({
        block: "start",
        behavior: prefersReducedMotion() ? "auto" : "smooth",
      });
    });
  }

  function selectCard(cardKey) {
    setActiveKey(cardKey);
    scrollToPanelOnSmallScreens();
  }

  function focusSelectorButton(container, index) {
    if (!container) return;

    const buttons = Array.from(container.querySelectorAll('[role="tab"]'));

    window.requestAnimationFrame(() => {
      buttons[index]?.focus();
    });
  }

  function handleSelectorKeyDown(event, index) {
    const lastIndex = cards.length - 1;
    let nextIndex = index;

    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        nextIndex = index === lastIndex ? 0 : index + 1;
        break;

      case "ArrowLeft":
      case "ArrowUp":
        nextIndex = index === 0 ? lastIndex : index - 1;
        break;

      case "Home":
        nextIndex = 0;
        break;

      case "End":
        nextIndex = lastIndex;
        break;

      default:
        return;
    }

    event.preventDefault();

    const nextCardKey = getCardKey(cards[nextIndex], nextIndex);

    setActiveKey(nextCardKey);
    focusSelectorButton(event.currentTarget.parentElement, nextIndex);
  }

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
      aria-label={titleId ? undefined : ui.ariaLabel}
    >
      <div className={styles.inner}>
        {hasIntro && (
          <header className={styles.header}>
            {isValidText(intro.eyebrow) && (
              <p className={styles.eyebrow}>{intro.eyebrow}</p>
            )}

            {isValidText(intro.title) && (
              <h2 id={titleId} className={styles.title}>
                {intro.title}
              </h2>
            )}

            {isValidText(intro.description) && (
              <p className={styles.description}>{intro.description}</p>
            )}
          </header>
        )}

        <div className={styles.showcase}>
          <div
            className={styles.selector}
            role="tablist"
            aria-label={ui.selectorAriaLabel}
          >
            {cards.map((card, index) => {
              const cardKey = getCardKey(card, index);
              const isActive = cardKey === activeCardKey;
              const tabId = `${sectionId}-tab-${toDomSafeId(cardKey)}`;

              return (
                <button
                  key={cardKey}
                  id={tabId}
                  type="button"
                  role="tab"
                  className={styles.selectorCard}
                  aria-selected={isActive}
                  aria-controls={panelId}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => selectCard(cardKey)}
                  onKeyDown={(event) => handleSelectorKeyDown(event, index)}
                >
                  <span className={styles.selectorIndex}>
                    {formatCounter(index + 1)}
                  </span>

                  <span className={styles.selectorContent}>
                    <span className={styles.selectorTitle}>{card.title}</span>

                    {isValidText(card.highlight) && (
                      <span className={styles.selectorHighlight}>
                        {card.highlight}
                      </span>
                    )}
                  </span>
                </button>
              );
            })}
          </div>

          <article
            ref={panelRef}
            id={panelId}
            className={styles.panel}
            role="tabpanel"
            aria-labelledby={activeTabId}
            tabIndex={-1}
          >
            <div className={styles.media}>
              {isValidText(activeCard.image) ? (
                <img
                  key={activeCardKey}
                  src={activeCard.image}
                  alt={
                    isValidText(activeCard.imageAlt)
                      ? activeCard.imageAlt
                      : activeCard.title
                  }
                  className={styles.image}
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <div className={styles.imagePlaceholder} aria-hidden="true">
                  <span>{activeCard.title}</span>
                </div>
              )}
            </div>

            <div className={styles.panelContent}>
              <div className={styles.panelHeader}>
                <p className={styles.panelMeta}>
                  {formatCounter(activeIndex + 1)} /{" "}
                  {formatCounter(cards.length)}
                </p>

                <h3 className={styles.panelTitle}>{activeCard.title}</h3>

                {isValidText(activeCard.description) && (
                  <p className={styles.panelDescription}>
                    {activeCard.description}
                  </p>
                )}

                {isValidText(activeCard.highlight) && (
                  <p className={styles.panelHighlight}>
                    {activeCard.highlight}
                  </p>
                )}
              </div>

              {activeFeatures.length > 0 && (
                <ul className={styles.features}>
                  {activeFeatures.map((feature, index) => (
                    <li
                      key={`${activeCardKey}-feature-${index}`}
                      className={styles.feature}
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
