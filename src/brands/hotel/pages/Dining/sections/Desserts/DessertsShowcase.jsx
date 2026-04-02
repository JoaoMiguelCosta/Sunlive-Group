import { useEffect, useMemo, useState } from "react";

import hotelBrand from "../../../../config/index.js";
import HotelSelectableMediaGrid from "../../../../shared/ui/HotelSelectableMediaGrid/HotelSelectableMediaGrid.jsx";

import styles from "./DessertsShowcase.module.css";

function normalizeItems(items = []) {
  if (!Array.isArray(items)) return [];
  return items.filter(Boolean);
}

function findFirstMatchingItem(items, categoryId) {
  if (!items.length) return null;
  if (!categoryId || categoryId === "all") return items[0] ?? null;
  return items.find((item) => item.category === categoryId) ?? items[0] ?? null;
}

function getSpotlightBadgeLabel(item) {
  return item?.category === "fruit" ? "Fruta fresca" : "Seleção doce";
}

function getThumbnailCategoryLabel(item) {
  return item?.category === "fruit" ? "Fruta" : "Doce";
}

export default function DessertsShowcase() {
  const section = hotelBrand?.pages?.dining?.sections?.desserts ?? null;
  if (!section) return null;

  const categories = Array.isArray(section?.categories)
    ? section.categories
    : [];
  const items = normalizeItems(section?.items);
  const showcase = section?.showcase ?? null;

  const ariaLabel = showcase?.ariaLabel ?? "Galeria de sobremesas";
  const filterLabel = showcase?.filterLabel ?? "Filtrar sobremesas";
  const thumbnailsLabel =
    showcase?.thumbnailsLabel ?? "Selecionar sobremesa em destaque";

  const defaultCategory =
    categories.find((category) => category.id === showcase?.defaultCategory)
      ?.id ??
    categories[0]?.id ??
    "all";

  const [activeCategory, setActiveCategory] = useState(defaultCategory);
  const [activeItemId, setActiveItemId] = useState(
    showcase?.defaultItemId ?? items[0]?.id ?? null,
  );

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return items;
    return items.filter((item) => item.category === activeCategory);
  }, [activeCategory, items]);

  useEffect(() => {
    if (!filteredItems.length) {
      setActiveItemId(null);
      return;
    }

    const stillExists = filteredItems.some((item) => item.id === activeItemId);
    if (stillExists) return;

    const fallbackItem = findFirstMatchingItem(filteredItems, activeCategory);
    setActiveItemId(fallbackItem?.id ?? null);
  }, [activeCategory, activeItemId, filteredItems]);

  const activeItem =
    filteredItems.find((item) => item.id === activeItemId) ??
    findFirstMatchingItem(filteredItems, activeCategory);

  if (!items.length) return null;

  return (
    <div className={styles.block} aria-label={ariaLabel}>
      {categories.length ? (
        <div
          className={styles.filterBar}
          role="tablist"
          aria-label={filterLabel}
        >
          {categories.map((category) => {
            const isActive = category.id === activeCategory;

            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`${styles.filterButton} ${
                  isActive ? styles.filterButtonActive : ""
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            );
          })}
        </div>
      ) : null}

      <div className={styles.layout}>
        <article className={styles.spotlight}>
          {activeItem ? (
            <>
              <div className={styles.spotlightMedia}>
                <img
                  src={activeItem.src}
                  alt={activeItem.alt}
                  className={styles.spotlightImage}
                  style={{
                    objectPosition: activeItem.imagePosition ?? "center center",
                  }}
                  loading="eager"
                />
                <div className={styles.spotlightOverlay} aria-hidden="true" />
              </div>

              <div className={styles.spotlightContent}>
                <span className={styles.spotlightBadge}>
                  {getSpotlightBadgeLabel(activeItem)}
                </span>

                <h3 className={styles.spotlightTitle}>{activeItem.title}</h3>

                {activeItem.subtitle ? (
                  <p className={styles.spotlightText}>{activeItem.subtitle}</p>
                ) : null}
              </div>
            </>
          ) : null}
        </article>

        <HotelSelectableMediaGrid
          items={filteredItems}
          activeItemId={activeItem?.id ?? null}
          onSelect={setActiveItemId}
          ariaLabel={thumbnailsLabel}
          categoryLabelResolver={getThumbnailCategoryLabel}
        />
      </div>
    </div>
  );
}
