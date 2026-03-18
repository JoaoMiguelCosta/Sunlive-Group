export default function LaundryIcon({
  size = 26,
  className = "",
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={[
        "lucide",
        "lucide-laundry-icon",
        "lucide-laundry",
        className,
      ].join(" ")}
      aria-hidden="true"
      {...props}
    >
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M4 8h16" />
      <circle cx="9" cy="5.5" r="0.5" fill="currentColor" stroke="none" />
      <circle cx="12" cy="14" r="4.25" />
      <path d="M10.6 12.5a2.4 2.4 0 0 1 3.2 3.2" />
    </svg>
  );
}