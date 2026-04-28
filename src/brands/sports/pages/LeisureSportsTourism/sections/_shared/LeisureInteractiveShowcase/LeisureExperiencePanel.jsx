import LeisureDetailsList from "./LeisureDetailsList";
import LeisurePanelText from "./LeisurePanelText";
import LeisureShowcaseImage from "./LeisureShowcaseImage";

import styles from "./LeisureExperiencePanel.module.css";

export default function LeisureExperiencePanel({
  item,
  panelId,
  labelledBy,
  variant,
}) {
  return (
    <>
      <article
        id={panelId}
        className={styles.selectedPanel}
        aria-labelledby={labelledBy}
      >
        <div className={styles.selectedMedia}>
          <LeisureShowcaseImage item={item} variant={variant} />
        </div>

        <div className={styles.selectedOverlay}>
          <LeisurePanelText item={item} mode="selected" />
        </div>
      </article>

      <aside className={styles.detailPanel}>
        <div className={styles.detailHeader}>
          {item.eyebrow ? (
            <p className={styles.detailEyebrow}>{item.eyebrow}</p>
          ) : null}

          {item.title ? (
            <h3 className={styles.detailTitle}>{item.title}</h3>
          ) : null}
        </div>

        <LeisureDetailsList items={item.listItems} variant={variant} />
      </aside>
    </>
  );
}
