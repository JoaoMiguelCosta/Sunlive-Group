import styles from "./DivisionsPanel.module.css";
import overview from "../../../../config/sections/home/overview.js";

function isValidText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function isValidObject(value) {
  return value && typeof value === "object" && !Array.isArray(value);
}

function getValidDivisions(items) {
  return Array.isArray(items)
    ? items.filter((item) => isValidObject(item) && isValidText(item.key))
    : [];
}

function getCardLabel(item, fallback = "Sunlive Group") {
  const label = isValidText(item?.label) ? item.label : fallback;
  const sub = isValidText(item?.sub) ? item.sub : "";

  return `${label}${sub ? ` — ${sub}` : ""}`;
}

function CardContent({ item, fallbackLabel }) {
  const label = getCardLabel(item, fallbackLabel);
  const isImage = item?.renderAs === "image" && isValidText(item?.imageSrc);

  if (isImage) {
    return (
      <img
        src={item.imageSrc}
        alt={label}
        className={styles.cardImg}
        loading="lazy"
        decoding="async"
        draggable="false"
      />
    );
  }

  return (
    <>
      <span className={styles.cardTitle}>{item?.label ?? fallbackLabel}</span>

      {isValidText(item?.sub) ? (
        <small className={styles.cardSub}>{item.sub}</small>
      ) : null}
    </>
  );
}

function DivisionCard({ item }) {
  const label = getCardLabel(item);
  const isDisabled = Boolean(item.disabled) || !isValidText(item.href);

  if (isDisabled) {
    return (
      <div
        className={`${styles.card} ${styles.cardDisabled}`}
        data-key={item.key}
        data-state="disabled"
        aria-label={`${label} — brevemente`}
        aria-disabled="true"
      >
        <span className={styles.badge} aria-hidden="true">
          Brevemente
        </span>

        <CardContent item={item} fallbackLabel="Sunlive Group" />
      </div>
    );
  }

  return (
    <a
      href={item.href}
      className={styles.card}
      data-key={item.key}
      data-state="active"
      aria-label={label}
    >
      <CardContent item={item} fallbackLabel="Sunlive Group" />
    </a>
  );
}

export default function DivisionsPanel() {
  const divisions = getValidDivisions(overview?.divisions);
  const home = isValidObject(overview?.homeCard)
    ? overview.homeCard
    : { renderAs: "text", href: "/", label: "Our Home" };

  const shouldRenderHome = isValidObject(home);
  const homeLabel = getCardLabel(home, "Our Home");

  if (!divisions.length && !shouldRenderHome) return null;

  return (
    <div className={styles.sectionWrap} aria-label="Divisões Sunlive Group">
      <div className={styles.panel}>
        {divisions.length ? (
          <div className={styles.row}>
            {divisions.map((division) => (
              <DivisionCard key={division.key} item={division} />
            ))}
          </div>
        ) : null}

        {shouldRenderHome ? (
          <div className={styles.homeRow}>
            <a
              href={home.href ?? "/"}
              className={`${styles.card} ${styles.homeCard}`}
              data-key={home.key ?? "home"}
              data-state="active"
              aria-label={homeLabel}
            >
              <CardContent item={home} fallbackLabel="Our Home" />
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
}
