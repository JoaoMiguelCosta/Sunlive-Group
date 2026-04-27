import { useEffect, useMemo, useRef, useState } from "react";

import styles from "./LeisureExperiencesSection.module.css";

const MOBILE_SCROLL_QUERY = "(max-width: 1080px)";

function isValidText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function getValidTextItems(items) {
  return Array.isArray(items) ? items.filter(isValidText) : [];
}

function getValidExperiences(items) {
  return Array.isArray(items)
    ? items.filter(
        (item) =>
          item && (isValidText(item.title) || isValidText(item.description)),
      )
    : [];
}

function normalizeExperiences(items, sectionId) {
  return getValidExperiences(items).map((item, index) => ({
    ...item,
    key: isValidText(item.key)
      ? item.key
      : `${sectionId}-experience-${index + 1}`,
    experiences: getValidTextItems(item.experiences),
  }));
}

function getInitialExperienceKey(items) {
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

function getExperienceButtonId(sectionId, key) {
  return `${sectionId}-experience-button-${getSafeId(key)}`;
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
    top,
    behavior: "smooth",
  });
}

export default function LeisureExperiencesSection({ data }) {
  const panelStackRef = useRef(null);
  const shouldScrollAfterSelectRef = useRef(false);
  const sectionId = data?.id || "leisure-sports-tourism-experiences";

  const experiences = useMemo(
    () => normalizeExperiences(data?.items, sectionId),
    [data?.items, sectionId],
  );

  const initialKey = useMemo(
    () => getInitialExperienceKey(experiences),
    [experiences],
  );

  const [selectedKey, setSelectedKey] = useState(initialKey);

  useEffect(() => {
    const selectedExists = experiences.some(
      (experience) => experience.key === selectedKey,
    );

    if (!selectedExists) {
      setSelectedKey(initialKey);
    }
  }, [experiences, initialKey, selectedKey]);

  useEffect(() => {
    if (!shouldScrollAfterSelectRef.current) return;

    shouldScrollAfterSelectRef.current = false;

    if (!shouldScrollToPanelOnMobile()) return;

    const frameId = window.requestAnimationFrame(() => {
      scrollElementIntoMobileView(panelStackRef.current);
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [selectedKey]);

  if (!data || experiences.length === 0) return null;

  const intro = data.intro;

  const selectedExperience =
    experiences.find((experience) => experience.key === selectedKey) ||
    experiences[0];

  const titleId = intro?.title ? `${sectionId}-title` : undefined;
  const panelId = `${sectionId}-selected-experience`;
  const selectedButtonId = getExperienceButtonId(
    sectionId,
    selectedExperience.key,
  );

  const ariaLabel = titleId ? undefined : data.ui?.ariaLabel;

  const selectedImage = selectedExperience?.image;
  const hasSelectedImage = isValidText(selectedImage?.src);

  const hasIntro =
    intro &&
    (isValidText(intro.eyebrow) ||
      isValidText(intro.title) ||
      isValidText(intro.lead));

  function handleExperienceSelect(key) {
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
      aria-labelledby={titleId}
      aria-label={ariaLabel}
    >
      <div className={styles.shell}>
        <div className={styles.surface}>
          {hasIntro ? (
            <header className={styles.intro}>
              <div className={styles.introCopy}>
                {isValidText(intro.eyebrow) ? (
                  <p className={styles.eyebrow}>{intro.eyebrow}</p>
                ) : null}

                {isValidText(intro.title) ? (
                  <h2 id={titleId} className={styles.title}>
                    {intro.title}
                  </h2>
                ) : null}
              </div>

              {isValidText(intro.lead) ? (
                <p className={styles.lead}>{intro.lead}</p>
              ) : null}
            </header>
          ) : null}

          <div
            ref={panelStackRef}
            className={styles.showcase}
            aria-live="polite"
          >
            <article
              id={panelId}
              className={styles.selectedPanel}
              aria-labelledby={selectedButtonId}
            >
              <div className={styles.selectedMedia}>
                {hasSelectedImage ? (
                  <img
                    className={styles.image}
                    src={selectedImage.src}
                    alt={selectedImage.alt || selectedExperience.title || ""}
                    loading="lazy"
                  />
                ) : (
                  <div className={styles.visualFallback} aria-hidden="true">
                    <span>{getFallbackMark(selectedExperience.title)}</span>
                  </div>
                )}
              </div>

              <div className={styles.selectedOverlay}>
                {isValidText(selectedExperience.eyebrow) ? (
                  <p className={styles.selectedEyebrow}>
                    {selectedExperience.eyebrow}
                  </p>
                ) : null}

                {isValidText(selectedExperience.title) ? (
                  <h3 className={styles.selectedTitle}>
                    {selectedExperience.title}
                  </h3>
                ) : null}

                {isValidText(selectedExperience.description) ? (
                  <p className={styles.selectedDescription}>
                    {selectedExperience.description}
                  </p>
                ) : null}
              </div>
            </article>

            <aside className={styles.detailPanel}>
              <div className={styles.detailHeader}>
                {isValidText(selectedExperience.eyebrow) ? (
                  <p className={styles.detailEyebrow}>
                    {selectedExperience.eyebrow}
                  </p>
                ) : null}

                {isValidText(selectedExperience.title) ? (
                  <h3 className={styles.detailTitle}>
                    {selectedExperience.title}
                  </h3>
                ) : null}
              </div>

              {selectedExperience.experiences.length > 0 ? (
                <ul className={styles.experienceList}>
                  {selectedExperience.experiences.map((experience, index) => (
                    <li key={`${selectedExperience.key}-experience-${index}`}>
                      {experience}
                    </li>
                  ))}
                </ul>
              ) : null}
            </aside>
          </div>

          <div
            className={styles.cardsGrid}
            role="group"
            aria-label={
              data.ui?.experienceListAriaLabel ||
              "Selecionar experiência em destaque"
            }
          >
            {experiences.map((experience, index) => {
              const isActive = experience.key === selectedExperience.key;
              const buttonId = getExperienceButtonId(sectionId, experience.key);

              return (
                <button
                  id={buttonId}
                  key={experience.key}
                  type="button"
                  className={[
                    styles.experienceCard,
                    isActive ? styles.isActive : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  aria-pressed={isActive}
                  aria-controls={panelId}
                  onClick={() => handleExperienceSelect(experience.key)}
                >
                  <span className={styles.cardIndex}>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className={styles.cardBody}>
                    {isValidText(experience.eyebrow) ? (
                      <span className={styles.cardEyebrow}>
                        {experience.eyebrow}
                      </span>
                    ) : null}

                    {isValidText(experience.title) ? (
                      <span className={styles.cardTitle}>
                        {experience.title}
                      </span>
                    ) : null}

                    {isValidText(experience.description) ? (
                      <span className={styles.cardDescription}>
                        {experience.description}
                      </span>
                    ) : null}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
