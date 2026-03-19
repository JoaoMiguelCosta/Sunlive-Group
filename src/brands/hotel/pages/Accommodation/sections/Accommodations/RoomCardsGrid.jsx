import { useEffect, useMemo, useState } from "react";

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

export default function RoomCardsGrid() {
  const content =
    hotelBrand?.pages?.accommodation?.sections?.accommodations ?? null;

  if (!content) return null;

  const filterCfg = content.roomProfilesFilter ?? null;
  const rawCards = Array.isArray(content.roomCards) ? content.roomCards : [];

  const cards = useMemo(() => {
    return rawCards.map((card, index) => {
      const baseId =
        normalizeId(card?.id) ||
        normalizeId(card?.title) ||
        `room-${index + 1}`;

      return {
        ...card,
        _uiId: `${baseId}-${index}`,
      };
    });
  }, [rawCards]);

  const defaultActive = filterCfg?.options?.[0]?.id ?? "all";
  const [active, setActive] = useState(defaultActive);
  const [openRoomId, setOpenRoomId] = useState(null);

  const visibleCards = useMemo(() => {
    if (!cards.length) return [];
    if (active === "all") return cards;

    return cards.filter((card) => (card.profiles ?? []).includes(active));
  }, [cards, active]);

  useEffect(() => {
    const stillVisible = visibleCards.some((card) => card._uiId === openRoomId);

    if (!stillVisible) {
      setOpenRoomId(null);
    }
  }, [visibleCards, openRoomId]);

  function handleToggle(roomUiId) {
    setOpenRoomId((prev) => (prev === roomUiId ? null : roomUiId));
  }

  return (
    <div className={styles.wrap}>
      <RoomProfileFilterBar
        label={filterCfg?.label ?? "Filtrar por perfil"}
        options={filterCfg?.options ?? []}
        active={active}
        onChange={setActive}
      />

      <div className={styles.grid} aria-label="Lista de quartos">
        {visibleCards.map((room) => {
          const open = openRoomId === room._uiId;

          return (
            <div key={room._uiId} className={styles.cardCell}>
              <HotelRoomCard
                roomId={room._uiId}
                title={room.title}
                description={room.description}
                features={room.features}
                imageSrc={room.imageSrc}
                imageAlt={room.imageAlt}
                badge={room.badge}
                detailsOpen={open}
                onToggle={() => handleToggle(room._uiId)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
