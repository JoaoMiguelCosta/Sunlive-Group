import { useMemo } from "react";
import styles from "./GymnasticsDisciplinesSection.module.css";

import SportsDisciplineCard from "../../../shared/ui/SportsDisciplineCard/SportsDisciplineCard.jsx";
import useAccordion from "../../../../../shared/hooks/useAccordion.js";

import { ICONS, resolveSportsIcon } from "../../../config/index.js";

const HEADER_DEFAULT_ICON = ICONS.WorkflowIcon;

export default function GymnasticsDisciplinesSection({
  data,
  icon = null,
  heading = null,
}) {
  const section = data;
  if (!section?.items?.length) return null;

  const { id, items } = section;

  const resolvedHeaderIcon =
    resolveSportsIcon(ICONS, section.headingIconKey) || HEADER_DEFAULT_ICON;

  const resolvedHeading = heading || section.heading || "Disciplinas";

  const accordionItems = useMemo(
    () => [{ key: "gymnastics-disciplines", defaultOpen: true }],
    [],
  );

  const { isOpen, toggle } = useAccordion(accordionItems, {
    allowMultiple: true,
  });

  const panelKey = "gymnastics-disciplines";
  const open = isOpen(panelKey);
  const handleToggle = () => toggle(panelKey);

  const HeaderIcon = icon || resolvedHeaderIcon;

  return (
    <section
      id={id}
      className={styles.section}
      aria-label="Disciplinas de Ginástica Sunlive"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <button
            type="button"
            className={styles.headerButton}
            onClick={handleToggle}
            aria-expanded={open}
            aria-controls={`${id}-panel`}
          >
            <div className={styles.headerLeft}>
              {HeaderIcon ? (
                <span className={styles.headerIconWrap} aria-hidden="true">
                  <HeaderIcon className={styles.headerIcon} size={20} />
                </span>
              ) : null}

              <span className={styles.headerTitle}>{resolvedHeading}</span>
            </div>

            <span
              className={`${styles.chevron} ${open ? styles.chevronOpen : ""}`}
              aria-hidden="true"
            />
          </button>
        </header>

        {open ? (
          <div id={`${id}-panel`} className={styles.panelBody}>
            <div className={styles.grid}>
              {items.map((item) => (
                <SportsDisciplineCard
                  key={item.key || item.title}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
