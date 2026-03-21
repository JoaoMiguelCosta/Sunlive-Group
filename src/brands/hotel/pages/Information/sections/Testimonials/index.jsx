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

  const sectionId = section.id ?? "info-testimonials";
  const titleId = `${sectionId}-title`;

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
    >
      <div className={styles.inner}>
        <TitleTestimonials titleId={titleId} />
        <DescriptionTestimonials />
        <TestimonialsAverageRating />
        <TestimonialsSpotlight />
      </div>
    </section>
  );
}
