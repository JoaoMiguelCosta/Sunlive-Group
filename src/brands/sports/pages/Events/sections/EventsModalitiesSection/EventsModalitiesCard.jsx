import styles from "./EventsModalitiesCard.module.css";

function hasItems(value) {
  return Array.isArray(value) && value.length > 0;
}

function getVariantClassName(index) {
  if (index === 0) return styles.cardPrimary;
  if (index === 1) return styles.cardSecondary;
  return styles.cardTertiary;
}

function isEntryObject(value) {
  return value && typeof value === "object" && typeof value.label === "string";
}

function getEntryLabel(entry) {
  return isEntryObject(entry) ? entry.label : entry;
}

function getEntryHref(entry) {
  return isEntryObject(entry) && typeof entry.href === "string"
    ? entry.href
    : "";
}

function getEntryAriaLabel(entry) {
  return isEntryObject(entry) && typeof entry.ariaLabel === "string"
    ? entry.ariaLabel
    : undefined;
}

function getEntrySocials(entry) {
  return isEntryObject(entry) && hasItems(entry.socials) ? entry.socials : [];
}

function getEntryKey(entry, fallback) {
  const label = getEntryLabel(entry);

  return typeof label === "string" && label.trim().length > 0
    ? label
    : fallback;
}

function isValidLink(link) {
  return (
    link &&
    typeof link === "object" &&
    typeof link.href === "string" &&
    link.href.trim().length > 0
  );
}

function isValidSocial(social) {
  return (
    isValidLink(social) &&
    typeof social.type === "string" &&
    social.type.trim().length > 0
  );
}

function getSocialLinkClassName(type) {
  const classes = [styles.socialLink];

  if (type === "instagram") classes.push(styles.socialLinkInstagram);
  if (type === "facebook") classes.push(styles.socialLinkFacebook);

  return classes.join(" ");
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <rect x="5" y="5" width="14" height="14" rx="4" />
      <circle cx="12" cy="12" r="3.2" />
      <circle cx="16.4" cy="7.6" r="0.8" />
    </svg>
  );
}

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M14.2 8.2h2.1V5.1c-.36-.05-1.6-.16-3.04-.16-3.02 0-5.08 1.84-5.08 5.22v2.94H4.8v3.46h3.38V24h4.05v-7.44h3.36l.54-3.46h-3.9v-2.6c0-1 .28-1.68 1.97-1.68Z" />
    </svg>
  );
}

function ExternalIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M14 5h5v5" />
      <path d="M10 14 19 5" />
      <path d="M19 13v5.2c0 .44-.36.8-.8.8H5.8a.8.8 0 0 1-.8-.8V5.8c0-.44.36-.8.8-.8H11" />
    </svg>
  );
}

function SocialIcon({ type }) {
  if (type === "instagram") {
    return <InstagramIcon className={styles.socialSvg} />;
  }

  if (type === "facebook") {
    return <FacebookIcon className={styles.socialSvg} />;
  }

  return <ExternalIcon className={styles.socialSvg} />;
}

function SocialLinks({ socials }) {
  const validSocials = hasItems(socials) ? socials.filter(isValidSocial) : [];

  if (validSocials.length === 0) return null;

  return (
    <span className={styles.socialLinks}>
      {validSocials.map((social) => (
        <a
          key={`${social.type}-${social.href}`}
          className={getSocialLinkClassName(social.type)}
          href={social.href}
          aria-label={social.ariaLabel || `Abrir ${social.type}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialIcon type={social.type} />
        </a>
      ))}
    </span>
  );
}

function EntryContent({ entry }) {
  const label = getEntryLabel(entry);
  const href = getEntryHref(entry);
  const ariaLabel = getEntryAriaLabel(entry);
  const socials = getEntrySocials(entry);

  if (!label) return null;

  return (
    <span className={styles.metaContent}>
      {href ? (
        <a
          className={styles.metaLink}
          href={href}
          aria-label={ariaLabel || `Abrir ${label}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {label}
        </a>
      ) : (
        <span className={styles.metaText}>{label}</span>
      )}

      <SocialLinks socials={socials} />
    </span>
  );
}

function MetaList({ entries, type, itemKey, sectionId }) {
  if (!hasItems(entries)) return null;

  return (
    <ul className={styles.metaList}>
      {entries.map((entry, entryIndex) => {
        const label = getEntryLabel(entry);

        if (!label) return null;

        return (
          <li
            key={`${itemKey || sectionId}-${type}-${getEntryKey(
              entry,
              entryIndex,
            )}`}
            className={styles.metaItem}
          >
            <span className={styles.metaDot} aria-hidden="true" />
            <EntryContent entry={entry} />
          </li>
        );
      })}
    </ul>
  );
}

export default function EventsModalitiesCard({ item, index, sectionId }) {
  const disciplines = hasItems(item.disciplines) ? item.disciplines : [];
  const eventExamples = hasItems(item.eventExamples) ? item.eventExamples : [];

  return (
    <article className={`${styles.card} ${getVariantClassName(index)}`}>
      <div className={styles.cardTop}>
        <div className={styles.cardHeader}>
          {item.eyebrow ? (
            <p className={styles.cardEyebrow}>{item.eyebrow}</p>
          ) : null}

          {item.title ? (
            <h3 className={styles.cardTitle}>{item.title}</h3>
          ) : null}
        </div>

        {item.description ? (
          <p className={styles.cardDescription}>{item.description}</p>
        ) : null}

        {item.emphasis ? (
          <p className={styles.cardEmphasis}>{item.emphasis}</p>
        ) : (
          <span className={styles.cardEmphasisPlaceholder} aria-hidden="true" />
        )}
      </div>

      {(disciplines.length > 0 || eventExamples.length > 0) && (
        <div className={styles.cardBottom}>
          {disciplines.length > 0 ? (
            <div className={styles.metaBlock}>
              {item.disciplinesLabel ? (
                <p className={styles.metaLabel}>{item.disciplinesLabel}</p>
              ) : null}

              <MetaList
                entries={disciplines}
                type="discipline"
                itemKey={item.key}
                sectionId={sectionId}
              />
            </div>
          ) : null}

          {eventExamples.length > 0 ? (
            <div className={styles.metaBlock}>
              {item.eventExamplesLabel ? (
                <p className={styles.metaLabel}>{item.eventExamplesLabel}</p>
              ) : null}

              <MetaList
                entries={eventExamples}
                type="event"
                itemKey={item.key}
                sectionId={sectionId}
              />
            </div>
          ) : null}
        </div>
      )}
    </article>
  );
}
