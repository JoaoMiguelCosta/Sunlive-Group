import { useMemo } from "react";
import styles from "./GymnasticsDisciplinesSection.module.css";

import SportsDisciplineCard from "../../../shared/ui/SportsDisciplineCard/SportsDisciplineCard.jsx";
import useAccordion from "../../../../../shared/hooks/useAccordion.js";
import { ICONS } from "../../../../../shared/config/BrandDefault.jsx";

// ícone por defeito do header (workflow)
const HEADER_DEFAULT_ICON = ICONS.WorkflowIcon;

/**
 * GymnasticsDisciplinesSection
 * Bloco com header + acordeão + grelha de disciplinas de Ginástica
 *
 * Lê de data.sections.disciplines.gymnasticsDisciplines
 *
 * Props extra:
 *  - icon?: ReactNode   (ícone no header)
 *  - heading?: string   (texto do header, default "Disciplinas")
 */
export default function GymnasticsDisciplinesSection({
  data,
  icon = null,
  heading = "Disciplinas",
}) {
  const section = data?.gymnasticsDisciplines;
  if (!section?.items?.length) return null;

  const { id, items } = section;

  // Acordeão (um único painel)
  const accordionItems = useMemo(
    () => [{ key: "gymnastics-disciplines", defaultOpen: true }],
    []
  );

  const { isOpen, toggle } = useAccordion(accordionItems, {
    allowMultiple: true,
  });

  const panelKey = "gymnastics-disciplines";
  const open = isOpen(panelKey);

  const handleToggle = () => toggle(panelKey);

  // ícone do header: prop `icon` > WorkflowIcon por defeito
  const HeaderIcon = icon || HEADER_DEFAULT_ICON;

  return (
    <section
      id={id}
      className={styles.section}
      aria-label="Disciplinas de Ginástica Sunlive"
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

        {/* Corpo: grelha 3x3 (ou responsivo) de disciplinas */}
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
