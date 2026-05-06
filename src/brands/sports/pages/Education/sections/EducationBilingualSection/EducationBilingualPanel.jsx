import styles from "./EducationBilingualPanel.module.css";

import {
  getPanelTag,
  getPanelVariant,
  getTextItemKey,
  hasItems,
} from "./educationBilingualSection.utils.js";

export default function EducationBilingualPanel({ item }) {
  const variant = getPanelVariant(item);
  const panelTag = getPanelTag(item);
  const panelLabel = item?.title || panelTag;

  return (
    <article
      className={styles.panel}
      data-variant={variant}
      aria-label={panelLabel}
    >
      <div className={styles.panelTop}>
        <span className={styles.panelTag}>{panelTag}</span>
      </div>

      <div className={styles.panelBody}>
        <div className={styles.panelIntro}>
          {item?.title ? (
            <h3 className={styles.panelTitle}>{item.title}</h3>
          ) : null}

          {item?.description ? (
            <p className={styles.panelDescription}>{item.description}</p>
          ) : null}
        </div>

        {hasItems(item?.features) ? (
          <div className={styles.group}>
            {item.featuresLabel ? (
              <p className={styles.groupLabel}>{item.featuresLabel}</p>
            ) : null}

            <ul className={styles.featureList}>
              {item.features.map((feature, index) => (
                <li
                  key={getTextItemKey(feature, index, `${variant}-feature`)}
                  className={styles.featureItem}
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {item?.emphasis ? (
          <div className={styles.emphasisBox}>
            <p className={styles.emphasisText}>{item.emphasis}</p>
          </div>
        ) : null}
      </div>
    </article>
  );
}
