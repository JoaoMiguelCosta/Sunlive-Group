// src/brands/travel/components/InternationalDestinationsSection/DestinationsInternational.jsx
import styles from "./DestinationsInternational.module.css";
import DestinationCard from "../../../../shared/components/DestinationCard";
import travelBrand from "../../ConfigTravel.jsx";
// ❌ remove: import { FLAGS } from "../../../../shared/config/BrandDefault.jsx";

export default function DestinationsInternational() {
  const list =
    travelBrand?.sections?.internationalDestinations?.destinations || [];
  if (!list.length) return null;

  return (
    <div className={styles.container}>
      <div
        className={styles.grid}
        role="list"
        aria-label="Destinos internacionais"
      >
        {list.map((d) => {
          const imageSrc = d.picture?.src;
          const imageAlt = d.picture?.alt || d.city || "Destino internacional";
          if (!imageSrc) return null;

          // 👉 Bandeiras agora via ConfigTravel
          const FlagIcon = d.flagKey
            ? travelBrand.flags?.[d.flagKey]
            : undefined;

          return (
            <div role="listitem" key={d.key} className={styles.gridItem}>
              <DestinationCard
                variant="international"
                city={d.city}
                badge={d.badge}
                imageSrc={imageSrc}
                imageAlt={imageAlt}
                summary={d.summary}
                flagIcon={FlagIcon}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
