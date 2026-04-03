import { useMemo, useState } from "react";

import hotelBrand from "../../../../config/index.js";
import HotelRoomCard from "../../../../shared/ui/HotelRoomCard/HotelRoomCard.jsx";
import RoomProfileFilterBar from "./RoomProfileFilterBar.jsx";

import styles from "./RoomCardsGrid.module.css";

function normalizeId(value) {
  return String(value ?? "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function buildCardUiId(card, index) {
  const baseId =
    normalizeId(card?.id) || normalizeId(card?.title) || `room-${index + 1}`;

  return `${baseId}-${index}`;
}

function getVisibleCards(cards, activeFilter) {
  if (!cards.length) return [];
  if (activeFilter === "all") return cards;

  return cards.filter((card) => (card.profiles ?? []).includes(activeFilter));
}

function getGridCountClass(length) {
  const gridCountMap = {
    1: styles.count1,
    2: styles.count2,
    4: styles.count4,
    5: styles.count5,
  };

  return gridCountMap[length] ?? "";
}

export default function RoomCardsGrid() {
  const sectionContent =
    hotelBrand?.pages?.accommodation?.sections?.accommodations ?? null;

  if (!sectionContent) return null;

  const filterConfig = sectionContent.roomProfilesFilter ?? null;
  const uiText = sectionContent.roomCardsUi ?? {};
  const roomCards = Array.isArray(sectionContent.roomCards)
    ? sectionContent.roomCards
    : [];

  const normalizedCards = useMemo(() => {
    return roomCards.map((card, index) => ({
      ...card,
      _uiId: buildCardUiId(card, index),
    }));
  }, [roomCards]);

  const defaultActiveFilter = filterConfig?.options?.[0]?.id ?? "all";
  const [activeFilter, setActiveFilter] = useState(defaultActiveFilter);

  const visibleCards = useMemo(() => {
    return getVisibleCards(normalizedCards, activeFilter);
  }, [normalizedCards, activeFilter]);

  const gridClassName = [styles.grid, getGridCountClass(visibleCards.length)]
    .filter(Boolean)
    .join(" ");

  const roomListAriaLabel =
    uiText.roomListAriaLabel ?? "Lista de quartos e suítes";

  const imageComingSoonLabel =
    uiText.imageComingSoonLabel ?? "Imagem disponível em breve";

  const emptyStateTitle =
    uiText.emptyStateTitle ?? "Nenhuma tipologia encontrada";

  const emptyStateDescription =
    uiText.emptyStateDescription ??
    "Tente selecionar outro tipo de quarto para ver mais opções disponíveis.";

  return (
    <div className={styles.wrap}>
      <RoomProfileFilterBar
        label={filterConfig?.label ?? "Filtrar por quarto"}
        ariaLabel={filterConfig?.ariaLabel ?? "Filtro por tipologia de quarto"}
        options={filterConfig?.options ?? []}
        active={activeFilter}
        onChange={setActiveFilter}
      />

      {visibleCards.length > 0 ? (
        <div className={gridClassName} aria-label={roomListAriaLabel}>
          {visibleCards.map((room) => (
            <div key={room._uiId} className={styles.cardItem}>
              <HotelRoomCard
                id={room._uiId}
                badge={room.badge}
                title={room.title}
                description={room.description}
                imageSrc={room.imageSrc}
                imageAlt={room.imageAlt}
                imageComingSoonLabel={imageComingSoonLabel}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.emptyState} role="status" aria-live="polite">
          <h3 className={styles.emptyTitle}>{emptyStateTitle}</h3>
          <p className={styles.emptyText}>{emptyStateDescription}</p>
        </div>
      )}
    </div>
  );
}
