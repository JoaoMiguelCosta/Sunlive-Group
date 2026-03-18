import hotelBrand from "../../../../config/index.js";
import styles from "./TestimonialsAverageRating.module.css";

function RatingStars({ total = 5, filled = 5, icon = null }) {
  return (
    <div className={styles.stars} aria-hidden="true">
      {Array.from({ length: total }).map((_, index) => {
        const isFilled = index < filled;

        return (
          <span
            key={`star-${index}`}
            className={isFilled ? styles.star : styles.starEmpty}
          >
            {icon ?? "★"}
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

  const { id, ratingValue, ratingLabel, supportingText, stars = {} } = content;
  const title = [ratingValue, ratingLabel].filter(Boolean).join(" ");

  return (
    <div
      id={id}
      className={styles.card}
      role="group"
      aria-label={title || "Classificação média"}
    >
      <div className={styles.inner}>
        <RatingStars
          total={stars.total}
          filled={stars.filled}
          icon={stars.icon}
        />

        <div className={styles.textBlock}>
          {title ? <p className={styles.rating}>{title}</p> : null}
          {supportingText ? (
            <p className={styles.supportingText}>{supportingText}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}