import styles from "./AmenitiesPills.module.css";

import HotelIconPill from "../../../../shared/ui/HotelIconPill/HotelIconPill.jsx";
import hotelBrand from "../../../../config/registry/index.js";

export default function AmenitiesPills() {
  const content = hotelBrand?.pages?.accommodation?.sections?.amenities ?? null;
  const items = content?.items ?? [];

  if (!items.length) return null;

  return (
    <div className={styles.wrap} aria-label="Amenities list">
      <div className={styles.grid}>
        {items.map((it) => {
          // ✅ preparado: quando tiveres iconKey, mapeias para ICONS[iconKey]
          const Icon = null;

          return (
            <HotelIconPill
              key={it.id}
              label={it.label}
              Icon={Icon}
              size="md"
              className={styles.pill}
            />
          );
        })}
      </div>
    </div>
  );
}
