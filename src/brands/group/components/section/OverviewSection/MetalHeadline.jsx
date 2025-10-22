// OverviewSection/MetalHeadline.jsx
import styles from "./MetalHeadline.module.css";

export default function MetalHeadline({
  title,
  subtitle,
  className = "",
  ...rest
}) {
  const cls = className ? `${styles.headline} ${className}` : styles.headline;

  return (
    <svg
      viewBox="0 0 1200 220"
      className={cls}
      role="img"
      aria-label={`${title}. ${subtitle}`}
      {...rest}
    >
      <defs>
        <linearGradient id="mhFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--mh-metal-1)" />
          <stop offset="20%" stopColor="var(--mh-metal-2)" />
          <stop offset="40%" stopColor="var(--mh-metal-3)" />
          <stop offset="60%" stopColor="var(--mh-metal-4)" />
          <stop offset="80%" stopColor="var(--mh-metal-5)" />
          <stop offset="100%" stopColor="var(--mh-metal-6)" />
        </linearGradient>

        <linearGradient id="mhStroke" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--mh-gold-1)" />
          <stop offset="50%" stopColor="var(--mh-gold-2)" />
          <stop offset="100%" stopColor="var(--mh-gold-1)" />
        </linearGradient>

        <filter id="mhBevel" x="-20%" y="-50%" width="140%" height="200%">
          <feDropShadow
            dx="0"
            dy="3"
            stdDeviation="1.6"
            floodColor="black"
            floodOpacity="0.55"
          />
          <feDropShadow
            dx="0"
            dy="1"
            stdDeviation="0.6"
            floodColor="var(--mh-gold-1)"
            floodOpacity="0.85"
          />
        </filter>
      </defs>

      <g filter="url(#mhBevel)" className={styles.group}>
        <text
          x="600"
          y="95"
          className={styles.title}
          fill="url(#mhFill)"
          stroke="url(#mhStroke)"
          strokeWidth="2.2"
        >
          {title}
        </text>

        <text
          x="600"
          y="165"
          className={styles.subtitle}
          fill="url(#mhFill)"
          stroke="url(#mhStroke)"
          strokeWidth="1.6"
        >
          {subtitle}
        </text>
      </g>
    </svg>
  );
}
