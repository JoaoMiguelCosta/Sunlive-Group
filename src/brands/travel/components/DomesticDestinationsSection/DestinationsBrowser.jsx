// src/brands/travel/components/DomesticDestinationsSection/DestinationsBrowser.jsx
import styles from "./DestinationsBrowser.module.css";
import DestinationCard from "../../../../shared/components/DestinationCard";
import travelBrand from "../../ConfigTravel.jsx";

import { useTabsFilter } from "../../../../shared/hooks/useTabsFilter.js";
import { normalizeDestinations } from "../../../../shared/utils/normalizeDestinations.js";

import aveiroImg from "../../assets/DomesticDestinations/aveiro.png";
import portoImg from "../../assets/DomesticDestinations/porto.png";
import lisboaImg from "../../assets/DomesticDestinations/lisboa.png";
import coimbraImg from "../../assets/DomesticDestinations/coimbra.png";
import sintraImg from "../../assets/DomesticDestinations/sintra.png";
import obidosImg from "../../assets/DomesticDestinations/obidos.png";

const IMAGE_BY_KEY = {
  aveiro: aveiroImg,
  porto: portoImg,
  lisboa: lisboaImg,
  coimbra: coimbraImg,
  sintra: sintraImg,
  obidos: obidosImg,
};

// Grupos fixos
const MAIN_KEYS = new Set(["aveiro", "porto", "lisboa"]);
const OTHER_KEYS = new Set(["coimbra", "sintra", "obidos"]);
const CATS = [
  { key: "principais", label: "Principais", predicate: (d) => MAIN_KEYS.has(d.key) },
  { key: "outros", label: "Outros", predicate: (d) => OTHER_KEYS.has(d.key) },
  { key: "todos", label: "Todos", predicate: () => true },
];

export default function DestinationsBrowser() {
  const raw = travelBrand?.sections?.domesticDestinations?.destinations || [];
  const data = normalizeDestinations(raw, IMAGE_BY_KEY);

  const { tab, setTab, filtered } = useTabsFilter(data, CATS, "principais");
  if (!data.length) return null;

  return (
    <section className={styles.wrapper} aria-label="Explorar destinos">
      {/* Pills: Principais | Outros | Todos */}
      <div className={styles.controls}>
        <div className={styles.filters} role="tablist" aria-label="Filtrar por grupo">
          {CATS.map((t) => (
            <button
              key={t.key}
              role="tab"
              aria-selected={tab === t.key}
              className={[styles.pill, tab === t.key ? styles.pillActive : ""]
                .filter(Boolean)
                .join(" ")}
              onClick={() => setTab(t.key)}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grelha */}
      <div className={styles.grid} role="list">
        {filtered.map((d) => (
          <div role="listitem" key={d.key} className={styles.item}>
            <DestinationCard
              variant="domestic"          
              city={d.city}
              badge={d.badge}
              imageSrc={d.imageSrc}
              imageAlt={d.imageAlt}
              summary={d.summary}
              duration={d.duration}
              highlights={d.highlights}
              includes={d.includes}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
