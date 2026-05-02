import { forwardRef } from "react";

import LogisticsIconSlot from "./LogisticsIconSlot.jsx";

import {
  getValidFeatures,
  isValidText,
} from "./logisticsServicesSection.utils.js";

import styles from "./LogisticsActiveServicePanel.module.css";

const LogisticsActiveServicePanel = forwardRef(
  function LogisticsActiveServicePanel(
    { service, panelId, activeTabId, iconSet, resolveIcon },
    ref,
  ) {
    if (!service) return null;

    const features = getValidFeatures(service.features);

    return (
      <article
        ref={ref}
        id={panelId}
        className={styles.activePanel}
        role="tabpanel"
        aria-labelledby={activeTabId}
        aria-live="polite"
        tabIndex={-1}
      >
        {isValidText(service.number) ? (
          <p className={styles.panelNumber}>{service.number}</p>
        ) : null}

        <div className={styles.panelHeader}>
          <LogisticsIconSlot
            variant="panel"
            iconSet={iconSet}
            iconKey={service.iconKey}
            resolveIcon={resolveIcon}
          />

          <div className={styles.panelHeading}>
            {isValidText(service.title) ? (
              <h3 className={styles.panelTitle}>{service.title}</h3>
            ) : null}
          </div>
        </div>

        {isValidText(service.summary) ? (
          <p className={styles.panelSummary}>{service.summary}</p>
        ) : null}

        {features.length > 0 ? (
          <ul className={styles.featuresList}>
            {features.map((feature) => (
              <li key={feature} className={styles.featureItem}>
                <span className={styles.featureMarker} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </article>
    );
  },
);

export default LogisticsActiveServicePanel;
