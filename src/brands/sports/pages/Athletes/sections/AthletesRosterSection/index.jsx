import sportsBrand, { resolveSportsIcon } from "../../../../config/index.js";

import styles from "./AthletesRosterSection.module.css";

const DEFAULT_UI = {
  sectionAriaLabel: "Atletas Sunlive Sports organizados por modalidade",
  modalitiesAriaLabel: "Navegação por modalidades dos atletas Sunlive",
  athletesAriaLabel: "Lista de atletas Sunlive Sports",
  summaryAriaLabel: "Resumo dos atletas Sunlive Sports",
  birthDateLabel: "Nascimento",
  countryLabel: "País",
  unknownDateLabel: "A confirmar",
  instagramCtaLabel: "Siga o atleta",
  instagramAriaPrefix: "Abrir Instagram de",
};

function isValidText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function getValidArray(value) {
  return Array.isArray(value) ? value.filter(Boolean) : [];
}

function getValidAthletes(athletes) {
  return getValidArray(athletes).filter(
    (athlete) =>
      athlete &&
      typeof athlete === "object" &&
      isValidText(athlete.key) &&
      isValidText(athlete.name),
  );
}

function getValidModalities(modalities) {
  return getValidArray(modalities).filter((modality) => {
    const athletes = getValidAthletes(modality?.athletes);

    return (
      modality &&
      typeof modality === "object" &&
      isValidText(modality.key) &&
      isValidText(modality.title) &&
      athletes.length > 0
    );
  });
}

function getValidSummaryItems(items) {
  return getValidArray(items).filter(
    (item) =>
      item &&
      typeof item === "object" &&
      isValidText(item.key) &&
      isValidText(item.value) &&
      isValidText(item.label),
  );
}

function getValidMarkers(markers) {
  return getValidArray(markers).filter(isValidText);
}

function getIconComponent(iconKey) {
  if (!isValidText(iconKey)) return null;

  return resolveSportsIcon(sportsBrand.icons, iconKey);
}

function getAthleteCountLabel(count) {
  return `${count} ${count === 1 ? "atleta" : "atletas"}`;
}

function getTotalAthletes(modalities) {
  return modalities.reduce((total, modality) => {
    return total + getValidAthletes(modality.athletes).length;
  }, 0);
}

function getSummaryItems(data, modalities) {
  const configuredItems = getValidSummaryItems(data?.summary?.items);

  if (configuredItems.length > 0) {
    return configuredItems;
  }

  return [
    {
      key: "athletes-total",
      value: String(getTotalAthletes(modalities)),
      label: "atletas",
    },
    {
      key: "modalities-total",
      value: String(modalities.length),
      label: "modalidades",
    },
  ];
}

function getInstagramData(instagram) {
  if (isValidText(instagram)) {
    return { href: instagram };
  }

  if (
    instagram &&
    typeof instagram === "object" &&
    isValidText(instagram.href)
  ) {
    return instagram;
  }

  return null;
}

function getTargetId(modality) {
  return modality.id || modality.key;
}

function scrollToModality(event, targetId) {
  if (!isValidText(targetId)) return;

  const targetElement = document.getElementById(targetId);

  if (!targetElement) return;

  event.preventDefault();

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  targetElement.scrollIntoView({
    behavior: prefersReducedMotion ? "auto" : "smooth",
    block: "start",
  });

  window.history.pushState(null, "", `#${targetId}`);
}

function InstagramIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.25" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.4" cy="6.6" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  );
}

function AthleteCard({ athlete, modality, ui }) {
  const birthDateLabel = isValidText(athlete.birthDateLabel)
    ? athlete.birthDateLabel
    : ui.unknownDateLabel;

  const hasCountry = isValidText(athlete.country);
  const hasImage = isValidText(athlete.image);
  const instagram = getInstagramData(athlete.instagram);

  return (
    <article className={styles.card} role="listitem">
      <div className={styles.portraitFrame} aria-hidden={!hasImage}>
        {hasImage ? (
          <img
            className={styles.portrait}
            src={athlete.image}
            alt={athlete.imageAlt || athlete.name}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <span className={styles.portraitFallback} aria-hidden="true">
            {athlete.name.charAt(0)}
          </span>
        )}
      </div>

      <div className={styles.cardBody}>
        <div className={styles.cardHeader}>
          {isValidText(modality?.shortLabel) ? (
            <p className={styles.cardKicker}>{modality.shortLabel}</p>
          ) : null}

          <h4 className={styles.cardTitle}>{athlete.name}</h4>
        </div>

        <dl className={styles.metaList}>
          <div className={styles.metaItem}>
            <dt>{ui.birthDateLabel}</dt>
            <dd>{birthDateLabel}</dd>
          </div>

          {hasCountry ? (
            <div className={styles.metaItem}>
              <dt>{ui.countryLabel}</dt>
              <dd>{athlete.country}</dd>
            </div>
          ) : null}
        </dl>

        {instagram ? (
          <div className={styles.cardActions}>
            <a
              className={styles.instagramLink}
              href={instagram.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${ui.instagramAriaPrefix} ${athlete.name}`}
            >
              <span className={styles.instagramIconWrap} aria-hidden="true">
                <InstagramIcon className={styles.instagramIcon} />
              </span>

              <span className={styles.instagramText}>
                {ui.instagramCtaLabel}
              </span>
            </a>
          </div>
        ) : null}
      </div>
    </article>
  );
}

function ModalityBlock({ modality, ui }) {
  const athletes = getValidAthletes(modality.athletes);
  const Icon = getIconComponent(modality.iconKey);
  const targetId = getTargetId(modality);
  const titleId = `${targetId}-title`;
  const athleteCountLabel = getAthleteCountLabel(athletes.length);
  const listLabel = `${ui.athletesAriaLabel} — ${modality.title}`;

  if (athletes.length === 0) return null;

  return (
    <article
      id={targetId}
      className={styles.modalityBlock}
      aria-labelledby={titleId}
    >
      <header className={styles.modalityHeader}>
        <div className={styles.modalityIdentity}>
          <div className={styles.modalityIcon} aria-hidden="true">
            {Icon ? <Icon /> : <span>{modality.title.charAt(0)}</span>}
          </div>

          <div className={styles.modalityText}>
            {isValidText(modality.shortLabel) ? (
              <span className={styles.modalityKicker}>
                {modality.shortLabel}
              </span>
            ) : null}

            <h3 id={titleId} className={styles.modalityTitle}>
              {modality.title}
            </h3>

            {isValidText(modality.description) ? (
              <p className={styles.modalityDescription}>
                {modality.description}
              </p>
            ) : null}
          </div>
        </div>

        <p className={styles.modalityCount}>{athleteCountLabel}</p>
      </header>

      <div className={styles.athletesGrid} role="list" aria-label={listLabel}>
        {athletes.map((athlete) => (
          <AthleteCard
            key={athlete.key}
            athlete={athlete}
            modality={modality}
            ui={ui}
          />
        ))}
      </div>
    </article>
  );
}

export default function AthletesRosterSection({ data }) {
  const ui = {
    ...DEFAULT_UI,
    ...(data?.ui || {}),
  };

  const modalities = getValidModalities(data?.modalities);
  const markers = getValidMarkers(data?.intro?.markers);
  const summaryItems = getSummaryItems(data, modalities);

  if (!data || modalities.length === 0) return null;

  const sectionId = data.id || "atletas-por-modalidade";
  const titleId = `${sectionId}-title`;
  const leadId = `${sectionId}-lead`;

  const hasTitle = isValidText(data.intro?.title);
  const hasLead = isValidText(data.intro?.lead);

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={hasTitle ? titleId : undefined}
      aria-describedby={hasLead ? leadId : undefined}
      aria-label={!hasTitle ? ui.sectionAriaLabel : undefined}
    >
      <div className={styles.shell}>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            {isValidText(data.intro?.eyebrow) ? (
              <p className={styles.eyebrow}>{data.intro.eyebrow}</p>
            ) : null}

            {hasTitle ? (
              <h2 id={titleId} className={styles.title}>
                {data.intro.title}
              </h2>
            ) : null}

            {hasLead ? (
              <p id={leadId} className={styles.lead}>
                {data.intro.lead}
              </p>
            ) : null}
          </div>

          {summaryItems.length > 0 ? (
            <div
              className={styles.summaryGrid}
              aria-label={ui.summaryAriaLabel}
            >
              {summaryItems.map((item) => (
                <div key={item.key} className={styles.summaryCard}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          ) : null}
        </header>

        {markers.length > 0 ? (
          <ul className={styles.markers}>
            {markers.map((marker) => (
              <li key={marker}>
                <span aria-hidden="true" />
                {marker}
              </li>
            ))}
          </ul>
        ) : null}

        <nav className={styles.modalityNav} aria-label={ui.modalitiesAriaLabel}>
          {modalities.map((modality) => {
            const athletes = getValidAthletes(modality.athletes);
            const athleteCountLabel = getAthleteCountLabel(athletes.length);
            const targetId = getTargetId(modality);

            return (
              <a
                key={modality.key}
                className={styles.modalityLink}
                href={`#${targetId}`}
                onClick={(event) => scrollToModality(event, targetId)}
              >
                <span>{modality.shortLabel || modality.title}</span>
                <small>{athleteCountLabel}</small>
              </a>
            );
          })}
        </nav>

        <div className={styles.rosterFlow}>
          {modalities.map((modality) => (
            <ModalityBlock key={modality.key} modality={modality} ui={ui} />
          ))}
        </div>
      </div>
    </section>
  );
}
