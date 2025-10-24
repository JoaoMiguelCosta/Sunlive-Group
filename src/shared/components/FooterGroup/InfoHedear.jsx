import styles from "./InfoHeader.module.css";
import {
  GlobeIcon,
  PinIcon,
  CardIcon,
  MailIcon,
  PhoneIcon,
} from "../../ui/icons";

/**
 * data esperado em props (footer.infoHeader)
 */
export default function InfoHeader({ data }) {
  if (!data) return null;
  const { brand, location, contacts, socials } = data;

  // Garante nome de marca consistente
  const brandName = brand?.title || "Sunlive Group";

  // Divide o about vindo do CMS, mas vamos sobrepor o 1º parágrafo
  const aboutParts = (brand?.about || "").split("\n").filter(Boolean);

  return (
    <section className={styles.strip} aria-label="Footer — Company Info">
      <div className={styles.inner}>
        {/* 1) Brand/About — esquerda */}
        <div className={styles.col}>
          <h3 className={styles.title}>
            <span className={styles.icon}>
              <GlobeIcon />
            </span>
            <span>{brandName}</span>
          </h3>

          {brand?.tagline && <p className={styles.tagline}>{brand.tagline}</p>}

          <div className={styles.about}>
            {aboutParts.map((p, i) => (
              <p key={i}>
                {i === 0 ? (
                  <>
                    Na <span className={styles.brandEmph}>{brandName}</span>,
                    acreditamos que o verdadeiro impacto surge da união entre
                    visão, ação e valores humanos.
                  </>
                ) : (
                  p
                )}
              </p>
            ))}
          </div>
        </div>

        {/* 2) Localização — alinhado ao nível do ícone */}
        <div
          className={`${styles.col} ${styles.colStart} ${styles.colIconLead}`}
        >
          <h3 className={styles.title}>
            <span className={styles.icon}>
              <PinIcon />
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

        {/* 3) Contactos — alinhado ao nível do ícone */}
        <div
          className={`${styles.col} ${styles.colStart} ${styles.colIconLead}`}
        >
          <h3 className={styles.title}>
            <span className={styles.icon}>
              <CardIcon />
            </span>
            <span>{contacts?.title || "Contactos"}</span>
          </h3>

          <div className={styles.contentLeadIcon}>
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
        </div>

        {/* 4) Redes — esquerda (igual às outras) */}
        <div className={`${styles.col}`}>
          <h3 className={styles.title}>
            <span className={styles.icon}>
              <GlobeIcon />
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
