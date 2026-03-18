import { useMemo } from "react";

import hotelBrand, { resolveHotelIcon } from "../../../../config/index.js";

import HotelComplementaryServiceCard from "../../../../shared/ui/HotelComplementaryServiceCard/HotelComplementaryServiceCard.jsx";

import styles from "./ComplementaryServicesGrid.module.css";

export default function ComplementaryServicesGrid() {
  const services =
    hotelBrand?.pages?.facilities?.sections?.complementaryServices?.services ??
    null;

  const items = useMemo(() => {
    const sourceItems = Array.isArray(services?.items) ? services.items : [];

    return sourceItems.map((item) => {
      const iconKey = item?.icon?.key ?? null;
      const Icon = iconKey
        ? resolveHotelIcon(hotelBrand?.icons, iconKey)
        : null;

      return {
        ...item,
        icon: {
          ...item.icon,
          component: Icon ? <Icon /> : null,
        },
      };
    });
  }, [services]);

  if (!items.length) return null;

  return (
    <div id={services?.id} className={styles.block}>
      <div className={styles.grid}>
        {items.map((item) => (
          <HotelComplementaryServiceCard
            key={item.key}
            title={item.title}
            description={item.description}
            badge={item.badge}
            icon={item.icon?.component ?? null}
            iconLabel={item.icon?.ariaLabel ?? item.title}
          />
        ))}
      </div>
    </div>
  );
}