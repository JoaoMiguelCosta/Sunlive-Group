import { useMemo, useState } from "react";

import hotelBrand from "../../../../config/index.js";

import styles from "./ReceptionSupportAvailability.module.css";

function PlaceholderImage({ label = "Foto" }) {
  return (
    <div className={styles.imagePlaceholder} aria-hidden="true">
      <span className={styles.placeholderLabel}>{label}</span>
    </div>
  );
}

function MediaSlot({ image, fallbackLabel }) {
  if (image?.src) {
    return (
      <img
        className={styles.image}
        src={image.src}
        alt={image.alt ?? ""}
        loading="lazy"
      />
    );
  }

  return <PlaceholderImage label={fallbackLabel} />;
}

export default function ReceptionSupportAvailability() {
  const availability =
    hotelBrand?.pages?.facilities?.sections?.receptionSupport?.availability ??
    null;

  const images = useMemo(
    () => (Array.isArray(availability?.images) ? availability.images : []),
    [availability],
  );

  const initialActiveKey =
    images.find((image) => image.defaultSelected)?.key ??
    images[0]?.key ??
    null;

  const [activeKey, setActiveKey] = useState(initialActiveKey);

  if (!availability || !images.length) return null;

  const activeImage =
    images.find((image) => image.key === activeKey) ?? images[0] ?? null;

  return (
    <div id={availability.id} className={styles.block}>
      <div className={styles.card}>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            {availability.headerLabel ? (
              <h3 className={styles.title}>{availability.headerLabel}</h3>
            ) : null}

            {availability.description ? (
              <p className={styles.description}>{availability.description}</p>
            ) : null}
          </div>

          <div
            className={styles.segmentedControl}
            role="tablist"
            aria-label="Selecionar vista da receção"
          >
            {images.map((image) => {
              const isActive = image.key === activeKey;

              return (
                <button
                  key={image.id}
                  type="button"
                  className={`${styles.segmentButton} ${
                    isActive ? styles.segmentButtonActive : ""
                  }`}
                  onClick={() => setActiveKey(image.key)}
                  aria-pressed={isActive}
                >
                  {image.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className={styles.mediaShell}>
          <div className={styles.mediaMain}>
            <MediaSlot image={activeImage} fallbackLabel="Receção" />
          </div>

          <aside className={styles.infoCard}>
            <span className={styles.infoEyebrow}>
              {availability.caption ?? "Receção"}
            </span>

            {activeImage?.title ? (
              <h4 className={styles.infoTitle}>{activeImage.title}</h4>
            ) : null}

            {activeImage?.description ? (
              <p className={styles.infoDescription}>
                {activeImage.description}
              </p>
            ) : null}
          </aside>
        </div>
      </div>
    </div>
  );
}
