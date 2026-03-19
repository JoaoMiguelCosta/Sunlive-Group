import hotelBrand from "../../../../config/index.js";
import styles from "./TestimonialsAverageRating.module.css";

function RatingStars({ total = 5, filled = 5 }) {
  return (
    <div className={styles.stars} aria-hidden="true">
      {Array.from({ length: total }).map((_, index) => {
        const isFilled = index < filled;

        return (
          <span
            key={`rating-star-${index}`}
            className={isFilled ? styles.star : styles.starEmpty}
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

  return (
    <div className={styles.card}>
      <div className={styles.inner}>
        <RatingStars total={5} filled={content.rating ?? 5} />

        <div className={styles.textBlock}>
          {content.ratingLabel ? (
            <p className={styles.rating}>{content.ratingLabel}</p>
          ) : null}

          {content.supportingText ? (
            <p className={styles.supportingText}>{content.supportingText}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
