import { useMemo, useState } from "react";
import styles from "./PartnerHotelsCuratedCollection.module.css";

function normalizeHotels(hotels = []) {
  if (!Array.isArray(hotels)) return [];

  return hotels
    .filter((hotel) => hotel?.picture?.src && hotel?.city)
    .map((hotel, index) => ({
      ...hotel,
      key: hotel?.key || `hotel-${index}`,
    }));
}

export default function PartnerHotelsCuratedCollection({
  collection = {},
  hotels = [],
}) {
  const safeHotels = useMemo(() => normalizeHotels(hotels), [hotels]);

  const initialKey =
    safeHotels.find((item) => item.key === collection?.initialKey)?.key ??
    safeHotels[0]?.key ??
    null;

  const [activeKey, setActiveKey] = useState(initialKey);

  const activeHotel =
    safeHotels.find((item) => item.key === activeKey) ?? safeHotels[0] ?? null;

  const remainingHotels = safeHotels.filter(
    (item) => item.key !== activeHotel?.key,
  );

  if (!activeHotel) return null;

  const selectorAriaLabel =
    collection?.selectorAriaLabel ?? "Selecionar hotel em destaque";

  const spotlightLabel = collection?.spotlightLabel ?? "Seleção principal";
  const locationLabel = collection?.locationLabel ?? "Localização";
  const selectorLabel = collection?.selectorLabel ?? "Hotéis disponíveis";

  const ctaLabel =
    activeHotel?.ctaLabel ?? collection?.ctaLabel ?? "Saiba Mais";
  const ctaHref = activeHotel?.href ?? null;
  const isExternal =
    typeof ctaHref === "string" &&
    (ctaHref.startsWith("http://") || ctaHref.startsWith("https://"));

  return (
    <section className={styles.section} aria-label={collection?.ariaLabel}>
      <div className={styles.shell}>
        <div className={styles.featuredHotel}>
          <div className={styles.featuredMediaWrap}>
            {activeHotel?.picture?.src ? (
              <img
                src={activeHotel.picture.src}
                alt={activeHotel?.picture?.alt ?? activeHotel.city}
                className={styles.featuredImage}
                style={{
                  objectPosition: activeHotel?.imagePosition ?? "center",
                  objectFit: activeHotel?.imageFit ?? "cover",
                }}
                loading="lazy"
              />
            ) : null}

            <div className={styles.featuredOverlay} aria-hidden="true" />

            <div className={styles.featuredMeta}>
              <span className={styles.featuredBadge}>{spotlightLabel}</span>
              <h3 className={styles.featuredTitle}>{activeHotel.city}</h3>
            </div>
          </div>

          <div className={styles.featuredContent}>
            <div className={styles.editorialHead}>
              {collection?.kicker ? (
                <p className={styles.kicker}>{collection.kicker}</p>
              ) : null}

              {collection?.title ? (
                <h3 className={styles.editorialTitle}>{collection.title}</h3>
              ) : null}

              {collection?.description ? (
                <p className={styles.editorialDescription}>
                  {collection.description}
                </p>
              ) : null}
            </div>

            <div className={styles.hotelBody}>
              {activeHotel?.summary ? (
                <p className={styles.summary}>{activeHotel.summary}</p>
              ) : null}

              {activeHotel?.badge ? (
                <div className={styles.locationBlock}>
                  <p className={styles.locationLabel}>{locationLabel}</p>
                  <p className={styles.locationValue}>{activeHotel.badge}</p>
                </div>
              ) : null}

              {ctaHref ? (
                <div className={styles.actionRow}>
                  <a
                    href={ctaHref}
                    className={styles.hotelLink}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer noopener" : undefined}
                    aria-label={`${ctaLabel} sobre ${activeHotel.city}`}
                  >
                    <span>{ctaLabel}</span>
                    <span className={styles.hotelLinkIcon} aria-hidden="true" />
                  </a>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <aside className={styles.selectorPanel} aria-label={selectorAriaLabel}>
          <div className={styles.selectorHead}>
            <p className={styles.selectorLabel}>{selectorLabel}</p>
            <p className={styles.selectorCount}>
              {safeHotels.length} hotéis disponíveis
            </p>
          </div>

          <div
            className={styles.selectorList}
            role="tablist"
            aria-label={selectorAriaLabel}
          >
            {safeHotels.map((hotel) => {
              const isActive = hotel.key === activeHotel.key;

              return (
                <button
                  key={hotel.key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={[
                    styles.selectorItem,
                    isActive ? styles.selectorItemActive : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() => setActiveKey(hotel.key)}
                >
                  <span className={styles.selectorItemTop}>
                    <span className={styles.selectorItemBadge}>
                      {hotel?.badge ?? hotel.city}
                    </span>
                  </span>

                  <span className={styles.selectorItemTitle}>{hotel.city}</span>

                  {hotel?.summary ? (
                    <span className={styles.selectorItemSummary}>
                      {hotel.summary}
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>
        </aside>

        {remainingHotels.length > 0 ? (
          <div className={styles.catalogGrid}>
            {remainingHotels.map((hotel) => {
              const cardCtaLabel = hotel?.ctaLabel ?? "Saiba Mais";
              const cardHref = hotel?.href ?? null;
              const cardExternal =
                typeof cardHref === "string" &&
                (cardHref.startsWith("http://") ||
                  cardHref.startsWith("https://"));

              return (
                <article key={hotel.key} className={styles.catalogCard}>
                  <div className={styles.catalogMediaWrap}>
                    {hotel?.picture?.src ? (
                      <img
                        src={hotel.picture.src}
                        alt={hotel?.picture?.alt ?? hotel.city}
                        className={styles.catalogImage}
                        style={{
                          objectPosition: hotel?.imagePosition ?? "center",
                          objectFit: hotel?.imageFit ?? "cover",
                        }}
                        loading="lazy"
                      />
                    ) : null}

                    <div className={styles.catalogOverlay} aria-hidden="true" />
                  </div>

                  <div className={styles.catalogContent}>
                    <div className={styles.catalogTop}>
                      <span className={styles.catalogBadge}>
                        {hotel?.badge ?? hotel.city}
                      </span>
                      <h4 className={styles.catalogTitle}>{hotel.city}</h4>
                    </div>

                    {hotel?.summary ? (
                      <p className={styles.catalogSummary}>{hotel.summary}</p>
                    ) : null}

                    <div className={styles.catalogActions}>
                      <button
                        type="button"
                        className={styles.catalogSelectButton}
                        onClick={() => setActiveKey(hotel.key)}
                      >
                        Ver em destaque
                      </button>

                      {cardHref ? (
                        <a
                          href={cardHref}
                          className={styles.catalogLink}
                          target={cardExternal ? "_blank" : undefined}
                          rel={cardExternal ? "noreferrer noopener" : undefined}
                          aria-label={`${cardCtaLabel} sobre ${hotel.city}`}
                        >
                          <span>{cardCtaLabel}</span>
                          <span
                            className={styles.catalogLinkIcon}
                            aria-hidden="true"
                          />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
}
