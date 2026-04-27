import styles from "./SportsFeatureCard.module.css";

import SportsFeatureCardHeader from "./SportsFeatureCardHeader.jsx";
import SportsFeatureCardBody from "./SportsFeatureCardBody.jsx";
import SportsFeatureCardFooter from "./SportsFeatureCardFooter.jsx";

import { getValidLinks } from "./SportsFeatureCard.utils.js";

const CARD_THEME_CLASS_MAP = {
  academy: styles.themeAcademy,
  default: styles.themeAcademy,
};

function resolveCardThemeClass(theme) {
  return CARD_THEME_CLASS_MAP[theme] || styles.themeAcademy;
}

export default function SportsFeatureCard({
  id,
  ariaLabel,
  eyebrow,
  title,
  visualTheme = "academy",
  logo,
  summary,
  description,
  descriptionAccent,
  meta,
  highlights = [],
  highlightsAriaLabel,
  note,
  actions = [],
  socials = [],
}) {
  const titleId = title && id ? `${id}-title` : undefined;
  const cardThemeClass = resolveCardThemeClass(visualTheme);

  const validActions = getValidLinks(actions);
  const validSocials = getValidLinks(socials);
  const hasFooter = validActions.length > 0 || validSocials.length > 0;

  return (
    <article
      className={`${styles.card} ${cardThemeClass}`}
      aria-labelledby={titleId}
      aria-label={!titleId ? ariaLabel : undefined}
    >
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.noise} aria-hidden="true" />

      <SportsFeatureCardHeader
        titleId={titleId}
        eyebrow={eyebrow}
        title={title}
        logo={logo}
        summary={summary}
      />

      <SportsFeatureCardBody
        description={description}
        descriptionAccent={descriptionAccent}
        meta={meta}
        highlights={highlights}
        highlightsAriaLabel={highlightsAriaLabel}
        note={note}
      />

      {hasFooter ? (
        <SportsFeatureCardFooter
          actions={validActions}
          socials={validSocials}
        />
      ) : null}
    </article>
  );
}
