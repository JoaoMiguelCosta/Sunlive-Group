import hotelBrand from "../../../../config/index.js";
import styles from "./LocationDetails.module.css";

export default function LocationDetails() {
  const section = hotelBrand?.pages?.information?.sections?.location ?? null;
  const details = section?.details ?? null;

  if (!details) return null;

  const quickAccessPills = Array.isArray(details?.quickAccessPills)
    ? details.quickAccessPills
    : [];

  const { addressCard, gpsCard, contact, map } = details;

  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        <div className={styles.leftColumn}>
          {quickAccessPills.length ? (
            <div
              className={styles.quickAccessRow}
              aria-label="Destaques da localização"
            >
              {quickAccessPills.map((item) => (
                <span key={item.id} className={styles.quickAccessPill}>
                  {item.label}
                </span>
              ))}
            </div>
          ) : null}

          <article className={styles.infoCard} aria-label={addressCard?.title}>
            <header className={styles.cardHeader}>
              <div className={styles.cardHeaderInner}>
                <div className={styles.cardHeaderText}>
                  {addressCard?.eyebrow ? (
                    <p className={styles.cardEyebrow}>{addressCard.eyebrow}</p>
                  ) : null}

                  {addressCard?.title ? (
                    <h3 className={styles.cardTitle}>{addressCard.title}</h3>
                  ) : null}
                </div>

                {addressCard?.icon ? (
                  <span className={styles.headerIcon} aria-hidden="true">
                    {addressCard.icon}
                  </span>
                ) : null}
              </div>
            </header>

            <div className={styles.cardBody}>
              <div className={styles.addressBox}>
                {addressCard?.lines?.map((line, index) => (
                  <p key={`${line}-${index}`} className={styles.addressLine}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </article>

          <article className={styles.infoCard} aria-label={gpsCard?.title}>
            <header className={styles.cardHeader}>
              <div className={styles.cardHeaderInner}>
                <div className={styles.cardHeaderText}>
                  {gpsCard?.eyebrow ? (
                    <p className={styles.cardEyebrow}>{gpsCard.eyebrow}</p>
                  ) : null}

                  {gpsCard?.title ? (
                    <h3 className={styles.cardTitle}>{gpsCard.title}</h3>
                  ) : null}
                </div>

                {gpsCard?.icon ? (
                  <span className={styles.headerIcon} aria-hidden="true">
                    {gpsCard.icon}
                  </span>
                ) : null}
              </div>
            </header>

            <div className={styles.cardBody}>
              <div className={styles.coordinatesGrid}>
                <div className={styles.coordinateCard}>
                  <span className={styles.coordinateLabel}>
                    {gpsCard?.latitudeLabel}
                  </span>
                  <span className={styles.coordinateValue}>
                    {gpsCard?.latitude}
                  </span>
                </div>

                <div className={styles.coordinateCard}>
                  <span className={styles.coordinateLabel}>
                    {gpsCard?.longitudeLabel}
                  </span>
                  <span className={styles.coordinateValue}>
                    {gpsCard?.longitude}
                  </span>
                </div>
              </div>
            </div>
          </article>

          <div className={styles.actionsRow}>
            <a
              className={`${styles.actionButton} ${styles.actionPrimary}`}
              href={contact?.href}
              aria-label={contact?.ariaLabel || contact?.label}
            >
              {contact?.icon ? (
                <span className={styles.actionIcon} aria-hidden="true">
                  {contact.icon}
                </span>
              ) : null}

              <span className={styles.actionLabel}>{contact?.label}</span>
            </a>

            <a
              className={`${styles.actionButton} ${styles.actionSecondary}`}
              href={map?.href}
              target="_blank"
              rel="noreferrer"
              aria-label={map?.googleMapsAriaLabel || map?.googleMapsLabel}
            >
              {map?.ctaIcon ? (
                <span className={styles.actionIcon} aria-hidden="true">
                  {map.ctaIcon}
                </span>
              ) : null}

              <span className={styles.actionLabel}>{map?.googleMapsLabel}</span>
            </a>
          </div>
        </div>

        <article className={styles.mapCard} aria-label={map?.title}>
          <div className={styles.mapFrameWrap}>
            <iframe
              className={styles.mapFrame}
              src={map?.embedSrc}
              title={map?.title}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className={styles.mapOverlay} aria-hidden="true" />
          </div>

          <span className={styles.mapBadge}>
            {map?.badgeIcon ? (
              <span className={styles.badgeIcon} aria-hidden="true">
                {map.badgeIcon}
              </span>
            ) : null}
            <span>{map?.badge}</span>
          </span>

          <div className={styles.mapContent}>
            {map?.title ? (
              <h3 className={styles.mapTitle}>{map.title}</h3>
            ) : null}

            {map?.supportingText ? (
              <p className={styles.mapSupportingText}>{map.supportingText}</p>
            ) : null}

            <a
              className={styles.mapAction}
              href={map?.href}
              target="_blank"
              rel="noreferrer"
              aria-label={map?.ariaLabel || map?.title}
            >
              {map?.ctaLabel}
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
