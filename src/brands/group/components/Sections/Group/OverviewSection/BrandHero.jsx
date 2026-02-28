// OverviewSection/BrandHero.jsx
import styles from "./BrandHero.module.css";
import { groupHomePage } from "../../../../config/pages/home.js";

export default function BrandHero() {
  // apenas imagem (não há SVG nem fallback de texto)
  const src = groupHomePage?.overview?.brandHero?.imageSrc ?? null;
  const alt = groupHomePage?.overview?.brandHero?.alt ?? "Sunlive Group";

  if (!src) return null; // se não houver imagem configurada, não renderiza

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
