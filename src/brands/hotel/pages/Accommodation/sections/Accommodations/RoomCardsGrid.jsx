import { useState } from "react";

import accommodation from "../../../../config/pages/accommodation.js";
const accommodations = accommodation.sections.accommodations;
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

function normalizeRoomCards(roomCards) {
  if (!Array.isArray(roomCards)) {
    return [];
  }

  return roomCards.map((card, index) => ({
    ...card,
    _uiId: buildCardUiId(card, index),
  }));
}

function getVisibleCards(cards, activeFilter) {
  if (cards.length === 0) {
    return [];
  }

  if (activeFilter === "all") {
    return cards;
  }

  return cards.filter((card) =>
    Array.isArray(card.profiles) ? card.profiles.includes(activeFilter) : false,
  );
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
  const sectionContent = accommodations;

  const filterConfig = sectionContent?.roomProfilesFilter ?? null;
  const defaultActiveFilter = filterConfig?.options?.[0]?.id ?? "all";

  const [activeFilter, setActiveFilter] = useState(defaultActiveFilter);

  if (!sectionContent) {
    return null;
  }

  const uiText = sectionContent.roomCardsUi ?? {};
  const normalizedCards = normalizeRoomCards(sectionContent.roomCards);
  const visibleCards = getVisibleCards(normalizedCards, activeFilter);

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
        <div
          className={gridClassName}
          role="list"
          aria-label={roomListAriaLabel}
        >
          {visibleCards.map((room) => (
            <div key={room._uiId} className={styles.cardItem} role="listitem">
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
