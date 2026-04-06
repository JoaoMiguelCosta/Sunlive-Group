import styles from "./DestinationsInternational.module.css";
import DestinationCard from "../../shared/ui/DestinationCard/index.jsx";
import travelBrand from "../../config/index.js";

export default function DestinationsInternational() {
  const list =
    travelBrand?.sections?.internationalDestinations?.destinations ?? [];

  if (!Array.isArray(list) || list.length === 0) return null;

  const validDestinations = list.filter(
    (destination) => destination?.picture?.src && destination?.city,
  );

  if (validDestinations.length === 0) return null;

  return (
    <div className={styles.container}>
      <div
        className={styles.grid}
        role="list"
        aria-label="Destinos internacionais"
      >
        {validDestinations.map((destination, index) => {
          const imageSrc = destination.picture.src;
          const imageAlt =
            destination?.picture?.alt ??
            destination?.city ??
            "Destino internacional";

          const FlagIcon = destination?.flagKey
            ? travelBrand?.flags?.[destination.flagKey]
            : undefined;

          return (
            <div
              role="listitem"
              key={destination?.key ?? `${destination.city}-${index}`}
              className={styles.gridItem}
            >
              <DestinationCard
                variant="international"
                city={destination.city}
                badge={destination.badge}
                imageSrc={imageSrc}
                imageAlt={imageAlt}
                summary={destination.summary}
                flagIcon={FlagIcon}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
