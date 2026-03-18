import { useEffect, useMemo, useState } from "react";

import hotelBrand from "../../../../config/index.js";

import HotelRoomCard from "../../../../shared/ui/HotelRoomCard/HotelRoomCard.jsx";
import RoomProfileFilterBar from "./RoomProfileFilterBar.jsx";

import styles from "./RoomCardsGrid.module.css";

export default function RoomCardsGrid() {
  const content =
    hotelBrand?.pages?.accommodation?.sections?.accommodations ?? null;

  if (!content) return null;

  const filterCfg = content.roomProfilesFilter ?? null;
  const cards = Array.isArray(content.roomCards) ? content.roomCards : [];

  const defaultActive = filterCfg?.options?.[0]?.id ?? "all";
  const [active, setActive] = useState(defaultActive);
  const [openRoomId, setOpenRoomId] = useState(null);

  const visibleCards = useMemo(() => {
    if (!cards.length) return [];
    if (active === "all") return cards;

    return cards.filter((card) => (card.profiles ?? []).includes(active));
  }, [cards, active]);

  useEffect(() => {
    const stillVisible = visibleCards.some((card) => card.id === openRoomId);

    if (!stillVisible) {
      setOpenRoomId(null);
    }
  }, [visibleCards, openRoomId]);

  function handleToggle(roomId) {
    setOpenRoomId((prev) => (prev === roomId ? null : roomId));
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
          const open = openRoomId === room.id;

          return (
            <div key={room.id} className={styles.cardCell}>
              <HotelRoomCard
                title={room.title}
                description={room.description}
                features={room.features}
                imageSrc={room.imageSrc}
                imageAlt={room.imageAlt}
                badge={room.badge}
                detailsOpen={open}
                onToggle={() => handleToggle(room.id)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}