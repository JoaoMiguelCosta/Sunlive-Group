import { useLayoutEffect, useRef, useState } from "react";

import styles from "./HotelFeatureListWithMedia.module.css";

function IconSlot({ icon = null, iconLabel = "" }) {
  if (icon) {
    return (
      <span className={styles.iconCircle} aria-label={iconLabel}>
        {icon}
      </span>
    );
  }

  return (
    <span className={styles.iconCircle} aria-hidden="true">
      <span className={styles.iconPlaceholder} />
    </span>
  );
}

function PlaceholderImage() {
  return (
    <div className={styles.imagePlaceholder} aria-hidden="true">
      <span className={styles.placeholderLabel}>Foto</span>
    </div>
  );
}

export default function HotelFeatureListWithMedia({
  items = [],
  image = null,
  imageAlt = "",
  imageObjectPosition = "center center",
  mediaPosition = "right",
  className = "",
  layoutMode = "stretch",
}) {
  const listCardRef = useRef(null);
  const [measuredListHeight, setMeasuredListHeight] = useState(0);

  const isCompact = layoutMode === "compact";
  const isMediaLeft = mediaPosition === "left";

  useLayoutEffect(() => {
    if (!isCompact) {
      setMeasuredListHeight(0);
      return undefined;
    }

    const element = listCardRef.current;
    if (!element) return undefined;

    const updateHeight = () => {
      setMeasuredListHeight(element.getBoundingClientRect().height);
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(() => {
      updateHeight();
    });

    resizeObserver.observe(element);
    window.addEventListener("resize", updateHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, [isCompact, items]);

  if (!items.length) return null;

  const rootClassName = [
    styles.wrapper,
    isMediaLeft ? styles.mediaLeft : styles.mediaRight,
    isCompact ? styles.wrapperCompact : styles.wrapperStretch,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const listCardClassName = [
    styles.listCard,
    isCompact ? styles.listCardCompact : styles.listCardStretch,
  ]
    .filter(Boolean)
    .join(" ");

  const mediaClassName = [
    styles.media,
    isCompact ? styles.mediaCompact : styles.mediaStretch,
  ]
    .filter(Boolean)
    .join(" ");

  const mediaStyle =
    isCompact && measuredListHeight > 0
      ? { "--feature-media-height": `${measuredListHeight}px` }
      : undefined;

  return (
    <div className={rootClassName}>
      <div ref={listCardRef} className={listCardClassName}>
        <ul className={styles.list}>
          {items.map((item) => {
            const hasTwoLines = Boolean(item.title || item.description);
            const primaryText = item.title ?? item.label ?? "";
            const secondaryText = item.description ?? "";

            return (
              <li
                key={item.key}
                className={`${styles.item} ${
                  hasTwoLines ? styles.itemTwoLines : ""
                }`}
              >
                <IconSlot
                  icon={item.icon?.component ?? null}
                  iconLabel={item.icon?.ariaLabel ?? primaryText}
                />

                <div className={styles.textContent}>
                  <span className={styles.label}>{primaryText}</span>

                  {secondaryText ? (
                    <span className={styles.description}>{secondaryText}</span>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={mediaClassName} style={mediaStyle}>
        {image ? (
          <img
            className={styles.image}
            src={image}
            alt={imageAlt}
            loading="lazy"
            style={{ objectPosition: imageObjectPosition }}
          />
        ) : (
          <PlaceholderImage />
        )}
      </div>
    </div>
  );
}
