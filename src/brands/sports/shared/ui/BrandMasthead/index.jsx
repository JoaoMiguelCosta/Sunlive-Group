// BrandMasthead — Reutilizável para todas as brands
import styles from "./BrandMasthead.module.css";

/**
 * Props:
 * - config?: { assets?: { logoSrc?: string }, meta?: { title?: string, logoSrc?: string } }
 * - src?: string            // força um src direto (override)
 * - fallbackSrc?: string    // último recurso se não houver em config
 * - alt?: string            // override do alt
 * - logoAr?: number         // aspect-ratio do logo (ex.: 591/249 ≈ 2.375)
 * - loading?: "eager" | "lazy"
 * - className?: string      // classes extra no <section>
 */
export default function BrandMasthead({
  config,
  src,
  fallbackSrc,
  alt,
  logoAr = 2.375,
  loading = "eager",
  className = "",
}) {
  const srcFromConfig =
    config?.assets?.logoSrc ?? config?.meta?.logoSrc ?? undefined;

  const finalSrc = src ?? srcFromConfig ?? fallbackSrc ?? null;
  const finalAlt = alt ?? config?.meta?.title ?? "Brand";

  if (!finalSrc) return null;

  return (
    <section className={`${styles.hero} ${className}`} aria-label={finalAlt}>
      <div className={styles.inner}>
        <div className={styles.logoBox} style={{ ["--logo-ar"]: logoAr }}>
          <img
            className={styles.logoImg}
            src={finalSrc}
            alt={finalAlt}
            loading={loading}
          />
        </div>
      </div>
    </section>
  );
}
