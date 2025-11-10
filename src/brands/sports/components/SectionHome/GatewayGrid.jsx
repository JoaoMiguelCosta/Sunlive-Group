// GatewayGrid.jsx
import { Link } from "react-router-dom";
import styles from "./GatewayGrid.module.css";
// ⚠️ ajusta o caminho conforme a tua estrutura
import sportsBrand from "../../configSports.jsx";

// …
export default function GatewayGrid() {
  // 👇 CORRIGIDO: buscar em sections.home
  const items = sportsBrand?.sections?.home?.gateway ?? [];
  if (!items.length) return null; // evita espaço vazio + footer colado

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
