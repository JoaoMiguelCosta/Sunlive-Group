// src/shared/components/TestemonialCard/index.jsx
import styles from "./TestimonialCard.module.css";

function Stars({ count = 5, Icon }) {
  if (!Icon || count <= 0) return null;
  const items = Array.from({ length: count });
  return (
    <span className={styles.stars} aria-hidden="true">
      {items.map((_, i) => (
        <Icon key={i} className={styles.starIcon} size={16} />
      ))}
    </span>
  );
}

export default function TestemonialCard({
  quote,
  rating = 5,
  author = {},
  Icon, // ícone injetado
  className = "", // opcional para overrides
  ...rest // <- props extra (data-active, aria-current, etc.)
}) {
  if (!quote) return null;

  const { name, role, avatar } = author;
  const safeCount = Math.max(
    0,
    Math.min(5, Number.isFinite(rating) ? rating : 0)
  );

  return (
    <article
      {...rest}
      className={[styles.card, className].filter(Boolean).join(" ")}
    >
      <header className={styles.topBar} aria-label={`${safeCount} stars`}>
        <span className={styles.quoteMark} aria-hidden="true">
          ””
        </span>
        <Stars count={safeCount} Icon={Icon} />
      </header>

      <blockquote className={styles.body}>
        <p>“{quote}”</p>
      </blockquote>

      <footer className={styles.footer}>
        <div className={styles.avatarWrap} aria-hidden={!avatar}>
          {avatar ? (
            <img src={avatar} alt="" className={styles.avatarImg} />
          ) : (
            <span className={styles.avatarFallback} />
          )}
        </div>
        <div className={styles.meta}>
          {name && <div className={styles.name}>{name}</div>}
          {role && <div className={styles.role}>{role}</div>}
        </div>
      </footer>
    </article>
  );
}
