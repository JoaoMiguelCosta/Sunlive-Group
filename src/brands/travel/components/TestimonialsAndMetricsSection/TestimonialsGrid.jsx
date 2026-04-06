import { useCallback, useMemo, useRef } from "react";
import styles from "./TestimonialsGrid.module.css";
import travelBrand from "../../config/index.js";
import TestimonialCard from "../../shared/ui/TestemonialCard/index.jsx";
import useSpotlightCycle from "../../../../shared/hooks/useSpotlightCycle.js";

function normalizeTestimonials(items = []) {
  if (!Array.isArray(items)) return [];

  return items.filter((item) => item?.quote && item?.author?.name);
}

export default function TestimonialsGrid() {
  const section = travelBrand?.sections?.testimonialsAndMetrics ?? null;
  if (!section) return null;

  const spotlight = section?.spotlight ?? {};
  const items = normalizeTestimonials(section?.testimonials ?? []);
  if (items.length === 0) return null;

  const autoplayMs =
    Number.isFinite(spotlight?.autoplayMs) && spotlight.autoplayMs > 0
      ? spotlight.autoplayMs
      : 3200;

  const { index, setIndex, onMouseEnter, onMouseLeave } = useSpotlightCycle(
    items.length,
    autoplayMs,
  );

  const wrapRef = useRef(null);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.altKey || event.ctrlKey || event.metaKey) return;

      switch (event.key) {
        case "ArrowRight":
          event.preventDefault();
          setIndex((currentIndex) => (currentIndex + 1) % items.length);
          break;

        case "ArrowLeft":
          event.preventDefault();
          setIndex(
            (currentIndex) => (currentIndex - 1 + items.length) % items.length,
          );
          break;

        case "Home":
          event.preventDefault();
          setIndex(0);
          break;

        case "End":
          event.preventDefault();
          setIndex(items.length - 1);
          break;

        default:
          break;
      }
    },
    [items.length, setIndex],
  );

  const goPrev = () =>
    setIndex(
      (currentIndex) => (currentIndex - 1 + items.length) % items.length,
    );

  const goNext = () =>
    setIndex((currentIndex) => (currentIndex + 1) % items.length);

  const resolveIcon = useCallback(
    (key) =>
      (travelBrand?.icons && travelBrand.icons[key]) ||
      travelBrand?.icons?.star,
    [],
  );

  const regionLabel =
    spotlight?.regionLabel ??
    "Testemunhos — usar setas esquerda e direita para navegar";

  const kicker = spotlight?.kicker ?? "Testemunhos verificados";
  const title =
    spotlight?.title ?? "O que dizem sobre a experiência Sunlive Travel";
  const description =
    spotlight?.description ??
    "Uma seleção de opiniões que destaca conforto, organização, segurança e capacidade de resposta em diferentes contextos de viagem.";
  const resultsLabel = spotlight?.resultsLabel ?? "testemunhos disponíveis";
  const previousLabel = spotlight?.previousLabel ?? "Testemunho anterior";
  const nextLabel = spotlight?.nextLabel ?? "Próximo testemunho";
  const dotsLabel = spotlight?.dotsLabel ?? "Selecionar testemunho";

  const resultsCount = useMemo(() => items.length, [items.length]);

  return (
    <div
      ref={wrapRef}
      className={styles.wrapper}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label={regionLabel}
    >
      <div className={styles.shell}>
        <div className={styles.topbar}>
          <div className={styles.topbarInner}>
            <div className={styles.topbarCopy}>
              <p className={styles.kicker}>{kicker}</p>
              <p className={styles.title}>{title}</p>
              {description ? (
                <p className={styles.description}>{description}</p>
              ) : null}
            </div>

            <p className={styles.resultsBadge}>
              <strong>{resultsCount}</strong>
              <span>{resultsLabel}</span>
            </p>
          </div>

          <div className={styles.controls}>
            <button
              type="button"
              className={`${styles.arrowBtn} ${styles.prev}`}
              aria-label={previousLabel}
              onClick={goPrev}
            />

            <div className={styles.dots} role="tablist" aria-label={dotsLabel}>
              {items.map((_, itemIndex) => {
                const isActive = itemIndex === index;

                return (
                  <button
                    key={itemIndex}
                    type="button"
                    className={styles.dot}
                    data-active={isActive || undefined}
                    aria-label={`Ver testemunho ${itemIndex + 1}`}
                    aria-controls={`testimonial-card-${itemIndex}`}
                    aria-selected={isActive}
                    role="tab"
                    onClick={() => setIndex(itemIndex)}
                  />
                );
              })}
            </div>

            <button
              type="button"
              className={`${styles.arrowBtn} ${styles.next}`}
              aria-label={nextLabel}
              onClick={goNext}
            />
          </div>
        </div>

        <div className={styles.grid} role="list">
          {items.map((testimonial, itemIndex) => {
            const isActive = itemIndex === index;
            const id = `testimonial-card-${itemIndex}`;
            const Icon = resolveIcon(testimonial.iconKey);

            return (
              <TestimonialCard
                key={
                  testimonial.key || `${testimonial.author.name}-${itemIndex}`
                }
                quote={testimonial.quote}
                rating={testimonial.rating}
                author={testimonial.author}
                Icon={Icon}
                className={styles.item}
                data-active={isActive || undefined}
                aria-current={isActive ? "true" : undefined}
                id={id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
