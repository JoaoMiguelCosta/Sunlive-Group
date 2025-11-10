import { Link } from "react-router-dom";
import styles from "./GatewayGrid.module.css";
import sportsBrand from "../../configSports.jsx";

/**
 * GatewayGrid — grelha de pontos de entrada
 * - Lê itens de sportsBrand.home.gateway
 * - item.variant === "cta" aplica estilo de call-to-action
 */
export default function GatewayGrid() {
  const items = sportsBrand?.home?.gateway ?? [];

  return (
    <section className={styles.section} aria-label="Entradas — Sunlive Sports">
      <div className={styles.inner}>
        <div className={styles.grid}>
          {items.map((it) => {
            const className = [
              styles.item,
              it.variant === "cta" ? styles.cta : "",
            ].join(" ");

            const content = <span className={styles.label}>{it.label}</span>;

            const isHash =
              typeof it.href === "string" && it.href.startsWith("#");
            const isExternal =
              typeof it.href === "string" && /^https?:\/\//i.test(it.href);

            return (
              <div key={it.key} className={className}>
                {isExternal ? (
                  <a
                    href={it.href}
                    className={styles.click}
                    aria-label={it.label}
                  >
                    {content}
                  </a>
                ) : isHash ? (
                  <a
                    href={it.href}
                    className={styles.click}
                    aria-label={it.label}
                  >
                    {content}
                  </a>
                ) : (
                  <Link
                    to={it.href}
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
