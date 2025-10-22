// OverviewSection/BrandLogoSVG.jsx
import styles from "./BrandLogoSVG.module.css";

export default function BrandLogoSVG({ className = "", ...rest }) {
  const cls = className ? `${styles.logo} ${className}` : styles.logo;

  return (
    <svg
      viewBox="0 0 1200 500"
      className={cls}
      role="img"
      aria-label="Sunlive Group"
      {...rest}
    >
      <defs>
        {/* Variáveis CSS (definidas no .logo) controlam estas cores */}
        <linearGradient id="metalFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--metal-1)" />
          <stop offset="25%" stopColor="var(--metal-2)" />
          <stop offset="50%" stopColor="var(--metal-1)" />
          <stop offset="75%" stopColor="var(--metal-3)" />
          <stop offset="100%" stopColor="var(--metal-4)" />
        </linearGradient>

        <linearGradient id="goldStroke" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--gold-1)" />
          <stop offset="50%" stopColor="var(--gold-2)" />
          <stop offset="100%" stopColor="var(--gold-1)" />
        </linearGradient>

        <filter id="softShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow
            dx="0"
            dy="4"
            stdDeviation="3"
            floodColor="black"
            floodOpacity="0.45"
          />
        </filter>
      </defs>

      {/* SUNLIVE */}
      <g filter="url(#softShadow)" transform="translate(50,160)">
        <text
          x="550"
          y="0"
          textAnchor="middle"
          className={styles.wordMain}
          fill="url(#metalFill)"
          stroke="url(#goldStroke)"
          strokeWidth="6"
        >
          SUNLIVE
        </text>
      </g>

      {/* GROUP */}
      <g filter="url(#softShadow)" transform="translate(50,280)">
        <text
          x="550"
          y="0"
          textAnchor="middle"
          className={styles.wordSub}
          fill="url(#metalFill)"
          stroke="url(#goldStroke)"
          strokeWidth="4"
        >
          GROUP
        </text>
      </g>
    </svg>
  );
}
