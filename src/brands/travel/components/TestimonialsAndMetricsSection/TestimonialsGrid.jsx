import styles from "./TestimonialsGrid.module.css";
import travelBrand from "../../ConfigTravel.jsx";
import TestemonialCard from "../../../../shared/components/TestemonialCard/index.jsx";
import { StarIcon } from "../../../../shared/ui/icons/index.js";
import useSpotlightCycle from "../../../../shared/hooks/useSpotlightCycle.js";
import { useCallback, useRef } from "react";

export default function TestimonialsGrid() {
  const items = travelBrand?.sections?.testimonialsAndMetrics?.testimonials;
  if (!items?.length) return null;

  // usa o hook local (podes ajustar o tempo aqui)
  const { index, setIndex, onMouseEnter, onMouseLeave } = useSpotlightCycle(
    items.length,
    2500
  );

  const wrapRef = useRef(null);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.altKey || e.ctrlKey || e.metaKey) return;

      switch (e.key) {
        case "ArrowRight":
          e.preventDefault();
          setIndex((i) => (i + 1) % items.length);
          break;
        case "ArrowLeft":
          e.preventDefault();
          setIndex((i) => (i - 1 + items.length) % items.length);
          break;
        case "Home":
          e.preventDefault();
          setIndex(0);
          break;
        case "End":
          e.preventDefault();
          setIndex(items.length - 1);
          break;
        default:
          break;
      }
    },
    [items.length, setIndex]
  );

  return (
    <div
      ref={wrapRef}
      className={styles.wrap}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Testemunhos — usar setas esquerda/direita para navegar"
    >
      {/* Dots em cima */}
      <div className={styles.dots} role="tablist" aria-label="Testemunhos">
        {items.map((_, i) => {
          const active = i === index;
          return (
            <button
              key={i}
              type="button"
              className={styles.dot}
              data-active={active}
              aria-label={`Ver testemunho ${i + 1}`}
              aria-controls={`tcard-${i}`}
              aria-current={active ? "true" : undefined}
              onClick={() => setIndex(i)}
            />
          );
        })}
      </div>

      <div className={styles.grid} role="list">
        {items.map((t, i) => {
          const active = i === index;
          const id = `tcard-${i}`;
          return (
            <TestemonialCard
              key={t.key || t.quote}
              quote={t.quote}
              rating={t.rating}
              author={t.author}
              Icon={StarIcon}
              className={styles.item}
              data-active={active}
              aria-current={active ? "true" : undefined}
              id={id}
            />
          );
        })}
      </div>
    </div>
  );
}
