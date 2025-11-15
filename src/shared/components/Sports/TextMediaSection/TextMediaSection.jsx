// src/shared/components/Sports/TextMediaSection/TextMediaSection.jsx
import styles from "./TextMediaSection.module.css";

/**
 * Secção genérica "texto + media" (imagem/vídeo) lado a lado.
 * Versão Sports com eyebrow em badge verde (u-badge-accent) e imagem com halo.
 */
export default function TextMediaSection({
  id,
  eyebrow,
  title,
  paragraphs = [],
  imageSide = "right",
  image,
  children,
  ...rest
}) {
  const hasImage = image && image.src;

  const sectionClasses = [
    styles.section,
    imageSide === "left" ? styles.imageLeft : styles.imageRight,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section
      id={id}
      className={sectionClasses}
      data-image-side={imageSide}
      {...rest}
    >
      <div className={styles.inner}>
        {/* Texto */}
        <div className={styles.textPanel}>
          {(eyebrow || title) && (
            <header className={styles.header}>
              {eyebrow && (
                <p className={styles.eyebrowRow}>
                  {/* u-badge-accent vem do tema global Sports */}
                  <span className={`u-badge-accent ${styles.eyebrow}`}>
                    {eyebrow}
                  </span>
                </p>
              )}
              {title && <h2 className={styles.title}>{title}</h2>}
            </header>
          )}

          {paragraphs?.length > 0 && (
            <div className={styles.body}>
              {paragraphs.map((p, idx) => (
                <p key={idx} className={styles.paragraph}>
                  {p}
                </p>
              ))}
            </div>
          )}

          {children && <div className={styles.extra}>{children}</div>}
        </div>

        {/* Media */}
        <div className={styles.mediaPanel}>
          {hasImage ? (
            <figure className={styles.mediaFigure}>
              <div className={styles.mediaGlow} aria-hidden="true" />
              <img src={image.src} alt={image.alt || ""} loading="lazy" />
            </figure>
          ) : (
            <div className={styles.mediaPlaceholder} aria-hidden="true" />
          )}
        </div>
      </div>
    </section>
  );
}
