import hotelBrand from "../../../../config/index.js";
import SustainabilityPracticeCard from "../../../../shared/ui/SustainabilityPracticeCard/SustainabilityPracticeCard.jsx";
import styles from "./SustainabilityPracticesGrid.module.css";

export default function SustainabilityPracticesGrid() {
  const section =
    hotelBrand?.pages?.sustainability?.sections?.sustainabilityCommitment ??
    null;

  const items = section?.practices?.items ?? [];

  if (!items.length) return null;

  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <SustainabilityPracticeCard
          key={item.id}
          title={item.title}
          subtitle={item.subtitle}
          description={item.description}
          topIcon={null}
          features={(item.features ?? []).map((feature) => ({
            ...feature,
            icon: null,
          }))}
          metricText={item.metric?.text}
          metricIcon={null}
        />
      ))}
    </div>
  );
}
