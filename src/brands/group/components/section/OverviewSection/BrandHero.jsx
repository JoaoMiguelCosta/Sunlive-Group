// OverviewSection/BrandHero.jsx
import styles from "./BrandHero.module.css";
import { overview } from "../../../config";
import BrandLogoSVG from "./BrandLogoSVG.jsx"; // podes trocar pelo SVG oficial

export default function BrandHero() {
  const mode = overview?.brandHero?.renderAs ?? "image";
  const src = overview?.brandHero?.imageSrc ?? null;
  const alt = overview?.brandHero?.alt ?? "Sunlive Group";

  return (
    <section className={styles.hero} aria-label="Sunlive Group">
      <div className={styles.inner}>
        <div className={styles.logoBox}>
          {mode === "image" && src && (
            <img className={styles.logoImg} src={src} alt={alt} />
          )}

          {mode === "svg" && (
            <BrandLogoSVG className={styles.logoImg} aria-label={alt} />
          )}

          {mode === "text" && (
            <h1 className={styles.fallback}>SUNLIVE GROUP</h1>
          )}
        </div>
      </div>
    </section>
  );
}
