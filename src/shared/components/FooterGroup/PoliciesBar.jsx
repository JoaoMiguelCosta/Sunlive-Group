import styles from "./PoliciesBar.module.css";
import { ShieldIcon } from "../../ui/icons";

/**
 * PoliciesBar — barra inferior com links de políticas e copyright.
 *
 * Props: {
 *   data: {
 *     links: [{ key, label, href }],
 *     copyright: { year?, holder },
 *     icon?: { ariaLabel? }
 *   }
 * }
 */
export default function PoliciesBar({ data }) {
  if (!data) return null;

  const year = data?.copyright?.year || new Date().getFullYear();

  return (
    <section className={styles.sectionWrap} aria-label="Policies and legal">
      <div className={styles.inner}>
        {/* Links à esquerda / topo no mobile */}
        <nav className={styles.links} aria-label="Legal links">
          {(data.links || []).map((l, idx) => (
            <a key={l.key || idx} className={styles.link} href={l.href}>
              {l.label}
              {/* divisor visual (não-aria) */}
              {idx < (data.links?.length || 0) - 1 && (
                <span className={styles.divider} aria-hidden="true">
                  |
                </span>
              )}
            </a>
          ))}
        </nav>

        {/* Copyright à direita / base no mobile */}
        <div className={styles.copyWrap}>
          <span className={styles.shield} aria-hidden="true">
            {typeof ShieldIcon === "function" ? <ShieldIcon /> : "🛡️"}
          </span>
          <span className={styles.copyText}>
            © {year} {data?.copyright?.holder || "Sunlive Group"}
          </span>
        </div>
      </div>
    </section>
  );
}
