import { useEffect, useMemo, useRef, useState } from "react";

import FacilitiesIntro from "./FacilitiesIntro";
import FacilitiesSelector from "./FacilitiesSelector";
import FacilityPanel from "./FacilityPanel";

import {
  focusSelectorButton,
  scrollElementIntoMobileView,
  shouldScrollToPanelOnMobile,
} from "./facilitiesShowcaseSection.dom.js";

import {
  formatCounter,
  getInitialCardKey,
  getIntroDescription,
  isValidText,
  normalizeCards,
} from "./facilitiesShowcaseSection.utils.js";

import styles from "./FacilitiesShowcaseSection.module.css";

export default function FacilitiesShowcaseSection({ data }) {
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
