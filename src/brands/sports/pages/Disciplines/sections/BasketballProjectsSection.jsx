// src/brands/sports/pages/Disciplines/sections/BasketballProjectsSection.jsx
import { useMemo } from "react";
import styles from "./ProjectsSection.module.css";
import sportsBrand from "../../../config/index.js";
import SportsAcademyCard from "../../../shared/ui/SportsAcademyCard/SportsAcademyCard.jsx";
import useAccordion from "../../../../../shared/hooks/useAccordion.js";
import { ICONS } from "../../../../../shared/config/BrandDefault.js";

const HEADER_DEFAULT_ICON = ICONS.ChartIcon;

export default function BasketballProjectsSection({ icon = null }) {
  const academies = sportsBrand.sections?.academies?.cards || [];
  const items = academies.filter((card) => card.key === "basket-academy");
  if (!items.length) return null;

  const id = "disciplines-basketball-projects";
  const heading = "Projetos";

  const accordionItems = useMemo(
    () => [{ key: "basketball-projects", defaultOpen: true }],
    [],
  );

  const { isOpen, toggle } = useAccordion(accordionItems, {
    allowMultiple: true,
  });

  const panelKey = "basketball-projects";
  const open = isOpen(panelKey);
  const handleToggle = () => toggle(panelKey);

  const HeaderIcon = icon || HEADER_DEFAULT_ICON;

  return (
    <section
      id={id}
      className={styles.section}
      aria-label="Projetos de Basquetebol Sunlive"
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

        {open && (
          <div id={`${id}-panel`} className={styles.panelBody}>
            <div className={styles.grid}>
              {items.map((item) => (
                <SportsAcademyCard
                  key={item.key}
                  logoSrc={item.logo?.src}
                  logoAlt={item.logo?.alt}
                  title={item.title}
                  description={item.description}
                  instagramHref={item.instagram?.href}
                  facebookHref={item.facebook?.href}
                  moreHref={item.more?.href}
                  moreLabel={item.more?.label}
                  bookHref={item.book?.href}
                  bookLabel={item.book?.label}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
