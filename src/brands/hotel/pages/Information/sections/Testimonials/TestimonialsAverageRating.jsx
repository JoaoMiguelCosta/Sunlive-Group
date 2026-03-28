import hotelBrand from "../../../../config/index.js";
import styles from "./TestimonialsAverageRating.module.css";

function RatingStars({ total = 5, filled = 5, ariaLabel = "Classificação" }) {
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
            ★
          </span>
        );
      })}
    </div>
  );
}

export default function TestimonialsAverageRating() {
  const content =
    hotelBrand?.pages?.information?.sections?.testimonials?.averageRating ??
    null;

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
      id={content.id ?? "info-testimonials-average-rating"}
      className={styles.card}
      aria-label="Classificação média dos testemunhos"
    >
      <div className={styles.inner}>
        <div className={styles.primaryBlock}>
          <RatingStars
            total={totalStars}
            filled={filledStars}
            ariaLabel={starsAriaLabel}
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
