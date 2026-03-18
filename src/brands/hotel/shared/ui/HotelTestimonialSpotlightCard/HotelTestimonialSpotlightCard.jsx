import styles from "./HotelTestimonialSpotlightCard.module.css";

function RatingStars({ total = 5, filled = 5, icon = null }) {
  return (
    <div className={styles.stars} aria-hidden="true">
      {Array.from({ length: total }).map((_, index) => {
        const isFilled = index < filled;

        return (
          <span
            key={`rating-star-${index}`}
            className={isFilled ? styles.star : styles.starEmpty}
          >
            {icon ?? "★"}
          </span>
        );
      })}
    </div>
  );
}

export default function HotelTestimonialSpotlightCard({
  organisation,
  context,
  category,
  rating = 5,
  quote,
  dateLabel,
  profileIcon = null,
  quoteIcon = null,
  locationIcon = null,
  dateIcon = null,
  starIcon = null,
}) {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <div className={styles.iconWrap} aria-hidden="true">
          <span className={styles.iconCircle}>{profileIcon ?? "◔"}</span>
        </div>

        <div className={styles.headerContent}>
          {organisation ? (
            <h3 className={styles.organisation}>{organisation}</h3>
          ) : null}

          {context ? <p className={styles.context}>{context}</p> : null}

          {category ? (
            <div className={styles.categoryRow}>
              <span className={styles.inlineIcon} aria-hidden="true">
                {locationIcon ?? "⌖"}
              </span>
              <span className={styles.category}>{category}</span>
            </div>
          ) : null}
        </div>
      </header>

      <div className={styles.ratingBand}>
        <span className={styles.quoteIcon} aria-hidden="true">
          {quoteIcon ?? "❞"}
        </span>

        <RatingStars total={5} filled={rating} icon={starIcon} />
      </div>

      <div className={styles.quoteArea}>
        {quote ? <p className={styles.quote}>"{quote}"</p> : null}
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerBadge}>
          <span className={styles.inlineIcon} aria-hidden="true">
            {dateIcon ?? "◫"}
          </span>
          <span className={styles.dateLabel}>{dateLabel}</span>
        </div>
      </footer>
    </article>
  );
}