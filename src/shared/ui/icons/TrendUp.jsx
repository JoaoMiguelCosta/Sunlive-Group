// src/shared/ui/icons/TrendUpIcon.jsx
export default function TrendUpIcon({
  className = "",
  size = 24,
  strokeWidth = 1.75, // ajusta p/ +/− presença
  ...props
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {/* Linha em zig-zag a subir */}
      <polyline points="4 16 9 11 13 15 20 8" />
      {/* Cabeça da seta */}
      <polyline points="16 8 20 8 20 12" />
    </svg>
  );
}
