export default function BallIcon({
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
      fill="currentColor"
      className={[
        "lucide",
        "lucide-ball-icon",
        "lucide-ball",
        className,
      ].join(" ")}
      aria-hidden="true"
      {...props}
    >
      <path d="M12 7.68a2.4 2.4 0 0 0-2.4 2.4c0 .77.38 1.44.96 1.92a2.46 2.46 0 0 0-.96 1.92 2.4 2.4 0 1 0 4.8 0 2.46 2.46 0 0 0-.96-1.92c.58-.48.96-1.15.96-1.92A2.4 2.4 0 0 0 12 7.68Zm0 7.2a.96.96 0 1 1 0-1.92.96.96 0 0 1 0 1.92Zm0-3.84a.96.96 0 1 1 0-1.92.96.96 0 0 1 0 1.92Z" />
      <path d="M12 0A12 12 0 1 0 24 12 12.01 12.01 0 0 0 12 0Zm0 20.4A8.4 8.4 0 1 1 20.4 12 8.41 8.41 0 0 1 12 20.4Z" />
    </svg>
  );
}