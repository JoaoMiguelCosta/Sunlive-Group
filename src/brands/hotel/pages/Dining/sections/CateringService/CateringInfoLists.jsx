import hotelBrand from "../../../../config/index.js";
import HotelInfoListCard from "../../../../shared/ui/HotelInfoListCard/HotelInfoListCard.jsx";
import CTAButton from "../../../../../../shared/ui/CTAButton/CTAButton.jsx";

import styles from "./CateringInfoLists.module.css";

export default function CateringInfoLists() {
  const section = hotelBrand?.pages?.dining?.sections?.catering ?? null;
  const infoLists = section?.infoLists ?? null;

  const items = infoLists?.items ?? [];
  const cta = infoLists?.cta ?? null;

  if (!items.length && !cta?.label) return null;

  return (
    <div className={styles.block}>
      {items.length ? (
        <div className={styles.grid}>
          {items.map((item) => (
            <HotelInfoListCard
              key={item.id}
              title={item.title}
              items={item.entries}
            />
          ))}
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