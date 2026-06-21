import { ICONS, resolveSportsIcon } from "../../../../config/core/index.js";
import styles from "./ModalitiesOverviewSection.module.css";
const MODALITY_SELECT_EVENT = "sunlive:modalities-select";
function isValidText(value) {
  return typeof value === "string" && value.trim().length > 0;
}
function getValidItems(items) {
  return Array.isArray(items)
    ? items.filter(
        (item) =>
          item &&
          typeof item === "object" &&
          isValidText(item.key) &&
          isValidText(item.title),
      )
    : [];
}
function getIconComponent(iconKey) {
  if (!isValidText(iconKey)) return null;
  return resolveSportsIcon(ICONS, iconKey);
}
function getCardHref(item) {
  if (isValidText(item.href)) return item.href;
  if (isValidText(item.id)) return `#${item.id}`;
  return `#${item.key}`;
}
function getCardActionLabel(item, ui) {
  if (isValidText(item.actionLabel)) return item.actionLabel;
  if (isValidText(ui?.cardActionLabel)) return ui.cardActionLabel;
  return "Explorar";
}
function isHashHref(href) {
  return isValidText(href) && href.startsWith("#") && href.length > 1;
}
function getHashTargetId(href) {
  if (!isHashHref(href)) return null;
  const rawTargetId = href.slice(1);
  try {
    return decodeURIComponent(rawTargetId);
  } catch {
    return rawTargetId;
  }
}
function updateHashWithoutNativeJump(hash) {
  if (typeof window === "undefined" || !isHashHref(hash)) return;
  const nextUrl = `${window.location.pathname}${window.location.search}${hash}`;
  window.history.pushState(null, "", nextUrl);
}
function scrollToHashTarget(href) {
  if (typeof document === "undefined") return;
  const targetId = getHashTargetId(href);
  if (!targetId) return;
  const target = document.getElementById(targetId);
  if (!target) return;
  window.requestAnimationFrame(() => {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}
function dispatchModalitySelectEvent(item, href) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent(MODALITY_SELECT_EVENT, {
      detail: {
        key: item.key,
        href,
        targetId: getHashTargetId(href),
        shouldScroll: true,
      },
    }),
  );
}
function handleCardClick(event, item, href) {
  if (!isHashHref(href)) return;
  event.preventDefault();
  updateHashWithoutNativeJump(href);
  dispatchModalitySelectEvent(item, href);
  scrollToHashTarget(href);
}
function ModalityOverviewCard({ item, index, ui }) {
  const Icon = getIconComponent(item.iconKey);
  const href = getCardHref(item);
  const actionLabel = getCardActionLabel(item, ui);
  return (
    <li className={styles.gridItem}>
      {" "}
      <a
        href={href}
        className={styles.card}
        aria-label={isValidText(item.label) ? item.label : undefined}
        onClick={(event) => handleCardClick(event, item, href)}
      >
        {" "}
        <span className={styles.cardTop}>
          {" "}
          <span className={styles.cardIndex}>
            {" "}
            {String(index + 1).padStart(2, "0")}{" "}
          </span>{" "}
          <span className={styles.iconWrap} aria-hidden="true">
            {" "}
            {Icon ? (
              <Icon className={styles.icon} focusable="false" />
            ) : null}{" "}
          </span>{" "}
        </span>{" "}
        <span className={styles.cardContent}>
          {" "}
          <strong className={styles.cardTitle}>{item.title}</strong>{" "}
          {isValidText(item.description) ? (
            <span className={styles.cardDescription}>{item.description}</span>
          ) : null}{" "}
        </span>{" "}
        <span className={styles.cardAction} aria-hidden="true">
          {" "}
          {actionLabel}{" "}
        </span>{" "}
      </a>{" "}
    </li>
  );
}
export default function ModalitiesOverviewSection({ data }) {
  if (!data) return null;
  const items = getValidItems(data.items);
  const intro = data.intro;
  if (!intro && items.length === 0) return null;
  const sectionId = data.id || "modalities-overview";
  const titleId = isValidText(intro?.title) ? `${sectionId}-title` : undefined;
  const leadId = isValidText(intro?.lead) ? `${sectionId}-lead` : undefined;
  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
      aria-describedby={leadId}
      aria-label={!titleId ? data.ui?.ariaLabel : undefined}
    >
      {" "}
      <div className={styles.inner}>
        {" "}
        {intro ? (
          <header className={styles.header}>
            {" "}
            {isValidText(intro.eyebrow) ? (
              <p className={styles.eyebrow}>{intro.eyebrow}</p>
            ) : null}{" "}
            {isValidText(intro.title) ? (
              <h2 id={titleId} className={styles.title}>
                {" "}
                {intro.title}{" "}
              </h2>
            ) : null}{" "}
            {isValidText(intro.lead) ? (
              <p id={leadId} className={styles.lead}>
                {" "}
                {intro.lead}{" "}
              </p>
            ) : null}{" "}
          </header>
        ) : null}{" "}
        {items.length > 0 ? (
          <ul className={styles.grid} aria-label={data.ui?.listAriaLabel}>
            {" "}
            {items.map((item, index) => (
              <ModalityOverviewCard
                key={item.key}
                item={item}
                index={index}
                ui={data.ui}
              />
            ))}{" "}
          </ul>
        ) : null}{" "}
      </div>{" "}
    </section>
  );
}
