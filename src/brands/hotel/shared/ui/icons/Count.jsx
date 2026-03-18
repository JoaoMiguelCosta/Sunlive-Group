export default function CountIcon({
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
        "lucide-count-icon",
        "lucide-count",
        className,
      ].join(" ")}
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M12 4v16" />
      <path d="M7.5 8v8" />
      <path d="M6.5 9h2" />
      <path d="M14.5 9.5c0-1 1-1.5 2-1.5s2 .5 2 1.5c0 .8-.6 1.3-1.3 1.8L15 13.5h3.5" />
    </svg>
  );
}