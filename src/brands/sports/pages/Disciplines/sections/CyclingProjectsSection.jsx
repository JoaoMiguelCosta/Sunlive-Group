import { useMemo } from "react";
import styles from "./CyclingProjectsSection.module.css";

import SportsAcademyCard from "../../../shared/ui/SportsAcademyCard/SportsAcademyCard.jsx";
import useAccordion from "../../../../../shared/hooks/useAccordion.js";

import { ICONS, resolveSportsIcon } from "../../../config/index.js";

const HEADER_DEFAULT_ICON = ICONS.ChartIcon;

export default function CyclingProjectsSection({ data, icon = null }) {
  const section = data;
  if (!section?.items?.length) return null;

  const { id, heading = "Projetos", headingIconKey, items } = section;

  const resolvedHeaderIcon =
    resolveSportsIcon(ICONS, headingIconKey) || HEADER_DEFAULT_ICON;

  const accordionItems = useMemo(
    () => [{ key: "cycling-projects", defaultOpen: true }],
    [],
  );

  const { isOpen, toggle } = useAccordion(accordionItems, {
    allowMultiple: true,
  });

  const panelKey = "cycling-projects";
  const open = isOpen(panelKey);
  const handleToggle = () => toggle(panelKey);

  const HeaderIcon = icon || resolvedHeaderIcon;

  return (
    <section
      id={id}
      className={styles.section}
      aria-label="Projetos de Ciclismo Sunlive"
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

              <span className={styles.headerTitle}>{heading}</span>
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
              {items.map((item) => {
                const CardIcon = resolveSportsIcon(ICONS, item.iconKey);

                return (
                  <SportsAcademyCard
                    key={item.key}
                    logoSrc={item.logoSrc}
                    logoAlt={item.logoAlt}
                    icon={CardIcon}
                    title={item.title}
                    description={item.description}
                    instagramHref={item.instagramHref}
                    facebookHref={item.facebookHref}
                    bookHref={item.bookHref}
                    bookLabel={item.bookLabel}
                  />
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
