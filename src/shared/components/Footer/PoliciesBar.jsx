import styles from "./PoliciesBar.module.css";
import { ShieldIcon } from "../../ui/icons";

export default function PoliciesBar({ data }) {
  if (!data) return null;

  const year = data?.copyright?.year || new Date().getFullYear();
  const links = Array.isArray(data.links) ? data.links : [];

  return (
    <section className={styles.sectionWrap} aria-label="Policies and legal">
      <div className={styles.inner}>
        <nav className={styles.links} aria-label="Legal links">
          {links.map((linkItem, index) => (
            <span key={linkItem.key || index} className={styles.linkItem}>
              <a className={styles.link} href={linkItem.href}>
                {linkItem.label}
              </a>

              {index < links.length - 1 ? (
                <span className={styles.divider} aria-hidden="true">
                  |
                </span>
              ) : null}
            </span>
          ))}
        </nav>

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
