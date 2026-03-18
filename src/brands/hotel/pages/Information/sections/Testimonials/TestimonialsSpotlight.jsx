import hotelBrand from "../../../../config/index.js";
import useSpotlightCycle from "../../../../../../shared/hooks/useSpotlightCycle.js";

import HotelTestimonialSpotlightCard from "../../../../shared/ui/HotelTestimonialSpotlightCard/HotelTestimonialSpotlightCard.jsx";

import styles from "./TestimonialsSpotlight.module.css";

function chunkItems(items = [], size = 3) {
  const chunks = [];

  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size));
  }

  return chunks;
}

export default function TestimonialsSpotlight() {
  const content =
    hotelBrand?.pages?.information?.sections?.testimonials?.spotlight ?? null;

  if (!content?.items?.length) return null;

  const {
    id,
    autoplayMs = 3500,
    cardsPerSlide = 3,
    items,
    navigation = {},
  } = content;

  const slides = chunkItems(items, cardsPerSlide);
  const { index, setIndex } = useSpotlightCycle(slides.length, autoplayMs);

  const activeSlide = slides[index] ?? [];

  const handlePrevious = () => {
    setIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setIndex((current) => (current + 1) % slides.length);
  };

  return (
    <div id={id} className={styles.wrapper}>
      <button
        type="button"
        className={`${styles.navButton} ${styles.navPrev}`}
        onClick={handlePrevious}
        aria-label="Ver testemunhos anteriores"
      >
        {navigation.previousIcon ?? "‹"}
      </button>

      <div className={styles.viewport}>
        <div className={styles.grid}>
          {activeSlide.map((item) => (
            <HotelTestimonialSpotlightCard
              key={item.id}
              organisation={item.organisation}
              context={item.context}
              category={item.category}
              rating={item.rating}
              quote={item.quote}
              dateLabel={item.dateLabel}
              profileIcon={navigation.profileIcon}
              quoteIcon={navigation.quoteIcon}
              locationIcon={navigation.locationIcon}
              dateIcon={navigation.dateIcon}
              starIcon={navigation.starIcon}
            />
          ))}
        </div>

        <div className={styles.dots} aria-label="Paginação de testemunhos">
          {slides.map((slide, slideIndex) => (
            <button
              key={`dot-${slide[0]?.id ?? slideIndex}`}
              type="button"
              className={`${styles.dot} ${
                slideIndex === index ? styles.dotActive : ""
              }`}
              onClick={() => setIndex(slideIndex)}
              aria-label={`Ir para grupo ${slideIndex + 1}`}
              aria-pressed={slideIndex === index}
            />
          ))}
        </div>
      </div>

      <button
        type="button"
        className={`${styles.navButton} ${styles.navNext}`}
        onClick={handleNext}
        aria-label="Ver próximos testemunhos"
      >
        {navigation.nextIcon ?? "›"}
      </button>
    </div>
  );
}