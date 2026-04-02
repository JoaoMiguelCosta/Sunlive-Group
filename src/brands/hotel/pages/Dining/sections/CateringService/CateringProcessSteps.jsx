import { useEffect, useMemo, useRef, useState } from "react";

import hotelBrand, { resolveHotelIcon } from "../../../../config/index.js";
import HotelCateringStepCard from "../../../../shared/ui/HotelCateringStepCard/HotelCateringStepCard.jsx";

import styles from "./CateringProcessSteps.module.css";

function DetailsPanel({ item, detailsPanelLabel, panelRef = null }) {
  if (!item) return null;

  return (
    <article
      ref={panelRef}
      className={styles.detailsPanel}
      aria-label={detailsPanelLabel}
      tabIndex={-1}
    >
      <div className={styles.detailsHeader}>
        <span className={styles.detailsBadge}>Etapa {item.stepNumber}</span>

        <h3 className={styles.detailsTitle}>
          {item.detailTitle ?? item.title}
        </h3>
      </div>

      {item.detailText ? (
        <p className={styles.detailsText}>{item.detailText}</p>
      ) : null}

      {Array.isArray(item.highlights) && item.highlights.length ? (
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
  const section = hotelBrand?.pages?.dining?.sections?.catering ?? null;
  const items = Array.isArray(section?.processSteps?.items)
    ? section.processSteps.items
    : [];

  const ariaLabel =
    section?.processSteps?.ariaLabel ?? "Etapas do serviço de catering";
  const detailsPanelLabel =
    section?.processSteps?.detailsPanelLabel ?? "Detalhe da etapa selecionada";

  const safeItems = useMemo(() => items.filter(Boolean), [items]);

  const [activeId, setActiveId] = useState(safeItems[0]?.id ?? null);
  const [shouldScrollToPanel, setShouldScrollToPanel] = useState(false);

  const detailsPanelRef = useRef(null);

  const activeItem =
    safeItems.find((item) => item.id === activeId) ?? safeItems[0] ?? null;

  useEffect(() => {
    if (!safeItems.length && activeId !== null) {
      setActiveId(null);
      return;
    }

    if (!safeItems.some((item) => item.id === activeId)) {
      setActiveId(safeItems[0]?.id ?? null);
    }
  }, [activeId, safeItems]);

  useEffect(() => {
    if (!shouldScrollToPanel) return;
    if (typeof window === "undefined") return;
    if (window.innerWidth > 980) {
      setShouldScrollToPanel(false);
      return;
    }

    const panelElement = detailsPanelRef.current;
    if (!panelElement) {
      setShouldScrollToPanel(false);
      return;
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

    return () => window.clearTimeout(timeoutId);
  }, [activeItem, shouldScrollToPanel]);

  if (!safeItems.length) return null;

  const handleSelectStep = (itemId) => {
    const isMobileViewport =
      typeof window !== "undefined" ? window.innerWidth <= 980 : false;

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
            ? resolveHotelIcon(hotelBrand?.icons, item.iconKey)
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
              onClick={() => handleSelectStep(item.id)}
            />
          );
        })}
      </div>

      <DetailsPanel
        item={activeItem}
        detailsPanelLabel={detailsPanelLabel}
        panelRef={detailsPanelRef}
      />
    </div>
  );
}
