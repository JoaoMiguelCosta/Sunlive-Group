import { useCallback, useRef } from "react";
import styles from "./TestimonialsGrid.module.css";
import travelBrand from "../../config/index.js";
import TestimonialCard from "../../shared/ui/TestemonialCard/index.jsx";
import useSpotlightCycle from "../../../../shared/hooks/useSpotlightCycle.js";

export default function TestimonialsGrid() {
  const items =
    travelBrand?.sections?.testimonialsAndMetrics?.testimonials ?? [];

  if (!Array.isArray(items) || items.length === 0) return null;

  const validItems = items.filter((item) => item?.quote && item?.author);

  if (validItems.length === 0) return null;

  const { index, setIndex, onMouseEnter, onMouseLeave } = useSpotlightCycle(
    validItems.length,
    2500,
  );

  const wrapRef = useRef(null);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.altKey || event.ctrlKey || event.metaKey) return;

      switch (event.key) {
        case "ArrowRight":
          event.preventDefault();
          setIndex((currentIndex) => (currentIndex + 1) % validItems.length);
          break;

        case "ArrowLeft":
          event.preventDefault();
          setIndex(
            (currentIndex) =>
              (currentIndex - 1 + validItems.length) % validItems.length,
          );
          break;

        case "Home":
          event.preventDefault();
          setIndex(0);
          break;

        case "End":
          event.preventDefault();
          setIndex(validItems.length - 1);
          break;

        default:
          break;
      }
    },
    [setIndex, validItems.length],
  );

  const goPrev = () =>
    setIndex(
      (currentIndex) =>
        (currentIndex - 1 + validItems.length) % validItems.length,
    );

  const goNext = () =>
    setIndex((currentIndex) => (currentIndex + 1) % validItems.length);

  const resolveIcon = (key) =>
    (travelBrand?.icons && travelBrand.icons[key]) || travelBrand?.icons?.star;

  return (
    <div
      ref={wrapRef}
      className={styles.wrap}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Testemunhos — usar setas esquerda e direita para navegar"
    >
      <div className={styles.controls}>
        <button
          type="button"
          className={`${styles.arrowBtn} ${styles.prev}`}
          aria-label="Testemunho anterior"
          onClick={goPrev}
        />

        <div className={styles.dots} role="tablist" aria-label="Testemunhos">
          {validItems.map((_, itemIndex) => {
            const isActive = itemIndex === index;

            return (
              <button
                key={itemIndex}
                type="button"
                className={styles.dot}
                data-active={isActive || undefined}
                aria-label={`Ver testemunho ${itemIndex + 1}`}
                aria-controls={`tcard-${itemIndex}`}
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
          aria-label="Próximo testemunho"
          onClick={goNext}
        />
      </div>

      <div className={styles.grid} role="list">
        {validItems.map((testimonial, itemIndex) => {
          const isActive = itemIndex === index;
          const id = `tcard-${itemIndex}`;
          const Icon = resolveIcon(testimonial.iconKey);

          return (
            <TestimonialCard
              key={testimonial.key || `${testimonial.author}-${itemIndex}`}
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
  );
}
