// src/shared/ui/icons/Phone.jsx
export default function PhoneIcon({ className, ...rest }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden="true"
      className={className}
      {...rest}
    >
      <path
        d="M6.5 3.5l3 2.5-2 3s2.5 5 7 7l3-2 2.5 3c.5.7.4 1.6-.2 2.1-1.5 1.2-3.6 2-5.8 1.2-6.4-2.3-9.8-7.1-11-11-.8-2.2 0-4.3 1.2-5.8.5-.6 1.4-.7 2.1-.2z"
        fill="none"
        stroke="currentColor" // 👈 cor vem do CSS
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}
