// src/brands/sports/pages/Disciplines/CyclingDisciplinesSection.jsx
import { useMemo } from "react";
import styles from "./CyclingDisciplinesSection.module.css";

import SportsDisciplineCard from "../../../../shared/components/Sports/SportsDisciplineCard/SportsDisciplineCard.jsx";
import useAccordion from "../../../../shared/hooks/useAccordion.js";

/**
 * CyclingDisciplinesSection
 * Bloco com header + acordeão + grelha de disciplinas de ciclismo
 *
 * Espera receber em `data` o bloco `disciplines` do configSports,
 * com a chave `cyclingDisciplines`.
 *
 * Props extra:
 *  - icon?: ReactNode   (ícone no header)
 *  - heading?: string   (texto do header, default "Disciplinas")
 */
export default function CyclingDisciplinesSection({
  data,
  icon = null,
  heading = "Disciplinas",
}) {
  const section = data?.cyclingDisciplines;
  if (!section?.items?.length) return null;

  const { id, items } = section;

  // Acordeão (um único painel)
  const accordionItems = useMemo(
    () => [{ key: "cycling-disciplines", defaultOpen: true }],
    []
  );

  const { isOpen, toggle } = useAccordion(accordionItems, {
    allowMultiple: true,
  });

  const panelKey = "cycling-disciplines";
  const open = isOpen(panelKey);

  const handleToggle = () => toggle(panelKey);

  return (
    <section
      id={id}
      className={styles.section}
      aria-label="Disciplinas de Ciclismo Sunlive"
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
              className={`${styles.chevron} ${open ? styles.chevronOpen : ""}`}
              aria-hidden="true"
            />
          </button>
        </header>

        {/* Corpo: grelha de disciplinas, exactamente como tinhas */}
        {open && (
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
        )}
      </div>
    </section>
  );
}
