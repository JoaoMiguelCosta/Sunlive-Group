import { useEffect, useMemo, useState } from "react";

import hotelBrand from "../../../../config/index.js";
import HotelInfoListCard from "../../../../shared/ui/HotelInfoListCard/HotelInfoListCard.jsx";
import CTAButton from "../../../../../../shared/ui/CTAButton/CTAButton.jsx";

import styles from "./CateringInfoLists.module.css";

export default function CateringInfoLists() {
  const section = hotelBrand?.pages?.dining?.sections?.catering ?? null;
  const infoLists = section?.infoLists ?? null;

  const items = useMemo(
    () =>
      Array.isArray(infoLists?.items) ? infoLists.items.filter(Boolean) : [],
    [infoLists?.items],
  );

  const cta = infoLists?.cta ?? null;
  const ariaLabel = infoLists?.ariaLabel ?? "Informação do serviço de catering";

  const [activeId, setActiveId] = useState(items[0]?.id ?? null);

  useEffect(() => {
    if (!items.length) {
      setActiveId(null);
      return;
    }

    const activeStillExists = items.some((item) => item.id === activeId);

    if (!activeStillExists) {
      setActiveId(items[0]?.id ?? null);
    }
  }, [activeId, items]);

  const activeItem =
    items.find((item) => item.id === activeId) ?? items[0] ?? null;

  if (!items.length && !cta?.label) return null;

  return (
    <div className={styles.block} aria-label={ariaLabel}>
      {items.length ? (
        <div className={styles.contentWrap}>
          <div className={styles.tabs} role="tablist" aria-label={ariaLabel}>
            {items.map((item) => {
              const isActive = item.id === activeItem?.id;
              const tabId = `${item.id}-tab`;
              const panelId = `${item.id}-panel`;

              return (
                <button
                  key={item.id}
                  id={tabId}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={panelId}
                  className={[
                    styles.tabButton,
                    isActive ? styles.tabButtonActive : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() => setActiveId(item.id)}
                >
                  {item.tabLabel ?? item.title}
                </button>
              );
            })}
          </div>

          {activeItem ? (
            <div
              id={`${activeItem.id}-panel`}
              role="tabpanel"
              aria-labelledby={`${activeItem.id}-tab`}
            >
              <HotelInfoListCard
                title={activeItem.title}
                description={activeItem.description}
                items={activeItem.entries}
                className={styles.infoCard}
              />
            </div>
          ) : null}
        </div>
      ) : null}

      {cta?.label ? (
        <div className={styles.ctaWrap}>
          <CTAButton
            href={cta.href}
            label={cta.label}
            ariaLabel={cta.ariaLabel ?? cta.label}
            icon="phone"
            blink={false}
            compact={false}
            variant="hotel"
            tone="strong"
            className={styles.ctaButton}
          />
        </div>
      ) : null}
    </div>
  );
}
