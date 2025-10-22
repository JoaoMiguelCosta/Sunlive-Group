export default function Instagram({
  size = 20,
  className = "",
  title = "Instagram",
  decorative = false,
  ...rest
}) {
  const a11y =
    decorative || !title
      ? { "aria-hidden": true, focusable: false }
      : { "aria-label": title, role: "img", focusable: false };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...a11y}
      {...rest}
    >
      <path
        fill="currentColor"
        d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 4.5A5.5 5.5 0 1 1 6.5 14 5.5 5.5 0 0 1 12 8.5Zm0 2A3.5 3.5 0 1 0 15.5 14 3.5 3.5 0 0 0 12 10.5ZM18.25 6a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 18.25 6Z"
      />
    </svg>
  );
}
