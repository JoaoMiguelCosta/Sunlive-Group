// src/brands/hotel/shared/ui/icons/TowelRack.jsx
export default function TowelRackIcon({ size = 26, className = "", ...props }) {
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
        "lucide-towel-rack-icon",
        "lucide-towel-rack",
        className,
      ].join(" ")}
      aria-hidden="true"
      {...props}
    >
      <path d="M22 7h-2" />
      <path d="M6.5 3h11A2.5 2.5 0 0 1 20 5.5V20a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1V5.5a1 1 0 0 0-5 0V17a1 1 0 0 0 1 1h4" />
      <path d="M9 7H2" />
    </svg>
  );
}
