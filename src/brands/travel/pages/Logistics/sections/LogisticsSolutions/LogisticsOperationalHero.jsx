import styles from "./LogisticsOperationalHero.module.css";

export default function LogisticsOperationalHero({ hero = {} }) {
  const benefits = Array.isArray(hero?.assurances)
    ? hero.assurances.filter((item) => item?.title && item?.description)
    : [];

  const hasBenefits = benefits.length > 0;

  const hasContent = Boolean(
    hero?.title || hero?.lead || hero?.supportingText || hasBenefits,
  );

  if (!hasContent) return null;

  const benefitsAriaLabel =
    hero?.ui?.assurancesAriaLabel ?? "Garantias operacionais";

  return (
    <header className={styles.hero}>
      <div className={styles.intro}>
        {hero?.title ? (
          <>
            <span className={styles.titleAccent} aria-hidden="true" />
            <h1 className={styles.title}>{hero.title}</h1>
          </>
        ) : null}
        {hero?.lead ? <p className={styles.lead}>{hero.lead}</p> : null}
        {hero?.supportingText ? (
          <p className={styles.supportingText}>{hero.supportingText}</p>
        ) : null}
      </div>

      {hasBenefits ? (
        <ol className={styles.benefits} aria-label={benefitsAriaLabel}>
          {benefits.map((item, index) => (
            <li key={item?.key ?? item.title} className={styles.benefit}>
              <span className={styles.benefitNumber} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className={styles.benefitContent}>
                <h2 className={styles.benefitTitle}>{item.title}</h2>
                <p className={styles.benefitDescription}>
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      ) : null}
    </header>
  );
}
