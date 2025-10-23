import styles from "./InfoHeader.module.css";
import { GlobeIcon, PinIcon, CardIcon, MailIcon, PhoneIcon } from "../../ui/icons";

/**
 * data esperado em props (footer.infoHeader)
 */
export default function InfoHeader({ data }) {
  if (!data) return null;
  const { brand, location, contacts, socials } = data;
  const aboutParts = (brand?.about || "").split("\n").filter(Boolean);

  return (
    <section className={styles.strip} aria-label="Footer — Company Info">
      <div className={styles.inner}>
        {/* Coluna 1 — Brand/About */}
        <div className={styles.col}>
          <h3 className={styles.title}>
            <span className={styles.icon}>
              <GlobeIcon />
            </span>
            <span>{brand?.title || "Sunlive Group"}</span>
          </h3>

          {brand?.tagline && <p className={styles.tagline}>{brand.tagline}</p>}

          <div className={styles.about}>
            {aboutParts.map((p, i) => (
              <p key={i}>
                {brand?.link?.label && brand?.link?.href && i === 0 ? (
                  <>
                    {p.replace(brand.link.label, "")}
                    <a className={styles.inlineLink} href={brand.link.href}>
                      {brand.link.label}
                    </a>
                  </>
                ) : (
                  p
                )}
              </p>
            ))}
          </div>
        </div>

        {/* Coluna 2 — Location */}
        <div className={styles.col}>
          <h3 className={styles.title}>
            <span className={styles.icon}>
              <PinIcon />
            </span>
            <span>{location?.title || "Location"}</span>
          </h3>

          <address className={styles.address}>
            {(location?.addressLines || []).map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </address>

          {location?.mapHref && (
            <a
              className={styles.subtleLink}
              href={location.mapHref}
              target="_blank"
              rel="noopener"
            >
              Open on Maps →
            </a>
          )}
        </div>

        {/* Coluna 3 — Contacts */}
        <div className={styles.col}>
          <h3 className={styles.title}>
            <span className={styles.icon}>
              <CardIcon />
            </span>
            <span>{contacts?.title || "Contacts"}</span>
          </h3>

          <div className={styles.contactRow}>
            <span className={styles.cIcon}>
              <MailIcon />
            </span>
            {contacts?.email?.href ? (
              <a href={contacts.email.href} className={styles.link}>
                {contacts.email.label}
              </a>
            ) : (
              <span className={styles.textMuted}>—</span>
            )}
          </div>

          <div className={styles.contactRow}>
            <span className={styles.cIcon}>
              <PhoneIcon />
            </span>
            {contacts?.phone?.href ? (
              <a href={contacts.phone.href} className={styles.link}>
                {contacts.phone.label}
              </a>
            ) : (
              <span className={styles.textMuted}>—</span>
            )}
          </div>
        </div>

        {/* Coluna 4 — Socials */}
        <div className={styles.col}>
          <h3 className={styles.title}>
            <span className={styles.icon}>
              <GlobeIcon />
            </span>
            <span>{socials?.title || "Socials"}</span>
          </h3>

          <div className={styles.socials}>
            {(socials?.items || []).map(({ key, label, href, Icon }, i) => (
              <a
                key={key || i}
                href={href}
                className={styles.socialBtn}
                aria-label={label}
                target="_blank"
                rel="noopener"
              >
                {Icon ? (
                  <Icon className={styles.sIcon} />
                ) : (
                  <span className={styles.sFallback}>{label?.[0] || "•"}</span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
