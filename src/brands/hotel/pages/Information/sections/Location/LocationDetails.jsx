import location from "../../../../config/sections/information/location.js";

import styles from "./LocationDetails.module.css";

function hasValidHref(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function getValidItems(items) {
  return Array.isArray(items)
    ? items.filter((item) => item?.id && item?.label)
    : [];
}

export default function LocationDetails() {
  const section = location;
  const details = section?.details ?? null;

  if (!details) return null;

  const quickAccessPills = getValidItems(details.quickAccessPills);

  const { addressCard, gpsCard, contact, map } = details;

  const hasContactAction = hasValidHref(contact?.href) && contact?.label;
  const hasMapAction = hasValidHref(map?.href) && map?.googleMapsLabel;

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

            {Array.isArray(addressCard?.lines) && addressCard.lines.length ? (
              <div className={styles.cardBody}>
                <div className={styles.addressBox}>
                  {addressCard.lines.map((line, index) => (
                    <p key={`${line}-${index}`} className={styles.addressLine}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ) : null}
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

          {hasContactAction || hasMapAction ? (
            <div className={styles.actionsRow}>
              {hasContactAction ? (
                <a
                  className={`${styles.actionButton} ${styles.actionPrimary}`}
                  href={contact.href}
                  aria-label={contact.ariaLabel || contact.label}
                >
                  {contact.icon ? (
                    <span className={styles.actionIcon} aria-hidden="true">
                      {contact.icon}
                    </span>
                  ) : null}

                  <span className={styles.actionLabel}>{contact.label}</span>
                </a>
              ) : null}

              {hasMapAction ? (
                <a
                  className={`${styles.actionButton} ${styles.actionSecondary}`}
                  href={map.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={map.googleMapsAriaLabel || map.googleMapsLabel}
                >
                  {map.ctaIcon ? (
                    <span className={styles.actionIcon} aria-hidden="true">
                      {map.ctaIcon}
                    </span>
                  ) : null}

                  <span className={styles.actionLabel}>
                    {map.googleMapsLabel}
                  </span>
                </a>
              ) : null}
            </div>
          ) : null}
        </div>

        <article className={styles.mapCard} aria-label={map?.title}>
          <div className={styles.mapFrameWrap}>
            {map?.embedSrc ? (
              <iframe
                className={styles.mapFrame}
                src={map.embedSrc}
                title={map?.title ?? "Mapa da localização"}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : null}

            <div className={styles.mapOverlay} aria-hidden="true" />
          </div>

          {map?.badge ? (
            <span className={styles.mapBadge}>
              {map.badgeIcon ? (
                <span className={styles.badgeIcon} aria-hidden="true">
                  {map.badgeIcon}
                </span>
              ) : null}

              <span>{map.badge}</span>
            </span>
          ) : null}

          <div className={styles.mapContent}>
            {map?.title ? (
              <h3 className={styles.mapTitle}>{map.title}</h3>
            ) : null}

            {map?.supportingText ? (
              <p className={styles.mapSupportingText}>{map.supportingText}</p>
            ) : null}

            {map?.href && map?.ctaLabel ? (
              <a
                className={styles.mapAction}
                href={map.href}
                target="_blank"
                rel="noreferrer"
                aria-label={map.ariaLabel || map.title}
              >
                {map.ctaLabel}
              </a>
            ) : null}
          </div>
        </article>
      </div>
    </div>
  );
}
