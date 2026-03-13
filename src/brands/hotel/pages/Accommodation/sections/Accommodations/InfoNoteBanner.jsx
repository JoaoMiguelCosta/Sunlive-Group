import styles from "./InfoNoteBanner.module.css";
import hotelBrand from "../../../../config/index.js";

export default function InfoNoteBanner({ className = "" }) {
  const note =
    hotelBrand?.pages?.accommodation?.sections?.accommodations?.infoNote ??
    null;

  if (!note?.text) return null;

  return (
    <div
      id={note.id}
      className={[styles.wrap, className].filter(Boolean).join(" ")}
      role="note"
      aria-label="Nota importante"
    >
      <span className={styles.icon} aria-hidden="true">
        i
      </span>

      <p className={styles.text}>{note.text}</p>
    </div>
  );
}
