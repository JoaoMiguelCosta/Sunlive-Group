import useInView from "../../hooks/useInView.js";

import SportsClosingCTACopy from "./SportsClosingCTACopy.jsx";
import SportsClosingCTASupportPanel from "./SportsClosingCTASupportPanel.jsx";
import { getTitleId, getValidItems } from "./sportsClosingCTA.utils.js";

import styles from "./SportsClosingCTA.module.css";

export default function SportsClosingCTA({ data }) {
  const { ref, inView } = useInView({
    threshold: 0.14,
    once: true,
    enabled: Boolean(data),
  });

  if (!data) {
    return null;
  }

  const {
    id,
    eyebrow,
    title,
    description,
    highlights = [],
    highlightsAriaLabel,
    primaryAction,
    secondaryAction,
    supportPanel,
  } = data;

  const titleId = title ? getTitleId(id) : undefined;
  const validHighlights = getValidItems(highlights);
  const validSupportItems = getValidItems(supportPanel?.items);
  const validSupportExtraItems = getValidItems(supportPanel?.extraItems);

  const hasSupportPanel = Boolean(
    supportPanel?.eyebrow ||
      supportPanel?.title ||
      validSupportItems.length > 0 ||
      supportPanel?.extraTitle ||
      validSupportExtraItems.length > 0,
  );

  const sectionClassName = [
    styles.section,
    styles.reveal,
    inView ? styles.isVisible : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section
      id={id}
      ref={ref}
      className={sectionClassName}
      aria-labelledby={titleId}
    >
      <div className={styles.inner}>
        <div className={styles.content}>
          <SportsClosingCTACopy
            titleId={titleId}
            eyebrow={eyebrow}
            title={title}
            description={description}
            highlights={validHighlights}
            highlightsAriaLabel={highlightsAriaLabel}
            primaryAction={primaryAction}
            secondaryAction={secondaryAction}
          />

          {hasSupportPanel ? (
            <SportsClosingCTASupportPanel
              supportPanel={supportPanel}
              items={validSupportItems}
              extraItems={validSupportExtraItems}
            />
          ) : null}
        </div>
      </div>
    </section>
  );
}
