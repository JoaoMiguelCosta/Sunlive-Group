import { useEffect, useMemo, useState } from "react";
import styles from "./EducationCareersSection.module.css";
import EducationCareersIntro from "./EducationCareersIntro.jsx";
import EducationCareersSelector from "./EducationCareersSelector.jsx";
import EducationCareersPanel from "./EducationCareersPanel.jsx";

function hasItems(value) {
  return Array.isArray(value) && value.length > 0;
}

export default function EducationCareersSection({ data }) {
  if (!data) return null;

  const sectionId = data.id || "education-careers";
  const intro = data.intro;
  const selector = data.selector;
  const detailPanel = data.detailPanel;
  const items = hasItems(data.items) ? data.items : [];

  const initialActiveId = selector?.defaultActiveId || items[0]?.id || "";
  const [activeId, setActiveId] = useState(initialActiveId);

  const titleId = intro?.title ? `${sectionId}-title` : undefined;
  const leadId = intro?.lead ? `${sectionId}-lead` : undefined;

  useEffect(() => {
    if (!items.length) return;

    const exists = items.some((item) => item.id === activeId);
    if (!exists) {
      setActiveId(selector?.defaultActiveId || items[0]?.id || "");
    }
  }, [activeId, items, selector?.defaultActiveId]);

  const activeItem = useMemo(() => {
    return items.find((item) => item.id === activeId) || items[0] || null;
  }, [activeId, items]);

  if (!intro && items.length === 0) return null;

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
      aria-label={
        !titleId ? intro?.title || "Percursos Profissionais" : undefined
      }
    >
      <div className={styles.surface}>
        <EducationCareersIntro
          intro={intro}
          titleId={titleId}
          leadId={leadId}
        />

        {items.length > 0 && activeItem ? (
          <div className={styles.layout}>
            <EducationCareersSelector
              selector={selector}
              items={items}
              activeItem={activeItem}
              onSelect={setActiveId}
            />

            <EducationCareersPanel
              item={activeItem}
              detailPanel={detailPanel}
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
