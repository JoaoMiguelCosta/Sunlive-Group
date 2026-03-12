import TitleTestimonials from "./TitleTestimonials.jsx";
import DescriptionTestimonials from "./DescriptionTestimonials.jsx";
import TestimonialsAverageRating from "./TestimonialsAverageRating.jsx";
import TestimonialsSpotlight from "./TestimonialsSpotlight.jsx";

import styles from "./Testimonials.module.css";

export default function TestimonialsSection() {
  return (
    <section id="info-testimonials" className={styles.section}>
      <TitleTestimonials />
      <DescriptionTestimonials />
      <TestimonialsAverageRating />
      <TestimonialsSpotlight />
    </section>
  );
}
