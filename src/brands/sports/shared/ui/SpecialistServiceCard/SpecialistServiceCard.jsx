// src/shared/components/Sports/SpecialistServiceCard/SpecialistServiceCard.jsx
import { useMemo } from "react";
import useAccordion from "../../../../../shared/hooks/useAccordion.js";
import useFlipOnToggle from "../../../shared/hooks/useFlipOnToggle.js";
import styles from "./SpecialistServiceCard.module.css";

export default function SpecialistServiceCard({
  title,
  badge,
  description,
  items = [],
  listTitle = "Serviços incluídos:",
  icon, // recebe um elemento React, ex: <AppleIcon />
  enableFlip = false, // 👈 novo
  className = "",
  ...rest
}) {
  const hasList = Array.isArray(items) && items.length > 0;

  // acordeão da lista
  const accordionItems = useMemo(() => [{ key: "services" }], []);
  const { isOpen, toggle } = useAccordion(accordionItems, {
    allowMultiple: true,
  });
  const servicesOpen = isOpen("services");

  // mini flip/tilt
  const { flipped, toggle: toggleFlip } = useFlipOnToggle(false);

  const chevronClassName = [
    styles.chevron,
    servicesOpen ? styles.chevronOpen : "",
  ]
    .filter(Boolean)
    .join(" ");

  const cardClasses = [styles.card, className].filter(Boolean).join(" ");

  const handleCardClick = (event) => {
    if (!enableFlip) return;

    // não dá flip quando clicas em botões / links dentro do card
    const interactive = event.target.closest("button, a");
    if (interactive) return;

    toggleFlip();
  };

  return (
    <section
      className={cardClasses}
      aria-label={title}
      data-flipped={enableFlip && flipped ? "true" : "false"}
      onClick={handleCardClick}
      {...rest}
    >
      {/* Topo: ícone + título + badge */}
      <header className={styles.header}>
        <div className={styles.headerText}>
          <div className={styles.iconTitleRow}>
            <div className={styles.iconCircle} aria-hidden="true">
              {icon ? (
                <span className={styles.icon}>{icon}</span>
              ) : (
                <span className={styles.iconFallback}></span>
              )}
            </div>

            <h3 className={styles.title}>{title}</h3>
          </div>

          {badge && <span className={styles.badge}>{badge}</span>}
        </div>
      </header>

      {/* Descrição */}
      {description && <p className={styles.description}>{description}</p>}

      {/* Linha dourada */}
      {hasList && <div className={styles.divider} aria-hidden="true" />}

      {/* Lista com acordeão */}
      {hasList && (
        <div className={styles.listBlock}>
          <button
            type="button"
            className={styles.blockToggle}
            onClick={() => toggle("services")}
            aria-expanded={servicesOpen}
          >
            {listTitle && <h4 className={styles.blockTitle}>{listTitle}</h4>}

            <span className={chevronClassName} aria-hidden="true">
              <svg viewBox="0 0 12 6" width="22" height="22">
                <path
                  d="M1 1.25L6 4.75L11 1.25"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>

          {servicesOpen && (
            <ul className={styles.list}>
              {items.map((item, index) => (
                <li key={index} className={styles.listItem}>
                  <span className={styles.bullet} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </section>
  );
}
