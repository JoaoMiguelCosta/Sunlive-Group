import { useEffect, useId, useMemo, useState } from "react";

import styles from "./LeisureExperiencesShowcase.module.css";

import LeisureExperiencesFeature from "./LeisureExperiencesFeature.jsx";
import LeisureExperiencesItem from "./LeisureExperiencesItem.jsx";

import {
  getInitialActiveExperienceKey,
  getSafeActiveExperienceKey,
} from "./leisureExperiences.utils.js";

export default function LeisureExperiencesShowcase({
  items = [],
  sectionId = "leisure-experiences",
}) {
  const [activeKey, setActiveKey] = useState(() =>
    getInitialActiveExperienceKey(items),
  );

  const featurePanelId = useId();

  useEffect(() => {
    setActiveKey((currentKey) => getSafeActiveExperienceKey(items, currentKey));
  }, [items]);

  const activeItem = useMemo(() => {
    return items.find((item) => item.key === activeKey) ?? items[0] ?? null;
  }, [items, activeKey]);

  const activePosition = useMemo(() => {
    return items.findIndex((item) => item.key === activeItem?.key);
  }, [items, activeItem]);

  const secondaryItems = useMemo(() => {
    return items
      .map((item, index) => ({ ...item, position: index + 1 }))
      .filter((item) => item.key !== activeItem?.key);
  }, [items, activeItem]);

  if (!activeItem) return null;

  return (
    <div className={styles.showcase} data-section={sectionId}>
      <LeisureExperiencesFeature
        panelId={featurePanelId}
        item={activeItem}
        position={activePosition + 1}
        totalItems={items.length}
      />

      {secondaryItems.length > 0 ? (
        <div className={styles.grid}>
          {secondaryItems.map((item) => (
            <LeisureExperiencesItem
              key={item.key}
              item={item}
              position={item.position}
              featurePanelId={featurePanelId}
              onSelect={() => setActiveKey(item.key)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
