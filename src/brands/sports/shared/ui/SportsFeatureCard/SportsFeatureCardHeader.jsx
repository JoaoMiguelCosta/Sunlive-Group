import styles from "./SportsFeatureCardHeader.module.css";

const LOGO_THEME_CLASS_MAP = {
  cycling: styles.logoThemeCycling,
  karate: styles.logoThemeKarate,
  basketball: styles.logoThemeBasketball,
  football: styles.logoThemeFootball,
};

function resolveLogoThemeClass(theme) {
  return LOGO_THEME_CLASS_MAP[theme] || styles.logoThemeDefault;
}

export default function SportsFeatureCardHeader({
  titleId,
  eyebrow,
  title,
  logo,
  summary,
}) {
  const hasIdentity = logo?.src || eyebrow || title;

  if (!hasIdentity && !summary) return null;

  const logoThemeClass = resolveLogoThemeClass(logo?.theme);

  return (
    <header className={styles.header}>
      {hasIdentity ? (
        <div className={styles.identityBlock}>
          {logo?.src ? (
            <div className={`${styles.logoWrap} ${logoThemeClass}`}>
              <img
                className={styles.logo}
                src={logo.src}
                alt={logo.alt || ""}
                loading="lazy"
                decoding="async"
              />
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
      ) : null}

      {summary ? <p className={styles.summary}>{summary}</p> : null}
    </header>
  );
}
