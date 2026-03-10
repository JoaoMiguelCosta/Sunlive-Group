import TitleCateringService from "./TitleCateringService.jsx";
import DescriptionCateringService from "./DescriptionCateringService.jsx";
import CateringProcessSteps from "./CateringProcessSteps.jsx";
import CateringInfoLists from "./CateringInfoLists.jsx";

import styles from "./CateringService.module.css";

export default function CateringServiceSection() {
  return (
    <section id="restaurant-catering" className={styles.section}>
      <TitleCateringService />
      <DescriptionCateringService />
      <CateringProcessSteps />
      <CateringInfoLists />
    </section>
  );
}
