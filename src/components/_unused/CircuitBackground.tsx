import { useEffect, useRef } from "react";

interface CircuitNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulse: number;
  pulseSpeed: number;
  connected: number[];
}

const CircuitBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let nodes: CircuitNode[] = [];
    const nodeCount = 70;
    const connectionDist = 140;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.floor(canvas.offsetWidth * dpr);
      canvas.height = Math.floor(canvas.offsetHeight * dpr);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    const init = () => {
      resize();
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      nodes = Array.from({ length: nodeCount }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2.5 + 1,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.05 + 0.03,
        connected: [],
      }));
    };

    const drawOrthogonalLine = (
      ctx: CanvasRenderingContext2D,
      x1: number,
      y1: number,
      x2: number,
      y2: number
    ) => {
      // Route lines with right-angle bends like PCB traces
      const midX = (x1 + x2) / 2;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      if (Math.abs(x2 - x1) > Math.abs(y2 - y1)) {
        ctx.lineTo(midX, y1);
        ctx.lineTo(midX, y2);
      } else {
        ctx.lineTo(x1, (y1 + y2) / 2);
        ctx.lineTo(x2, (y1 + y2) / 2);
      }
      ctx.lineTo(x2, y2);
      ctx.stroke();
    };

    const animate = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      // Update nodes
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += node.pulseSpeed;

        if (node.x < 0 || node.x > w) node.vx *= -1;
        if (node.y < 0 || node.y > h) node.vy *= -1;
        node.x = Math.max(0, Math.min(w, node.x));
        node.y = Math.max(0, Math.min(h, node.y));
      }

      // Draw connections as PCB traces
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            const alpha = (1 - dist / connectionDist) * 0.15;
            ctx.strokeStyle = `hsla(180, 100%, 50%, ${alpha})`;
            ctx.lineWidth = 0.5;
            drawOrthogonalLine(ctx, nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);

            // Draw small junction dots at bends
            const midX = (nodes[i].x + nodes[j].x) / 2;
            const midY =
              Math.abs(nodes[j].x - nodes[i].x) > Math.abs(nodes[j].y - nodes[i].y)
                ? nodes[i].y
                : (nodes[i].y + nodes[j].y) / 2;
            ctx.fillStyle = `hsla(180, 100%, 50%, ${alpha * 0.8})`;
            ctx.fillRect(midX - 1, midY - 1, 2, 2);
          }
        }
      }

      // Draw nodes
      for (const node of nodes) {
        const glow = (Math.sin(node.pulse) + 1) / 2;
        const alpha = 0.2 + glow * 0.4;

        // Outer glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 4, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(180, 100%, 50%, ${alpha * 0.08})`;
        ctx.fill();

        // Node body
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(180, 100%, 60%, ${alpha})`;
        ctx.fill();

        // Some nodes get a square "chip" look
        if (node.radius > 2) {
          const s = node.radius * 3;
          ctx.strokeStyle = `hsla(180, 100%, 50%, ${alpha * 0.3})`;
          ctx.lineWidth = 0.5;
          ctx.strokeRect(node.x - s / 2, node.y - s / 2, s, s);
        }
      }

      // Draw a few data pulses traveling along connections
      const time = Date.now() * 0.001;
      for (let i = 0; i < Math.min(5, nodes.length - 1); i++) {
        const j = (i + 7) % nodes.length;
        const dx = nodes[j].x - nodes[i].x;
        const dy = nodes[j].y - nodes[i].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < connectionDist) {
          const t = ((Math.sin(time + i * 1.7) + 1) / 2);
          const px = nodes[i].x + dx * t;
          const py = nodes[i].y + dy * t;
          ctx.beginPath();
          ctx.arc(px, py, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(45, 100%, 55%, 0.6)`;
          ctx.fill();
          ctx.beginPath();
          ctx.arc(px, py, 4, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(45, 100%, 55%, 0.1)`;
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(animate);
    };

    init();
    animate();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.6 }}
    />
  );
};

export default CircuitBackground;
