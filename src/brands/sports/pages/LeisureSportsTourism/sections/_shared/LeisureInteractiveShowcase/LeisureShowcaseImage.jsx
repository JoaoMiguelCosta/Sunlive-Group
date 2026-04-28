import styles from "./LeisureShowcaseImage.module.css";

export default function LeisureShowcaseImage({ item, variant }) {
  if (item.imageSrc) {
    return (
      <img
        className={styles.image}
        src={item.imageSrc}
        alt={item.imageAlt}
        loading="lazy"
        decoding="async"
      />
    );
  }

  return (
    <div
      className={styles.visualFallback}
      data-variant={variant}
      aria-hidden="true"
    >
      <span>{item.fallbackMark}</span>
    </div>
  );
}
