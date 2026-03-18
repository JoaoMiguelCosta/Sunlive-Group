import hotelBrand, { resolveHotelIcon } from "../../../../config/index.js";
import HotelCateringStepCard from "../../../../shared/ui/HotelCateringStepCard/HotelCateringStepCard.jsx";

import styles from "./CateringProcessSteps.module.css";

export default function CateringProcessSteps() {
  const section = hotelBrand?.pages?.dining?.sections?.catering ?? null;
  const items = section?.processSteps?.items ?? [];

  if (!items.length) return null;

  return (
    <div className={styles.block} aria-label="Etapas do serviço de catering">
      <div className={styles.grid}>
        {items.map((item) => {
          const Icon = item?.iconKey
            ? resolveHotelIcon(hotelBrand?.icons, item.iconKey)
            : null;

          return (
            <HotelCateringStepCard
              key={item.id}
              stepNumber={item.stepNumber}
              title={item.title}
              description={item.description}
              icon={Icon ? <Icon size={28} /> : null}
              iconKey={item.iconKey}
            />
          );
        })}
      </div>
    </div>
  );
}