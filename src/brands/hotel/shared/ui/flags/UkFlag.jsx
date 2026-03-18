export default function UkFlagIcon({
  size = 26,
  className = "",
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      className={[
        "flag-icon",
        "flag-icon-uk",
        "flag-uk",
        className,
      ].join(" ")}
      aria-hidden="true"
      {...props}
    >
      <rect x="0" y="80" width="512" height="352" rx="48" fill="#4b50a8" />

      <path
        d="M0 112 32 80l192 132V80h64v132L480 80l32 32-164 112h164v64H348l164 112-32 32-192-132v132h-64V300L32 432 0 400l164-112H0v-64h164L0 112z"
        fill="#f2f2f2"
      />

      <path
        d="M0 128l16-16 192 132h-32L0 128zm496 0-176 116h-32L496 112l16 16zM0 384l176-116h32L16 400 0 384zm496 0-16 16-192-132h32L496 384z"
        fill="#ff4b55"
      />

      <path
        d="M224 80h64v352h-64zM0 224h512v64H0z"
        fill="#f2f2f2"
      />

      <path
        d="M236 80h40v352h-40zM0 236h512v40H0z"
        fill="#ff4b55"
      />
    </svg>
  );
}