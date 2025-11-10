// src/shared/ui/icons/Medal.jsx
export default function MedalIcon({
  color = "var(--sl-gold-400, #C78615)",
  size,
  width = "14",
  height = "14",
  strokeWidth = 2,
  ...props
}) {
  const w = size ?? width;
  const h = size ?? height;

  return (
    <svg
      viewBox="0 0 24 24"
      width={w}
      height={h}
      aria-hidden="true"
      fill={color}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" />
      <path d="M11 12 5.12 2.2" />
      <path d="m13 12 5.88-9.8" />
      <path d="M8 7h8" />
      <circle cx="12" cy="17" r="5" />
      <path d="M12 18v-2h-.5" />
    </svg>
  );
}
