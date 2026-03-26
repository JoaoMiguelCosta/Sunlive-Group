import styles from "./SustainabilityActionCard.module.css";

export default function SustainabilityActionCard({
  title,
  description,
  icon = null,
  eyebrow = "",
  step = "",
  variant = "default",
  className = "",
  ariaLabel,
}) {
  const cardLabel = ariaLabel || title || "Ação sustentável";

  const variantCardClass =
    variant !== "default"
      ? styles[`card${variant[0].toUpperCase()}${variant.slice(1)}`]
      : "";

  const variantHeaderClass =
    variant !== "default"
      ? styles[`header${variant[0].toUpperCase()}${variant.slice(1)}`]
      : "";

  const variantBodyClass =
    variant !== "default"
      ? styles[`body${variant[0].toUpperCase()}${variant.slice(1)}`]
      : "";

  const variantTitleClass =
    variant !== "default"
      ? styles[`title${variant[0].toUpperCase()}${variant.slice(1)}`]
      : "";

  const variantDescriptionClass =
    variant !== "default"
      ? styles[`description${variant[0].toUpperCase()}${variant.slice(1)}`]
      : "";

  const classNames = [styles.card, variantCardClass, className]
    .filter(Boolean)
    .join(" ");

  if (!title && !description) return null;

  return (
    <article className={classNames} aria-label={cardLabel}>
      <header
        className={[styles.header, variantHeaderClass]
          .filter(Boolean)
          .join(" ")}
      >
        <div className={styles.headerTop}>
          {eyebrow ? (
            <span className={styles.eyebrow}>{eyebrow}</span>
          ) : (
            <span />
          )}

          {step ? <span className={styles.step}>{step}</span> : null}
        </div>

        {icon ? (
          <div className={styles.iconCircle} aria-hidden="true">
            {icon}
          </div>
        ) : null}
      </header>

      <div
        className={[styles.body, variantBodyClass].filter(Boolean).join(" ")}
      >
        {title ? (
          <h3
            className={[styles.title, variantTitleClass]
              .filter(Boolean)
              .join(" ")}
          >
            {title}
          </h3>
        ) : null}

        {title && description ? (
          <div className={styles.divider} aria-hidden="true" />
        ) : null}

        {description ? (
          <p
            className={[styles.description, variantDescriptionClass]
              .filter(Boolean)
              .join(" ")}
          >
            {description}
          </p>
        ) : null}
      </div>
    </article>
  );
}
