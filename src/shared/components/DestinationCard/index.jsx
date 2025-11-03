// src/shared/components/DestinationCard/index.jsx (ou DestinationCard.jsx)
import React from "react";
import styles from "./DestinationCard.module.css";

/**
 * DestinationCard
 * - variant?: "international" | "domestic" | "hotel" | "partner" | undefined   // ✅ inclui "partner"
 * - flagIcon?: React.FC -> componente de bandeira (SVG/React)
 * - cta?: { label: string; href: string; external?: boolean }
 */
export default function DestinationCard({
  city,
  badge,
  imageSrc,
  imageAlt,
  summary,
  duration,
  highlights = [],
  includes = [],
  flagIcon: FlagIcon,
  variant,
  cta,
}) {
  if (!city || !imageSrc || !imageAlt) return null;

  // ✅ aria-label mais correto para parceiros
  const ariaLabel =
    variant === "partner" ? `Parceiro: ${city}` : `Destino: ${city}`;

  return (
    <article
      className={styles.card}
      aria-label={ariaLabel}
      data-variant={variant}
    >
      {/* Imagem + badge */}
      <div className={styles.imageWrap}>
        <img
          className={styles.image}
          src={imageSrc}
          alt={imageAlt}
          loading="lazy"
        />
        {badge ? <span className={styles.badge}>{badge}</span> : null}
      </div>

      {/* Barra de título (com bandeira) */}
      <div className={styles.titleBar} role="heading" aria-level={3}>
        {FlagIcon ? (
          <FlagIcon className={styles.flag} aria-hidden="true" />
        ) : null}
        <span className={styles.title}>{city}</span>
      </div>

      {/* Corpo */}
      <div className={styles.body}>
        {summary ? <p className={styles.summary}>{summary}</p> : null}

        {duration ? (
          <div className={styles.durationRow} aria-label="Duração">
            <span className={styles.durationIcon} aria-hidden="true" />
            <span className={styles.durationText}>{duration}</span>
          </div>
        ) : null}

        {includes.length > 0 ? (
          <div className={styles.hlBlock} aria-label="Inclui">
            <div className={styles.hlHeader}>Inclui:</div>
            <ul
              className="includes"
              style={{ margin: 0, padding: 0, listStyle: "none" }}
            >
              {includes.map((item, idx) => (
                <li key={`inc-${idx}`} className="pill incPill">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {highlights.length > 0 ? (
          <div className={styles.hlBlock} aria-label="Destaques">
            <div className={styles.hlHeader}>Destaques :</div>
            <ul className={styles.hlList} role="list">
              {highlights.map((h, i) => (
                <li key={`hl-${i}`} className={styles.hlPill} role="listitem">
                  {h}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {cta?.href ? (
          <div className={styles.ctaRow}>
            <a
              className={styles.ctaButton}
              href={cta.href}
              target={cta.external !== false ? "_blank" : "_self"}
              rel={cta.external !== false ? "noopener noreferrer" : undefined}
              aria-label={`${cta.label} – ${city}`}
            >
              {cta.label}
              <span aria-hidden="true" className={styles.ctaIcon} />
            </a>
          </div>
        ) : null}
      </div>
    </article>
  );
}
