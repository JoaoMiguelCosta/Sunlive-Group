import { useEffect, useMemo, useRef, useState } from "react";

import styles from "./LeisureDestinationsSection.module.css";

const MOBILE_SCROLL_QUERY = "(max-width: 820px)";

function isValidText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function getValidTextItems(items) {
  return Array.isArray(items) ? items.filter(isValidText) : [];
}

function getValidDestinations(items) {
  return Array.isArray(items)
    ? items.filter(
        (item) =>
          item && (isValidText(item.title) || isValidText(item.description)),
      )
    : [];
}

function normalizeDestinations(items, sectionId) {
  return getValidDestinations(items).map((item, index) => ({
    ...item,
    key: isValidText(item.key)
      ? item.key
      : `${sectionId}-destination-${index + 1}`,
    highlights: getValidTextItems(item.highlights),
  }));
}

function getInitialDestinationKey(items) {
  return items.find((item) => item.featured)?.key || items[0]?.key || null;
}

function getFallbackMark(title) {
  if (!isValidText(title)) return "";
  return title.slice(0, 2).toUpperCase();
}

function getSafeId(value) {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getDestinationButtonId(sectionId, key) {
  return `${sectionId}-destination-button-${getSafeId(key)}`;
}

function shouldScrollToPanelOnMobile() {
  if (typeof window === "undefined") return false;
  return window.matchMedia(MOBILE_SCROLL_QUERY).matches;
}

export default function LeisureDestinationsSection({ data }) {
  const selectedPanelRef = useRef(null);
  const sectionId = data?.id || "leisure-sports-tourism-destinations";

  const destinations = useMemo(
    () => normalizeDestinations(data?.items, sectionId),
    [data?.items, sectionId],
  );

  const initialKey = useMemo(
    () => getInitialDestinationKey(destinations),
    [destinations],
  );

  const [selectedKey, setSelectedKey] = useState(initialKey);

  useEffect(() => {
    const selectedExists = destinations.some(
      (destination) => destination.key === selectedKey,
    );

    if (!selectedExists) {
      setSelectedKey(initialKey);
    }
  }, [destinations, initialKey, selectedKey]);

  if (!data || destinations.length === 0) return null;

  const intro = data.intro;

  const selectedDestination =
    destinations.find((destination) => destination.key === selectedKey) ||
    destinations[0];

  const titleId = intro?.title ? `${sectionId}-title` : undefined;
  const panelId = `${sectionId}-selected-destination`;
  const selectedButtonId = getDestinationButtonId(
    sectionId,
    selectedDestination.key,
  );

  const ariaLabel = titleId ? undefined : data.ui?.ariaLabel;

  const selectedImage = selectedDestination?.image;
  const hasSelectedImage = isValidText(selectedImage?.src);

  const hasIntro =
    intro &&
    (isValidText(intro.eyebrow) ||
      isValidText(intro.title) ||
      isValidText(intro.lead));

  function handleDestinationSelect(key) {
    setSelectedKey(key);

    if (!shouldScrollToPanelOnMobile()) return;

    window.requestAnimationFrame(() => {
      selectedPanelRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
      aria-label={ariaLabel}
    >
      <div className={styles.shell}>
        {hasIntro && (
          <header className={styles.intro}>
            {isValidText(intro.eyebrow) && (
              <p className={styles.eyebrow}>{intro.eyebrow}</p>
            )}

            {isValidText(intro.title) && (
              <h2 id={titleId} className={styles.title}>
                {intro.title}
              </h2>
            )}

            {isValidText(intro.lead) && (
              <p className={styles.lead}>{intro.lead}</p>
            )}
          </header>
        )}

        <div className={styles.layout}>
          <article
            ref={selectedPanelRef}
            id={panelId}
            className={styles.featuredPanel}
            aria-labelledby={selectedButtonId}
            aria-live="polite"
          >
            <div className={styles.mediaFrame}>
              {hasSelectedImage ? (
                <img
                  className={styles.image}
                  src={selectedImage.src}
                  alt={selectedImage.alt || selectedDestination.title || ""}
                  loading="lazy"
                />
              ) : (
                <div className={styles.visualFallback} aria-hidden="true">
                  <span>{getFallbackMark(selectedDestination.title)}</span>
                </div>
              )}
            </div>

            <div className={styles.featuredContent}>
              <div className={styles.featuredText}>
                {isValidText(selectedDestination.eyebrow) && (
                  <p className={styles.featuredEyebrow}>
                    {selectedDestination.eyebrow}
                  </p>
                )}

                {isValidText(selectedDestination.title) && (
                  <h3 className={styles.featuredTitle}>
                    {selectedDestination.title}
                  </h3>
                )}

                {isValidText(selectedDestination.description) && (
                  <p className={styles.featuredDescription}>
                    {selectedDestination.description}
                  </p>
                )}
              </div>

              {selectedDestination.highlights.length > 0 && (
                <ul className={styles.highlights}>
                  {selectedDestination.highlights.map((highlight, index) => (
                    <li key={`${selectedDestination.key}-highlight-${index}`}>
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </article>

          <div
            className={styles.destinationList}
            role="group"
            aria-label={
              data.ui?.destinationListAriaLabel ||
              "Selecionar destino em destaque"
            }
          >
            {destinations.map((destination, index) => {
              const isActive = destination.key === selectedDestination.key;
              const buttonId = getDestinationButtonId(
                sectionId,
                destination.key,
              );

              return (
                <button
                  id={buttonId}
                  key={destination.key}
                  type="button"
                  className={[
                    styles.destinationButton,
                    isActive ? styles.isActive : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  aria-pressed={isActive}
                  aria-controls={panelId}
                  onClick={() => handleDestinationSelect(destination.key)}
                >
                  <span className={styles.cardTopline}>
                    {isValidText(destination.eyebrow) && (
                      <span className={styles.cardEyebrow}>
                        {destination.eyebrow}
                      </span>
                    )}

                    <span className={styles.cardIndex}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </span>

                  {isValidText(destination.title) && (
                    <span className={styles.cardTitle}>
                      {destination.title}
                    </span>
                  )}

                  {isValidText(destination.description) && (
                    <span className={styles.cardDescription}>
                      {destination.description}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
