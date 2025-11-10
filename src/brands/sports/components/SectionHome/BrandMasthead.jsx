// BrandMasthead.jsx — imagem apenas (sem glow), estilo “Performance Prestige”
import styles from "./BrandMasthead.module.css";
import sportsBrand from "../../configSports.jsx";

/* Ficheiro local do logo (fallback) */
import sportsLogo from "../../assets/LogoSunliveSports/sports.png";

export default function BrandMasthead() {
  // tenta ler do config; se não houver, usa o asset local
  const src =
    sportsBrand?.assets?.logoSrc ?? sportsBrand?.meta?.logoSrc ?? sportsLogo;

  const alt = sportsBrand?.meta?.title ?? "Sunlive Sports";

  if (!src) return null;

  return (
    <section className={styles.hero} aria-label={alt}>
      <div className={styles.inner}>
        <div className={styles.logoBox}>
          <img className={styles.logoImg} src={src} alt={alt} loading="eager" />
        </div>
      </div>
    </section>
  );
}
