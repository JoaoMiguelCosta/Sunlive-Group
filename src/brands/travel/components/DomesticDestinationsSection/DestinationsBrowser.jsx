import styles from "./DestinationsBrowser.module.css";
import DestinationCard from "../../shared/ui/DestinationCard/index.jsx";
import travelBrand from "../../config/index.js";

import { useTabsFilter } from "../../shared/hooks/useTabsFilter.js";
import { normalizeDestinations } from "../../../../shared/utils/normalizeDestinations.js";

const MAIN_KEYS = new Set(["aveiro", "porto", "lisboa"]);
const OTHER_KEYS = new Set(["coimbra", "sintra", "obidos"]);

const CATEGORIES = [
  {
    key: "principais",
    label: "Principais",
    predicate: (destination) => MAIN_KEYS.has(destination.key),
  },
  {
    key: "outros",
    label: "Outros",
    predicate: (destination) => OTHER_KEYS.has(destination.key),
  },
  {
    key: "todos",
    label: "Todos",
    predicate: () => true,
  },
];

export default function DestinationsBrowser() {
  const rawDestinations =
    travelBrand?.sections?.domesticDestinations?.destinations ?? [];

  const data = normalizeDestinations(rawDestinations);
  const { tab, setTab, filtered } = useTabsFilter(
    data,
    CATEGORIES,
    "principais",
  );

  if (!Array.isArray(data) || data.length === 0) return null;

  return (
    <section className={styles.wrapper} aria-label="Explorar destinos">
      <div className={styles.controls}>
        <div
          className={styles.filters}
          role="tablist"
          aria-label="Filtrar por grupo"
        >
          {CATEGORIES.map((category) => {
            const isActive = tab === category.key;

            return (
              <button
                key={category.key}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={[styles.pill, isActive ? styles.pillActive : ""]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => setTab(category.key)}
              >
                {category.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className={styles.grid} role="list">
        {filtered.map((destination, index) => (
          <div
            role="listitem"
            key={destination.key || `${destination.city}-${index}`}
            className={styles.item}
          >
            <DestinationCard
              variant="domestic"
              city={destination.city}
              badge={destination.badge}
              imageSrc={destination.imageSrc}
              imageAlt={destination.imageAlt}
              summary={destination.summary}
              duration={destination.duration}
              highlights={destination.highlights}
              includes={destination.includes}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
