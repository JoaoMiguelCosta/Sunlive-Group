import { useEffect, useMemo, useState } from "react";

import styles from "./LeisureDestinationsSection.module.css";

import LeisureDestinationsIntro from "./LeisureDestinationsIntro.jsx";
import LeisureDestinationsFeatured from "./LeisureDestinationsFeatured.jsx";
import LeisureDestinationsList from "./LeisureDestinationsList.jsx";

function getValidItems(items) {
  if (!Array.isArray(items)) return [];

  return items.filter(
    (item) =>
      item &&
      typeof item === "object" &&
      (item.title || item.description || item.eyebrow),
  );
}

function normalizeItems(items = [], sectionId = "leisure-destinations") {
  return getValidItems(items).map((item, index) => ({
    ...item,
    key: item.key || `${sectionId}-item-${index + 1}`,
  }));
}

function getInitialActiveKey(items) {
  return items.find((item) => item.featured)?.key ?? items[0]?.key ?? null;
}

function getSafeActiveKey(items, currentKey) {
  if (!Array.isArray(items) || items.length === 0) return null;

  const hasCurrentKey = items.some((item) => item.key === currentKey);
  return hasCurrentKey ? currentKey : getInitialActiveKey(items);
}

export default function LeisureDestinationsSection({ data }) {
  if (!data) return null;

  const items = useMemo(
    () => normalizeItems(data.items, data.id),
    [data.items, data.id],
  );

  const [activeKey, setActiveKey] = useState(() => getInitialActiveKey(items));

  useEffect(() => {
    setActiveKey((currentKey) => getSafeActiveKey(items, currentKey));
  }, [items]);

  if (!data.intro && items.length === 0) return null;

  const activeItem =
    items.find((item) => item.key === activeKey) ?? items[0] ?? null;

  const activePosition = useMemo(() => {
    return items.findIndex((item) => item.key === activeItem?.key);
  }, [items, activeItem]);

  const secondaryItems = useMemo(() => {
    return items
      .map((item, index) => ({
        ...item,
        position: index + 1,
      }))
      .filter((item) => item.key !== activeItem?.key);
  }, [items, activeItem]);

  const titleId = data.intro?.title ? `${data.id}-title` : undefined;
  const ariaLabel = titleId ? undefined : data.ui?.ariaLabel;

  return (
    <section
      id={data.id}
      className={styles.section}
      aria-labelledby={titleId}
      aria-label={ariaLabel}
    >
      <div className={styles.surface}>
        <LeisureDestinationsIntro
          intro={data.intro}
          sectionId={data.id}
          titleId={titleId}
        />

        <div className={styles.layout}>
          <LeisureDestinationsFeatured
            key={activeItem?.key}
            item={activeItem}
            position={activePosition + 1}
            totalItems={items.length}
          />

          <LeisureDestinationsList
            items={secondaryItems}
            onSelect={setActiveKey}
          />
        </div>
      </div>
    </section>
  );
}
