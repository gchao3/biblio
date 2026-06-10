export default function Logo({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="biblio-g" x1="0" y1="0" x2="24" y2="24">
          <stop stopColor="#7C7FFF" />
          <stop offset="1" stopColor="#B59AFF" />
        </linearGradient>
      </defs>
      {/* open book / knowledge base mark */}
      <path
        d="M12 5.5C10.2 4.1 7.6 3.5 4.5 3.5c-.55 0-1 .45-1 1v13c0 .55.45 1 1 1 3.1 0 5.7.6 7.5 2 1.8-1.4 4.4-2 7.5-2 .55 0 1-.45 1-1v-13c0-.55-.45-1-1-1-3.1 0-5.7.6-7.5 2Z"
        stroke="url(#biblio-g)"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M12 5.5v15"
        stroke="url(#biblio-g)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
