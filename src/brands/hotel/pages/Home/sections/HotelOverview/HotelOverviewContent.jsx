import HotelInlineActionButton from "../../../../shared/ui/HotelInlineActionButton/HotelInlineActionButton.jsx";

import styles from "./HotelOverviewContent.module.css";

function buildFallbackContent(section) {
  const paragraphs = [];

  if (section?.bodyText) {
    paragraphs.push(section.bodyText);
  }

  return {
    eyebrow: "",
    introPrefix: section?.introPrefix ?? "",
    introHighlight: section?.introHighlight ?? "",
    introSuffix: section?.introSuffix ?? "",
    paragraphs,
    highlightPill: "",
  };
}

function buildFallbackPanel(section) {
  return {
    eyebrow: "",
    title: section?.supportText ?? "",
    description: "",
    featureNote: "",
  };
}

function getValidItems(items) {
  return Array.isArray(items) ? items.filter(Boolean) : [];
}

export default function HotelOverviewContent({ section }) {
  if (!section) return null;

  const identityLabel = section?.identityLabel ?? "";
  const panel = section?.panel ?? buildFallbackPanel(section);
  const content = section?.content ?? buildFallbackContent(section);
  const cta = section?.cta ?? null;
  const backgroundMedia = section?.backgroundMedia ?? null;

  const tags = getValidItems(section?.audienceTags);
  const paragraphs = getValidItems(content?.paragraphs);

  const backgroundImageSrc = backgroundMedia?.imageSrc ?? null;

  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        {backgroundImageSrc ? (
          <div className={styles.mediaLayer} aria-hidden="true">
            <img
              src={backgroundImageSrc}
              alt=""
              className={styles.backgroundImage}
              loading="lazy"
              decoding="async"
              draggable="false"
            />
          </div>
        ) : null}

        <div className={styles.overlayLayer} aria-hidden="true" />
        <div className={styles.lightLayer} aria-hidden="true" />

        <aside className={styles.side}>
          <div className={styles.sideInner}>
            {identityLabel ? (
              <span className={styles.identity}>{identityLabel}</span>
            ) : null}

            {panel?.eyebrow ? (
              <p className={styles.panelEyebrow}>{panel.eyebrow}</p>
            ) : null}

            {panel?.title ? (
              <h3 className={styles.panelTitle}>{panel.title}</h3>
            ) : null}

            {panel?.description ? (
              <p className={styles.panelDescription}>{panel.description}</p>
            ) : null}

            {panel?.featureNote ? (
              <div className={styles.panelNote}>
                <p>{panel.featureNote}</p>
              </div>
            ) : null}

            {tags.length > 0 ? (
              <ul className={styles.tagList} aria-label="Perfis de hóspedes">
                {tags.map((tag) => (
                  <li key={tag} className={styles.tagItem}>
                    {tag}
                  </li>
                ))}
              </ul>
            ) : null}

            {cta?.href && cta?.label ? (
              <div className={styles.ctaWrap}>
                <HotelInlineActionButton
                  href={cta.href}
                  label={cta.label}
                  ariaLabel={cta.ariaLabel ?? cta.label}
                  className={styles.ctaButton}
                />
              </div>
            ) : null}
          </div>
        </aside>

        <div className={styles.content}>
          <div className={styles.contentInner}>
            {content?.eyebrow ? (
              <p className={styles.contentEyebrow}>{content.eyebrow}</p>
            ) : null}

            <div className={styles.copyBlock}>
              {(content?.introPrefix ||
                content?.introHighlight ||
                content?.introSuffix) && (
                <p className={styles.lead}>
                  {content?.introPrefix}
                  {content?.introHighlight ? (
                    <span className={styles.highlight}>
                      {content.introHighlight}
                    </span>
                  ) : null}
                  {content?.introSuffix}
                </p>
              )}

              {paragraphs.map((paragraph) => (
                <p key={paragraph} className={styles.body}>
                  {paragraph}
                </p>
              ))}

              {content?.highlightPill ? (
                <div className={styles.contentHighlight}>
                  <p>{content.highlightPill}</p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
