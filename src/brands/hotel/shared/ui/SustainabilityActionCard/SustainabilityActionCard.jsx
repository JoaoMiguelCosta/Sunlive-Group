import styles from "./SustainabilityActionCard.module.css";

function getVariantClassName(baseName, variant) {
  if (!variant || variant === "default") return "";

  const variantName = `${variant[0].toUpperCase()}${variant.slice(1)}`;
  return styles[`${baseName}${variantName}`] ?? "";
}

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
  if (!title && !description) return null;

  const cardLabel = ariaLabel || title || "Ação sustentável";

  const classNames = [
    styles.card,
    getVariantClassName("card", variant),
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const headerClassName = [
    styles.header,
    getVariantClassName("header", variant),
  ]
    .filter(Boolean)
    .join(" ");

  const bodyClassName = [styles.body, getVariantClassName("body", variant)]
    .filter(Boolean)
    .join(" ");

  const titleClassName = [styles.title, getVariantClassName("title", variant)]
    .filter(Boolean)
    .join(" ");

  const descriptionClassName = [
    styles.description,
    getVariantClassName("description", variant),
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={classNames} aria-label={cardLabel}>
      <header className={headerClassName}>
        <div className={styles.headerTop}>
          {eyebrow ? (
            <span className={styles.eyebrow}>{eyebrow}</span>
          ) : (
            <span aria-hidden="true" />
          )}

          {step ? <span className={styles.step}>{step}</span> : null}
        </div>

        {icon ? (
          <div className={styles.iconCircle} aria-hidden="true">
            {icon}
          </div>
        ) : null}
      </header>

      <div className={bodyClassName}>
        {title ? <h3 className={titleClassName}>{title}</h3> : null}

        {title && description ? (
          <div className={styles.divider} aria-hidden="true" />
        ) : null}

        {description ? (
          <p className={descriptionClassName}>{description}</p>
        ) : null}
      </div>
    </article>
  );
}
