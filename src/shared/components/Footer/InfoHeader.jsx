import styles from "./InfoHeader.module.css";
import {
  GlobeIcon,
  PinIcon,
  CardIcon,
  MailIcon,
  PhoneIcon,
} from "../../ui/icons/";

function escapeRegExp(value = "") {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function withBrandEmph(text, brandName) {
  if (!text || !brandName) return text;

  const regex = new RegExp(`(${escapeRegExp(brandName)})`);
  const parts = String(text).split(regex);
  let highlighted = false;

  return parts.map((segment, index) => {
    if (!highlighted && segment === brandName) {
      highlighted = true;
      return (
        <span key={`brand-${index}`} className={styles.brandEmph}>
          {segment}
        </span>
      );
    }

    return <span key={index}>{segment}</span>;
  });
}

export default function InfoHeader({ data }) {
  if (!data) return null;

  const { brand, location, contacts, socials, options } = data;

  const brandName = brand?.title || "Sunlive Group";
  const BrandIcon = brand?.Icon || GlobeIcon;

  const aboutParts = String(brand?.about || "")
    .split("\n")
    .map((part) => part.trim())
    .filter(Boolean);

  const keepRawFirst = options?.keepOriginalAboutFirstLine === true;

  const customIntro =
    typeof brand?.aboutIntro === "string" && brand.aboutIntro.trim().length > 0
      ? brand.aboutIntro.trim()
      : null;

  const genericIntro = (
    <>
      Na <span className={styles.brandEmph}>{brandName}</span>, acreditamos que
      o verdadeiro impacto surge da união entre visão, ação e valores humanos.
    </>
  );

  const firstNode = keepRawFirst
    ? null
    : customIntro
      ? withBrandEmph(customIntro, brandName)
      : genericIntro;

  const phoneItems = [];

  if (contacts?.phone?.label || contacts?.phone?.href) {
    phoneItems.push(contacts.phone);
  }

  if (Array.isArray(contacts?.extraPhones)) {
    phoneItems.push(...contacts.extraPhones);
  }

  const socialItems = Array.isArray(socials?.items) ? socials.items : [];
  const addressLines = Array.isArray(location?.addressLines)
    ? location.addressLines
    : [];

  return (
    <section className={styles.strip} aria-label="Footer — Company Info">
      <div className={styles.inner}>
        <div className={styles.col}>
          <h3 className={styles.title}>
            <span className={styles.icon}>
              <BrandIcon aria-hidden="true" />
            </span>
            <span>{brandName}</span>
          </h3>

          {brand?.tagline ? (
            <p className={styles.tagline}>{brand.tagline}</p>
          ) : null}

          <div className={styles.about}>
            {aboutParts.length === 0 ? (
              <p>{firstNode}</p>
            ) : (
              aboutParts.map((paragraph, index) => (
                <p key={index}>
                  {index === 0
                    ? keepRawFirst
                      ? withBrandEmph(paragraph, brandName)
                      : firstNode
                    : paragraph}
                </p>
              ))
            )}
          </div>
        </div>

        <div className={`${styles.col} ${styles.colStart}`}>
          <h3 className={styles.title}>
            <span className={styles.icon}>
              <PinIcon aria-hidden="true" />
            </span>
            <span>{location?.title || "Localização"}</span>
          </h3>

          <div className={styles.contentBlock}>
            <address className={styles.address}>
              {addressLines.map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </address>

            {location?.mapHref ? (
              <a
                className={styles.subtleLink}
                href={location.mapHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver no mapa →
              </a>
            ) : null}
          </div>
        </div>

        <div className={`${styles.col} ${styles.colStart}`}>
          <h3 className={styles.title}>
            <span className={styles.icon}>
              <CardIcon aria-hidden="true" />
            </span>
            <span>{contacts?.title || "Contactos"}</span>
          </h3>

          <div className={styles.contentBlock}>
            <div className={styles.contactRow}>
              <span className={styles.cIcon}>
                <MailIcon aria-hidden="true" />
              </span>

              {contacts?.email?.href ? (
                <a
                  href={contacts.email.href}
                  className={styles.link}
                  aria-label={contacts.email.ariaLabel}
                >
                  {contacts.email.label}
                </a>
              ) : (
                <span className={styles.textMuted}>—</span>
              )}
            </div>

            {phoneItems.length > 0 ? (
              phoneItems.map((phone, index) => (
                <div className={styles.contactRow} key={phone?.href || index}>
                  <span className={styles.cIcon}>
                    <PhoneIcon aria-hidden="true" />
                  </span>

                  {phone?.href ? (
                    <a
                      href={phone.href}
                      className={styles.link}
                      aria-label={phone.ariaLabel}
                    >
                      {phone.label}
                    </a>
                  ) : (
                    <span className={styles.textMuted}>—</span>
                  )}
                </div>
              ))
            ) : (
              <div className={styles.contactRow}>
                <span className={styles.cIcon}>
                  <PhoneIcon aria-hidden="true" />
                </span>
                <span className={styles.textMuted}>—</span>
              </div>
            )}
          </div>
        </div>

        <div className={styles.col}>
          <h3 className={styles.title}>
            <span className={styles.icon}>
              <GlobeIcon aria-hidden="true" />
            </span>
            <span>{socials?.title || "Redes Sociais"}</span>
          </h3>

          <div className={styles.socials}>
            {socialItems.map(({ key, label, href, Icon }, index) => (
              <a
                key={key || index}
                href={href}
                className={styles.socialBtn}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
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
