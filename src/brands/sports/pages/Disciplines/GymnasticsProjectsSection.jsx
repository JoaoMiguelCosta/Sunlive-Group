// src/brands/sports/pages/Disciplines/GymnasticsProjectsSection.jsx
import { useMemo } from "react";
import styles from "./ProjectsSection.module.css"; 

import sportsBrand from "../../configSports.jsx";
import SportsAcademyCard from "../../../../shared/components/Sports/SportsAcademyCard/SportsAcademyCard.jsx";
import useAccordion from "../../../../shared/hooks/useAccordion.js";

/**
 * GymnasticsProjectsSection
 * Projetos ligados à Ginástica (usa cards das Academias do configSports).
 *
 * Vai buscar os dados a:
 *   sportsBrand.sections.academies.cards
 *
 * Por agora estamos a usar o card "cycling-academy"
 * como projeto em destaque para Ginástica.
 */
export default function GymnasticsProjectsSection({ icon = null }) {
  const academies = sportsBrand.sections?.academies?.cards || [];

  // 👉 aqui escolhes quais cards queres mostrar para “Projetos — Ginástica”
  const items = academies.filter((card) => card.key === "cycling-academy");

  if (!items.length) return null;

  const id = "disciplines-gymnastics-projects";
  const heading = "Projetos";

  // acordeão de um só painel
  const accordionItems = useMemo(
    () => [{ key: "gymnastics-projects", defaultOpen: true }],
    []
  );

  const { isOpen, toggle } = useAccordion(accordionItems, {
    allowMultiple: true,
  });

  const panelKey = "gymnastics-projects";
  const open = isOpen(panelKey);

  const handleToggle = () => toggle(panelKey);

  return (
    <section
      id={id}
      className={styles.section}
      aria-label="Projetos de Ginástica Sunlive"
    >
      <div className={styles.inner}>
        {/* Header Performance Prestige + botão de acordeão */}
        <header className={styles.header}>
          <button
            type="button"
            className={styles.headerButton}
            onClick={handleToggle}
            aria-expanded={open}
            aria-controls={`${id}-panel`}
          >
            <div className={styles.headerLeft}>
              {icon && (
                <span className={styles.headerIconWrap} aria-hidden="true">
                  {icon}
                </span>
              )}

              <span className={styles.headerTitle}>{heading}</span>
            </div>

            <span
              className={`${styles.chevron} ${
                open ? styles.chevronOpen : ""
              }`}
              aria-hidden="true"
            />
          </button>
        </header>

        {/* Corpo: 1 card centrado */}
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
                  instagramHref={item.instagram}
                  facebookHref={item.facebook}
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
