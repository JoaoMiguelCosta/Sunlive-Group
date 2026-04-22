import styles from "./EducationBilingualCertification.module.css";

function hasItems(value) {
  return Array.isArray(value) && value.length > 0;
}

export default function EducationBilingualCertification({ certification }) {
  if (!certification) return null;

  return (
    <article
      className={styles.certification}
      aria-label={certification.title || "Certificação Dupla"}
    >
      <div className={styles.certificationContent}>
        {certification.eyebrow ? (
          <span className={styles.certificationEyebrow}>
            {certification.eyebrow}
          </span>
        ) : null}

        {certification.title ? (
          <h3 className={styles.certificationTitle}>{certification.title}</h3>
        ) : null}

        {certification.description ? (
          <p className={styles.certificationDescription}>
            {certification.description}
          </p>
        ) : null}
      </div>

      {hasItems(certification.badges) ? (
        <div className={styles.badges}>
          {certification.badges.map((badge) => (
            <span key={badge} className={styles.badge}>
              {badge}
            </span>
          ))}
        </div>
      ) : null}
    </article>
  );
}
