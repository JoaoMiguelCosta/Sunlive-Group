import { Fragment, useEffect, useMemo, useRef, useState } from "react";

import styles from "./ForWhomProfilesGrid.module.css";
import accommodation from "../../../../config/pages/accommodation.js";
const forWhomProfiles = accommodation.sections.forWhomProfiles;
import { resolveHotelIcon } from "../../../../config/core/iconKeyMap.js";
import { ICONS } from "../../../../config/core/resolvedVisuals.js";

import HotelProfileCard from "../../../../shared/ui/HotelProfileCard/HotelProfileCard.jsx";
import HotelOfferPanel from "../../../../shared/ui/HotelOfferPanel/HotelOfferPanel.jsx";

function getLayoutMode() {
  if (typeof window === "undefined") return "desktop";

  if (window.innerWidth <= 700) return "mobile";
  if (window.innerWidth <= 1100) return "tablet";
  return "desktop";
}

function getColumnsByLayout(layoutMode) {
  if (layoutMode === "mobile") return 1;
  if (layoutMode === "tablet") return 2;
  return 3;
}

function chunkArray(items, size) {
  const chunks = [];

  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size));
  }

  return chunks;
}

function DetailsPanel({ card, className = "", panelRef = null, panelId }) {
  if (!card?.details) return null;

  return (
    <div
      id={panelId}
      ref={panelRef}
      className={[styles.detailsRow, className].filter(Boolean).join(" ")}
    >
      <HotelOfferPanel
        eyebrow={card.title}
        title={card.details.title}
        intro={card.details.intro}
        items={(card.details.items || []).map((item) => ({
          id: item.id,
          title: item.title,
          description: item.description,
          Icon: item.Icon,
        }))}
        highlightsTitle={card.details.highlightsTitle}
        highlights={card.details.highlights}
        ctaLabel={card.details.ctaLabel}
        ctaHref={card.details.ctaHref}
        className={styles.offerPanel}
      />
    </div>
  );
}

export default function ForWhomProfilesGrid() {
  const content = forWhomProfiles;

  const cards = useMemo(() => {
    const rawCards = Array.isArray(content?.items) ? content.items : [];

    return rawCards.map((card) => ({
      ...card,
      Icon: resolveHotelIcon(ICONS, card.iconKey),
      details: card.details
        ? {
            ...card.details,
            items: Array.isArray(card.details.items)
              ? card.details.items.map((item) => ({
                  ...item,
                  Icon: resolveHotelIcon(ICONS, item.iconKey),
                }))
              : [],
          }
        : null,
    }));
  }, [content]);

  const [layoutMode, setLayoutMode] = useState(getLayoutMode);
  const [openKey, setOpenKey] = useState(
    cards.find((card) => card?.defaultOpen)?.key ?? null,
  );

  const detailRefs = useRef({});

  useEffect(() => {
    function handleResize() {
      setLayoutMode(getLayoutMode());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const columns = useMemo(() => getColumnsByLayout(layoutMode), [layoutMode]);

  const rows = useMemo(() => chunkArray(cards, columns), [cards, columns]);

  useEffect(() => {
    if (!openKey) return;
    if (layoutMode === "desktop") return;

    const element = detailRefs.current[openKey];
    if (!element) return;

    window.requestAnimationFrame(() => {
      element.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    });
  }, [openKey, layoutMode]);

  function handleToggle(cardKey) {
    setOpenKey((prev) => (prev === cardKey ? null : cardKey));
  }

  if (!cards.length) return null;

  return (
    <div className={styles.wrap}>
      {rows.map((row, rowIndex) => {
        const openCardInRow = row.find((card) => card.key === openKey) ?? null;

        const rowClassName = [
          styles.row,
          row.length === 1 ? styles.rowSingle : "",
          row.length === 2 ? styles.rowTwo : "",
          row.length === 3 ? styles.rowThree : "",
          layoutMode === "desktop" && row.length === 2
            ? styles.rowDesktopTwo
            : "",
          layoutMode === "desktop" && row.length === 1
            ? styles.rowDesktopSingle
            : "",
          layoutMode === "tablet" && row.length === 1
            ? styles.rowTabletSingle
            : "",
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <Fragment key={`for-whom-row-${rowIndex}`}>
            <div className={rowClassName}>
              {row.map((card) => {
                const isOpen = openKey === card.key;
                const panelId = `${content?.id || "for-whom"}-${card.key}-panel`;
                const buttonId = `${content?.id || "for-whom"}-${card.key}-button`;

                return (
                  <div key={card.key} className={styles.cardCell}>
                    <HotelProfileCard
                      title={card.title}
                      subtitle={card.subtitle}
                      description={card.description}
                      ctaLabel={card.ctaLabel || "Ver detalhes"}
                      onClick={() => handleToggle(card.key)}
                      detailsOpen={isOpen}
                      controlsId={panelId}
                      buttonId={buttonId}
                      Icon={card.Icon}
                    />
                  </div>
                );
              })}
            </div>

            {openCardInRow ? (
              <DetailsPanel
                card={openCardInRow}
                panelId={`${content?.id || "for-whom"}-${openCardInRow.key}-panel`}
                className={styles.rowDetails}
                panelRef={(element) => {
                  detailRefs.current[openCardInRow.key] = element;
                }}
              />
            ) : null}
          </Fragment>
        );
      })}
    </div>
  );
}
