// src/shared/ui/icons/BusinessPerson.jsx
export default function BusinessPersonIcon({
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
      stroke="#e4bf07"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={[
        "lucide",
        "lucide-tuxedo-icon",
        "lucide-tuxedo",
        className,
      ].join(" ")}
      aria-hidden="true"
      {...props}
    >
      <path d="M10 3v2l4-2v2Z" />
      <path d="M18 3h1a2 2 0 0 1 1.7 3A5270.5 5270.5 0 0 0 12 21S6.8 12 3.3 6A2 2 0 0 1 5 3h1" />
      <path d="M12 9h.01" />
      <path d="M12 13h.01" />
      <path d="M21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5" />
    </svg>
  );
}
