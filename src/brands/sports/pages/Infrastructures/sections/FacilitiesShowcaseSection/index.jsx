import { useEffect, useMemo, useRef, useState } from "react";

import FacilitiesIntro from "./FacilitiesIntro";
import FacilitiesSelector from "./FacilitiesSelector";
import FacilityPanel from "./FacilityPanel";

import styles from "./FacilitiesShowcaseSection.module.css";

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
  if (!container || typeof window === "undefined") return;

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

function normalizeCards(cards, sectionId) {
  return getValidCards(cards).map((card, index) => {
    const key = isValidText(card.key) ? card.key : `facility-${index + 1}`;

    return {
      key,
      tabId: `${sectionId}-tab-${toDomSafeId(key)}`,
      counter: formatCounter(index + 1),
      title: card.title,
      description: isValidText(card.description) ? card.description : "",
      highlight: isValidText(card.highlight) ? card.highlight : "",
      image: isValidText(card.image) ? card.image : "",
      imageAlt: isValidText(card.imageAlt) ? card.imageAlt : card.title,
      features: getValidFeatures(card.features),
    };
  });
}

function getInitialCardKey(cards) {
  return cards[0]?.key || null;
}

export default function FacilitiesGridSection({ data }) {
  const panelRef = useRef(null);
  const shouldScrollAfterSelectRef = useRef(false);

  const sectionId = data?.id || "infrastructures-facilities";

  const cards = useMemo(
    () => normalizeCards(data?.cards, sectionId),
    [data?.cards, sectionId],
  );

  const [activeKey, setActiveKey] = useState(() => getInitialCardKey(cards));

  useEffect(() => {
    const initialCardKey = getInitialCardKey(cards);

    if (!initialCardKey) {
      setActiveKey(null);
      return;
    }

    const hasActiveCard = cards.some((card) => card.key === activeKey);

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

  const intro = data.intro || {};
  const ui = data.ui || {};
  const introDescription = getIntroDescription(intro);

  const activeIndex = Math.max(
    0,
    cards.findIndex((card) => card.key === activeKey),
  );

  const activeCard = cards[activeIndex];
  const titleId = isValidText(intro.title) ? `${sectionId}-title` : undefined;
  const panelId = `${sectionId}-panel`;

  const hasIntro =
    isValidText(intro.eyebrow) ||
    isValidText(intro.title) ||
    isValidText(introDescription);

  function selectCard(cardKey) {
    const shouldScroll = shouldScrollToPanelOnMobile();

    shouldScrollAfterSelectRef.current = shouldScroll;

    if (cardKey === activeCard.key) {
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

    setActiveKey(cards[nextIndex].key);
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
          <FacilitiesIntro
            eyebrow={intro.eyebrow}
            title={intro.title}
            titleId={titleId}
            description={introDescription}
          />
        ) : null}

        <div className={styles.showcase}>
          <FacilitiesSelector
            cards={cards}
            activeKey={activeCard.key}
            panelId={panelId}
            ariaLabel={
              isValidText(ui.selectorAriaLabel)
                ? ui.selectorAriaLabel
                : undefined
            }
            onSelect={selectCard}
            onKeyDown={handleSelectorKeyDown}
          />

          <FacilityPanel
            panelRef={panelRef}
            panelId={panelId}
            labelledBy={activeCard.tabId}
            card={activeCard}
            currentCounter={activeCard.counter}
            totalCounter={formatCounter(cards.length)}
          />
        </div>
      </div>
    </section>
  );
}
