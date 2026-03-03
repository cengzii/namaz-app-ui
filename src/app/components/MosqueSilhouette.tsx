interface MosqueSilhouetteProps {
  className?: string;
  opacity?: number;
}

export function MosqueSilhouette({ className = '', opacity = 1 }: MosqueSilhouetteProps) {
  return (
    <svg
      viewBox="0 0 400 160"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity }}
      aria-hidden="true"
      preserveAspectRatio="xMidYMax meet"
    >
      {/* ── Left Minaret ── */}
      <rect x="44" y="58" width="18" height="102" rx="4" />
      {/* Platform band */}
      <rect x="39" y="52" width="28" height="8" rx="3" />
      {/* Upper cylinder */}
      <rect x="45" y="38" width="16" height="16" rx="4" />
      {/* Spire */}
      <polygon points="53,14 44,40 62,40" />
      {/* Star tip */}
      <circle cx="53" cy="12" r="3.5" />

      {/* ── Right Minaret ── */}
      <rect x="338" y="58" width="18" height="102" rx="4" />
      <rect x="333" y="52" width="28" height="8" rx="3" />
      <rect x="339" y="38" width="16" height="16" rx="4" />
      <polygon points="347,14 338,40 356,40" />
      <circle cx="347" cy="12" r="3.5" />

      {/* ── Building base ── */}
      <rect x="78" y="110" width="244" height="50" />

      {/* ── Left small dome ── */}
      <path d="M78 110 Q78 76 112 70 Q146 76 146 110 Z" />

      {/* ── Right small dome ── */}
      <path d="M254 110 Q254 76 288 70 Q322 76 322 110 Z" />

      {/* ── Central great dome ── */}
      <path d="M118 110 Q118 24 200 16 Q282 24 282 110 Z" />

      {/* ── Entrance arch ── */}
      <rect x="183" y="128" width="34" height="32" />
      <path d="M183 128 Q200 112 217 128 Z" />

      {/* ── Ground line ── */}
      <rect x="0" y="158" width="400" height="2" rx="1" />
    </svg>
  );
}
