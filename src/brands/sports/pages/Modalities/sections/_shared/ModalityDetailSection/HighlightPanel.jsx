import styles from "./HighlightPanel.module.css";

import { isValidText } from "./modalityDetailUtils.js";

import ModalityActions from "./ModalityActions.jsx";
import ModalityIconFrame from "./ModalityIconFrame.jsx";

export default function HighlightPanel({ highlight }) {
  if (
    !isValidText(highlight?.title) &&
    !isValidText(highlight?.description) &&
    !isValidText(highlight?.websiteHref) &&
    !isValidText(highlight?.instagramHref) &&
    !isValidText(highlight?.facebookHref) &&
    !isValidText(highlight?.bookKey)
  ) {
    return null;
  }

  return (
    <aside id={highlight.id} className={styles.highlightPanel}>
      <ModalityIconFrame
        iconKey={highlight.iconKey}
        className={styles.highlightIcon}
      />

      <div className={styles.highlightContent}>
        {isValidText(highlight.eyebrow) ? (
          <span className={styles.highlightKicker}>{highlight.eyebrow}</span>
        ) : null}

        {isValidText(highlight.title) ? (
          <h3 className={styles.highlightTitle}>{highlight.title}</h3>
        ) : null}

        {isValidText(highlight.description) ? (
          <p className={styles.highlightDescription}>{highlight.description}</p>
        ) : null}

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
    </aside>
  );
}
