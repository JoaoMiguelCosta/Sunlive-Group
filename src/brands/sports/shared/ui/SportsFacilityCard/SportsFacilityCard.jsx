// src/shared/components/Sports/SportsFacilityCard/SportsFacilityCard.jsx
import { useState } from "react";
import styles from "./SportsFacilityCard.module.css";

/**
 * Card genérico para infraestruturas Sports
 * (Velódromo, Pavilhão, Campos, etc.)
 *
 * Props principais:
 * - title: string
 * - description: string
 * - highlight: string
 * - features: string[]
 * - featuresTitle: string
 * - image: string (src) ou JSX opcional
 * - imageAlt: string (alt da imagem)
 */
export default function SportsFacilityCard({
  title,
  description,
  highlight, // ex: "Capacidade para acolher 1000 pessoas"
  features = [], // array de strings
  featuresTitle = "Características principais:",
  image, // string (src) ou JSX opcional
  imageAlt = "",
  photoPlaceholderLabel = "FOTO",
}) {
  const hasFeatures = Array.isArray(features) && features.length > 0;

  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <article className={styles.card} data-brand="sports">
      <div className={styles.media}>
        {image ? (
          typeof image === "string" ? (
            <img src={image} alt={imageAlt || title} loading="lazy" />
          ) : (
            image
          )
        ) : (
          <span className={styles.mediaPlaceholder}>
            {photoPlaceholderLabel}
          </span>
        )}
      </div>

      <div className={styles.titleBar}>
        <h3 className={styles.title}>{title}</h3>
      </div>

      <div className={styles.content}>
        {/* BLOCO COM ALTURA FIXA (descrição + pill + trigger) */}
        <div className={styles.summaryBlock}>
          {description && <p className={styles.description}>{description}</p>}

          {highlight && (
            <div className={styles.highlightPill} aria-label={highlight}>
              <span className={styles.highlightText}>{highlight}</span>
            </div>
          )}

          {hasFeatures && (
            <button
              type="button"
              className={styles.accordionToggle}
              onClick={handleToggle}
              aria-expanded={isOpen}
              aria-label={
                isOpen
                  ? "Recolher características principais"
                  : "Ver características principais"
              }
            >
              <span
                className={`${styles.accordionIcon} ${
                  isOpen ? styles.accordionIconOpen : ""
                }`}
                aria-hidden="true"
              >
                <svg viewBox="0 0 24 24">
                  <path
                    d="M7 10l5 5 5-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          )}
        </div>

        {hasFeatures && isOpen && (
          <div className={styles.featuresBlock}>
            {featuresTitle && (
              <p className={styles.featuresTitle}>{featuresTitle}</p>
            )}

            <ul className={styles.featuresList}>
              {features.map((item, index) => (
                <li key={index} className={styles.featureItem}>
                  <span className={styles.featureBullet} aria-hidden="true">
                    ✓
                  </span>
                  <span className={styles.featureText}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}
