export default function TourBus({ className = "", size = 24, ...props }) {
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
        d="M3 6a3 3 0 0 1 3-3h9l6 6v7a3 3 0 0 1-3 3h-1a2 2 0 0 1-2-2H8a2 2 0 0 1-2 2H5a3 3 0 0 1-3-3V6Zm3 1h8v4H6V7Zm12 0h-2v2h4l-2-2ZM7.5 18A1.5 1.5 0 1 0 6 16.5 1.5 1.5 0 0 0 7.5 18Zm9 0A1.5 1.5 0 1 0 16.5 16.5 1.5 1.5 0 0 0 16.5 18Z"
      />
    </svg>
  );
}
