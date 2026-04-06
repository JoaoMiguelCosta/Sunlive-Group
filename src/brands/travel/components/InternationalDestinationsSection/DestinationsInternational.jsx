import styles from "./DestinationsInternational.module.css";

import DestinationCard from "../../shared/ui/DestinationCard/index.jsx";
import travelBrand from "../../config/index.js";

export default function DestinationsInternational() {
  const section = travelBrand?.sections?.internationalDestinations ?? null;
  const grid = section?.grid ?? {};
  const list = Array.isArray(section?.destinations) ? section.destinations : [];

  if (list.length === 0) return null;

  const validDestinations = list.filter(
    (destination) => destination?.picture?.src && destination?.city,
  );

  if (validDestinations.length === 0) return null;

  return (
    <div className={styles.container}>
      <div className={styles.browserShell}>
        <div className={styles.browserHeader}>
          {grid?.kicker ? <p className={styles.kicker}>{grid.kicker}</p> : null}

          <div className={styles.browserCopy}>
            {grid?.title ? (
              <h3 className={styles.title}>{grid.title}</h3>
            ) : null}

            {grid?.description ? (
              <p className={styles.description}>{grid.description}</p>
            ) : null}
          </div>

          <div className={styles.resultsPill} aria-hidden="true">
            <strong>{validDestinations.length}</strong>
            <span> destinos disponíveis</span>
          </div>
        </div>

        <div
          className={styles.grid}
          role="list"
          aria-label={grid?.ariaLabel ?? "Lista de destinos internacionais"}
        >
          {validDestinations.map((destination, index) => {
            const FlagIcon = destination?.flagKey
              ? travelBrand?.flags?.[destination.flagKey]
              : null;

            return (
              <div
                role="listitem"
                key={destination?.key ?? `${destination.city}-${index}`}
                className={styles.gridItem}
              >
                <DestinationCard
                  destination={destination}
                  variant="international"
                  flagIcon={FlagIcon}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
