export default function Plane({ className = "", size = 24, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path
        fill="currentColor"
        d="M21 16v2l-9-2-4 4H6l2-5-5-1v-2l5-1-2-5h2l4 4 9-2v2l-7 2 7 2Z"
      />
    </svg>
  );
}
