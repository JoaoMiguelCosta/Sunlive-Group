import TitleCustomizedQuotes from "./TitleCustomizedQuotes.jsx";
import DescriptionCustomizedQuotes from "./DescriptionCustomizedQuotes.jsx";
import CustomizedQuotesDetails from "./CustomizedQuotesDetails.jsx";
import CustomizedQuotesActions from "./CustomizedQuotesActions.jsx";

import styles from "./CustomizedQuotes.module.css";

export default function CustomizedQuotesSection() {
  return (
    <section
      id="events-quotes"
      className={styles.section}
      aria-labelledby="customized-quotes-title"
    >
      <div className={styles.inner}>
        <TitleCustomizedQuotes titleId="customized-quotes-title" />
        <DescriptionCustomizedQuotes />
        <CustomizedQuotesDetails />
        <CustomizedQuotesActions />
      </div>
    </section>
  );
}
