import { useMemo } from "react";
import styles from "./ProjectsSection.module.css";

import SportsAcademyCard from "../../../shared/ui/SportsAcademyCard/SportsAcademyCard.jsx";
import useAccordion from "../../../../../shared/hooks/useAccordion.js";

import sportsBrand, {
  ICONS,
  resolveSportsIcon,
} from "../../../config/index.js";

const HEADER_DEFAULT_ICON = ICONS.ChartIcon;

export default function BasketballProjectsSection({ data, icon = null }) {
  const academies = data?.cards || [];
  const items = academies.filter((card) => card.key === "basket-academy");
  if (!items.length) return null;

  const sectionMeta = data?.basketballIntro?.projectsSection ?? {};
  const id = sectionMeta.id || "disciplines-basketball-projects";
  const heading = sectionMeta.heading || "Projetos";

  const icons = sportsBrand.icons;
  const resolvedHeaderIcon =
    resolveSportsIcon(icons, sectionMeta.headingIconKey) || HEADER_DEFAULT_ICON;

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

  const HeaderIcon = icon || resolvedHeaderIcon;

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
        ) : null}
      </div>
    </section>
  );
}
