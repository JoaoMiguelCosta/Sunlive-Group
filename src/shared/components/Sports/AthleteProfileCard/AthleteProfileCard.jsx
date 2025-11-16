// src/shared/components/Sports/AthleteProfileCard.jsx
import styles from "./AthleteProfileCard.module.css";
import InstagramIcon from "../../../ui/icons/Instagram.jsx";

/**
 * Card de atleta — Sports (Performance Prestige)
 *
 * Espera um FlagIcon vindo de shared/ui/icons/flags (via FLAGS).
 */
export default function AthleteProfileCard({
  photoSrc,
  photoAlt,
  FlagIcon,
  name,
  age,
  sportLabel,
  bio,
  achievements = [],
  quote,
  instagramUrl,
}) {
  return (
    <article className={styles.card} data-brand="sports">
      {/* Foto do atleta */}
      <div className={styles.photoBand}>
        <div className={styles.photoShell}>
          {photoSrc ? (
            <img
              src={photoSrc}
              alt={photoAlt || name}
              loading="lazy"
              className={styles.photoImage}
            />
          ) : (
            <div className={styles.photoPlaceholder} aria-hidden="true" />
          )}
        </div>
      </div>

      {/* Nome + país */}
      {(name || FlagIcon) && (
        <header className={styles.headerRow}>
          {FlagIcon && (
            <span className={styles.flag} aria-hidden="true">
              <FlagIcon />
            </span>
          )}

          {name && (
            <p className={styles.nameAge}>
              <span>{name}</span>
              {age && <span className={styles.dot}>•</span>}
              {age && <span>{age} anos</span>}
            </p>
          )}
        </header>
      )}

      {/* Bio curta */}
      {bio && <p className={styles.bio}>{bio}</p>}

      {/* Modalidade */}
      {sportLabel && (
        <div className={styles.sportPill}>
          <span>{sportLabel}</span>
        </div>
      )}

      {/* Conquistas */}
      {achievements.length > 0 && (
        <section className={styles.achievements}>
          <h3 className={styles.sectionTitle}>Principais conquistas</h3>
          <ul className={styles.achievementsList}>
            {achievements.map((item, idx) => (
              <li key={idx} className={styles.achievementItem}>
                <span className={styles.bullet} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Citação */}
      {quote && (
        <section className={styles.quoteBlock}>
          <div className={styles.quoteMark} aria-hidden="true">
            <span>“</span>
          </div>
          <p className={styles.quoteText}>{quote}</p>
        </section>
      )}

      {/* Instagram — ícone centrado */}
      {instagramUrl && (
        <footer className={styles.footer}>
          <span className={styles.footerLabel}>Segue o percurso</span>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className={styles.instagramButton}
            aria-label="Ver Instagram do atleta"
          >
            <span className={styles.instagramIcon}>
              <InstagramIcon
                className={styles.instagramSvg}
                aria-hidden="true"
              />
            </span>
          </a>
        </footer>
      )}
    </article>
  );
}
