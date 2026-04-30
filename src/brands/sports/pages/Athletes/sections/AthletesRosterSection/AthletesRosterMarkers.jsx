import styles from "./AthletesRosterMarkers.module.css";

export default function AthletesRosterMarkers({ markers }) {
  if (markers.length === 0) return null;

  return (
    <ul className={styles.markers}>
      {markers.map((marker) => (
        <li key={marker}>
          <span aria-hidden="true" />
          {marker}
        </li>
      ))}
    </ul>
  );
}
