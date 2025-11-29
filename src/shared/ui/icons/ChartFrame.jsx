// src/shared/ui/icons/ChartFrameIcon.jsx
export default function ChartFrameIcon({
  size = 26,
  color = "currentColor", // por defeito herda de CSS
  className = "",
  ...props
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      fill="none"
      stroke={color} // segue o mesmo padrão do MedalIcon
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Moldura */}
      <rect x="3.5" y="3.5" width="17" height="17" />

      {/* Linha em zig-zag */}
      <polyline points="5 14 9 14 11 10 13 14 15 8 19 8" />
    </svg>
  );
}
