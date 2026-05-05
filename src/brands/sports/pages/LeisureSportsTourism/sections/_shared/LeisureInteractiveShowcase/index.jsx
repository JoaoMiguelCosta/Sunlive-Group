import { useEffect, useMemo, useRef, useState } from "react";

import LeisureDestinationPanel from "./LeisureDestinationPanel";
import LeisureExperiencePanel from "./LeisureExperiencePanel";
import LeisureSelectorList from "./LeisureSelectorList";
import LeisureShowcaseIntro from "./LeisureShowcaseIntro";

import styles from "./LeisureInteractiveShowcase.module.css";

const MOBILE_SCROLL_QUERY = "(max-width: 1080px)";

const VARIANTS = Object.freeze({
  DESTINATIONS: "destinations",
  EXPERIENCES: "experiences",
});

function isValidText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function isValidNumber(value) {
  return typeof value === "number" && Number.isFinite(value);
}

function getValidTextItems(items) {
  return Array.isArray(items) ? items.filter(isValidText) : [];
}

function getValidShowcaseItems(items) {
  return Array.isArray(items)
    ? items.filter(
        (item) =>
          item && (isValidText(item.title) || isValidText(item.description)),
      )
    : [];
}

function getSafeId(value) {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getButtonId(sectionId, itemType, key) {
  return `${sectionId}-${itemType}-button-${getSafeId(key)}`;
}

function getFallbackMark(title) {
  if (!isValidText(title)) return "";
  return title.slice(0, 2).toUpperCase();
}

function normalizeShowcaseItems(items, sectionId, itemType, listKey) {
  return getValidShowcaseItems(items).map((item, index) => {
    const key = isValidText(item.key)
      ? item.key
      : `${sectionId}-${itemType}-${index + 1}`;

    const title = isValidText(item.title) ? item.title : "";
    const image = item.image || {};

    return {
      key,
      buttonId: getButtonId(sectionId, itemType, key),
      eyebrow: isValidText(item.eyebrow) ? item.eyebrow : "",
      title,
      description: isValidText(item.description) ? item.description : "",
      featured: Boolean(item.featured),
      listItems: getValidTextItems(item[listKey]),
      imageSrc: isValidText(image.src) ? image.src : "",
      imageAlt: isValidText(image.alt) ? image.alt : title,
      imageWidth: isValidNumber(image.width) ? image.width : undefined,
      imageHeight: isValidNumber(image.height) ? image.height : undefined,
      imagePosition: isValidText(image.position)
        ? image.position
        : "center center",
      fallbackMark: getFallbackMark(title),
    };
  });
}

function getInitialItemKey(items) {
  return items.find((item) => item.featured)?.key || items[0]?.key || null;
}

function getIntroData(intro) {
  return {
    eyebrow: isValidText(intro?.eyebrow) ? intro.eyebrow : "",
    title: isValidText(intro?.title) ? intro.title : "",
    lead: isValidText(intro?.lead) ? intro.lead : "",
  };
}

function getVariant(value) {
  return value === VARIANTS.EXPERIENCES
    ? VARIANTS.EXPERIENCES
    : VARIANTS.DESTINATIONS;
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

export default function LeisureInteractiveShowcase({
  data,
  variant = VARIANTS.DESTINATIONS,
  defaultSectionId,
  itemType = "item",
  listKey = "items",
  listAriaFallback = "Selecionar item em destaque",
}) {
  const safeVariant = getVariant(variant);
  const panelStackRef = useRef(null);
  const shouldScrollAfterSelectRef = useRef(false);

  const sectionId = data?.id || defaultSectionId || `leisure-${itemType}s`;

  const items = useMemo(
    () => normalizeShowcaseItems(data?.items, sectionId, itemType, listKey),
    [data?.items, sectionId, itemType, listKey],
  );

  const initialKey = useMemo(() => getInitialItemKey(items), [items]);
  const [selectedKey, setSelectedKey] = useState(initialKey);

  useEffect(() => {
    const selectedExists = items.some((item) => item.key === selectedKey);

    if (!selectedExists) {
      setSelectedKey(initialKey);
    }
  }, [items, initialKey, selectedKey]);

  useEffect(() => {
    if (!shouldScrollAfterSelectRef.current) return;

    shouldScrollAfterSelectRef.current = false;

    if (!shouldScrollToPanelOnMobile()) return;

    const frameId = window.requestAnimationFrame(() => {
      scrollElementIntoMobileView(panelStackRef.current);
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [selectedKey]);

  if (!data || items.length === 0) return null;

  const intro = getIntroData(data.intro);
  const selectedItem =
    items.find((item) => item.key === selectedKey) || items[0];

  const titleId = intro.title ? `${sectionId}-title` : undefined;
  const panelId = `${sectionId}-selected-${itemType}`;
  const ariaLabel = titleId ? undefined : data.ui?.ariaLabel;
  const selectorAriaLabel =
    data.ui?.[`${itemType}ListAriaLabel`] || listAriaFallback;

  function handleSelect(key) {
    const shouldScroll = shouldScrollToPanelOnMobile();

    shouldScrollAfterSelectRef.current = shouldScroll;
    setSelectedKey(key);

    if (shouldScroll && key === selectedKey) {
      window.requestAnimationFrame(() => {
        scrollElementIntoMobileView(panelStackRef.current);
      });
    }
  }

  return (
    <section
      id={sectionId}
      className={styles.section}
      data-variant={safeVariant}
      aria-labelledby={titleId}
      aria-label={ariaLabel}
    >
      <div className={styles.shell}>
        <div className={styles.surface}>
          <LeisureShowcaseIntro intro={intro} titleId={titleId} />

          {safeVariant === VARIANTS.DESTINATIONS ? (
            <div className={styles.layout}>
              <div ref={panelStackRef} className={styles.panelStack}>
                <LeisureDestinationPanel
                  item={selectedItem}
                  panelId={panelId}
                  labelledBy={selectedItem.buttonId}
                  variant={safeVariant}
                />
              </div>

              <LeisureSelectorList
                items={items}
                selectedKey={selectedItem.key}
                panelId={panelId}
                variant={safeVariant}
                ariaLabel={selectorAriaLabel}
                onSelect={handleSelect}
              />
            </div>
          ) : (
            <>
              <div
                ref={panelStackRef}
                className={styles.showcase}
                aria-live="polite"
              >
                <LeisureExperiencePanel
                  item={selectedItem}
                  panelId={panelId}
                  labelledBy={selectedItem.buttonId}
                  variant={safeVariant}
                />
              </div>

              <LeisureSelectorList
                items={items}
                selectedKey={selectedItem.key}
                panelId={panelId}
                variant={safeVariant}
                ariaLabel={selectorAriaLabel}
                onSelect={handleSelect}
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
}
