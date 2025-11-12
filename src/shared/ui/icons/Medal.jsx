// src/shared/ui/icons/Medal.jsx
export default function MedalIcon({
  size = 32, // ↑ tamanho mínimo legível
  fill = "var(--sl-gold-400, #C78615)", // cor do medalhão
  stroke = "var(--sl-gold-700, #7A4A0A)", // cor do traço/contorno (mais escura)
  strokeWidth = 1.6,
  ...props
}) {
  const w = size;
  const h = size;

  return (
    <svg
      viewBox="0 0 24 24"
      width={w}
      height={h}
      aria-hidden="true"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      vectorEffect="non-scaling-stroke"
      {...props}
    >
      {/* fitas (simples para funcionar a 14–16px) */}
      <path fill="none" d="M6 3h5l1 3 1-3h5l-4 6H10L6 3z" />
      {/* aro da medalha */}
      <circle cx="12" cy="16.5" r="5" fill={fill} />
      {/* contorno do medalhão (reforça o desenho) */}
      <circle cx="12" cy="16.5" r="5" fill="none" />
      {/* estrela pequena gravada (opcional mas legível) */}
      <path
        d="M12 14.6l.8 1.6 1.8.26-1.3 1.27.31 1.82-1.61-.85-1.61.85.31-1.82L9.4 16.46l1.8-.26z"
        fill="none"
      />
    </svg>
  );
}
