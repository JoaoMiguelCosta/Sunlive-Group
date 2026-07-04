import styles from "./LogisticsOperationalHero.module.css";

export default function LogisticsOperationalHero({ hero = {} }) {
  const assurances = Array.isArray(hero?.assurances)
    ? hero.assurances.filter((item) => item?.title && item?.description)
    : [];

  const hasAside = assurances.length > 0;

  const hasContent = Boolean(
    hero?.title || hero?.lead || hero?.supportingText || hasAside,
  );

  if (!hasContent) return null;

  const assurancesAriaLabel =
    hero?.ui?.assurancesAriaLabel ?? "Garantias operacionais";

  const heroGridClassName = [
    styles.heroGrid,
    !hasAside ? styles.heroGridSingleColumn : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={styles.hero}>
      <div className={heroGridClassName}>
        <div className={styles.primaryColumn}>
          {(hero?.title || hero?.lead) && (
            <div className={styles.headingBlock}>
              {hero?.title ? (
                <h1 className={styles.title}>{hero.title}</h1>
              ) : null}
              {hero?.lead ? <p className={styles.lead}>{hero.lead}</p> : null}
            </div>
          )}

          {hero?.supportingText ? (
            <div className={styles.copyPanel}>
              <p className={styles.supportingText}>{hero.supportingText}</p>
            </div>
          ) : null}
        </div>

        {hasAside ? (
          <aside className={styles.asideColumn}>
            <div
              className={styles.assurancesPanel}
              aria-label={assurancesAriaLabel}
            >
              {assurances.map((item) => (
                <article
                  key={item?.key ?? item.title}
                  className={styles.assuranceCard}
                >
                  <span
                    className={styles.assuranceAccent}
                    aria-hidden="true"
                  />
                  <div className={styles.assuranceContent}>
                    <h2 className={styles.assuranceTitle}>{item.title}</h2>
                    <p className={styles.assuranceDescription}>
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </aside>
        ) : null}
      </div>
    </header>
  );
}
