import styles from "./DestinationCard.module.css";

function createDestinationId(destination) {
  if (destination?.key) return String(destination.key);

  const city = String(destination?.city ?? "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

  return city || "destination";
}

export default function DestinationCard({
  destination,
  variant = "default",
  flagIcon: FlagIcon = null,
}) {
  if (!destination?.city) return null;

  const destinationId = createDestinationId(destination);

  const highlights = Array.isArray(destination?.highlights)
    ? destination.highlights.filter(Boolean)
    : [];

  const pictureSrc = destination?.picture?.src ?? null;
  const pictureAlt = destination?.picture?.alt ?? destination.city;
  const imagePosition = destination?.imagePosition ?? "center";
  const imageFit = destination?.imageFit ?? "cover";

  const ctaLabel = destination?.ctaLabel ?? "Saiba Mais";
  const ctaHref = destination?.href ?? null;
  const isExternal =
    typeof ctaHref === "string" &&
    (ctaHref.startsWith("http://") || ctaHref.startsWith("https://"));

  return (
    <article
      className={styles.card}
      data-variant={variant}
      aria-labelledby={`${destinationId}-title`}
    >
      {pictureSrc ? (
        <div className={styles.imageWrap}>
          <img
            src={pictureSrc}
            alt={pictureAlt}
            className={styles.image}
            style={{
              objectPosition: imagePosition,
              objectFit: imageFit,
            }}
            loading="lazy"
          />

          <div className={styles.imageOverlay} aria-hidden="true" />

          {destination?.badge ? (
            <span className={styles.badge}>{destination.badge}</span>
          ) : null}
        </div>
      ) : null}

      <div className={styles.titleBar}>
        <div className={styles.titleInner}>
          {FlagIcon && variant !== "hotel" && variant !== "partner" ? (
            <span className={styles.flagWrap} aria-hidden="true">
              <FlagIcon className={styles.flagIcon} />
            </span>
          ) : null}

          <h3 id={`${destinationId}-title`} className={styles.title}>
            {destination.city}
          </h3>
        </div>
      </div>

      <div className={styles.content}>
        {destination?.summary ? (
          <p className={styles.summary}>{destination.summary}</p>
        ) : null}

        {variant !== "hotel" &&
        variant !== "partner" &&
        destination?.duration ? (
          <div className={styles.metaRow}>
            <span className={styles.metaIcon} aria-hidden="true" />
            <p className={styles.duration}>{destination.duration}</p>
          </div>
        ) : null}

        {variant !== "hotel" &&
        variant !== "partner" &&
        highlights.length > 0 ? (
          <div className={styles.highlightsBlock}>
            <p className={styles.highlightsLabel}>Destaques:</p>

            <ul
              className={styles.highlights}
              aria-label={`Destaques de ${destination.city}`}
            >
              {highlights.map((item) => (
                <li key={item} className={styles.highlight}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {(variant === "hotel" || variant === "partner") && ctaHref ? (
          <div className={styles.hotelActionRow}>
            <a
              href={ctaHref}
              className={styles.hotelLink}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noreferrer noopener" : undefined}
              aria-label={`${ctaLabel} sobre ${destination.city}`}
            >
              <span>{ctaLabel}</span>
              <span className={styles.hotelLinkIcon} aria-hidden="true" />
            </a>
          </div>
        ) : null}
      </div>
    </article>
  );
}
