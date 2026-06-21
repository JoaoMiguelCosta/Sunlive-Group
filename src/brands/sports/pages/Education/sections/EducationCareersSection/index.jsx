import { useEffect, useMemo, useState } from "react";

import EducationCareersIntro from "./EducationCareersIntro.jsx";
import EducationCareersPanel from "./EducationCareersPanel.jsx";
import EducationCareersSelector from "./EducationCareersSelector.jsx";

import styles from "./EducationCareersSection.module.css";

function getInitialActiveId(items, defaultActiveId) {
  if (items.length === 0) {
    return "";
  }

  const hasValidDefaultItem =
    defaultActiveId && items.some((item) => item.id === defaultActiveId);

  if (hasValidDefaultItem) {
    return defaultActiveId;
  }

  return items[0]?.id || "";
}

export default function EducationCareersSection({ data }) {
  const items = useMemo(() => {
    if (!Array.isArray(data?.items)) {
      return [];
    }

    return data.items.filter((item) => item?.id);
  }, [data?.items]);

  const defaultActiveId = data?.selector?.defaultActiveId;

  const [activeId, setActiveId] = useState(() =>
    getInitialActiveId(items, defaultActiveId),
  );

  useEffect(() => {
    if (items.length === 0) {
      setActiveId("");
      return;
    }

    setActiveId((currentActiveId) => {
      const currentItemStillExists =
        currentActiveId && items.some((item) => item.id === currentActiveId);

      if (currentItemStillExists) {
        return currentActiveId;
      }

      return getInitialActiveId(items, defaultActiveId);
    });
  }, [defaultActiveId, items]);

  if (!data) {
    return null;
  }

  const sectionId = data.id || "education-careers";
  const intro = data.intro ?? null;
  const selector = data.selector ?? null;
  const detailPanel = data.detailPanel ?? null;

  const activeItem =
    items.find((item) => item.id === activeId) || items[0] || null;

  if (!intro && !activeItem) {
    return null;
  }

  const titleId = intro?.title ? `${sectionId}-title` : undefined;
  const leadId = intro?.lead ? `${sectionId}-lead` : undefined;

  const activeTabId = activeItem
    ? `${sectionId}-tab-${activeItem.id}`
    : undefined;

  const activePanelId = activeItem
    ? `${sectionId}-panel-${activeItem.id}`
    : undefined;

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
