// src/shared/components/LogoGridSection/index.jsx
import styles from "./LogoGridSection.module.css";

export default function LogoGridSection({
  id,
  title,
  items = [],
  columnsMax = 4,
  className, // <- novo
}) {
  const cols = Math.max(1, Math.min(6, columnsMax));

  return (
    <div className={`${styles.wrap} ${className ?? ""}`}>
      <header className={styles.header}>
        <h2 id={id} className={styles.title}>
          {title}
        </h2>
      </header>

      <div
        className={styles.grid}
        data-cols={cols}
        style={{ "--cols-max": cols }}
      >
        {items.map(({ key, name, caption, src, href, cropInset }) => {
          const img = (
            <img
              className={styles.logo}
              src={src}
              alt={name}
              loading="lazy"
              style={
                cropInset
                  ? { clipPath: `inset(${cropInset} round 10px)` }
                  : undefined
              }
            />
          );

          const card = (
            <div className={styles.card} aria-label={name}>
              <div className={styles.logoFrame}>{img}</div>
              {caption && <p className={styles.caption}>{caption}</p>}
            </div>
          );

          return (
            <div key={key} className={styles.cell}>
              {href ? (
                <a
                  className={styles.link}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  title={name}
                >
                  {card}
                </a>
              ) : (
                card
              )}
            </div>
          );
        })}
      </div>

      <div className={styles.goldRule} aria-hidden="true" />
    </div>
  );
}
