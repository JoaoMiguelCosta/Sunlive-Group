import styles from "./GatewayGrid.module.css";

import HomeGatewayCard from "../../../shared/ui/HomeGatewayCard/HomeGatewayCard.jsx";

export default function GatewayGrid({ data }) {
  const sectionId = data?.id || "sports-home-menu";
  const ariaLabel = data?.ariaLabel || "Entradas principais Sunlive Sports";
  const items = Array.isArray(data?.items) ? data.items : [];
  const backgroundImage = data?.backgroundImage;

  if (!items.length) return null;

  const surfaceStyle = backgroundImage?.src
    ? {
        "--gateway-bg-image": `url(${backgroundImage.src})`,
      }
    : undefined;

  return (
    <section id={sectionId} className={styles.section} aria-label={ariaLabel}>
      <div className={styles.surface} style={surfaceStyle}>
        {backgroundImage?.src ? (
          <span
            className={styles.backgroundImage}
            role="img"
            aria-label={backgroundImage.alt || ""}
            aria-hidden={backgroundImage.alt ? undefined : "true"}
          />
        ) : null}

        <div className={styles.grid}>
          {items.map((item, index) => {
            const isCta = item?.variant === "cta";

            const gridItemClassName = [
              styles.gridItem,
              isCta ? styles.gridItemCta : "",
            ]
              .filter(Boolean)
              .join(" ");

            return (
              <div
                key={item?.key || `sports-home-menu-${index + 1}`}
                className={gridItemClassName}
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
