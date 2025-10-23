import styles from "./Acknowledgements.module.css";

/**
 * Acknowledgements — faixa com as logomarcas (PRR, República Portuguesa, UE).
 * Ao clicar na imagem abre o PDF em nova aba.
 *
 * Props: { data: { image:{src,alt,...}, link:{href,target,rel,ariaLabel} } }
 */
export default function Acknowledgements({ data }) {
  if (!data?.image?.src) return null;

  const { image, link } = data;

  const Img = (
    <img
      className={styles.img}
      src={image.src}
      alt={image.alt || "Acknowledgements"}
      loading={image.loading || "lazy"}
      decoding={image.decoding || "async"}
    />
  );

  return (
    <section className={styles.sectionWrap} aria-label="Acknowledgements">
      <div className={styles.inner}>
        {link?.href ? (
          <a
            className={styles.click}
            href={link.href}
            target={link.target || "_blank"}
            rel={link.rel || "noopener"}
            aria-label={link.ariaLabel || "Abrir PDF"}
          >
            {Img}
          </a>
        ) : (
          Img
        )}
      </div>
    </section>
  );
}
