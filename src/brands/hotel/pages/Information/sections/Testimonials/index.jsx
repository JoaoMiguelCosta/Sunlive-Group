import hotelBrand from "../../../../config/index.js";

import TitleTestimonials from "./TitleTestimonials.jsx";
import DescriptionTestimonials from "./DescriptionTestimonials.jsx";
import TestimonialsAverageRating from "./TestimonialsAverageRating.jsx";
import TestimonialsSpotlight from "./TestimonialsSpotlight.jsx";

import styles from "./Testimonials.module.css";

export default function TestimonialsSection() {
  const section =
    hotelBrand?.pages?.information?.sections?.testimonials ?? null;

  if (!section) return null;

  const sectionId = section.id ?? "informacoes-testemunhos";
  const titleId = `${sectionId}-title`;

  const backgroundImageSrc = section?.backgroundMedia?.imageSrc ?? null;
  const backgroundImageAlt = section?.backgroundMedia?.imageAlt ?? "";

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
    >
      {backgroundImageSrc ? (
        <div className={styles.mediaLayer} aria-hidden="true">
          <img
            src={backgroundImageSrc}
            alt={backgroundImageAlt}
            className={styles.backgroundImage}
          />
        </div>
      ) : null}

      <div className={styles.overlayLayer} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.headerBlock}>
          <TitleTestimonials titleId={titleId} />
          <DescriptionTestimonials />
        </div>

        <TestimonialsAverageRating />
        <TestimonialsSpotlight />
      </div>
    </section>
  );
}
