import hotelBrand, {
  ICONS,
  resolveHotelIcon,
} from "../../../../config/index.js";
import styles from "./ContactDetails.module.css";

export default function ContactDetails() {
  const section = hotelBrand?.pages?.information?.sections?.contacts ?? null;
  const details = section?.details ?? null;

  if (!details) return null;

  const { contactInfo, receptionHours, address, social } = details;

  const SocialTitleIcon = social?.iconKey
    ? resolveHotelIcon(ICONS, social.iconKey)
    : null;

  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        <article
          className={[styles.card, styles.cardContact].join(" ")}
          aria-label={contactInfo?.title}
        >
          <header className={styles.cardHeader}>
            <div className={styles.titleRow}>
              {contactInfo?.icon ? (
                <span className={styles.titleIcon} aria-hidden="true">
                  {contactInfo.icon}
                </span>
              ) : null}

              <div className={styles.titleGroup}>
                <span className={styles.eyebrow}>Assistência e reservas</span>
                <h3 className={styles.cardTitle}>{contactInfo?.title}</h3>
              </div>
            </div>
          </header>

          <div className={styles.cardBody}>
            <div className={styles.contactList}>
              {contactInfo?.items?.map((item) => (
                <div key={item.id} className={styles.contactItem}>
                  <div className={styles.contactItemTop}>
                    {item?.icon ? (
                      <span className={styles.itemIcon} aria-hidden="true">
                        {item.icon}
                      </span>
                    ) : null}

                    <span className={styles.itemLabel}>{item?.label}</span>
                  </div>

                  <a
                    className={styles.itemValueLink}
                    href={item?.href}
                    aria-label={item?.ariaLabel || item?.value}
                  >
                    {item?.value}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </article>

        <article
          className={[styles.card, styles.cardHours].join(" ")}
          aria-label={receptionHours?.title}
        >
          <header className={styles.cardHeader}>
            <div className={styles.titleRow}>
              {receptionHours?.icon ? (
                <span className={styles.titleIcon} aria-hidden="true">
                  {receptionHours.icon}
                </span>
              ) : null}

              <div className={styles.titleGroup}>
                <span className={styles.eyebrow}>Disponibilidade diária</span>
                <h3 className={styles.cardTitle}>{receptionHours?.title}</h3>
              </div>
            </div>
          </header>

          <div className={styles.cardBody}>
            <div className={styles.receptionTop}>
              <span className={styles.itemLabel}>
                {receptionHours?.scheduleLabel}
              </span>

              <p className={styles.receptionMainValue}>
                {receptionHours?.scheduleValue}
              </p>
            </div>

            <div className={styles.divider} aria-hidden="true" />

            <div className={styles.checkGrid}>
              <div className={styles.checkBlock}>
                <span className={styles.itemLabel}>
                  {receptionHours?.checkInLabel}
                </span>

                <p className={styles.checkValue}>
                  {receptionHours?.checkInValue}
                </p>
              </div>

              <div className={styles.checkBlock}>
                <span className={styles.itemLabel}>
                  {receptionHours?.checkOutLabel}
                </span>

                <p className={styles.checkValue}>
                  {receptionHours?.checkOutValue}
                </p>
              </div>
            </div>
          </div>
        </article>

        <article
          className={[styles.card, styles.cardAddress].join(" ")}
          aria-label={address?.title}
        >
          <header className={styles.cardHeader}>
            <div className={styles.titleRow}>
              {address?.icon ? (
                <span className={styles.titleIcon} aria-hidden="true">
                  {address.icon}
                </span>
              ) : null}

              <div className={styles.titleGroup}>
                <span className={styles.eyebrow}>Localização privilegiada</span>
                <h3 className={styles.cardTitle}>{address?.title}</h3>
              </div>
            </div>
          </header>

          <div className={styles.cardBody}>
            <div className={styles.addressContent}>
              <div className={styles.addressLines}>
                {address?.lines?.map((line, index) => (
                  <p key={`${line}-${index}`} className={styles.addressLine}>
                    {line}
                  </p>
                ))}
              </div>

              <a
                className={styles.mapButton}
                href={address?.buttonHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={address?.buttonAriaLabel || address?.buttonLabel}
              >
                {address?.buttonIcon ? (
                  <span className={styles.buttonIcon} aria-hidden="true">
                    {address.buttonIcon}
                  </span>
                ) : null}

                <span>{address?.buttonLabel}</span>
              </a>
            </div>
          </div>
        </article>

        <article
          className={[styles.card, styles.cardSocial].join(" ")}
          aria-label={social?.title}
        >
          <header className={styles.cardHeader}>
            <div className={styles.titleRow}>
              {SocialTitleIcon ? (
                <span className={styles.titleIcon} aria-hidden="true">
                  <SocialTitleIcon />
                </span>
              ) : null}

              <div className={styles.titleGroup}>
                <span className={styles.eyebrow}>Acompanhe-nos online</span>
                <h3 className={styles.cardTitle}>{social?.title}</h3>
              </div>
            </div>
          </header>

          <div className={styles.cardBody}>
            <div className={styles.socialList}>
              {social?.items?.map((item) => {
                const SocialIcon = item?.iconKey
                  ? resolveHotelIcon(ICONS, item.iconKey)
                  : null;

                return (
                  <a
                    key={item.id}
                    className={styles.socialLink}
                    href={item?.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item?.ariaLabel || item?.label}
                    title={item?.label}
                  >
                    {SocialIcon ? (
                      <span
                        className={[styles.socialIcon, styles.iconCircle].join(
                          " ",
                        )}
                        aria-hidden="true"
                      >
                        <SocialIcon />
                      </span>
                    ) : null}

                    <span className={styles.socialText}>{item?.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
