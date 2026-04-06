import styles from "./PartnerHotelsCardsGrid.module.css";
import DestinationCard from "../../shared/ui/DestinationCard/index.jsx";
import travelBrand from "../../config/index.js";

export default function PartnerHotelsCardsGrid() {
  const hotels = travelBrand?.sections?.partnerHotels?.hotels ?? [];
  if (!Array.isArray(hotels) || hotels.length === 0) return null;

  const validHotels = hotels.filter((hotel) => hotel?.picture?.src);

  if (validHotels.length === 0) return null;

  return (
    <div
      className={styles.container}
      aria-label="Hotéis Parceiros Sunlive Travel"
    >
      <div className={styles.grid} role="list">
        {validHotels.map((hotel, index) => {
          const imageSrc = hotel.picture.src;
          const imageAlt =
            hotel?.picture?.alt ?? hotel?.name ?? "Hotel parceiro";
          const itemKey = hotel?.key ?? `${hotel?.name ?? "hotel"}-${index}`;

          return (
            <div role="listitem" key={itemKey} className={styles.item}>
              <DestinationCard
                variant="hotel"
                city={hotel?.name}
                badge={hotel?.badge}
                imageSrc={imageSrc}
                imageAlt={imageAlt}
                summary={hotel?.summary}
                cta={
                  hotel?.href
                    ? {
                        label: "Saiba Mais",
                        href: hotel.href,
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
