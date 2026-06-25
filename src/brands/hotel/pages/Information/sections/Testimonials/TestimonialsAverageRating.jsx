import { useMemo } from "react";

import information from "../../../../config/pages/information.js";
const testimonials = information.sections.testimonials;
import { resolveHotelIcon } from "../../../../config/core/iconKeyMap.js";
import { ICONS } from "../../../../config/core/resolvedVisuals.js";

import styles from "./TestimonialsAverageRating.module.css";

function RatingStars({
  total = 5,
  filled = 5,
  ariaLabel = "Classificação",
  icon = null,
}) {
  return (
    <div className={styles.stars} aria-label={ariaLabel}>
      {Array.from({ length: total }).map((_, index) => {
        const isFilled = index < filled;

        return (
          <span
            key={`rating-star-${index}`}
            className={isFilled ? styles.star : styles.starEmpty}
            aria-hidden="true"
          >
            {icon ?? "★"}
          </span>
        );
      })}
    </div>
  );
}

export default function TestimonialsAverageRating() {
  const content = testimonials?.averageRating ?? null;

  const starIcon = useMemo(() => {
    const iconName = content?.stars?.iconName ?? null;
    const Icon = iconName
      ? resolveHotelIcon(ICONS, iconName)
      : null;

    return Icon ? <Icon /> : null;
  }, [content?.stars?.iconName]);

  if (!content) return null;

  const ratingValue = content?.ratingValue ?? "";
  const ratingLabel = content?.ratingLabel ?? "";
  const supportingText = content?.supportingText ?? "";
  const trustItems = Array.isArray(content?.trustItems)
    ? content.trustItems
    : [];

  const stars = content?.stars ?? {};
  const totalStars = Number(stars?.total ?? 5);
  const filledStars = Number(stars?.filled ?? 5);
  const starsAriaLabel = stars?.ariaLabel ?? "5 estrelas";

  return (
    <section
      id={content.id ?? "informacoes-testemunhos-average-rating"}
      className={styles.card}
      aria-label="Classificação média dos testemunhos"
    >
      <div className={styles.inner}>
        <div className={styles.primaryBlock}>
          <RatingStars
            total={totalStars}
            filled={filledStars}
            ariaLabel={starsAriaLabel}
            icon={stars.icon ?? starIcon}
          />

          <div className={styles.titleRow}>
            {ratingValue ? (
              <p className={styles.ratingValue}>{ratingValue}</p>
            ) : null}

            {ratingLabel ? (
              <p className={styles.ratingLabel}>{ratingLabel}</p>
            ) : null}
          </div>

          {supportingText ? (
            <p className={styles.supportingText}>{supportingText}</p>
          ) : null}
        </div>

        {trustItems.length ? (
          <div className={styles.trustList} aria-label="Perfis representados">
            {trustItems.map((item) => (
              <span key={item.id} className={styles.trustItem}>
                {item.label}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
