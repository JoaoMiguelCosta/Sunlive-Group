import styles from "./BrandHero.module.css";
import homePage from "../../../../config/pages/home.js";
const overview = homePage.sections.overview;

export default function BrandHero() {
  const src = overview?.brandHero?.imageSrc ?? null;
  const alt = overview?.brandHero?.alt ?? "Sunlive Group";

  if (!src) return null;

  return (
    <div className={styles.hero}>
      <div className={styles.logoBox}>
        <img
          className={styles.logoImg}
          src={src}
          alt={alt}
          loading="eager"
          decoding="async"
          draggable="false"
        />
      </div>
    </div>
  );
}
