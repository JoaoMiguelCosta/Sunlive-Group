import styles from "./PartnerHotelsGrid.module.css";

export default function PartnerHotelsGrid({ collection = {}, hotels = [] }) {
  const safeHotels = Array.isArray(hotels) ? hotels : [];

  const hasContent = collection?.title || collection?.intro || safeHotels.length > 0;

  if (!hasContent) return null;

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        {collection?.title ? (
          <h2 className={styles.title}>{collection.title}</h2>
        ) : null}

        {collection?.indicator ? (
          <p className={styles.indicator}>{collection.indicator}</p>
        ) : null}
      </div>

      {safeHotels.length > 0 ? (
        <ul className={styles.grid}>
          {safeHotels.map((hotel) => (
            <li key={hotel.key} id={hotel.anchorId} className={styles.card}>
              {hotel?.picture?.src ? (
                <div className={styles.mediaWrap}>
                  <img
                    src={hotel.picture.src}
                    alt={hotel?.picture?.alt ?? hotel.city}
                    className={styles.media}
                    style={{
                      objectPosition: hotel?.imagePosition ?? "center",
                    }}
                    loading="lazy"
                  />
                  <div className={styles.mediaOverlay} aria-hidden="true" />
                  <h3 className={styles.cardTitle}>{hotel.city}</h3>
                </div>
              ) : (
                <h3 className={styles.cardTitle}>{hotel.city}</h3>
              )}

              <div className={styles.cardBody}>
                {hotel?.location ? (
                  <p className={styles.cardLocation}>{hotel.location}</p>
                ) : null}

                {hotel?.description ? (
                  <p className={styles.cardDescription}>
                    {hotel.description}
                  </p>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
