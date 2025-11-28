import { useMemo } from "react";
import styles from "./CyclingProjectsSection.module.css";

import SportsAcademyCard from "../../../../shared/components/Sports/SportsAcademyCard/SportsAcademyCard.jsx";
import useAccordion from "../../../../shared/hooks/useAccordion.js";
import { ICONS } from "../../../../shared/config/BrandDefault.jsx";

const PANEL_ICONS = {
  "aero-edge": ICONS.ChartFrameIcon,
  "training-from-pro": ICONS.MonitorIcon,
};

// ícone por defeito do header
const HEADER_DEFAULT_ICON = ICONS.ChartIcon;

export default function CyclingProjectsSection({ data, icon = null }) {
  const section = data?.cyclingProjects;
  if (!section?.items?.length) return null;

  const { id, heading = "Projetos", items } = section;

  // acordeão de um só painel
  const accordionItems = useMemo(
    () => [{ key: "cycling-projects", defaultOpen: true }],
    []
  );

  const { isOpen, toggle } = useAccordion(accordionItems, {
    allowMultiple: true,
  });

  const panelKey = "cycling-projects";
  const open = isOpen(panelKey);

  const handleToggle = () => toggle(panelKey);

  // ícone do header: prop `icon` > ChartIcon por defeito
  const HeaderIcon = icon || HEADER_DEFAULT_ICON;

  return (
    <section
      id={id}
      className={styles.section}
      aria-label="Projetos de Ciclismo Sunlive"
    >
      <div className={styles.inner}>
        {/* Header com ícone + acordeão */}
        <header className={styles.header}>
          <button
            type="button"
            className={styles.headerButton}
            onClick={handleToggle}
            aria-expanded={open}
            aria-controls={`${id}-panel`}
          >
            <div className={styles.headerLeft}>
              {HeaderIcon && (
                <span className={styles.headerIconWrap} aria-hidden="true">
                  <HeaderIcon className={styles.headerIcon} size={20} />
                </span>
              )}

              <span className={styles.headerTitle}>{heading}</span>
            </div>

            <span
              className={`${styles.chevron} ${open ? styles.chevronOpen : ""}`}
              aria-hidden="true"
            />
          </button>
        </header>

        {/* Corpo: grelha de cards */}
        {open && (
          <div id={`${id}-panel`} className={styles.panelBody}>
            <div className={styles.grid}>
              {items.map((item) => {
                const CardIcon =
                  item.icon || (item.iconKey && PANEL_ICONS[item.iconKey]);

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
        )}
      </div>
    </section>
  );
}
