import { useState } from "react";
import { resolveSportsIcon } from "../../../../config/core/iconKeyMap.js";
import { ICONS } from "../../../../config/core/resolvedVisuals.js";
import useInView from "../../../../shared/hooks/useInView.js";
import ProgramSportCardDetailsBlock from "./ProgramSportCardDetailsBlock.jsx";
import ProgramSportCardFocusBlock from "./ProgramSportCardFocusBlock.jsx";
import ProgramSportCardHeader from "./ProgramSportCardHeader.jsx";
import ProgramSportCardMedia from "./ProgramSportCardMedia.jsx";
import {
  getCollapsedCount,
  getInitial,
  getThemeClass,
  shouldEnableExpansion,
} from "./programSportCard.helpers.js";
import styles from "./ProgramSportCard.module.css";

export default function ProgramSportCard({ item, index = 0 }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.18,
    once: true,
    enabled: Boolean(item),
  });

  if (!item) {
    return null;
  }

  const itemKey = item.key || `training-camp-program-${index}`;
  const Icon = resolveSportsIcon(ICONS, item.iconKey);
  const focusItems = Array.isArray(item.focusItems) ? item.focusItems : [];
  const pillars = Array.isArray(item.pillars) ? item.pillars : [];
  const expandable = shouldEnableExpansion(item);
  const collapsedCount = getCollapsedCount(item, 6);
  const visibleFocusItems =
    expandable && !isExpanded ? focusItems.slice(0, collapsedCount) : focusItems;
  const hiddenItemsCount = Math.max(focusItems.length - collapsedCount, 0);
  const cardClassName = [
    styles.card,
    item.mediaAlign === "left" ? styles.mediaLeft : styles.mediaRight,
    getThemeClass(item.theme, styles),
    styles.reveal,
    inView ? styles.isVisible : "",
  ]
    .filter(Boolean)
    .join(" ");

  function handleToggleExpand() {
    setIsExpanded((currentValue) => !currentValue);
  }

  return (
    <article
      ref={ref}
      className={cardClassName}
      aria-labelledby={`${itemKey}-title`}
      tabIndex={0}
      style={{ "--card-delay": `${index * 70}ms` }}
    >
      <div className={styles.content}>
        <ProgramSportCardHeader
          item={item}
          itemKey={itemKey}
          index={index}
          Icon={Icon}
          initial={getInitial(item.sport)}
        />

        {item.summary ? <p className={styles.summary}>{item.summary}</p> : null}

        <ProgramSportCardFocusBlock
          itemKey={itemKey}
          focusLabel={item.focusLabel}
          focusItems={visibleFocusItems}
          expandable={expandable}
          hiddenItemsCount={hiddenItemsCount}
          isExpanded={isExpanded}
          expandAction={item.expandAction}
          onToggleExpand={handleToggleExpand}
        />

        <ProgramSportCardDetailsBlock
          audienceLabel={item.audienceLabel}
          audience={item.audience}
          pillarsLabel={item.pillarsLabel}
          pillars={pillars}
        />
      </div>

      <ProgramSportCardMedia item={item} className={styles.mediaPanelSlot} />
    </article>
  );
}
