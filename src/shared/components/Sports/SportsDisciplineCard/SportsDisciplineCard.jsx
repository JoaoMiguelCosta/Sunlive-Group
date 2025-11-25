// src/shared/components/Sports/SportsDisciplineCard/SportsDisciplineCard.jsx
import styles from "./SportsDisciplineCard.module.css";

/**
 * SportsDisciplineCard
 * Card simples para descrever uma disciplina/modalidade.
 *
 * Props:
 *  - title: string (obrigatório para mostrar header)
 *  - description: string (texto do corpo)
 *  - className?: string (classes extra)
 *  - ...rest: restantes props para o <article>
 */
export default function SportsDisciplineCard({
  title,
  description,
  className = "",
  ...rest
}) {
  if (!title && !description) return null;

  const cardClasses = [styles.card, className].filter(Boolean).join(" ");

  return (
    <article className={cardClasses} {...rest}>
      {title && (
        <header className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
        </header>
      )}

      {description && (
        <div className={styles.body}>
          <p className={styles.description}>{description}</p>
        </div>
      )}
    </article>
  );
}
