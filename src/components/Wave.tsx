export function Wave({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className={className} aria-hidden>
      <path
        d="M0 30 C 150 0, 300 60, 450 30 S 750 0, 900 30 S 1100 60, 1200 30 V60 H0Z"
        fill="currentColor"
      />
    </svg>
  );
}
