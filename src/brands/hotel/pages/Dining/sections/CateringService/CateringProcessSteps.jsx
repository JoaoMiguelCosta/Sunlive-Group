import hotelBrand from "../../../../config/index.js";
import HotelCateringStepCard from "../../../../shared/ui/HotelCateringStepCard/HotelCateringStepCard.jsx";
// Ativar mais tarde quando ligares os ícones:
// import { resolveHotelIcon } from "../../../../config/index.js";

import styles from "./CateringProcessSteps.module.css";

export default function CateringProcessSteps() {
  const section = hotelBrand?.pages?.dining?.sections?.catering ?? null;
  const items = section?.processSteps?.items ?? [];

  if (!items.length) return null;

  return (
    <div className={styles.block}>
      <div className={styles.grid}>
        {items.map((item) => {
          // Preparado para futuro:
          // const Icon = item?.iconKey
          //   ? resolveHotelIcon(hotelBrand?.icons, item.iconKey)
          //   : null;

          return (
            <HotelCateringStepCard
              key={item.id}
              stepNumber={item.stepNumber}
              title={item.title}
              description={item.description}
              icon={null}
              iconKey={item.iconKey}
            />
          );
        })}
      </div>
    </div>
  );
}
