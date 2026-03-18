export default function FamiliesIcon({
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
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={[
        "lucide",
        "lucide-families-icon",
        "lucide-families",
        className,
      ].join(" ")}
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="7.2" r="2.35" />
      <path d="M8.55 18c.18-2.45 1.55-4.15 3.45-4.15s3.27 1.7 3.45 4.15" />

      <circle cx="6.15" cy="8.7" r="1.95" />
      <path d="M3.15 17.35c.14-2.02 1.23-3.45 3-3.45 1.08 0 1.98.5 2.62 1.52" />

      <circle cx="17.85" cy="8.7" r="1.95" />
      <path d="M20.85 17.35c-.14-2.02-1.23-3.45-3-3.45-1.08 0-1.98.5-2.62 1.52" />
    </svg>
  );
}