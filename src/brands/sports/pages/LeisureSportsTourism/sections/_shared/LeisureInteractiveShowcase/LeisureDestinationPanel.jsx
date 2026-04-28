import LeisureDetailsList from "./LeisureDetailsList";
import LeisurePanelText from "./LeisurePanelText";
import LeisureShowcaseImage from "./LeisureShowcaseImage";

import styles from "./LeisureDestinationPanel.module.css";

export default function LeisureDestinationPanel({
  item,
  panelId,
  labelledBy,
  variant,
}) {
  return (
    <article
      id={panelId}
      className={styles.featuredPanel}
      aria-labelledby={labelledBy}
      aria-live="polite"
    >
      <div className={styles.mediaFrame}>
        <LeisureShowcaseImage item={item} variant={variant} />
      </div>

      <div className={styles.featuredContent}>
        <LeisurePanelText item={item} mode="featured" />

        <LeisureDetailsList items={item.listItems} variant={variant} />
      </div>
    </article>
  );
}
