import { useEffect, useMemo, useRef, useState } from "react";

import styles from "./FacilitiesGridSection.module.css";

const MOBILE_SCROLL_QUERY = "(max-width: 900px)";

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

function getIntroDescription(intro) {
  if (isValidText(intro?.description)) return intro.description;
  if (isValidText(intro?.lead)) return intro.lead;

  return "";
}

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function shouldScrollToPanelOnMobile() {
  if (typeof window === "undefined") return false;

  return window.matchMedia(MOBILE_SCROLL_QUERY).matches;
}

function getMobileScrollOffset() {
  if (typeof window === "undefined") return 12;

  return Math.max(10, Math.min(18, window.innerWidth * 0.03));
}

function scrollElementIntoMobileView(element) {
  if (!element || typeof window === "undefined") return;

  const top =
    element.getBoundingClientRect().top +
    window.scrollY -
    getMobileScrollOffset();

  window.scrollTo({
    top: Math.max(0, top),
    behavior: prefersReducedMotion() ? "auto" : "smooth",
  });
}

function focusSelectorButton(container, index) {
  if (!container) return;

  const buttons = Array.from(container.querySelectorAll('[role="tab"]'));
  const button = buttons[index];

  if (!button) return;

  window.requestAnimationFrame(() => {
    try {
      button.focus({ preventScroll: true });
    } catch {
      button.focus();
    }
  });
}

export default function FacilitiesGridSection({ data }) {
  const panelRef = useRef(null);
  const shouldScrollAfterSelectRef = useRef(false);

  const cards = useMemo(() => getValidCards(data?.cards), [data?.cards]);

  const [activeKey, setActiveKey] = useState(() => getInitialCardKey(cards));

  useEffect(() => {
    const initialCardKey = getInitialCardKey(cards);

    if (!initialCardKey) {
      setActiveKey(null);
      return;
    }

    const hasActiveCard = cards.some(
      (card, index) => getCardKey(card, index) === activeKey,
    );

    if (!hasActiveCard) {
      setActiveKey(initialCardKey);
    }
  }, [activeKey, cards]);

  useEffect(() => {
    if (!shouldScrollAfterSelectRef.current) return;

    shouldScrollAfterSelectRef.current = false;

    if (!shouldScrollToPanelOnMobile()) return;

    const frameId = window.requestAnimationFrame(() => {
      scrollElementIntoMobileView(panelRef.current);
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [activeKey]);

  if (!data || cards.length === 0) return null;

  const sectionId = data.id || "infrastructures-facilities";
  const intro = data.intro || {};
  const ui = data.ui || {};
  const introDescription = getIntroDescription(intro);

  const foundActiveIndex = cards.findIndex(
    (card, index) => getCardKey(card, index) === activeKey,
  );

  const activeIndex = foundActiveIndex >= 0 ? foundActiveIndex : 0;
  const activeCard = cards[activeIndex];
  const activeCardKey = getCardKey(activeCard, activeIndex);
  const activeFeatures = getValidFeatures(activeCard.features);

  const hasIntro =
    isValidText(intro.eyebrow) ||
    isValidText(intro.title) ||
    isValidText(introDescription);

  const titleId = isValidText(intro.title) ? `${sectionId}-title` : undefined;
  const panelId = `${sectionId}-panel`;
  const activeTabId = `${sectionId}-tab-${toDomSafeId(activeCardKey)}`;

  function selectCard(cardKey) {
    const shouldScroll = shouldScrollToPanelOnMobile();

    shouldScrollAfterSelectRef.current = shouldScroll;

    if (cardKey === activeCardKey) {
      shouldScrollAfterSelectRef.current = false;

      if (shouldScroll) {
        window.requestAnimationFrame(() => {
          scrollElementIntoMobileView(panelRef.current);
        });
      }

      return;
    }

    setActiveKey(cardKey);
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
    focusSelectorButton(
      event.currentTarget.closest('[role="tablist"]'),
      nextIndex,
    );
  }

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
      aria-label={titleId ? undefined : ui.ariaLabel}
    >
      <div className={styles.inner}>
        {hasIntro ? (
          <header className={styles.header}>
            {isValidText(intro.eyebrow) ? (
              <p className={styles.eyebrow}>{intro.eyebrow}</p>
            ) : null}

            {isValidText(intro.title) ? (
              <h2 id={titleId} className={styles.title}>
                {intro.title}
              </h2>
            ) : null}

            {isValidText(introDescription) ? (
              <p className={styles.description}>{introDescription}</p>
            ) : null}
          </header>
        ) : null}

        <div className={styles.showcase}>
          <div
            className={styles.selector}
            role="tablist"
            aria-label={
              isValidText(ui.selectorAriaLabel)
                ? ui.selectorAriaLabel
                : undefined
            }
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

                    {isValidText(card.highlight) ? (
                      <span className={styles.selectorHighlight}>
                        {card.highlight}
                      </span>
                    ) : null}
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
            aria-live="polite"
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

                {isValidText(activeCard.description) ? (
                  <p className={styles.panelDescription}>
                    {activeCard.description}
                  </p>
                ) : null}

                {isValidText(activeCard.highlight) ? (
                  <p className={styles.panelHighlight}>
                    {activeCard.highlight}
                  </p>
                ) : null}
              </div>

              {activeFeatures.length > 0 ? (
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
              ) : null}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
