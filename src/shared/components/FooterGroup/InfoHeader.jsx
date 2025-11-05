// src/shared/components/FooterGroup/InfoHeader.jsx
import styles from "./InfoHeader.module.css";
import {
  GlobeIcon,
  PinIcon,
  CardIcon,
  MailIcon,
  PhoneIcon,
} from "../../ui/icons/";

/** Escapa texto para regex */
function escapeRegExp(s = "") {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Realça a PRIMEIRA ocorrência de brandName dentro de `text` */
function withBrandEmph(text, brandName) {
  if (!text || !brandName) return text;
  const rx = new RegExp(`(${escapeRegExp(brandName)})`);
  const parts = String(text).split(rx);
  let highlighted = false;
  return parts.map((seg, i) => {
    if (!highlighted && seg === brandName) {
      highlighted = true;
      return (
        <span key={`b-${i}`} className={styles.brandEmph}>
          {seg}
        </span>
      );
    }
    return <span key={i}>{seg}</span>;
  });
}

export default function InfoHeader({ data }) {
  if (!data) return null;

  const { brand, location, contacts, socials, options } = data;
  const brandName = brand?.title || "Sunlive Group";

  // Usa o ícone específico da marca se vier no config; senão, fallback Globe
  const BrandIcon = brand?.Icon || GlobeIcon;

  const aboutParts = (brand?.about || "").split("\n").filter(Boolean);
  const keepRawFirst = options?.keepOriginalAboutFirstLine === true;
  const customIntro =
    typeof brand?.aboutIntro === "string" && brand.aboutIntro.trim().length
      ? brand.aboutIntro.trim()
      : null;

  const genericIntro = (
    <>
      Na <span className={styles.brandEmph}>{brandName}</span>, acreditamos que
      o verdadeiro impacto surge da união entre visão, ação e valores humanos.
    </>
  );

  const firstNode = keepRawFirst
    ? null // usa o 1.º parágrafo do about, mas com destaque
    : customIntro
      ? withBrandEmph(customIntro, brandName)
      : genericIntro;

  return (
    <section className={styles.strip} aria-label="Footer — Company Info">
      <div className={styles.inner}>
        {/* 1) Brand/About — esquerda */}
        <div className={styles.col}>
          <h3 className={styles.title}>
            <span className={styles.icon}>
              <BrandIcon aria-hidden="true" />
            </span>
            <span>{brandName}</span>
          </h3>

          {brand?.tagline && <p className={styles.tagline}>{brand.tagline}</p>}

          <div className={styles.about}>
            {aboutParts.length === 0 ? (
              <p>{firstNode}</p>
            ) : (
              aboutParts.map((p, i) => (
                <p key={i}>
                  {i === 0
                    ? keepRawFirst
                      ? withBrandEmph(p, brandName)
                      : firstNode
                    : p}
                </p>
              ))
            )}
          </div>
        </div>

        {/* 2) Localização */}
        <div
          className={`${styles.col} ${styles.colStart} ${styles.colIconLead}`}
        >
          <h3 className={styles.title}>
            <span className={styles.icon}>
              <PinIcon aria-hidden="true" />
            </span>
            <span>{location?.title || "Localização"}</span>
          </h3>

          <div className={styles.contentLeadIcon}>
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
        </div>

        {/* 3) Contactos */}
        <div
          className={`${styles.col} ${styles.colStart} ${styles.colIconLead}`}
        >
          <h3 className={styles.title}>
            <span className={styles.icon}>
              <CardIcon aria-hidden="true" />
            </span>
            <span>{contacts?.title || "Contactos"}</span>
          </h3>

          <div className={styles.contentLeadIcon}>
            <div className={styles.contactRow}>
              <span className={styles.cIcon}>
                <MailIcon aria-hidden="true" />
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
                <PhoneIcon aria-hidden="true" />
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
        </div>

        {/* 4) Redes */}
        <div className={styles.col}>
          <h3 className={styles.title}>
            <span className={styles.icon}>
              <GlobeIcon aria-hidden="true" />
            </span>
            <span>{socials?.title || "Redes Sociais"}</span>
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
