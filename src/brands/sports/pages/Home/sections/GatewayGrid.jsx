// src/brands/sports/pages/Home/sections/GatewayGrid.jsx
import { Link } from "react-router-dom";
import styles from "./GatewayGrid.module.css";

import sportsBrand from "../../../config/registry/index.js";

export default function GatewayGrid() {
  const items = sportsBrand?.pages?.home?.gateway ?? [];
  if (!items.length) return null;

  return (
    <section className={styles.section} aria-label="Entradas — Sunlive Sports">
      <div className={styles.inner}>
        <div className={styles.grid}>
          {items.map((it) => {
            const className = [
              styles.item,
              it.variant === "cta" ? styles.cta : "",
            ]
              .filter(Boolean)
              .join(" ");

            const content = <span className={styles.label}>{it.label}</span>;

            const href = it.href ?? "#";
            const isHash = typeof href === "string" && href.startsWith("#");
            const isExternal =
              typeof href === "string" && /^https?:\/\//i.test(href);

            return (
              <div key={it.key} className={className}>
                {isExternal ? (
                  <a
                    href={href}
                    className={styles.click}
                    aria-label={it.label}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {content}
                  </a>
                ) : isHash ? (
                  <a href={href} className={styles.click} aria-label={it.label}>
                    {content}
                  </a>
                ) : (
                  <Link
                    to={href}
                    className={styles.click}
                    aria-label={it.label}
                  >
                    {content}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
