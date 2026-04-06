import styles from "./TravelPartnersCardsGrid.module.css";
import DestinationCard from "../../shared/ui/DestinationCard/index.jsx";
import travelBrand from "../../config/index.js";

function normalizePartners(partners = []) {
  if (!Array.isArray(partners)) return [];

  return partners
    .filter((partner) => partner?.picture?.src && partner?.city)
    .map((partner, index) => ({
      ...partner,
      key: partner?.key || `partner-${index}`,
    }));
}

export default function TravelPartnersCardsGrid() {
  const section = travelBrand?.sections?.travelPartners ?? null;
  if (!section) return null;

  const browser = section?.browser ?? {};
  const partners = normalizePartners(section?.partners ?? []);
  if (partners.length === 0) return null;

  const ariaLabel = browser?.ariaLabel ?? "Explorar parceiros de viagem";
  const kicker = browser?.kicker ?? "Rede de parceiros";
  const title =
    browser?.title ??
    "Marcas selecionadas para ampliar a proposta de valor de cada programa";
  const description =
    browser?.description ??
    "Parceiros alinhados com a visão Sunlive Travel, escolhidos pela credibilidade, complementaridade da oferta e capacidade de acrescentar valor real à experiência final.";
  const resultsLabel = browser?.resultsLabel ?? "parceiros disponíveis";

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
              <strong>{partners.length}</strong>
              <span>{resultsLabel}</span>
            </p>
          </div>
        </div>

        <div className={styles.grid} role="list" aria-label={ariaLabel}>
          {partners.map((partner) => (
            <div key={partner.key} role="listitem" className={styles.item}>
              <DestinationCard destination={partner} variant="partner" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
