// src/brands/hotel/shared/ui/icons/Wardrobe.jsx
export default function WardrobeIcon({ size = 26, className = "", ...props }) {
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
        "lucide-wardrobe-icon",
        "lucide-wardrobe",
        className,
      ].join(" ")}
      aria-hidden="true"
      {...props}
    >
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M12 3v18" />
      <path d="M9.25 10.5h.01" />
      <path d="M14.75 10.5h.01" />
      <path d="M7 21v-2" />
      <path d="M17 21v-2" />
    </svg>
  );
}
