import styles from "./HeadlineBlock.module.css";

/**
 * HeadlineBlock — padrão reutilizável "título + texto"
 * - Variants: "banded" | "plain"
 * - Align: "center" | "left"
 * - max: "sm" | "md" | "lg"
 * - theme: "default" | "sports" | outros (mapeados em CSS via [data-variant])
 */
export default function HeadlineBlock({
  eyebrow,
  title,
  lead,
  align = "center",
  variant = "banded",
  icon: Icon,
  as = "h2",
  max = "lg",
  theme = "default", // <-- novo
  className = "",
}) {
  if (!title && !lead) return null;

  const Heading = as;
  const classes = [
    styles.wrap,
    styles[`align-${align}`],
    styles[`variant-${variant}`],
    styles[`max-${max}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section
      className={classes}
      data-variant={theme} // <-- aqui nasce o data-variant="sports"
      aria-label={title || eyebrow || "Headline"}
    >
      {variant === "banded" && (
        <div className={styles.band} aria-hidden="true" />
      )}

      <div className={styles.inner}>
        {Icon && (
          <div className={styles.icon} aria-hidden="true">
            <Icon />
          </div>
        )}

        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        {title && <Heading className={styles.title}>{title}</Heading>}
        {lead && <p className={styles.lead}>{lead}</p>}
      </div>
    </section>
  );
}
