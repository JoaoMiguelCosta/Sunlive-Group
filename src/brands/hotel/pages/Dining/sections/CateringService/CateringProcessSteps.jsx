import { useEffect, useMemo, useRef, useState } from "react";

import dining from "../../../../config/pages/dining.js";
const catering = dining.sections.catering;
import { resolveHotelIcon } from "../../../../config/core/iconKeyMap.js";
import { ICONS } from "../../../../config/core/resolvedVisuals.js";
import HotelCateringStepCard from "../../../../shared/ui/HotelCateringStepCard/HotelCateringStepCard.jsx";

import styles from "./CateringProcessSteps.module.css";

function DetailsPanel({
  item,
  panelRef = null,
  panelId,
  titleId,
}) {
  if (!item) {
    return null;
  }

  return (
    <article
      id={panelId}
      ref={panelRef}
      className={styles.detailsPanel}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <div className={styles.detailsHeader}>
        <span className={styles.detailsBadge}>Etapa {item.stepNumber}</span>

        <h3 id={titleId} className={styles.detailsTitle}>
          {item.detailTitle ?? item.title}
        </h3>
      </div>

      {item.detailText ? (
        <p className={styles.detailsText}>{item.detailText}</p>
      ) : null}

      {Array.isArray(item.highlights) && item.highlights.length > 0 ? (
        <div className={styles.detailsHighlights}>
          {item.highlights.map((highlight, index) => (
            <span
              key={`${item.id}-highlight-${index}`}
              className={styles.detailsPill}
            >
              {highlight}
            </span>
          ))}
        </div>
      ) : null}
    </article>
  );
}

export default function CateringProcessSteps() {
  const section = catering;

  const processStepItems = section?.processSteps?.items;

  const safeItems = useMemo(() => {
    if (!Array.isArray(processStepItems)) {
      return [];
    }

    return processStepItems.filter(Boolean);
  }, [processStepItems]);

  const ariaLabel =
    section?.processSteps?.ariaLabel ?? "Etapas do serviço de catering";

  const sectionId = section?.id ?? "restaurante-catering";
  const detailsPanelId = `${sectionId}-step-details`;
  const detailsTitleId = `${sectionId}-step-details-title`;

  const [activeId, setActiveId] = useState(safeItems[0]?.id ?? null);
  const [shouldScrollToPanel, setShouldScrollToPanel] = useState(false);

  const detailsPanelRef = useRef(null);

  const activeItem =
    safeItems.find((item) => item.id === activeId) ?? safeItems[0] ?? null;

  useEffect(() => {
    if (safeItems.length === 0) {
      if (activeId !== null) {
        setActiveId(null);
      }

      return;
    }

    const activeItemStillExists = safeItems.some(
      (item) => item.id === activeId,
    );

    if (!activeItemStillExists) {
      setActiveId(safeItems[0]?.id ?? null);
    }
  }, [activeId, safeItems]);

  useEffect(() => {
    if (!shouldScrollToPanel || typeof window === "undefined") {
      return undefined;
    }

    if (window.innerWidth > 980) {
      setShouldScrollToPanel(false);
      return undefined;
    }

    const panelElement = detailsPanelRef.current;

    if (!panelElement) {
      setShouldScrollToPanel(false);
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      const mobileOffset = 96;

      const panelTop =
        panelElement.getBoundingClientRect().top + window.scrollY;

      const targetY = Math.max(panelTop - mobileOffset, 0);

      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });

      setShouldScrollToPanel(false);
    }, 60);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [activeItem, shouldScrollToPanel]);

  if (safeItems.length === 0) {
    return null;
  }

  const handleSelectStep = (itemId) => {
    const isMobileViewport =
      typeof window !== "undefined" && window.innerWidth <= 980;

    setActiveId(itemId);

    if (isMobileViewport) {
      setShouldScrollToPanel(true);
    }
  };

  return (
    <div className={styles.block} aria-label={ariaLabel}>
      <div className={styles.grid}>
        {safeItems.map((item) => {
          const Icon = item?.iconKey
            ? resolveHotelIcon(ICONS, item.iconKey)
            : null;

          const isActive = item.id === activeItem?.id;

          return (
            <HotelCateringStepCard
              key={item.id}
              stepNumber={item.stepNumber}
              title={item.title}
              description={item.description}
              icon={Icon ? <Icon size={28} /> : null}
              iconKey={item.iconKey}
              className={styles.stepCard}
              isActive={isActive}
              ariaControls={detailsPanelId}
              ariaLabel={`Ver detalhe da etapa ${item.stepNumber}: ${item.title}`}
              onClick={() => handleSelectStep(item.id)}
            />
          );
        })}
      </div>

      <DetailsPanel
        item={activeItem}
        panelId={detailsPanelId}
        titleId={detailsTitleId}
        panelRef={detailsPanelRef}
      />
    </div>
  );
}
