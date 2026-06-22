import { useEffect, useMemo, useState } from "react";

import receptionSupport from "../../../../config/sections/facilities/receptionSupport.js";

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
  const availability = receptionSupport?.availability ?? null;

  const images = useMemo(
    () => (Array.isArray(availability?.images) ? availability.images : []),
    [availability],
  );

  const initialActiveKey =
    images.find((image) => image.defaultSelected)?.key ??
    images[0]?.key ??
    null;

  const [activeKey, setActiveKey] = useState(initialActiveKey);

  useEffect(() => {
    setActiveKey(initialActiveKey);
  }, [initialActiveKey]);

  if (!availability || !images.length) return null;

  const activeImage =
    images.find((image) => image.key === activeKey) ?? images[0] ?? null;

  const activePanelId = `${availability.id}-panel`;
  const activeTabId = `${availability.id}-tab-${activeImage?.key ?? "default"}`;

  return (
    <div id={availability.id} className={styles.block}>
      <div className={styles.card}>
        <div className={styles.topShell}>
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
              aria-label={
                availability.tabsAriaLabel ?? "Selecionar vista da receção"
              }
            >
              {images.map((image) => {
                const isActive = image.key === activeKey;
                const tabId = `${availability.id}-tab-${image.key}`;

                return (
                  <button
                    key={image.id}
                    type="button"
                    id={tabId}
                    role="tab"
                    className={`${styles.segmentButton} ${
                      isActive ? styles.segmentButtonActive : ""
                    }`}
                    onClick={() => setActiveKey(image.key)}
                    aria-selected={isActive}
                    aria-controls={activePanelId}
                    tabIndex={isActive ? 0 : -1}
                  >
                    {image.label}
                  </button>
                );
              })}
            </div>
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

        <div
          id={activePanelId}
          role="tabpanel"
          aria-labelledby={activeTabId}
          className={styles.mediaShell}
        >
          <div className={styles.mediaMain}>
            <MediaSlot image={activeImage} fallbackLabel="Receção" />
          </div>
        </div>
      </div>
    </div>
  );
}
