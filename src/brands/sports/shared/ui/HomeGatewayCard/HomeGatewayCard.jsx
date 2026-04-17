import { Link } from "react-router-dom";
import styles from "./HomeGatewayCard.module.css";

function resolveLinkType(href) {
  if (typeof href !== "string" || !href) return "fallback";
  if (/^https?:\/\//i.test(href)) return "external";
  if (href.startsWith("#")) return "hash";
  return "internal";
}

function renderCardLink({ href, linkType, label, content }) {
  if (linkType === "external") {
    return (
      <a
        href={href}
        className={styles.click}
        aria-label={label}
        target="_blank"
        rel="noreferrer"
      >
        {content}
      </a>
    );
  }

  if (linkType === "hash") {
    return (
      <a href={href} className={styles.click} aria-label={label}>
        {content}
      </a>
    );
  }

  if (linkType === "internal") {
    return (
      <Link to={href} className={styles.click} aria-label={label}>
        {content}
      </Link>
    );
  }

  return (
    <span className={styles.click} aria-label={label}>
      {content}
    </span>
  );
}

function buildCardClassName({ isFeatured, isCta, softenVisual }) {
  return [
    styles.card,
    isFeatured ? styles.featured : "",
    isCta ? styles.cta : "",
    softenVisual ? styles.softened : "",
  ]
    .filter(Boolean)
    .join(" ");
}

export default function HomeGatewayCard({
  item,
  index = 0,
  softenVisual = false,
}) {
  const href = item?.href ?? "#";
  const label = item?.label ?? `Entrada ${index + 1}`;
  const linkType = resolveLinkType(href);

  const isFeatured = Boolean(item?.featured);
  const isCta = item?.variant === "cta";

  const cardClassName = buildCardClassName({
    isFeatured,
    isCta,
    softenVisual,
  });

  const content = (
    <>
      <span className={styles.content}>
        <span className={styles.topRow}>
          <span className={styles.kicker} aria-hidden="true">
            {item?.kicker}
          </span>

          <span className={styles.orb} aria-hidden="true" />
        </span>

        <span className={styles.mainBlock}>
          <span className={styles.label}>{label}</span>

          <span className={styles.description} aria-hidden="true">
            {item?.description}
          </span>
        </span>

        <span className={styles.meta} aria-hidden="true">
          {item?.meta}
        </span>
      </span>

      <span className={styles.cornerGlow} aria-hidden="true" />
      <span className={styles.energyLine} aria-hidden="true" />
    </>
  );

  return (
    <article className={cardClassName}>
      {renderCardLink({
        href,
        linkType,
        label,
        content,
      })}
    </article>
  );
}
