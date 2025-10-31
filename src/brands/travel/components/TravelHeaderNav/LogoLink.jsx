// src/brands/travel/components/TravelHeaderNav/LogoLink.jsx
import styles from "./LogoLink.module.css";

/**
 * LogoLink — link do logo da Sunlive Travel
 * - Usa logo.href se existir; fallback para "/sunlive-group/travel"
 * - Passa os atributos comuns de <img> (loading/decoding/width/height)
 * - Mantém acessibilidade com aria-label/title
 */
export default function LogoLink({ logo = {} }) {
  const {
    src,
    alt = "Sunlive Travel",
    loading,
    decoding,
    width,
    height,
    href,
    title,
  } = logo;

  const to = href || "/sunlive-group/travel";

  return (
    <a
      className={styles.logoLink}
      href={to}
      aria-label={`${alt} — Início`}
      title={title || alt}
    >
      <img
        className={styles.logo}
        src={src}
        alt={alt}
        loading={loading}
        decoding={decoding}
        width={width}
        height={height}
      />
    </a>
  );
}
