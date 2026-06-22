import contacts from "../../../../config/sections/information/contacts.js";
import { resolveHotelIcon } from "../../../../config/core/iconKeyMap.js";
import { ICONS } from "../../../../config/core/resolvedVisuals.js";

import styles from "./ContactDetails.module.css";

function getValidItems(items) {
  return Array.isArray(items) ? items.filter((item) => item?.id) : [];
}

function hasValidHref(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function TitleIcon({ icon = null }) {
  if (!icon) return null;

  return (
    <span className={styles.titleIcon} aria-hidden="true">
      {icon}
    </span>
  );
}

export default function ContactDetails() {
  const section = contacts;
  const details = section?.details ?? null;

  if (!details) return null;

  const quickAccessPills = getValidItems(details.quickAccessPills);

  const { contactInfo, receptionHours, address, social } = details;

  const contactItems = getValidItems(contactInfo?.items);
  const socialItems = getValidItems(social?.items);

  const SocialTitleIcon = social?.iconKey
    ? resolveHotelIcon(ICONS, social.iconKey)
    : null;

  return (
    <div className={styles.wrapper}>
      {quickAccessPills.length ? (
        <div
          className={styles.quickAccessRow}
          aria-label="Destaques de contacto"
        >
          {quickAccessPills.map((item) => (
            <span key={item.id} className={styles.quickAccessPill}>
              {item.label}
            </span>
          ))}
        </div>
      ) : null}

      <div className={styles.grid}>
        <article
          className={`${styles.card} ${styles.cardContact}`}
          aria-label={contactInfo?.title}
        >
          <header className={styles.cardHeader}>
            <div className={styles.titleRow}>
              <TitleIcon icon={contactInfo?.icon} />

              <div className={styles.titleGroup}>
                {contactInfo?.eyebrow ? (
                  <span className={styles.eyebrow}>{contactInfo.eyebrow}</span>
                ) : null}

                {contactInfo?.title ? (
                  <h3 className={styles.cardTitle}>{contactInfo.title}</h3>
                ) : null}
              </div>
            </div>
          </header>

          {contactItems.length ? (
            <div className={styles.cardBody}>
              <div className={styles.contactList}>
                {contactItems.map((item) => {
                  const hasLink = hasValidHref(item.href);

                  return (
                    <div key={item.id} className={styles.contactItem}>
                      <div className={styles.contactItemTop}>
                        {item.icon ? (
                          <span className={styles.itemIcon} aria-hidden="true">
                            {item.icon}
                          </span>
                        ) : null}

                        {item.label ? (
                          <span className={styles.itemLabel}>{item.label}</span>
                        ) : null}
                      </div>

                      {hasLink ? (
                        <a
                          className={styles.itemValueLink}
                          href={item.href}
                          aria-label={item.ariaLabel || item.value}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className={styles.itemValue}>{item.value}</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}
        </article>

        <article
          className={`${styles.card} ${styles.cardHours}`}
          aria-label={receptionHours?.title}
        >
          <header className={styles.cardHeader}>
            <div className={styles.titleRow}>
              <TitleIcon icon={receptionHours?.icon} />

              <div className={styles.titleGroup}>
                {receptionHours?.eyebrow ? (
                  <span className={styles.eyebrow}>
                    {receptionHours.eyebrow}
                  </span>
                ) : null}

                {receptionHours?.title ? (
                  <h3 className={styles.cardTitle}>{receptionHours.title}</h3>
                ) : null}
              </div>
            </div>
          </header>

          <div className={styles.cardBody}>
            <div className={styles.hoursContent}>
              <div className={styles.receptionTop}>
                {receptionHours?.scheduleLabel ? (
                  <span className={styles.itemLabel}>
                    {receptionHours.scheduleLabel}
                  </span>
                ) : null}

                {receptionHours?.scheduleValue ? (
                  <p className={styles.receptionMainValue}>
                    {receptionHours.scheduleValue}
                  </p>
                ) : null}
              </div>

              <div className={styles.divider} aria-hidden="true" />

              <div className={styles.checkGrid}>
                <div className={styles.checkBlock}>
                  {receptionHours?.checkInLabel ? (
                    <span className={styles.itemLabel}>
                      {receptionHours.checkInLabel}
                    </span>
                  ) : null}

                  {receptionHours?.checkInValue ? (
                    <p className={styles.checkValue}>
                      {receptionHours.checkInValue}
                    </p>
                  ) : null}
                </div>

                <div className={styles.checkBlock}>
                  {receptionHours?.checkOutLabel ? (
                    <span className={styles.itemLabel}>
                      {receptionHours.checkOutLabel}
                    </span>
                  ) : null}

                  {receptionHours?.checkOutValue ? (
                    <p className={styles.checkValue}>
                      {receptionHours.checkOutValue}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </article>

        <article
          className={`${styles.card} ${styles.cardAddress}`}
          aria-label={address?.title}
        >
          <header className={styles.cardHeader}>
            <div className={styles.titleRow}>
              <TitleIcon icon={address?.icon} />

              <div className={styles.titleGroup}>
                {address?.eyebrow ? (
                  <span className={styles.eyebrow}>{address.eyebrow}</span>
                ) : null}

                {address?.title ? (
                  <h3 className={styles.cardTitle}>{address.title}</h3>
                ) : null}
              </div>
            </div>
          </header>

          <div className={styles.cardBody}>
            <div className={styles.addressContent}>
              {Array.isArray(address?.lines) && address.lines.length ? (
                <div className={styles.addressLines}>
                  {address.lines.map((line, index) => (
                    <p key={`${line}-${index}`} className={styles.addressLine}>
                      {line}
                    </p>
                  ))}
                </div>
              ) : null}

              {hasValidHref(address?.buttonHref) && address?.buttonLabel ? (
                <a
                  className={styles.mapButton}
                  href={address.buttonHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={address.buttonAriaLabel || address.buttonLabel}
                >
                  {address.buttonIcon ? (
                    <span className={styles.buttonIcon} aria-hidden="true">
                      {address.buttonIcon}
                    </span>
                  ) : null}

                  <span>{address.buttonLabel}</span>
                </a>
              ) : null}
            </div>
          </div>
        </article>

        <article
          className={`${styles.card} ${styles.cardSocial}`}
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
                {social?.eyebrow ? (
                  <span className={styles.eyebrow}>{social.eyebrow}</span>
                ) : null}

                {social?.title ? (
                  <h3 className={styles.cardTitle}>{social.title}</h3>
                ) : null}
              </div>
            </div>
          </header>

          <div className={styles.cardBody}>
            <div className={styles.socialContent}>
              {social?.supportingText ? (
                <p className={styles.socialSupportingText}>
                  {social.supportingText}
                </p>
              ) : null}

              {socialItems.length ? (
                <div className={styles.socialList}>
                  {socialItems.map((item) => {
                    const SocialIcon = item?.iconKey
                      ? resolveHotelIcon(ICONS, item.iconKey)
                      : null;

                    return (
                      <a
                        key={item.id}
                        className={styles.socialLink}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.ariaLabel || item.label}
                        title={item.label}
                      >
                        {SocialIcon ? (
                          <span
                            className={styles.socialIcon}
                            aria-hidden="true"
                          >
                            <SocialIcon />
                          </span>
                        ) : null}

                        <span className={styles.socialText}>{item.label}</span>
                      </a>
                    );
                  })}
                </div>
              ) : null}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
