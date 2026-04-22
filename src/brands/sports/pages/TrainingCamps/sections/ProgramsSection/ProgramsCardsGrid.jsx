import styles from "./ProgramsCardsGrid.module.css";
import ProgramSportCard from "./ProgramSportCard.jsx";

export default function ProgramsCardsGrid({ items }) {
  const safeItems = Array.isArray(items) ? items : [];
  if (!safeItems.length) return null;

  return (
    <div className={styles.cards}>
      {safeItems.map((item, index) => (
        <ProgramSportCard
          key={item.key || `${item.sport}-${index}`}
          item={item}
          index={index}
        />
      ))}
    </div>
  );
}
