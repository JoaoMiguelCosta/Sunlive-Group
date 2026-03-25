import HotelInlineActionButton from "../../../../shared/ui/HotelInlineActionButton/HotelInlineActionButton.jsx";
import styles from "./HotelOverviewContent.module.css";

export default function HotelOverviewContent({ section }) {
  if (!section) return null;

  const {
    identityLabel,
    introPrefix,
    introHighlight,
    introSuffix,
    bodyText,
    supportText,
    audienceTags,
    backgroundMedia,
    cta,
  } = section;

  const tags = Array.isArray(audienceTags) ? audienceTags.filter(Boolean) : [];
  const backgroundImageSrc = backgroundMedia?.imageSrc ?? null;
  const backgroundImageAlt = backgroundMedia?.imageAlt ?? "";

  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        {backgroundImageSrc ? (
          <div className={styles.mediaLayer} aria-hidden="true">
            <img
              src={backgroundImageSrc}
              alt={backgroundImageAlt}
              className={styles.backgroundImage}
            />
          </div>
        ) : null}

        <div className={styles.overlayLayer} aria-hidden="true" />

        <aside className={styles.side}>
          {identityLabel ? (
            <span className={styles.identity}>{identityLabel}</span>
          ) : null}

          {supportText ? <p className={styles.support}>{supportText}</p> : null}

          {tags.length ? (
            <ul className={styles.tagList} aria-label="Perfis de hóspedes">
              {tags.map((tag) => (
                <li key={tag} className={styles.tagItem}>
                  {tag}
                </li>
              ))}
            </ul>
          ) : null}

          {cta?.href ? (
            <div className={styles.ctaWrap}>
              <HotelInlineActionButton
                href={cta.href}
                label={cta.label}
                ariaLabel={cta.ariaLabel ?? cta.label}
                className={styles.ctaButton}
              />
            </div>
          ) : null}
        </aside>

        <div className={styles.content}>
          <p className={styles.lead}>
            {introPrefix}
            <span className={styles.highlight}>{introHighlight}</span>
            {introSuffix}
          </p>

          <p className={styles.body}>{bodyText}</p>
        </div>
      </div>
    </div>
  );
}
