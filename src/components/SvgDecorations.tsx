/**
 * Reusable SVG decorative elements — arcs, orbits, geometric shapes
 * for a modern, editorial aesthetic across the portfolio.
 */

/** Concentric arc rings — top-right corner feel */
export const ArcRings = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M400 200 A200 200 0 0 0 200 400" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.2" />
    <path d="M400 140 A260 260 0 0 0 140 400" stroke="hsl(var(--primary))" strokeWidth="1.5" opacity="0.14" />
    <path d="M400 80 A320 320 0 0 0 80 400" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.1" />
    <circle cx="200" cy="400" r="5" fill="hsl(var(--primary))" opacity="0.3" />
    <circle cx="400" cy="200" r="5" fill="hsl(var(--primary))" opacity="0.3" />
  </svg>
);

/** Dotted orbit with accent markers */
export const OrbitDots = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="150" r="120" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeDasharray="6 10" opacity="0.18" />
    <circle cx="150" cy="150" r="80" stroke="hsl(var(--accent))" strokeWidth="1.2" strokeDasharray="4 8" opacity="0.14" />
    <circle cx="150" cy="150" r="40" stroke="hsl(var(--primary))" strokeWidth="1.5" opacity="0.12" />
    {/* Orbit markers */}
    <circle cx="270" cy="150" r="6" fill="hsl(var(--primary))" opacity="0.25" />
    <circle cx="150" cy="30" r="5" fill="hsl(var(--accent))" opacity="0.25" />
    <circle cx="70" cy="150" r="4" fill="hsl(var(--primary))" opacity="0.18" />
    <circle cx="150" cy="230" r="4" fill="hsl(var(--accent))" opacity="0.2" />
  </svg>
);

/** Diagonal slash lines — dynamic movement feel */
export const SlashLines = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    {[0, 1, 2, 3, 4, 5, 6].map((i) => (
      <line
        key={i}
        x1={20 + i * 25}
        y1="0"
        x2={-30 + i * 25}
        y2="400"
        stroke="hsl(var(--primary))"
        strokeWidth="1.2"
        opacity={0.08 + i * 0.02}
      />
    ))}
    <circle cx="95" cy="200" r="4" fill="hsl(var(--accent))" opacity="0.3" />
  </svg>
);

/** Corner bracket / crosshair — precision engineering feel */
export const Crosshair = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Corner brackets */}
    <path d="M10 30 L10 10 L30 10" stroke="hsl(var(--primary))" strokeWidth="2.5" opacity="0.2" />
    <path d="M90 10 L110 10 L110 30" stroke="hsl(var(--primary))" strokeWidth="2.5" opacity="0.2" />
    <path d="M110 90 L110 110 L90 110" stroke="hsl(var(--primary))" strokeWidth="2.5" opacity="0.2" />
    <path d="M30 110 L10 110 L10 90" stroke="hsl(var(--primary))" strokeWidth="2.5" opacity="0.2" />
    {/* Center cross */}
    <line x1="50" y1="60" x2="70" y2="60" stroke="hsl(var(--accent))" strokeWidth="2" opacity="0.25" />
    <line x1="60" y1="50" x2="60" y2="70" stroke="hsl(var(--accent))" strokeWidth="2" opacity="0.25" />
    <circle cx="60" cy="60" r="12" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeDasharray="3 4" opacity="0.18" />
  </svg>
);

/** Flowing wave arcs — organic motion */
export const WaveArcs = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 600 200" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <path d="M0 100 Q150 20 300 100 Q450 180 600 100" stroke="hsl(var(--primary))" strokeWidth="1.8" opacity="0.12" />
    <path d="M0 120 Q150 40 300 120 Q450 200 600 120" stroke="hsl(var(--accent))" strokeWidth="1.4" opacity="0.08" />
    <path d="M0 80 Q150 0 300 80 Q450 160 600 80" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.06" />
  </svg>
);

/** Hex grid cluster */
export const HexCluster = ({ className = "" }: { className?: string }) => {
  const hex = (cx: number, cy: number, r: number) => {
    const pts = Array.from({ length: 6 }, (_, i) => {
      const a = (Math.PI / 3) * i - Math.PI / 6;
      return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
    }).join(" ");
    return pts;
  };

  return (
    <svg className={className} viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      {[
        [150, 150, 50],
        [150, 60, 40],
        [150, 240, 40],
        [75, 105, 35],
        [225, 105, 35],
        [75, 195, 35],
        [225, 195, 35],
      ].map(([cx, cy, r], i) => (
        <polygon
          key={i}
          points={hex(cx, cy, r)}
          stroke="hsl(var(--primary))"
          strokeWidth="1.5"
          opacity={0.12 + (i === 0 ? 0.06 : 0)}
        />
      ))}
      <circle cx="150" cy="150" r="5" fill="hsl(var(--accent))" opacity="0.25" />
    </svg>
  );
};

/** Radial burst — subtle starburst from a point */
export const RadialBurst = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    {Array.from({ length: 12 }, (_, i) => {
      const angle = (Math.PI * 2 * i) / 12;
      const x1 = 100 + 25 * Math.cos(angle);
      const y1 = 100 + 25 * Math.sin(angle);
      const x2 = 100 + 90 * Math.cos(angle);
      const y2 = 100 + 90 * Math.sin(angle);
      return (
        <line
          key={i}
          x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="hsl(var(--primary))"
          strokeWidth="1.2"
          opacity={i % 3 === 0 ? 0.18 : 0.1}
        />
      );
    })}
    <circle cx="100" cy="100" r="25" stroke="hsl(var(--primary))" strokeWidth="1.5" opacity="0.15" />
    <circle cx="100" cy="100" r="6" fill="hsl(var(--primary))" opacity="0.2" />
  </svg>
);
