import styles from "./AmenitiesPills.module.css";

import HotelIconPill from "../../../../shared/ui/HotelIconPill/HotelIconPill.jsx";
import hotelBrand from "../../../../config/index.js";

export default function AmenitiesPills() {
  const content = hotelBrand?.pages?.accommodation?.sections?.amenities ?? null;
  const items = Array.isArray(content?.items) ? content.items : [];

  if (!items.length) return null;

  return (
    <div className={styles.wrap}>
      <div className={styles.grid} aria-label="Lista de comodidades">
        {items.map((item) => (
          <div key={item.id} className={styles.item}>
            <HotelIconPill
              label={item.label}
              Icon={null}
              size="md"
              className={styles.pill}
              ariaLabel={item.label}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
