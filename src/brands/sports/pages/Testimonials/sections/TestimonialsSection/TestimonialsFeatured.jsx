import { forwardRef } from "react";

import {
  getImageStyle,
  getValidArray,
  isValidText,
} from "./testimonialsSection.utils.js";

import styles from "./TestimonialsFeatured.module.css";

const TestimonialsFeatured = forwardRef(function TestimonialsFeatured(
  {
    testimonial,
    testimonialKey,
    resolvedActiveIndex,
    panelId,
    activeTabId,
  },
  ref,
) {
  const description = getValidArray(testimonial?.description);
  const quote = getValidArray(testimonial?.quote);

  return (
    <article
      ref={ref}
      id={panelId}
      className={styles.featured}
      role="tabpanel"
      tabIndex={-1}
      aria-labelledby={activeTabId}
    >
      <div className={styles.mediaColumn}>
        <figure
          className={styles.portraitFrame}
          style={getImageStyle(testimonial.image, "featured")}
        >
          <img
            src={testimonial.image.src}
            alt={testimonial.image.alt || testimonial.name}
            className={styles.portrait}
            loading={resolvedActiveIndex === 0 ? "eager" : "lazy"}
            decoding="async"
          />
        </figure>
      </div>

      <div className={styles.statementColumn}>
        <div className={styles.identity}>
          {isValidText(testimonial.category) && (
            <p className={styles.category}>{testimonial.category}</p>
          )}

          <h3 className={styles.name}>{testimonial.name}</h3>

          {description.length > 0 && (
            <div className={styles.description}>
              {description.map((line, index) => (
                <p key={`${testimonialKey}-description-${index}`}>{line}</p>
              ))}
            </div>
          )}
        </div>

        {quote.length > 0 && (
          <blockquote className={styles.quote}>
            <span className={styles.quoteMark} aria-hidden="true">
              “
            </span>

            <div className={styles.quoteText}>
              {quote.map((paragraph, index) => (
                <p key={`${testimonialKey}-quote-${index}`}>{paragraph}</p>
              ))}
            </div>
          </blockquote>
        )}
      </div>
    </article>
  );
});

export default TestimonialsFeatured;
