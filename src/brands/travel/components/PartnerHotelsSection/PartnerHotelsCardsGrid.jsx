import styles from "./PartnerHotelsCardsGrid.module.css";
import DestinationCard from "../../shared/ui/DestinationCard/index.jsx";
import travelBrand from "../../config/index.js";

function normalizeHotels(hotels = []) {
  if (!Array.isArray(hotels)) return [];

  return hotels
    .filter((hotel) => hotel?.picture?.src && hotel?.city)
    .map((hotel, index) => ({
      ...hotel,
      key: hotel?.key || `hotel-${index}`,
    }));
}

export default function PartnerHotelsCardsGrid() {
  const section = travelBrand?.sections?.partnerHotels ?? null;
  if (!section) return null;

  const browser = section?.browser ?? {};
  const hotels = normalizeHotels(section?.hotels ?? []);

  if (hotels.length === 0) return null;

  const ariaLabel = browser?.ariaLabel ?? "Explorar hotéis parceiros";
  const kicker = browser?.kicker ?? "Seleção de alojamento";
  const title =
    browser?.title ??
    "Unidades escolhidas para estadias com conforto, contexto e boa execução";
  const description =
    browser?.description ??
    "Uma seleção pensada para apoiar programas turísticos, grupos e operações com necessidade de alojamento fiável, bem localizado e alinhado com o nível de serviço pretendido.";
  const resultsLabel = browser?.resultsLabel ?? "hotéis disponíveis";

  return (
    <div className={styles.wrapper} role="region" aria-label={ariaLabel}>
      <div className={styles.browserShell}>
        <div className={styles.topbar}>
          <div className={styles.topbarInner}>
            <div className={styles.topbarCopy}>
              <p className={styles.kicker}>{kicker}</p>
              <p className={styles.topbarTitle}>{title}</p>

              {description ? (
                <p className={styles.topbarDescription}>{description}</p>
              ) : null}
            </div>

            <p className={styles.resultsBadge}>
              <strong>{hotels.length}</strong>
              <span>{resultsLabel}</span>
            </p>
          </div>
        </div>

        <div className={styles.grid} role="list" aria-label={ariaLabel}>
          {hotels.map((hotel) => (
            <div key={hotel.key} role="listitem" className={styles.item}>
              <DestinationCard destination={hotel} variant="hotel" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
