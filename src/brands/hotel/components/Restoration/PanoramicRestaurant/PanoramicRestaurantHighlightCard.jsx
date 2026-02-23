import styles from "./PanoramicRestaurantPhotoCarousel.module.css";

export default function PanoramicRestaurantHighlightCard({ highlight }) {
  if (!highlight?.title && !highlight?.text) return null;

  return (
    <div className={styles.highlight} aria-label="Destaque">
      <div className={styles.highlightHeader}>
        <span className={styles.highlightIconSlot} aria-hidden="true" />
        <h3 className={styles.highlightTitle}>{highlight.title}</h3>
      </div>

      {highlight?.text ? (
        <p className={styles.highlightBody}>{highlight.text}</p>
      ) : null}
    </div>
  );
}
