import styles from "./HighlightPanel.module.css";

import { isValidText } from "./modalityDetailUtils.js";

import ModalityActions from "./ModalityActions.jsx";
import ModalityIconFrame from "./ModalityIconFrame.jsx";

function hasValidLinks(links) {
  return Array.isArray(links) && links.some((link) => isValidText(link?.href));
}

function hasValidActions(highlight) {
  return (
    isValidText(highlight?.websiteHref) ||
    isValidText(highlight?.instagramHref) ||
    isValidText(highlight?.facebookHref) ||
    isValidText(highlight?.bookKey) ||
    hasValidLinks(highlight?.links)
  );
}

export default function HighlightPanel({ highlight }) {
  const hasTitle = isValidText(highlight?.title);
  const hasDescription = isValidText(highlight?.description);
  const hasEyebrow = isValidText(highlight?.eyebrow);
  const hasActions = hasValidActions(highlight);

  if (!hasTitle && !hasDescription && !hasEyebrow && !hasActions) {
    return null;
  }

  const panelId = isValidText(highlight.id) ? highlight.id : undefined;
  const titleId = panelId && hasTitle ? `${panelId}-title` : undefined;
  const descriptionId =
    panelId && hasDescription ? `${panelId}-description` : undefined;

  return (
    <aside
      id={panelId}
      className={styles.highlightPanel}
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
    >
      <ModalityIconFrame
        iconKey={highlight.iconKey}
        className={styles.highlightIcon}
      />

      <div className={styles.highlightContent}>
        {hasEyebrow ? (
          <span className={styles.highlightKicker}>{highlight.eyebrow}</span>
        ) : null}

        {hasTitle ? (
          <h3 id={titleId} className={styles.highlightTitle}>
            {highlight.title}
          </h3>
        ) : null}

        {hasDescription ? (
          <p id={descriptionId} className={styles.highlightDescription}>
            {highlight.description}
          </p>
        ) : null}

        {hasActions ? (
          <div className={styles.highlightActions}>
            <ModalityActions
              title={highlight.title}
              websiteHref={highlight.websiteHref}
              websiteLabel={highlight.websiteLabel}
              websiteAriaLabel={highlight.websiteAriaLabel}
              bookKey={highlight.bookKey}
              bookLabel={highlight.bookLabel}
              instagramHref={highlight.instagramHref}
              facebookHref={highlight.facebookHref}
              links={highlight.links}
            />
          </div>
        ) : null}
      </div>
    </aside>
  );
}
