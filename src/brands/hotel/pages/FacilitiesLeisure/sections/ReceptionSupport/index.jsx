import TitleReceptionSupport from "./TitleReceptionSupport.jsx";
import DescriptionReceptionSupport from "./DescriptionReceptionSupport.jsx";
import ReceptionSupportServices from "./ReceptionSupportServices.jsx";
import ReceptionSupportAvailability from "./ReceptionSupportAvailability.jsx";

import styles from "./ReceptionSupport.module.css";

export default function ReceptionSupportSection() {
  return (
    <section id="facilities-reception" className={styles.section}>
      <TitleReceptionSupport />
      <DescriptionReceptionSupport />
      <ReceptionSupportServices />
      <ReceptionSupportAvailability />
    </section>
  );
}
