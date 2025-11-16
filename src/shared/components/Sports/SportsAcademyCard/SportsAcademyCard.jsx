// src/shared/components/Sports/SportsAcademyCard.jsx
import styles from "./SportsAcademyCard.module.css";

import InstagramIcon from "../../../ui/icons/Instagram.jsx";
import FacebookIcon from "../../../ui/icons/Facebook.jsx";

export default function SportsAcademyCard({
  logoSrc,
  logoAlt,
  title,
  description,
  instagramHref,
  facebookHref,
  moreHref,
  moreLabel = "Ver mais",
  bookHref,
  bookLabel = "Abrir Book",
  className = "",
  ...rest
}) {
  if (!title && !description) return null;

  const hasSocials = instagramHref || facebookHref;
  const hasMore = !!moreHref;
  const hasBook = !!bookHref;
  const hasAnyFooter = hasSocials || hasMore || hasBook;

  // caso especial: só tem book → queremos o botão centrado
  const onlyBook = hasBook && !hasSocials && !hasMore;

  const cardClasses = [styles.card, className].filter(Boolean).join(" ");
  const footerClasses = [styles.footer, onlyBook ? styles.footerSolo : ""]
    .filter(Boolean)
    .join(" ");

  const actionsClasses = [styles.actions, onlyBook ? styles.actionsSolo : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={cardClasses} {...rest}>
      {/* Topo: logo + nome academia */}
      <header className={styles.header}>
        {logoSrc && (
          <div className={styles.logoWrap}>
            <img
              src={logoSrc}
              alt={logoAlt || title || ""}
              loading="lazy"
              className={styles.logo}
            />
          </div>
        )}

        {title && <h3 className={styles.title}>{title}</h3>}
      </header>

      {/* Corpo: descrição */}
      {description && (
        <div className={styles.body}>
          <p className={styles.description}>{description}</p>
        </div>
      )}

      {/* Footer interno do card: redes + botões */}
      {hasAnyFooter && (
        <footer className={footerClasses}>
          {/* Redes sociais */}
          {hasSocials && (
            <div className={styles.socials}>
              {instagramHref && (
                <a
                  href={instagramHref}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialButton}
                  aria-label="Abrir Instagram da academia"
                >
                  <InstagramIcon className={styles.socialIcon} />
                </a>
              )}

              {facebookHref && (
                <a
                  href={facebookHref}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialButton}
                  aria-label="Abrir Facebook da academia"
                >
                  <FacebookIcon className={styles.socialIcon} />
                </a>
              )}
            </div>
          )}

          {/* Ações principais */}
          <div className={actionsClasses}>
            {moreHref && (
              <a
                href={moreHref}
                className={`${styles.button} ${styles.primary}`}
              >
                <span>{moreLabel}</span>
                <span className={styles.buttonIcon}>→</span>
              </a>
            )}

            {bookHref && (
              <a
                href={bookHref}
                download
                className={`${styles.button} ${styles.secondary}`}
              >
                <span>{bookLabel}</span>
                <span className={styles.buttonIcon}>⬇</span>
              </a>
            )}
          </div>
        </footer>
      )}
    </article>
  );
}
