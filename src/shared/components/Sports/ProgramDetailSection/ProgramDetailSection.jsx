// src/shared/components/Sports/ProgramDetailSection/ProgramDetailSection.jsx
import { useMemo } from "react";
import styles from "./ProgramDetailSection.module.css";

import useAccordion from "../../../hooks/useAccordion.js";
import useInView from "../../../hooks/useInView.js";
import { ChevronDownIcon } from "../../../ui/icons/index.js";
import { splitPrefixByDash } from "../../../utils/splitPrefixByDash.js";

/**
 * Secção de detalhe de programa (ex.: Estágios, Pré-Época, etc.)
 * Estilo Performance Prestige: card escuro + halo dourado/verde na imagem.
 */
export default function ProgramDetailSection({
  id,
  title,
  Icon,
  description,
  idealForTitle,
  idealFor,
  activitiesTitle,
  activities = [],
  imageSide = "right",
  revealSide = "left", // controla de que lado o card entra (left/right)
  image,
  ...rest
}) {
  const hasImage = image && image.src;

  // Animação on-scroll (entra sempre que volta ao viewport)
  const { ref, inView } = useInView({
    threshold: 0.3,
    once: false, // permite repetir a animação sempre que voltar a entrar
  });

  const sectionClasses = [
    styles.section,
    imageSide === "left" ? styles.imageLeft : styles.imageRight,
    styles.reveal,
    revealSide === "right" ? styles.fromRight : styles.fromLeft,
    inView ? styles.isVisible : "",
  ]
    .filter(Boolean)
    .join(" ");

  // ⚙️ Config local do acordeão (Ideal + Atividades)
  const accordionItems = useMemo(
    () => [
      { key: "ideal" }, // defaultOpen omitido => começa fechado
      { key: "activities" },
    ],
    []
  );

  const { isOpen, toggle } = useAccordion(accordionItems, {
    allowMultiple: true,
  });

  // Destaque do prefixo da atividade (antes do "—")
  const renderActivity = (text) => {
    if (!text) return null;
    const parts = splitPrefixByDash(text);
    if (!parts) return text;

    const { prefix, rest, separator } = parts;

    return (
      <>
        <span className={styles.activityLabel}>{prefix}</span>
        {` ${separator} `}
        <span className={styles.activityRest}>{rest}</span>
      </>
    );
  };

  return (
    <section
      id={id}
      ref={ref}
      className={sectionClasses}
      data-image-side={imageSide}
      {...rest}
    >
      <div className={styles.inner}>
        {/* Painel de texto */}
        <div className={styles.textPanel}>
          {(Icon || title) && (
            <header className={styles.header}>
              <div className={styles.headerMain}>
                {Icon && (
                  <span className={styles.iconWrap}>
                    <Icon aria-hidden="true" />
                  </span>
                )}
                {title && <h3 className={styles.title}>{title}</h3>}
              </div>
            </header>
          )}

          <div className={styles.body}>
            {description && <p className={styles.description}>{description}</p>}

            {/* === IDEAL PARA (accordion) === */}
            {(idealForTitle || idealFor) && (
              <section className={styles.block}>
                <button
                  type="button"
                  className={styles.blockToggle}
                  onClick={() => toggle("ideal")}
                  aria-expanded={isOpen("ideal")}
                >
                  {idealForTitle && (
                    <h4 className={styles.blockTitle}>{idealForTitle}</h4>
                  )}

                  <span
                    className={`${styles.chevron} ${
                      isOpen("ideal") ? styles.chevronOpen : ""
                    }`}
                    aria-hidden="true"
                  >
                    <ChevronDownIcon />
                  </span>
                </button>

                {isOpen("ideal") && idealFor && (
                  <p className={styles.blockText}>{idealFor}</p>
                )}
              </section>
            )}

            {/* === ATIVIDADES-CHAVE (accordion) === */}
            {activities?.length > 0 && (
              <section className={styles.block}>
                <button
                  type="button"
                  className={styles.blockToggle}
                  onClick={() => toggle("activities")}
                  aria-expanded={isOpen("activities")}
                >
                  {activitiesTitle && (
                    <h4 className={styles.blockTitle}>{activitiesTitle}</h4>
                  )}

                  <span
                    className={`${styles.chevron} ${
                      isOpen("activities") ? styles.chevronOpen : ""
                    }`}
                    aria-hidden="true"
                  >
                    <ChevronDownIcon />
                  </span>
                </button>

                {isOpen("activities") && (
                  <ul className={styles.activitiesList}>
                    {activities.map((item, idx) => (
                      <li key={idx} className={styles.activityItem}>
                        {renderActivity(item)}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            )}
          </div>
        </div>

        {/* Painel de media com glow Prestige Noir + Liquid Gold + verde-vital */}
        <div className={styles.mediaPanel}>
          {hasImage ? (
            <figure className={styles.mediaFigure}>
              <div className={styles.mediaGlow} aria-hidden="true" />
              <img src={image.src} alt={image.alt || ""} loading="lazy" />
            </figure>
          ) : (
            <div className={styles.mediaPlaceholder} aria-hidden="true" />
          )}
        </div>
      </div>
    </section>
  );
}
