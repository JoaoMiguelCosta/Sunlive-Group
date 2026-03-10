import TitleSundayBuffet from "./TitleSundayBuffet.jsx";
import DescriptionSundayBuffet from "./DescriptionSundayBuffet.jsx";
import SundayBuffetGalleryCta from "./SundayBuffetGalleryCta.jsx";

import styles from "./SundayBuffet.module.css";

export default function SundayBuffetSection() {
  return (
    <section id="restaurant-buffet" className={styles.section}>
      <TitleSundayBuffet />
      <DescriptionSundayBuffet />
      <SundayBuffetGalleryCta />
    </section>
  );
}
