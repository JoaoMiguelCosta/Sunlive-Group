// OverviewSection/BrandHero.jsx
import styles from "./BrandHero.module.css";
import { groupHomePage } from "../../../../config/pages/index.js";

export default function BrandHero() {
  const src = groupHomePage?.sections?.overview?.brandHero?.imageSrc ?? null;
  const alt =
    groupHomePage?.sections?.overview?.brandHero?.alt ?? "Sunlive Group";

  if (!src) return null;

  return (
    <section className={styles.hero} aria-label="Sunlive Group">
      <div className={styles.inner}>
        <div className={styles.logoBox}>
          <img className={styles.logoImg} src={src} alt={alt} loading="eager" />
        </div>
      </div>
    </section>
  );
}


