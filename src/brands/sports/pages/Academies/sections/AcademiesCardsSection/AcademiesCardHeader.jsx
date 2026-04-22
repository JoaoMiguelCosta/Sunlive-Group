import styles from "./AcademiesCardHeader.module.css";

function resolveLogoThemeClass(logoTheme) {
  switch (logoTheme) {
    case "cycling":
      return styles.logoThemeCycling;
    case "karate":
      return styles.logoThemeKarate;
    case "basketball":
      return styles.logoThemeBasketball;
    case "football":
      return styles.logoThemeFootball;
    default:
      return styles.logoThemeDefault;
  }
}

export default function AcademiesCardHeader({
  titleId,
  eyebrow,
  logoTheme,
  title,
  logoSrc,
  logoAlt,
  summary,
}) {
  const logoThemeClass = resolveLogoThemeClass(logoTheme);

  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <div className={styles.identityBlock}>
          {logoSrc ? (
            <div className={`${styles.logoWrap} ${logoThemeClass}`}>
              <img className={styles.logo} src={logoSrc} alt={logoAlt || ""} />
            </div>
          ) : null}

          <div className={styles.headingGroup}>
            {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
            {title ? (
              <h3 id={titleId} className={styles.title}>
                {title}
              </h3>
            ) : null}
          </div>
        </div>
      </div>

      {summary ? <p className={styles.summary}>{summary}</p> : null}
    </header>
  );
}
