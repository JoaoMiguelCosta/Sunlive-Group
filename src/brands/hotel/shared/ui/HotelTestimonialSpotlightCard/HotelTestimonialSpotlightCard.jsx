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

function getInitials(value = "") {
  return value
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export default function HotelTestimonialSpotlightCard({
  organisation,
  context,
  category,
  rating = 5,
  quote,
  dateLabel,
  imageSrc = null,
  imageAlt = "",
  verifiedLabel = "",
  profileIcon = null,
  quoteIcon = null,
  locationIcon = null,
  dateIcon = null,
  starIcon = null,
}) {
  const initials = getInitials(organisation);
  const avatarFallbackContent = profileIcon ?? initials ?? "ES";

  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <div className={styles.identityBlock}>
          <div className={styles.avatarWrap} aria-hidden="true">
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={imageAlt}
                className={styles.avatarImage}
              />
            ) : (
              <span className={styles.avatarFallback}>
                {avatarFallbackContent}
              </span>
            )}
          </div>

          <div className={styles.headerContent}>
            {organisation ? (
              <h3 className={styles.organisation}>{organisation}</h3>
            ) : null}

            {context ? <p className={styles.context}>{context}</p> : null}
          </div>
        </div>

        {category ? (
          <div className={styles.categoryRow}>
            <span className={styles.inlineIcon} aria-hidden="true">
              {locationIcon ?? "⌖"}
            </span>
            <span className={styles.category}>{category}</span>
          </div>
        ) : null}
      </header>

      <div className={styles.ratingBand}>
        <div className={styles.verifiedRow}>
          <span className={styles.quoteIcon} aria-hidden="true">
            {quoteIcon ?? "❞"}
          </span>

          {verifiedLabel ? (
            <span className={styles.verifiedBadge}>{verifiedLabel}</span>
          ) : null}
        </div>

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
