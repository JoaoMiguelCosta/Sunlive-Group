import styles from "./PartnerLogoGrid.module.css";
import { isValidText } from "../../../../shared/utils/contentGuards.js";

function getCropStyle(cropInset) {
  return isValidText(cropInset)
    ? { clipPath: `inset(${cropInset} round 10px)` }
    : undefined;
}

export default function PartnerLogoCard({ name, caption, src, href, cropInset }) {
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

      {isValidText(caption) ? <p className={styles.caption}>{caption}</p> : null}
    </div>
  );

  if (isValidText(href)) {
    return (
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
    );
  }

  return card;
}
