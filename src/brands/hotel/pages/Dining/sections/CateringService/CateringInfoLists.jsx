import hotelBrand from "../../../../config/index.js";
import HotelInfoListCard from "../../../../shared/ui/HotelInfoListCard/HotelInfoListCard.jsx";
// Ativar mais tarde quando ligares os ícones:
// import { resolveHotelIcon } from "../../../../config/index.js";

import styles from "./CateringInfoLists.module.css";

export default function CateringInfoLists() {
  const section = hotelBrand?.pages?.dining?.sections?.catering ?? null;
  const infoLists = section?.infoLists ?? null;

  const items = infoLists?.items ?? [];
  const cta = infoLists?.cta ?? null;

  if (!items.length && !cta?.label) return null;

  // const Icon = cta?.iconKey
  //   ? resolveHotelIcon(hotelBrand?.icons, cta.iconKey)
  //   : null;

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
          <a
            className={styles.ctaButton}
            href={cta.href ?? "#"}
            target={cta.external ? "_blank" : undefined}
            rel={cta.external ? "noreferrer noopener" : undefined}
            aria-label={cta.ariaLabel ?? cta.label}
          >
            <span className={styles.ctaIconSlot} aria-hidden="true">
              {/* {Icon ? <Icon className={styles.ctaIcon} /> : null} */}
            </span>

            <span>{cta.label}</span>
          </a>
        </div>
      ) : null}
    </div>
  );
}
