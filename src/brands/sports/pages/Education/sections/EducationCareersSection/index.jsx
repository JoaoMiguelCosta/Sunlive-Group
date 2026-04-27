import { useEffect, useMemo, useState } from "react";

import styles from "./EducationCareersSection.module.css";

import EducationCareersIntro from "./EducationCareersIntro.jsx";
import EducationCareersSelector from "./EducationCareersSelector.jsx";
import EducationCareersPanel from "./EducationCareersPanel.jsx";

function getInitialActiveId(items, defaultActiveId) {
  if (!items.length) return "";

  if (defaultActiveId && items.some((item) => item.id === defaultActiveId)) {
    return defaultActiveId;
  }

  return items[0]?.id || "";
}

export default function EducationCareersSection({ data }) {
  if (!data) return null;

  const sectionId = data.id || "education-careers";
  const intro = data.intro ?? null;
  const selector = data.selector ?? null;
  const detailPanel = data.detailPanel ?? null;
  const items = Array.isArray(data.items)
    ? data.items.filter((item) => item?.id)
    : [];

  const [activeId, setActiveId] = useState(() =>
    getInitialActiveId(items, selector?.defaultActiveId),
  );

  useEffect(() => {
    if (!items.length) {
      setActiveId("");
      return;
    }

    setActiveId((currentActiveId) => {
      if (
        currentActiveId &&
        items.some((item) => item.id === currentActiveId)
      ) {
        return currentActiveId;
      }

      return getInitialActiveId(items, selector?.defaultActiveId);
    });
  }, [items, selector?.defaultActiveId]);

  const activeItem = useMemo(() => {
    return items.find((item) => item.id === activeId) || items[0] || null;
  }, [activeId, items]);

  const titleId = intro?.title ? `${sectionId}-title` : undefined;
  const leadId = intro?.lead ? `${sectionId}-lead` : undefined;
  const activeTabId = activeItem
    ? `${sectionId}-tab-${activeItem.id}`
    : undefined;
  const activePanelId = activeItem
    ? `${sectionId}-panel-${activeItem.id}`
    : undefined;

  if (!intro && !activeItem) return null;

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
      aria-label={!titleId ? intro?.title : undefined}
    >
      <div className={styles.surface}>
        <EducationCareersIntro
          intro={intro}
          titleId={titleId}
          leadId={leadId}
        />

        {activeItem ? (
          <div className={styles.layout}>
            <EducationCareersSelector
              sectionId={sectionId}
              selector={selector}
              items={items}
              activeItem={activeItem}
              onSelect={setActiveId}
            />

            <EducationCareersPanel
              item={activeItem}
              detailPanel={detailPanel}
              panelId={activePanelId}
              tabId={activeTabId}
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
