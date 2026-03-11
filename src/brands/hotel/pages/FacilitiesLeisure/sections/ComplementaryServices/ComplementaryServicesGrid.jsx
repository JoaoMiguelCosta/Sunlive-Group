import hotelBrand from "../../../../config/index.js";

import HotelComplementaryServiceCard from "../../../../shared/ui/HotelComplementaryServiceCard/HotelComplementaryServiceCard.jsx";

import styles from "./ComplementaryServicesGrid.module.css";

export default function ComplementaryServicesGrid() {
  const services =
    hotelBrand?.pages?.facilities?.sections?.complementaryServices?.services ??
    null;

  const items = Array.isArray(services?.items) ? services.items : [];

  if (!items.length) return null;

  return (
    <div id={services.id} className={styles.block}>
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
