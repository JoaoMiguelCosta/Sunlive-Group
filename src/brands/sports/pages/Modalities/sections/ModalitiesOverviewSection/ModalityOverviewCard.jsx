import {
  getCardActionLabel,
  getCardHref,
  getIconComponent,
  handleCardClick,
  isValidText,
} from "./modalitiesOverviewSection.utils.js";
import styles from "./ModalitiesOverviewSection.module.css";

export default function ModalityOverviewCard({ item, index, ui }) {
  const Icon = getIconComponent(item.iconKey);
  const href = getCardHref(item);
  const actionLabel = getCardActionLabel(item, ui);

  return (
    <li className={styles.gridItem}>
      <a
        href={href}
        className={styles.card}
        aria-label={isValidText(item.label) ? item.label : undefined}
        onClick={(event) => handleCardClick(event, item, href)}
      >
        <span className={styles.cardTop}>
          <span className={styles.cardIndex}>
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className={styles.iconWrap} aria-hidden="true">
            {Icon ? <Icon className={styles.icon} focusable="false" /> : null}
          </span>
        </span>

        <span className={styles.cardContent}>
          <strong className={styles.cardTitle}>{item.title}</strong>

          {isValidText(item.description) ? (
            <span className={styles.cardDescription}>{item.description}</span>
          ) : null}
        </span>

        <span className={styles.cardAction} aria-hidden="true">
          {actionLabel}
        </span>
      </a>
    </li>
  );
}
