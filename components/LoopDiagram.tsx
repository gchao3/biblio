export default function LoopDiagram() {
  return (
    <div className="loop-visual">
      <svg
        viewBox="0 0 440 440"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="The Biblio closed loop: docs ground generation, reviews enforce standards, corrections become memories"
      >
        <defs>
          <linearGradient id="loop-g" x1="0" y1="0" x2="440" y2="440">
            <stop stopColor="#7C7FFF" />
            <stop offset="1" stopColor="#B59AFF" />
          </linearGradient>
          <marker
            id="arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 9 5 L 0 9 z" fill="#7C7FFF" opacity="0.9" />
          </marker>
        </defs>

        {/* circular loop arrows */}
        <g
          fill="none"
          stroke="url(#loop-g)"
          strokeWidth="1.5"
          opacity="0.85"
        >
          <path d="M 268 78 A 150 150 0 0 1 364 200" markerEnd="url(#arrow)" />
          <path d="M 362 268 A 150 150 0 0 1 240 364" markerEnd="url(#arrow)" />
          <path d="M 172 362 A 150 150 0 0 1 76 240" markerEnd="url(#arrow)" />
          <path d="M 78 172 A 150 150 0 0 1 200 76" markerEnd="url(#arrow)" />
        </g>

        {/* center */}
        <circle
          cx="220"
          cy="220"
          r="64"
          fill="rgba(124,127,255,0.07)"
          stroke="rgba(124,127,255,0.4)"
          strokeWidth="1"
        />
        <text
          x="220"
          y="212"
          textAnchor="middle"
          fill="#f7f8f8"
          fontSize="15"
          fontWeight="600"
          fontFamily="Inter, sans-serif"
        >
          Biblio
        </text>
        <text
          x="220"
          y="232"
          textAnchor="middle"
          fill="#8a8f98"
          fontSize="10.5"
          fontFamily="Inter, sans-serif"
        >
          one MCP server
        </text>

        {/* nodes */}
        {[
          { x: 220, y: 52, t1: "Docs", t2: "canonical standards" },
          { x: 388, y: 220, t1: "Agents", t2: "retrieval-led code" },
          { x: 220, y: 388, t1: "Reviews", t2: "PR + local" },
          { x: 52, y: 220, t1: "Memories", t2: "shared corrections" },
        ].map((n) => (
          <g key={n.t1}>
            <rect
              x={n.x - 62}
              y={n.y - 30}
              width="124"
              height="60"
              rx="12"
              fill="#0e0f11"
              stroke="rgba(255,255,255,0.14)"
              strokeWidth="1"
            />
            <text
              x={n.x}
              y={n.y - 2}
              textAnchor="middle"
              fill="#f7f8f8"
              fontSize="14"
              fontWeight="600"
              fontFamily="Inter, sans-serif"
            >
              {n.t1}
            </text>
            <text
              x={n.x}
              y={n.y + 16}
              textAnchor="middle"
              fill="#8a8f98"
              fontSize="10.5"
              fontFamily="Inter, sans-serif"
            >
              {n.t2}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
