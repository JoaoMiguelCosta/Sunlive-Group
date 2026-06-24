import TestimonialCard from "../../../../shared/ui/TestemonialCard/index.jsx";
import useSpotlightCycle from "../../../../../../shared/hooks/useSpotlightCycle.js";
import { resolveTravelIcon } from "../../../../config/core/iconKeyMap.js";

import styles from "./TestimonialsGrid.module.css";

function normalizeTestimonials(items = []) {
  if (!Array.isArray(items)) {
    return [];
  }

  return items.filter((item) => item?.quote && item?.author?.name);
}

export default function TestimonialsGrid({
  spotlight = {},
  testimonials = [],
  icons = {},
}) {
  const items = normalizeTestimonials(testimonials);
  const itemCount = items.length;

  const autoplayMs =
    Number.isFinite(spotlight?.autoplayMs) && spotlight.autoplayMs > 0
      ? spotlight.autoplayMs
      : 3200;

  const safeCycleLength = Math.max(itemCount, 1);

  const { index, setIndex, onMouseEnter, onMouseLeave } = useSpotlightCycle(
    safeCycleLength,
    autoplayMs,
  );

  if (itemCount === 0) {
    return null;
  }

  const handleKeyDown = (event) => {
    if (event.altKey || event.ctrlKey || event.metaKey) {
      return;
    }

    switch (event.key) {
      case "ArrowRight":
        event.preventDefault();

        setIndex((currentIndex) => (currentIndex + 1) % itemCount);
        break;

      case "ArrowLeft":
        event.preventDefault();

        setIndex((currentIndex) => (currentIndex - 1 + itemCount) % itemCount);
        break;

      case "Home":
        event.preventDefault();
        setIndex(0);
        break;

      case "End":
        event.preventDefault();
        setIndex(itemCount - 1);
        break;

      default:
        break;
    }
  };

  const goToPreviousTestimonial = () => {
    setIndex((currentIndex) => (currentIndex - 1 + itemCount) % itemCount);
  };

  const goToNextTestimonial = () => {
    setIndex((currentIndex) => (currentIndex + 1) % itemCount);
  };

  const resolveIcon = (iconKey) => resolveTravelIcon(icons, iconKey);

  const regionLabel =
    spotlight?.regionLabel ??
    "Testemunhos — usar setas esquerda e direita para navegar";

  const kicker = spotlight?.kicker ?? "Testemunhos verificados";

  const title =
    spotlight?.title ?? "O que dizem sobre a experiência Sunlive Travel";

  const description =
    spotlight?.description ??
    "Uma seleção de opiniões que destaca organização, conforto, capacidade de resposta e consistência operacional em diferentes contextos de viagem.";

  const resultsLabel = spotlight?.resultsLabel ?? "testemunhos disponíveis";

  const previousLabel = spotlight?.previousLabel ?? "Testemunho anterior";

  const nextLabel = spotlight?.nextLabel ?? "Próximo testemunho";

  const dotsLabel = spotlight?.dotsLabel ?? "Selecionar testemunho";

  return (
    <div
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
              {kicker ? <p className={styles.kicker}>{kicker}</p> : null}

              {title ? <p className={styles.title}>{title}</p> : null}

              {description ? (
                <p className={styles.description}>{description}</p>
              ) : null}
            </div>

            <p className={styles.resultsBadge}>
              <strong>{itemCount}</strong>
              <span>{resultsLabel}</span>
            </p>
          </div>

          <div className={styles.controls}>
            <button
              type="button"
              className={`${styles.arrowBtn} ${styles.prev}`}
              aria-label={previousLabel}
              onClick={goToPreviousTestimonial}
            />

            <div className={styles.dots} role="tablist" aria-label={dotsLabel}>
              {items.map((testimonial, itemIndex) => {
                const isActive = itemIndex === index;

                return (
                  <button
                    key={
                      testimonial.key ||
                      `${testimonial.author.name}-${itemIndex}`
                    }
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
              onClick={goToNextTestimonial}
            />
          </div>
        </div>

        <div className={styles.grid} role="list">
          {items.map((testimonial, itemIndex) => {
            const isActive = itemIndex === index;
            const cardId = `testimonial-card-${itemIndex}`;
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
                id={cardId}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
