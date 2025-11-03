import styles from "./DestinationsInternational.module.css";
import DestinationCard from "../../../../shared/components/DestinationCard";
import travelBrand from "../../ConfigTravel.jsx";
import { FLAGS } from "../../../../shared/config/BrandDefault.jsx";

/* Imagens */
import maltaImg from "../../assets/InternationalDestinations/malta.png";
import qatarImg from "../../assets/InternationalDestinations/catar.png";
import saudiImg from "../../assets/InternationalDestinations/arabia.png";
import kuwaitImg from "../../assets/InternationalDestinations/kuwait.png";
import brazilImg from "../../assets/InternationalDestinations/brasil.png";

const IMAGE_BY_KEY = {
  malta: maltaImg,
  qatar: qatarImg,
  "saudi-arabia": saudiImg,
  kuwait: kuwaitImg,
  brazil: brazilImg,
};

/* Bandeiras via FLAGS (todas as usadas) */
const FLAG_ICON_BY_KEY = {
  malta: FLAGS.malta,
  qatar: FLAGS.qatar,
  kuwait: FLAGS.kuwait,
  "saudi-arabia": FLAGS.saudiArabia,
  brazil: FLAGS.brazil,
};

export default function DestinationsInternational() {
  const list =
    travelBrand?.sections?.internationalDestinations?.destinations || [];
  if (!list.length) return null;

  return (
    <div className={styles.container}>
      <div
        className={styles.grid}
        role="list"
        aria-label="Destinos internacionais"
      >
        {list.map((d) => {
          const imageSrc = d.picture?.src || IMAGE_BY_KEY[d.key];
          const imageAlt = d.picture?.alt || d.city || "Destino internacional";
          if (!imageSrc) return null;

          const FlagIcon = FLAG_ICON_BY_KEY[d.key];

          return (
            <div role="listitem" key={d.key} className={styles.gridItem}>
              <DestinationCard
                variant="international"       
                city={d.city}
                badge={d.badge}
                imageSrc={imageSrc}
                imageAlt={imageAlt}
                summary={d.summary}
                flagIcon={FlagIcon}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
