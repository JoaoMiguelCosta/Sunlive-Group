import { useMemo, useState } from "react";
import styles from "./AmenitiesPills.module.css";

import HotelIconPill from "../../../../shared/ui/HotelIconPill/HotelIconPill.jsx";
import hotelBrand, {
  ICONS,
  resolveHotelIcon,
} from "../../../../config/index.js";

export default function AmenitiesPills() {
  const content = hotelBrand?.pages?.accommodation?.sections?.amenities ?? null;
  const items = Array.isArray(content?.items) ? content.items : [];
  const ui = content?.ui ?? {};

  const defaultActiveId = ui.defaultActiveId ?? items[0]?.id ?? null;
  const [activeId, setActiveId] = useState(defaultActiveId);

  const activeItem = useMemo(() => {
    return items.find((item) => item.id === activeId) ?? items[0] ?? null;
  }, [activeId, items]);

  if (!items.length || !activeItem) return null;

  return (
    <div className={styles.wrap}>
      <div
        className={styles.grid}
        aria-label={ui.pillsAriaLabel ?? "Seleção de comodidades incluídas"}
      >
        {items.map((item) => {
          const Icon = resolveHotelIcon(ICONS, item.iconKey);
          const isActive = item.id === activeItem.id;

          return (
            <div key={item.id} className={styles.item}>
              <HotelIconPill
                as="button"
                type="button"
                label={item.label}
                Icon={Icon}
                size="md"
                active={isActive}
                className={[styles.pill, isActive ? styles.pillActive : ""]
                  .filter(Boolean)
                  .join(" ")}
                iconCircleClassName={
                  isActive ? styles.iconCircleActive : styles.iconCircle
                }
                iconClassName={styles.icon}
                ariaLabel={item.label}
                aria-pressed={isActive}
                onClick={() => setActiveId(item.id)}
              />
            </div>
          );
        })}
      </div>

      <div
        className={styles.spotlight}
        aria-label={
          ui.spotlightAriaLabel ?? "Detalhe da comodidade selecionada"
        }
      >
        <div className={styles.spotlightTop}>
          <span className={styles.spotlightTag}>
            {ui.includedLabel ?? "Incluído em todas as tipologias"}
          </span>

          <h3 className={styles.spotlightTitle}>{activeItem.title}</h3>
        </div>

        <p className={styles.spotlightDescription}>{activeItem.description}</p>

        <div className={styles.metaGrid}>
          <div className={styles.metaCard}>
            <span className={styles.metaLabel}>Benefício</span>
            <p className={styles.metaText}>{activeItem.benefit}</p>
          </div>

          <div className={styles.metaCard}>
            <span className={styles.metaLabel}>
              {ui.idealForLabel ?? "Mais útil para"}
            </span>
            <p className={styles.metaText}>{activeItem.idealFor}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
