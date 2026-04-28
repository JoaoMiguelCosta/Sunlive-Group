import styles from "./BrandMasthead.module.css";

export default function BrandMasthead({
  src,
  alt,
  logoAr = 2.6,
  loading = "eager",
  className = "",
}) {
  if (!src) return null;

  const mastheadLabel = alt ? `${alt} masthead` : "Brand masthead";

  return (
    <div
      className={`${styles.wrap} ${className}`.trim()}
      aria-label={mastheadLabel}
    >
      <div className={styles.inner}>
        <div className={styles.logoBox} style={{ "--logo-ar": logoAr }}>
          <img
            className={styles.logo}
            src={src}
            alt={alt || ""}
            loading={loading}
            decoding="async"
          />
        </div>
      </div>
    </div>
  );
}
