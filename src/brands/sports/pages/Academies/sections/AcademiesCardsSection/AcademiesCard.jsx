import styles from "./AcademiesCard.module.css";
import AcademiesCardHeader from "./AcademiesCardHeader.jsx";
import AcademiesCardBody from "./AcademiesCardBody.jsx";
import AcademiesCardFooter from "./AcademiesCardFooter.jsx";

function resolveThemeClass(modelType) {
  switch (modelType) {
    case "academy":
      return styles.themeAcademy;
    default:
      return styles.themeAcademy;
  }
}

export default function AcademiesCard({
  cardKey,
  ariaLabel,
  eyebrow,
  modelType,
  logoTheme,
  title,
  logoSrc,
  logoAlt,
  summary,
  description,
  descriptionAccent,
  positioning,
  highlights = [],
  ctaNote,
  instagramHref,
  instagramLabel = "Instagram",
  facebookHref,
  facebookLabel = "Facebook",
  moreHref,
  moreLabel,
  bookHref,
  bookLabel,
}) {
  const themeClass = resolveThemeClass(modelType);
  const titleId = title && cardKey ? `${cardKey}-title` : undefined;

  return (
    <article
      className={`${styles.card} ${themeClass}`}
      aria-labelledby={titleId}
      aria-label={!titleId ? ariaLabel : undefined}
    >
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.noise} aria-hidden="true" />

      <AcademiesCardHeader
        titleId={titleId}
        eyebrow={eyebrow}
        logoTheme={logoTheme}
        title={title}
        logoSrc={logoSrc}
        logoAlt={logoAlt}
        summary={summary}
      />

      <AcademiesCardBody
        description={description}
        descriptionAccent={descriptionAccent}
        positioning={positioning}
        highlights={highlights}
        ctaNote={ctaNote}
      />

      <AcademiesCardFooter
        moreHref={moreHref}
        moreLabel={moreLabel}
        bookHref={bookHref}
        bookLabel={bookLabel}
        instagramHref={instagramHref}
        instagramLabel={instagramLabel}
        facebookHref={facebookHref}
        facebookLabel={facebookLabel}
      />
    </article>
  );
}
