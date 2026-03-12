import hotelBrand from "../../../../config/index.js";
import styles from "./HowToParticipateClosingQuote.module.css";

export default function HowToParticipateClosingQuote() {
  const section =
    hotelBrand?.pages?.sustainability?.sections?.howToParticipate ?? null;

  const quote = section?.closingQuote?.text ?? null;

  if (!quote) return null;

  return (
    <div className={styles.quoteBlock}>
      <p className={styles.quote}>{quote}</p>
    </div>
  );
}
