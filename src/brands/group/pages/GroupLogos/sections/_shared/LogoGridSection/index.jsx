import styles from "./LogoGridSection.module.css";
import {
  isValidText,
  isValidObject,
} from "../../../../../shared/utils/contentGuards.js";

function getValidItems(items) {
  return Array.isArray(items)
    ? items.filter(
        (item) =>
          isValidObject(item) &&
          isValidText(item.key) &&
          isValidText(item.name) &&
          isValidText(item.src),
      )
    : [];
}

function getColumnCount(columnsMax) {
  const parsedColumns = Number(columnsMax);

  if (!Number.isFinite(parsedColumns)) return 4;

  return Math.max(1, Math.min(6, Math.round(parsedColumns)));
}

function getCropStyle(cropInset) {
  return isValidText(cropInset)
    ? { clipPath: `inset(${cropInset} round 10px)` }
    : undefined;
}

export default function LogoGridSection({
  id,
  title,
  items = [],
  columnsMax = 4,
}) {
  const validItems = getValidItems(items);
  const cols = getColumnCount(columnsMax);
  const headingId = isValidText(id) ? id : undefined;

  if (!validItems.length) return null;

  return (
    <div className={styles.wrap} style={{ "--cols-max": cols }}>
      {isValidText(title) ? (
        <header className={styles.header}>
          <h2 id={headingId} className={styles.title}>
            {title}
          </h2>
        </header>
      ) : null}

      <div
        className={styles.grid}
        data-cols={cols}
        role="list"
      >
        {validItems.map(({ key, name, caption, src, href, cropInset }) => {
          const image = (
            <img
              className={styles.logo}
              src={src}
              alt={name}
              loading="lazy"
              decoding="async"
              style={getCropStyle(cropInset)}
            />
          );

          const card = (
            <div className={styles.card}>
              <div className={styles.logoFrame}>{image}</div>

              {isValidText(caption) ? (
                <p className={styles.caption}>{caption}</p>
              ) : null}
            </div>
          );

          return (
            <div key={key} className={styles.cell} role="listitem">
              {isValidText(href) ? (
                <a
                  className={styles.link}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  title={name}
                  aria-label={name}
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
