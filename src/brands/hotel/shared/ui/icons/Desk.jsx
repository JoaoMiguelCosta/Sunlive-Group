// src/brands/hotel/shared/ui/icons/Desk.jsx
export default function DeskIcon({ size = 26, className = "", ...props }) {
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
      className={["lucide", "lucide-desk-icon", "lucide-desk", className].join(
        " ",
      )}
      aria-hidden="true"
      {...props}
    >
      <path d="M3 8h18" />
      <path d="M5 8v10" />
      <path d="M19 8v10" />
      <path d="M8 18V12" />
      <path d="M16 18V12" />
      <path d="M8 12h8" />
      <path d="M10 15h4" />
    </svg>
  );
}
