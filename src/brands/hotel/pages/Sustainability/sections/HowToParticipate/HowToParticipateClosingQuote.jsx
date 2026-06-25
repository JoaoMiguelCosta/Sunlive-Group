import sustainability from "../../../../config/pages/sustainability.js";
const howToParticipate = sustainability.sections.howToParticipate;
import styles from "./HowToParticipateClosingQuote.module.css";

export default function HowToParticipateClosingQuote() {
  const section = howToParticipate;

  const quoteBlock = section?.closingQuote ?? null;
  const quoteText = quoteBlock?.text ?? null;
  const eyebrow = quoteBlock?.eyebrow ?? null;

  if (!quoteText) return null;

  return (
    <div className={styles.quoteBlock}>
      {eyebrow ? <span className={styles.eyebrow}>{eyebrow}</span> : null}

      <p className={styles.quote}>“{quoteText.replace(/^["“]|["”]$/g, "")}”</p>
    </div>
  );
}
