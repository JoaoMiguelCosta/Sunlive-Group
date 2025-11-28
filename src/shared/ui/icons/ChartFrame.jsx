export default function ChartFrameIcon({
  className = "",
  size = 24,
  ...props
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      className={className}
      {...props}
    >
      {/* Moldura */}
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      />

      {/* Linha em zig-zag */}
      <polyline
        points="5 14 9 14 11 10 13 14 15 8 19 8"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}
