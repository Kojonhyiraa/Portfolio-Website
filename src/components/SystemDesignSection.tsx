import { motion } from "framer-motion";
import { useState } from "react";

type DiagramKey = "api" | "database" | "reliability";

interface ArchDiagram {
  key: DiagramKey;
  title: string;
  subtitle: string;
  nodes: { id: string; label: string; color: string }[];
  edges: [string, string][];
  insight: string;
}

const diagrams: ArchDiagram[] = [
  {
    key: "api",
    title: "Scalable API Architecture",
    subtitle: "How I design APIs that scale",
    nodes: [
      { id: "client", label: "Client", color: "terminal-cyan" },
      { id: "gateway", label: "API Gateway", color: "terminal-amber" },
      { id: "auth", label: "Auth Service", color: "terminal-green" },
      { id: "rate", label: "Rate Limiter", color: "terminal-magenta" },
      { id: "svc-a", label: "Service A", color: "terminal-cyan" },
      { id: "svc-b", label: "Service B", color: "terminal-cyan" },
      { id: "cache", label: "Cache Layer", color: "terminal-amber" },
      { id: "db", label: "Database", color: "terminal-green" },
    ],
    edges: [
      ["client", "gateway"],
      ["gateway", "auth"],
      ["gateway", "rate"],
      ["rate", "svc-a"],
      ["rate", "svc-b"],
      ["svc-a", "cache"],
      ["svc-b", "cache"],
      ["cache", "db"],
    ],
    insight:
      "Stateless services behind a gateway with rate limiting and caching. Each service owns its domain, communicates via well-defined contracts, and fails independently.",
  },
  {
    key: "database",
    title: "Database Schema Design",
    subtitle: "How I model data for consistency",
    nodes: [
      { id: "users", label: "Users", color: "terminal-cyan" },
      { id: "accounts", label: "Accounts", color: "terminal-amber" },
      { id: "txns", label: "Transactions", color: "terminal-green" },
      { id: "audit", label: "Audit Log", color: "terminal-magenta" },
      { id: "idx", label: "Indexes", color: "terminal-amber" },
      { id: "constraints", label: "Constraints", color: "terminal-green" },
    ],
    edges: [
      ["users", "accounts"],
      ["accounts", "txns"],
      ["txns", "audit"],
      ["accounts", "constraints"],
      ["txns", "idx"],
    ],
    insight:
      "Normalize first, denormalize for performance. Foreign key constraints enforce integrity. Indexed queries on hot paths. Audit logs capture every state change for compliance.",
  },
  {
    key: "reliability",
    title: "Reliability Engineering",
    subtitle: "How I keep systems running",
    nodes: [
      { id: "request", label: "Incoming Request", color: "terminal-cyan" },
      { id: "lb", label: "Load Balancer", color: "terminal-amber" },
      { id: "primary", label: "Primary", color: "terminal-green" },
      { id: "replica", label: "Replica", color: "terminal-green" },
      { id: "circuit", label: "Circuit Breaker", color: "terminal-magenta" },
      { id: "fallback", label: "Fallback", color: "terminal-amber" },
      { id: "monitor", label: "Monitoring", color: "terminal-cyan" },
      { id: "alert", label: "Alerts", color: "terminal-magenta" },
    ],
    edges: [
      ["request", "lb"],
      ["lb", "primary"],
      ["lb", "replica"],
      ["primary", "circuit"],
      ["circuit", "fallback"],
      ["primary", "monitor"],
      ["monitor", "alert"],
    ],
    insight:
      "Circuit breakers prevent cascade failures. Health checks route traffic away from degraded nodes. Graceful degradation returns cached or partial responses instead of errors.",
  },
];

const colorMap: Record<string, string> = {
  "terminal-cyan": "hsl(180,100%,50%)",
  "terminal-amber": "hsl(45,100%,55%)",
  "terminal-green": "hsl(120,100%,45%)",
  "terminal-magenta": "hsl(300,80%,60%)",
};

const bgMap: Record<string, string> = {
  "terminal-cyan": "hsl(180,100%,50%,0.08)",
  "terminal-amber": "hsl(45,100%,55%,0.08)",
  "terminal-green": "hsl(120,100%,45%,0.08)",
  "terminal-magenta": "hsl(300,80%,60%,0.08)",
};

const borderMap: Record<string, string> = {
  "terminal-cyan": "hsl(180,100%,50%,0.25)",
  "terminal-amber": "hsl(45,100%,55%,0.25)",
  "terminal-green": "hsl(120,100%,45%,0.25)",
  "terminal-magenta": "hsl(300,80%,60%,0.25)",
};

// Layout nodes in a flowing grid
function getNodePositions(count: number, width: number, height: number) {
  const cols = count <= 4 ? 2 : count <= 6 ? 3 : 4;
  const rows = Math.ceil(count / cols);
  const cellW = width / cols;
  const cellH = height / rows;
  const positions: { x: number; y: number }[] = [];
  for (let i = 0; i < count; i++) {
    const col = i % cols;
    const row = Math.floor(i / cols);
    positions.push({
      x: cellW * col + cellW / 2,
      y: cellH * row + cellH / 2,
    });
  }
  return positions;
}

const DiagramView = ({ diagram }: { diagram: ArchDiagram }) => {
  const svgW = 560;
  const svgH = 320;
  const positions = getNodePositions(diagram.nodes.length, svgW, svgH);
  const nodeMap = new Map(diagram.nodes.map((n, i) => [n.id, i]));

  return (
    <div className="space-y-4">
      <div className="bg-background/50 border border-border rounded-lg overflow-hidden">
        {/* Diagram tab bar */}
        <div className="flex items-center gap-1 px-4 py-2 border-b border-border/50 bg-card/30">
          <span className="text-terminal-green text-[10px]">●</span>
          <span className="text-foreground/60 text-[11px] font-mono">{diagram.title.toLowerCase().replace(/\s+/g, "_")}.arch</span>
          <span className="text-terminal-comment text-[10px] ml-auto">diagram</span>
        </div>

        <div className="p-4 flex justify-center overflow-x-auto">
          <svg
            viewBox={`0 0 ${svgW} ${svgH}`}
            className="w-full max-w-[560px] h-auto"
            style={{ minHeight: 200 }}
          >
            {/* Edges */}
            {diagram.edges.map(([from, to], i) => {
              const fi = nodeMap.get(from)!;
              const ti = nodeMap.get(to)!;
              const fp = positions[fi];
              const tp = positions[ti];
              return (
                <line
                  key={i}
                  x1={fp.x}
                  y1={fp.y}
                  x2={tp.x}
                  y2={tp.y}
                  stroke="hsl(180,100%,50%)"
                  strokeWidth="1"
                  strokeOpacity="0.2"
                  strokeDasharray="4 3"
                />
              );
            })}

            {/* Arrow markers on edges */}
            {diagram.edges.map(([from, to], i) => {
              const fi = nodeMap.get(from)!;
              const ti = nodeMap.get(to)!;
              const fp = positions[fi];
              const tp = positions[ti];
              const dx = tp.x - fp.x;
              const dy = tp.y - fp.y;
              const len = Math.sqrt(dx * dx + dy * dy);
              const ux = dx / len;
              const uy = dy / len;
              const mx = (fp.x + tp.x) / 2;
              const my = (fp.y + tp.y) / 2;
              return (
                <polygon
                  key={`arrow-${i}`}
                  points={`${mx},${my - 3} ${mx + 4 * ux},${my + 4 * uy} ${mx - 4 * uy},${my + 4 * ux}`}
                  fill="hsl(180,100%,50%)"
                  opacity="0.3"
                />
              );
            })}

            {/* Nodes */}
            {diagram.nodes.map((node, i) => {
              const pos = positions[i];
              const w = 110;
              const h = 36;
              return (
                <g key={node.id}>
                  <rect
                    x={pos.x - w / 2}
                    y={pos.y - h / 2}
                    width={w}
                    height={h}
                    rx={6}
                    fill={bgMap[node.color]}
                    stroke={borderMap[node.color]}
                    strokeWidth="1"
                  />
                  <text
                    x={pos.x}
                    y={pos.y + 1}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill={colorMap[node.color]}
                    fontSize="11"
                    fontFamily="monospace"
                    fontWeight="500"
                  >
                    {node.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Insight */}
      <div className="flex gap-3 items-start">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-terminal-amber shrink-0 mt-0.5">
          <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1" />
          <path d="M8 5v3M8 10v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <p className="text-foreground/60 text-xs sm:text-sm leading-relaxed italic">{diagram.insight}</p>
      </div>
    </div>
  );
};

const SystemDesignSection = () => {
  const [active, setActive] = useState<DiagramKey>("api");
  const activeDiagram = diagrams.find((d) => d.key === active)!;

  return (
    <section id="systems" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background grid dots */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
            <circle cx="15" cy="15" r="1" fill="hsl(180,100%,50%)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>

      <div className="max-w-4xl mx-auto relative">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-lg sm:text-xl font-bold mb-2"
        >
          <span className="text-terminal-comment">// </span>
          <span className="text-primary">System Design</span>
          <span className="text-foreground"> / </span>
          <span className="text-primary">Architecture Gallery</span>
        </motion.h2>
        <p className="text-terminal-comment text-xs mb-8">cat architecture/*.arch | render --diagram</p>

        {/* Tab selector */}
        <div className="flex flex-wrap gap-2 mb-6">
          {diagrams.map((d) => (
            <button
              key={d.key}
              onClick={() => setActive(d.key)}
              className={`text-xs px-4 py-2 rounded-md border font-mono transition-all duration-300 ${
                active === d.key
                  ? "border-primary/50 bg-primary/10 text-primary shadow-[0_0_15px_-5px_hsl(180,100%,50%,0.2)]"
                  : "border-border text-foreground/50 hover:border-foreground/20 hover:text-foreground/70"
              }`}
            >
              {d.subtitle}
            </button>
          ))}
        </div>

        {/* Active diagram */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-5 sm:p-6 hover:border-primary/20 hover:shadow-[0_4px_40px_-10px_hsl(180,100%,50%,0.08)] transition-all duration-500"
        >
          <h3 className="text-primary text-sm font-semibold mb-1">{activeDiagram.title}</h3>
          <p className="text-terminal-comment text-[11px] mb-5">{activeDiagram.subtitle}</p>
          <DiagramView diagram={activeDiagram} />
        </motion.div>
      </div>
    </section>
  );
};

export default SystemDesignSection;
