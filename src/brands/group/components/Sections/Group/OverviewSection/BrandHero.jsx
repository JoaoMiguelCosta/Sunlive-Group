import styles from "./BrandHero.module.css";
import { groupHomePage } from "../../../../config/pages/index.js";

export default function BrandHero() {
  const src = groupHomePage?.sections?.overview?.brandHero?.imageSrc ?? null;
  const alt =
    groupHomePage?.sections?.overview?.brandHero?.alt ?? "Sunlive Group";

  if (!src) return null;

  return (
    <div className={styles.hero} aria-label="Identidade Sunlive Group">
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
