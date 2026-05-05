import styles from "./LeisureShowcaseImage.module.css";

export default function LeisureShowcaseImage({ item, variant }) {
  const hasImage = Boolean(item.imageSrc);
  const shouldRenderBackdrop = variant === "destinations";

  if (hasImage) {
    return (
      <div className={styles.imageFrame} data-variant={variant}>
        {shouldRenderBackdrop ? (
          <img
            className={styles.imageBackdrop}
            src={item.imageSrc}
            alt=""
            width={item.imageWidth}
            height={item.imageHeight}
            loading="lazy"
            decoding="async"
            aria-hidden="true"
            style={{ objectPosition: item.imagePosition }}
          />
        ) : null}

        <img
          className={styles.image}
          src={item.imageSrc}
          alt={item.imageAlt}
          width={item.imageWidth}
          height={item.imageHeight}
          loading="lazy"
          decoding="async"
          style={{ objectPosition: item.imagePosition }}
        />
      </div>
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
