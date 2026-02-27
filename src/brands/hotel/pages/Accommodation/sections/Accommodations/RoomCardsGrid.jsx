import { useMemo, useState } from "react";

import hotelBrand from "../../../../configHotel.jsx";

import HotelRoomCard from "../../../../shared/ui/HotelRoomCard/HotelRoomCard.jsx";
import RoomProfileFilterBar from "./RoomProfileFilterBar.jsx";

import styles from "./RoomCardsGrid.module.css";

export default function RoomCardsGrid() {
  const content = hotelBrand?.pages?.estadia?.sections?.accommodations ?? null;
  const filterCfg = content?.roomProfilesFilter ?? null;
  const cards = content?.roomCards ?? [];

  const [active, setActive] = useState("all");

  const visibleCards = useMemo(() => {
    if (!cards?.length) return [];
    if (active === "all") return cards;
    return cards.filter((c) => (c.profiles ?? []).includes(active));
  }, [cards, active]);

  if (!content) return null;

  return (
    <section className={styles.wrap} aria-label="Rooms list">
      <RoomProfileFilterBar
        label={filterCfg?.label ?? "Filtrar por perfil"}
        options={filterCfg?.options ?? []}
        active={active}
        onChange={setActive}
      />

      <div className={styles.grid}>
        {visibleCards.map((room) => (
          <HotelRoomCard
            key={room.id}
            title={room.title}
            description={room.description}
            features={room.features}
            imageSrc={room.imageSrc}
            imageAlt={room.imageAlt}
          />
        ))}
      </div>
    </section>
  );
}
