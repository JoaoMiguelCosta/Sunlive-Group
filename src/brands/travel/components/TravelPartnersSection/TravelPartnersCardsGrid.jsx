// src/brands/travel/components/TravelPartnersSection/TravelPartnersCardsGrid.jsx
import styles from "./TravelPartnersCardsGrid.module.css";
import DestinationCard from "../../../../shared/components/DestinationCard";
import travelBrand from "../../ConfigTravel.jsx";

/* Imagens locais (assets) */
import portugalissimoImg from "../../assets/TravelPartners/portugalissimo.png";
import vagoImg from "../../assets/TravelPartners/vago.png";

/* Mapa chave→imagem (fallback) */
const IMAGE_BY_KEY = {
  portugalissimo: portugalissimoImg,
  vago: vagoImg,
};

export default function TravelPartnersCardsGrid() {
  const partners = travelBrand?.sections?.travelPartners?.partners || [];
  if (!partners.length) return null;

  return (
    <section
      className={styles.container}
      aria-label="Parceiros de Viagem Sunlive Travel"
    >
      <div className={styles.grid} role="list">
        {partners.map((p) => {
          const imageSrc = p.picture?.src || IMAGE_BY_KEY[p.key];
          const imageAlt = p.picture?.alt || p.name || "Parceiro";
          if (!imageSrc) return null;

          return (
            <div role="listitem" key={p.key} className={styles.item}>
              <DestinationCard
                variant="partner"
                city={p.name}
                badge={p.badge}
                imageSrc={imageSrc}
                imageAlt={imageAlt}
                summary={p.summary}
                cta={
                  p.href
                    ? { label: "Saiba Mais", href: p.href, external: true }
                    : undefined
                }
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
