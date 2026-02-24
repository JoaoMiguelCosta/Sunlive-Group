// src/brands/sports/pages/Education/sections/EducationBilingualCertification.jsx
import styles from "./EducationBilingualCertification.module.css";

export default function EducationBilingualCertification({ data }) {
  if (!data) return null;

  const cert = data.bilingualCertification;
  if (!cert) return null;

  const { id = "education-bilingual-certification" } = cert;

  return (
    <section id={id} className={styles.section}>
      <div className={styles.inner}>
        <article className={styles.card}>
          <header className={styles.cardHeader}>
            <div className={styles.iconBadge} aria-hidden="true">
              <span className={styles.iconGlyph}>双</span>
            </div>

            <h3 className={styles.title}>{cert.title}</h3>
          </header>

          <div className={styles.cardBody}>
            {cert.description && (
              <p className={styles.description}>{cert.description}</p>
            )}

            {Array.isArray(cert.badges) && cert.badges.length > 0 && (
              <div className={styles.badgesRow}>
                {cert.badges.map((label, idx) => (
                  <div key={idx} className={styles.badge}>
                    <span className={styles.badgeIcon}>✔</span>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </article>
      </div>
    </section>
  );
}
