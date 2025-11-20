// src/shared/components/Sports/SportsAcademyCard.jsx
import styles from "./SportsAcademyCard.module.css";

import InstagramIcon from "../../../ui/icons/Instagram.jsx";
import FacebookIcon from "../../../ui/icons/Facebook.jsx";

/**
 * SportsAcademyCard — totalmente opcional por zona:
 * 1) Topo: logo (imagem) OU ícone OU nada
 * 2) Redes sociais: Instagram / Facebook (ícone com link) OU nada
 * 3) Botão "Ver mais" opcional
 * 4) Botão "Abrir Book" opcional
 */
export default function SportsAcademyCard({
  // Topo visual
  logoSrc,
  logoAlt,
  icon: Icon, // componente de ícone (ex: Trophy, MapPin, etc.)

  // Conteúdo principal
  title,
  description,

  // Redes sociais (se não passares, não aparece nada)
  instagramHref,
  facebookHref,

  // Ações
  moreHref,
  moreLabel = "Ver mais",
  bookHref,
  bookLabel = "Abrir Book",

  // Extra
  className = "",
  ...rest
}) {
  if (!title && !description) return null;

  // Flags por zona
  const showInstagram = Boolean(instagramHref);
  const showFacebook = Boolean(facebookHref);
  const showMoreButton = Boolean(moreHref);
  const showBookButton = Boolean(bookHref);

  const hasSocials = showInstagram || showFacebook;
  const hasAnyFooter = hasSocials || showMoreButton || showBookButton;

  // Caso especial 1: só Book (sem redes, sem "Ver mais")
  const onlyBook = showBookButton && !hasSocials && !showMoreButton;

  // ✅ Caso especial 2: redes + Book, sem "Ver mais" → centrar tudo
  const centerSocialsAndBook = hasSocials && showBookButton && !showMoreButton;

  const cardClasses = [styles.card, className].filter(Boolean).join(" ");

  const footerClasses = [
    styles.footer,
    onlyBook ? styles.footerSolo : "",
    centerSocialsAndBook ? styles.footerCenter : "", // 👈 novo
  ]
    .filter(Boolean)
    .join(" ");

  const actionsClasses = [
    styles.actions,
    onlyBook ? styles.actionsSolo : "",
    centerSocialsAndBook ? styles.actionsCenter : "", // 👈 novo
  ]
    .filter(Boolean)
    .join(" ");

  const hasHeaderVisual = Boolean(logoSrc) || Boolean(Icon);

  return (
    <article className={cardClasses} {...rest}>
      {/* Topo: logo (imagem) ou ícone ou nada */}
      <header className={styles.header}>
        {hasHeaderVisual && (
          <div className={styles.logoWrap}>
            {logoSrc ? (
              <img
                src={logoSrc}
                alt={logoAlt || title || ""}
                loading="lazy"
                className={styles.logo}
              />
            ) : Icon ? (
              <span className={styles.logoIconWrap}>
                <Icon className={styles.logoIcon} aria-hidden="true" />
              </span>
            ) : null}
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

      {/* Footer: redes sociais + botões (tudo opcional) */}
      {hasAnyFooter && (
        <footer className={footerClasses}>
          {/* Redes sociais */}
          {hasSocials && (
            <div className={styles.socials}>
              {showInstagram && (
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

              {showFacebook && (
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
            {showMoreButton && (
              <a
                href={moreHref}
                className={`${styles.button} ${styles.primary}`}
              >
                <span>{moreLabel}</span>
                <span className={styles.buttonIcon}>→</span>
              </a>
            )}

            {showBookButton && (
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
