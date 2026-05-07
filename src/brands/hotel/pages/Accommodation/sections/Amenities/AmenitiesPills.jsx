import { useEffect, useMemo, useState } from "react";
import styles from "./AmenitiesPills.module.css";

import HotelIconPill from "../../../../shared/ui/HotelIconPill/HotelIconPill.jsx";
import hotelBrand, {
  ICONS,
  resolveHotelIcon,
} from "../../../../config/index.js";

function getValidItems(items) {
  return Array.isArray(items)
    ? items.filter((item) => item?.id && (item?.label || item?.title))
    : [];
}

function getInitialActiveId(items, preferredId) {
  if (!items.length) return null;

  const hasPreferredItem = items.some((item) => item.id === preferredId);
  return hasPreferredItem ? preferredId : items[0].id;
}

export default function AmenitiesPills() {
  const content = hotelBrand?.pages?.accommodation?.sections?.amenities ?? null;
  const ui = content?.ui ?? {};

  const items = useMemo(() => getValidItems(content?.items), [content?.items]);

  const initialActiveId = useMemo(
    () => getInitialActiveId(items, ui.defaultActiveId),
    [items, ui.defaultActiveId],
  );

  const [activeId, setActiveId] = useState(initialActiveId);

  useEffect(() => {
    setActiveId((currentId) => getInitialActiveId(items, currentId));
  }, [items]);

  const activeItem = useMemo(() => {
    return items.find((item) => item.id === activeId) ?? items[0] ?? null;
  }, [activeId, items]);

  if (!items.length || !activeItem) return null;

  const ActiveIcon = resolveHotelIcon(ICONS, activeItem.iconKey);

  return (
    <div className={styles.wrap}>
      <div
        className={styles.grid}
        role="group"
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
                onClick={() => {
                  if (!isActive) setActiveId(item.id);
                }}
              />
            </div>
          );
        })}
      </div>

      <article
        className={styles.spotlight}
        aria-label={
          ui.spotlightAriaLabel ?? "Detalhe da comodidade selecionada"
        }
      >
        <div className={styles.spotlightDecor} aria-hidden="true" />

        <div className={styles.spotlightHeader}>
          <div className={styles.spotlightIconCircle} aria-hidden="true">
            {ActiveIcon ? (
              <ActiveIcon className={styles.spotlightIcon} />
            ) : null}
          </div>

          <div className={styles.spotlightTop}>
            <span className={styles.spotlightTag}>
              {ui.includedLabel ?? "Incluído em todas as tipologias"}
            </span>

            <h3 className={styles.spotlightTitle}>{activeItem.title}</h3>
          </div>
        </div>

        <p className={styles.spotlightDescription}>{activeItem.description}</p>

        <div className={styles.metaGrid}>
          {activeItem.benefit ? (
            <div className={styles.metaCard}>
              <span className={styles.metaLabel}>Benefício</span>
              <p className={styles.metaText}>{activeItem.benefit}</p>
            </div>
          ) : null}

          {activeItem.idealFor ? (
            <div className={styles.metaCard}>
              <span className={styles.metaLabel}>
                {ui.idealForLabel ?? "Mais útil para"}
              </span>
              <p className={styles.metaText}>{activeItem.idealFor}</p>
            </div>
          ) : null}
        </div>
      </article>
    </div>
  );
}
