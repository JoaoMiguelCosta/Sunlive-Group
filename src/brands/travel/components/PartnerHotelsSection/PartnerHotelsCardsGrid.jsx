// src/brands/travel/components/PartnerHotelsSection/PartnerHotelsCardsGrid.jsx
import styles from "./PartnerHotelsCardsGrid.module.css";
import DestinationCard from "../../../../shared/components/DestinationCard";
import travelBrand from "../../ConfigTravel.jsx";

/* Imagens locais (assets) */
import curiaImg from "../../assets/PartnerHotels/curia.png";
import pateiraImg from "../../assets/PartnerHotels/pateira.png";
import estanciaImg from "../../assets/PartnerHotels/estancia.png";
import goldImg from "../../assets/PartnerHotels/gold.png";
import grandImg from "../../assets/PartnerHotels/grand.png";

/* Mapa chave→imagem */
const IMAGE_BY_KEY = {
  curia: curiaImg,
  pateira: pateiraImg,
  estancia: estanciaImg,
  gold: goldImg,
  grand: grandImg,
};

export default function PartnerHotelsCardsGrid() {
  const hotels = travelBrand?.sections?.partnerHotels?.hotels || [];
  if (!hotels.length) return null;

  return (
    <section
      className={styles.container}
      aria-label="Hotéis Parceiros Sunlive Travel"
    >
      <div className={styles.grid} role="list">
        {hotels.map((h) => {
          const imageSrc = h.picture?.src || IMAGE_BY_KEY[h.key];
          const imageAlt = h.picture?.alt || h.name || "Hotel parceiro";
          if (!imageSrc) return null;

          return (
            <div role="listitem" key={h.key} className={styles.item}>
              <DestinationCard
                variant="hotel"
                city={h.name}
                badge={h.badge}
                imageSrc={imageSrc}
                imageAlt={imageAlt}
                summary={h.summary}
                cta={
                  h.href
                    ? { label: "Saiba Mais", href: h.href, external: true }
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
