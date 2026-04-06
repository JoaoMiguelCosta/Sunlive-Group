import styles from "./TravelPartnersCardsGrid.module.css";
import DestinationCard from "../../shared/ui/DestinationCard/index.jsx";
import travelBrand from "../../config/index.js";

export default function TravelPartnersCardsGrid() {
  const partners = travelBrand?.sections?.travelPartners?.partners ?? [];
  if (!Array.isArray(partners) || partners.length === 0) return null;

  const validPartners = partners.filter((partner) => partner?.picture?.src);

  if (validPartners.length === 0) return null;

  return (
    <div
      className={styles.container}
      aria-label="Parceiros de Viagem Sunlive Travel"
    >
      <div className={styles.grid} role="list">
        {validPartners.map((partner, index) => {
          const imageSrc = partner.picture.src;
          const imageAlt = partner?.picture?.alt ?? partner?.name ?? "Parceiro";
          const itemKey =
            partner?.key ?? `${partner?.name ?? "partner"}-${index}`;

          return (
            <div role="listitem" key={itemKey} className={styles.item}>
              <DestinationCard
                variant="partner"
                city={partner?.name}
                badge={partner?.badge}
                imageSrc={imageSrc}
                imageAlt={imageAlt}
                summary={partner?.summary}
                cta={
                  partner?.href
                    ? {
                        label: "Saiba Mais",
                        href: partner.href,
                        external: true,
                      }
                    : undefined
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
