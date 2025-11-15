// GatewayGrid — “Entradas” principais da Home Sports
import { Link } from "react-router-dom";
import styles from "./GatewayGrid.module.css";

// ajusta o caminho conforme a tua estrutura real
import sportsBrand from "../../configSports.jsx";

export default function GatewayGrid() {
  // buscar items em sections.home.gateway
  const items = sportsBrand?.sections?.home?.gateway ?? [];
  if (!items.length) return null; // evita bloco vazio

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
