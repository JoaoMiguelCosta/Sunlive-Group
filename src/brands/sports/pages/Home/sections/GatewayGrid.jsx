import { Link } from "react-router-dom";
import styles from "./GatewayGrid.module.css";

import sportsBrand from "../../../config/index.js";

function resolveLinkType(href) {
  if (typeof href !== "string" || !href) return "fallback";
  if (/^https?:\/\//i.test(href)) return "external";
  if (href.startsWith("#")) return "hash";
  return "internal";
}

export default function GatewayGrid() {
  const items = sportsBrand?.pages?.home?.sections?.gateway ?? [];

  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <section
      className={styles.section}
      aria-label="Entradas principais Sunlive Sports"
    >
      <div className={styles.surface}>
        <div className={styles.grid}>
          {items.map((item, index) => {
            const href = item?.href ?? "#";
            const linkType = resolveLinkType(href);
            const label = item?.label ?? `Entrada ${index + 1}`;

            const itemClassName = [
              styles.item,
              item?.variant === "cta" ? styles.cta : "",
            ]
              .filter(Boolean)
              .join(" ");

            const content = (
              <>
                <span className={styles.label}>{label}</span>
                <span className={styles.energyLine} aria-hidden="true" />
              </>
            );

            return (
              <div
                key={item?.key || `${label}-${index}`}
                className={itemClassName}
              >
                {linkType === "external" ? (
                  <a
                    href={href}
                    className={styles.click}
                    aria-label={label}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {content}
                  </a>
                ) : linkType === "hash" ? (
                  <a href={href} className={styles.click} aria-label={label}>
                    {content}
                  </a>
                ) : linkType === "internal" ? (
                  <Link to={href} className={styles.click} aria-label={label}>
                    {content}
                  </Link>
                ) : (
                  <span className={styles.click} aria-label={label}>
                    {content}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
