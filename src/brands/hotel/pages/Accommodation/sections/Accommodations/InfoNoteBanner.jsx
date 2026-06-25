import styles from "./InfoNoteBanner.module.css";
import accommodation from "../../../../config/pages/accommodation.js";
const accommodations = accommodation.sections.accommodations;

export default function InfoNoteBanner({ className = "" }) {
  const note = accommodations?.infoNote ?? null;

  if (!note?.text) return null;

  return (
    <div
      id={note.id}
      className={[styles.wrap, className].filter(Boolean).join(" ")}
      role="note"
      aria-label={note.ariaLabel ?? "Nota importante"}
    >
      <span className={styles.icon} aria-hidden="true">
        {note.iconText ?? "i"}
      </span>

      <p className={styles.text}>{note.text}</p>
    </div>
  );
}
