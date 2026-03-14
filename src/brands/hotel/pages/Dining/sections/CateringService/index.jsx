import TitleCateringService from "./TitleCateringService.jsx";
import DescriptionCateringService from "./DescriptionCateringService.jsx";
import CateringProcessSteps from "./CateringProcessSteps.jsx";
import CateringInfoLists from "./CateringInfoLists.jsx";

import styles from "./CateringService.module.css";

export default function CateringServiceSection() {
  return (
    <section
      id="restaurant-catering"
      className={styles.section}
      aria-labelledby="restaurant-catering-title"
    >
      <div className={styles.inner}>
        <div className={styles.headerBlock}>
          <TitleCateringService />
          <DescriptionCateringService />
        </div>

        <div className={styles.contentStack}>
          <CateringProcessSteps />
          <CateringInfoLists />
        </div>
      </div>
    </section>
  );
}
