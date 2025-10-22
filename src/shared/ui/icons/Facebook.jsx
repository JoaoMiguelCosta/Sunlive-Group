export default function Facebook({
  size = 20,
  className = "",
  title = "Facebook",
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
        d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 4.99 3.66 9.14 8.44 9.94v-7.03H7.9V12.06h2.54V9.92c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.62.77-1.62 1.56v1.8h2.76l-.44 2.91h-2.32V22c4.78-.8 8.44-4.95 8.44-9.94Z"
      />
    </svg>
  );
}
