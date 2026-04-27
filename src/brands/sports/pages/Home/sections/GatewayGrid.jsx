import styles from "./GatewayGrid.module.css";

import HomeGatewayCard from "../../../shared/ui/HomeGatewayCard/index.jsx";

function isValidItem(item) {
  return item && typeof item === "object" && (item.title || item.label);
}

function getValidItems(items) {
  return Array.isArray(items) ? items.filter(isValidItem) : [];
}

function getSectionId(data) {
  return data?.id || "sports-home-menu";
}

function getSectionAriaLabel(data) {
  return data?.ariaLabel || "Entradas principais Sunlive Sports";
}

function getGridItemClassName(isCta) {
  return [styles.gridItem, isCta ? styles.gridItemCta : ""]
    .filter(Boolean)
    .join(" ");
}

export default function GatewayGrid({ data }) {
  const sectionId = getSectionId(data);
  const ariaLabel = getSectionAriaLabel(data);
  const items = getValidItems(data?.items);
  const backgroundImage = data?.backgroundImage;

  if (!items.length) return null;

  const hasBackgroundImage = Boolean(backgroundImage?.src);

  const surfaceStyle = hasBackgroundImage
    ? {
        "--gateway-bg-image": `url(${backgroundImage.src})`,
      }
    : undefined;

  return (
    <section id={sectionId} className={styles.section} aria-label={ariaLabel}>
      <div
        className={styles.surface}
        style={surfaceStyle}
        data-has-background={hasBackgroundImage ? "true" : "false"}
      >
        {hasBackgroundImage ? (
          <span
            className={styles.backgroundImage}
            role={backgroundImage?.alt ? "img" : undefined}
            aria-label={backgroundImage?.alt || undefined}
            aria-hidden={backgroundImage?.alt ? undefined : "true"}
          />
        ) : null}

        <div className={styles.grid}>
          {items.map((item, index) => {
            const isCta = item?.variant === "cta";

            return (
              <div
                key={item?.key || `sports-home-menu-${index + 1}`}
                className={getGridItemClassName(isCta)}
              >
                <HomeGatewayCard
                  item={item}
                  index={index}
                  softenVisual={index === 4}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
