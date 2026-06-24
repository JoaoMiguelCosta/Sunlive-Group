import styles from "./TestimonialCard.module.css";

function Stars({ count = 5, Icon }) {
  if (!Icon || count <= 0) return null;

  const items = Array.from({ length: count });

  return (
    <span className={styles.stars} aria-hidden="true">
      {items.map((_, index) => (
        <Icon key={index} className={styles.starIcon} size={16} />
      ))}
    </span>
  );
}

export default function TestimonialCard({
  quote,
  rating = 5,
  author = {},
  Icon,
  className = "",
  ...rest
}) {
  if (!quote) return null;

  const { name, role, avatar } = author ?? {};

  const safeCount = Math.max(
    0,
    Math.min(5, Number.isFinite(rating) ? rating : 0),
  );

  const ariaLabel = safeCount === 1 ? "1 estrela" : `${safeCount} estrelas`;

  return (
    <article
      {...rest}
      className={[styles.card, className].filter(Boolean).join(" ")}
    >
      <header className={styles.topBar} aria-label={ariaLabel}>
        <span className={styles.quoteMark} aria-hidden="true">
          ”
        </span>

        <Stars count={safeCount} Icon={Icon} />
      </header>

      <blockquote className={styles.body}>
        <p>“{quote}”</p>
      </blockquote>

      <footer className={styles.footer}>
        <div className={styles.avatarWrap} aria-hidden="true">
          {avatar ? (
            <img src={avatar} alt="" className={styles.avatarImg} />
          ) : (
            <span className={styles.avatarFallback}>
              <span className={styles.avatarInitial}>
                {name?.trim()?.charAt(0)?.toUpperCase() || "•"}
              </span>
            </span>
          )}
        </div>

        <div className={styles.meta}>
          {name ? <div className={styles.name}>{name}</div> : null}
          {role ? <div className={styles.role}>{role}</div> : null}
        </div>
      </footer>
    </article>
  );
}
