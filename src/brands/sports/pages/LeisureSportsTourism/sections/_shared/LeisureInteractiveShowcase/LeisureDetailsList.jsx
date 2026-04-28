import styles from "./LeisureDetailsList.module.css";

export default function LeisureDetailsList({ items, variant }) {
  if (!items.length) return null;

  return (
    <ul className={styles.detailsList} data-variant={variant}>
      {items.map((item, index) => (
        <li key={`${item}-${index}`}>{item}</li>
      ))}
    </ul>
  );
}
