export default function RingIcon({
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
        "lucide-ring-icon",
        "lucide-ring",
        className,
      ].join(" ")}
      aria-hidden="true"
      {...props}
    >
      <path d="M12 4.8 14.5 7.7H9.5L12 4.8Z" />
      <path d="M9.5 7.7h5" />
      <path d="M8.2 7.7 6.4 10.1" />
      <path d="M15.8 7.7 17.6 10.1" />
      <path d="M9.3 7.7 10.9 13.2" />
      <path d="M14.7 7.7 13.1 13.2" />
      <path d="M6.4 10.1h11.2" />
      <circle cx="12" cy="16.7" r="5.2" />
    </svg>
  );
}