import { useEffect, useId, useRef, useState } from "react";

import TestimonialCard from "../../../../shared/ui/TestimonialCard/index.jsx";
import { resolveTravelIcon } from "../../../../config/core/iconKeyMap.js";

import styles from "./TestimonialsCarousel.module.css";

const MOBILE_QUERY = "(max-width: 767px)";
const TABLET_QUERY = "(max-width: 1024px)";

function normalizeTestimonials(items = []) {
  if (!Array.isArray(items)) {
    return [];
  }

  return items.filter((item) => item?.quote && item?.author?.name);
}

function getItemsPerPage() {
  if (typeof window === "undefined" || !window.matchMedia) {
    return 3;
  }

  if (window.matchMedia(MOBILE_QUERY).matches) {
    return 1;
  }

  if (window.matchMedia(TABLET_QUERY).matches) {
    return 2;
  }

  return 3;
}

function useItemsPerPage() {
  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      return undefined;
    }

    const mobileQuery = window.matchMedia(MOBILE_QUERY);
    const tabletQuery = window.matchMedia(TABLET_QUERY);

    const handleChange = () => {
      setItemsPerPage(getItemsPerPage());
    };

    mobileQuery.addEventListener("change", handleChange);
    tabletQuery.addEventListener("change", handleChange);

    return () => {
      mobileQuery.removeEventListener("change", handleChange);
      tabletQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return itemsPerPage;
}

export default function TestimonialsCarousel({
  spotlight = {},
  testimonials = [],
  icons = {},
}) {
  const gridId = useId();
  const items = normalizeTestimonials(testimonials);
  const itemCount = items.length;

  const itemsPerPage = useItemsPerPage();
  const previousItemsPerPageRef = useRef(itemsPerPage);

  const totalPages = Math.max(Math.ceil(itemCount / itemsPerPage), 1);

  const [pageIndex, setPageIndex] = useState(0);
  const [liveMessage, setLiveMessage] = useState("");

  useEffect(() => {
    const previousItemsPerPage = previousItemsPerPageRef.current;

    if (previousItemsPerPage !== itemsPerPage) {
      setPageIndex((currentPageIndex) => {
        const previousFirstVisibleIndex =
          currentPageIndex * previousItemsPerPage;

        const nextPageIndex = Math.floor(
          previousFirstVisibleIndex / itemsPerPage,
        );

        return Math.min(Math.max(nextPageIndex, 0), totalPages - 1);
      });

      previousItemsPerPageRef.current = itemsPerPage;
    }
  }, [itemsPerPage, totalPages]);

  if (itemCount === 0) {
    return null;
  }

  const safePageIndex = Math.min(Math.max(pageIndex, 0), totalPages - 1);
  const startIndex = safePageIndex * itemsPerPage;
  const visibleItems = items.slice(startIndex, startIndex + itemsPerPage);

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

  const announceRange = (targetPageIndex) => {
    const nextStart = targetPageIndex * itemsPerPage;
    const nextRangeEnd = Math.min(nextStart + itemsPerPage, itemCount);

    setLiveMessage(`${nextStart + 1}-${nextRangeEnd} ${resultsLabel}`);
  };

  const goToPage = (targetPageIndex) => {
    const clamped = Math.min(Math.max(targetPageIndex, 0), totalPages - 1);

    setPageIndex(clamped);
    announceRange(clamped);
  };

  const goToPreviousPage = () => goToPage(safePageIndex - 1);

  const goToNextPage = () => goToPage(safePageIndex + 1);

  const handleKeyDown = (event) => {
    if (event.altKey || event.ctrlKey || event.metaKey) {
      return;
    }

    switch (event.key) {
      case "ArrowRight":
        event.preventDefault();
        goToNextPage();
        break;

      case "ArrowLeft":
        event.preventDefault();
        goToPreviousPage();
        break;

      case "Home":
        event.preventDefault();
        goToPage(0);
        break;

      case "End":
        event.preventDefault();
        goToPage(totalPages - 1);
        break;

      default:
        break;
    }
  };

  return (
    <div
      className={styles.wrapper}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label={regionLabel}
      onKeyDown={handleKeyDown}
    >
      <div aria-live="polite" aria-atomic="true" className={styles.srOnly}>
        {liveMessage}
      </div>

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

          {totalPages > 1 ? (
            <div className={styles.controls}>
              <button
                type="button"
                className={`${styles.arrowBtn} ${styles.prev}`}
                aria-label={previousLabel}
                aria-controls={gridId}
                onClick={goToPreviousPage}
                disabled={safePageIndex === 0}
              />

              <div className={styles.dots} aria-label={dotsLabel}>
                {Array.from({ length: totalPages }).map((_, pageNumber) => {
                  const isActive = pageNumber === safePageIndex;

                  return (
                    <button
                      key={pageNumber}
                      type="button"
                      className={styles.dot}
                      data-active={isActive || undefined}
                      aria-label={`${dotsLabel} ${pageNumber + 1}`}
                      aria-current={isActive ? "true" : undefined}
                      onClick={() => goToPage(pageNumber)}
                    />
                  );
                })}
              </div>

              <button
                type="button"
                className={`${styles.arrowBtn} ${styles.next}`}
                aria-label={nextLabel}
                aria-controls={gridId}
                onClick={goToNextPage}
                disabled={safePageIndex === totalPages - 1}
              />
            </div>
          ) : null}
        </div>

        <div
          className={styles.grid}
          id={gridId}
          style={{ "--items-per-page": itemsPerPage }}
        >
          {visibleItems.map((testimonial, itemIndex) => {
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
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
