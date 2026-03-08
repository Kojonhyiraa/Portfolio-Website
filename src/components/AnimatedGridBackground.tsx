import { useEffect, useRef } from "react";

interface Cell {
  x: number;
  y: number;
  opacity: number;
  targetOpacity: number;
  speed: number;
  delay: number;
  hue: number;
}

const AnimatedGridBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let cells: Cell[] = [];
    const CELL_SIZE = 40;
    let cols = 0;
    let rows = 0;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      cols = Math.ceil(canvas.width / CELL_SIZE) + 1;
      rows = Math.ceil(canvas.height / CELL_SIZE) + 1;
      initCells();
    };

    const initCells = () => {
      cells = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          cells.push({
            x: c * CELL_SIZE,
            y: r * CELL_SIZE,
            opacity: 0,
            targetOpacity: 0,
            speed: 0.02 + Math.random() * 0.03,
            delay: Math.random() * 200,
            hue: Math.random() > 0.7 ? 45 : 180, // cyan or amber
          });
        }
      }
    };

    const triggerRandomCells = () => {
      // Randomly light up a wave of cells
      const count = Math.floor(8 + Math.random() * 15);
      const centerX = Math.random() * canvas.width;
      const centerY = Math.random() * canvas.height;
      const radius = 200 + Math.random() * 350;

      for (let i = 0; i < count; i++) {
        const idx = Math.floor(Math.random() * cells.length);
        const cell = cells[idx];
        const dist = Math.hypot(cell.x - centerX, cell.y - centerY);

        if (dist < radius) {
          cell.targetOpacity = 0.08 + Math.random() * 0.15;
          cell.delay = dist * 0.3; // ripple delay based on distance
          cell.hue = Math.random() > 0.6 ? 45 : 180;
        }
      }
    };

    // Occasionally trigger a "sweep" — a line of cells lighting up
    const triggerSweep = () => {
      const isHorizontal = Math.random() > 0.5;
      const line = Math.floor(Math.random() * (isHorizontal ? rows : cols));

      cells.forEach((cell) => {
        const cellCol = Math.floor(cell.x / CELL_SIZE);
        const cellRow = Math.floor(cell.y / CELL_SIZE);
        const match = isHorizontal ? cellRow === line : cellCol === line;

        if (match) {
          const offset = isHorizontal ? cellCol : cellRow;
          cell.targetOpacity = 0.10 + Math.random() * 0.20;
          cell.delay = offset * 8;
          cell.hue = 180;
        }
      });
    };

    let lastTrigger = 0;
    let lastSweep = 0;

    const draw = () => {
      time++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Trigger random clusters
      if (time - lastTrigger > 25 + Math.random() * 40) {
        triggerRandomCells();
        lastTrigger = time;
      }

      // Trigger sweeps less frequently
      if (time - lastSweep > 120 + Math.random() * 100) {
        triggerSweep();
        lastSweep = time;
      }

      // Draw grid lines (subtle)
      ctx.strokeStyle = "hsla(180, 100%, 50%, 0.04)";
      ctx.lineWidth = 0.5;
      for (let c = 0; c <= cols; c++) {
        ctx.beginPath();
        ctx.moveTo(c * CELL_SIZE, 0);
        ctx.lineTo(c * CELL_SIZE, canvas.height);
        ctx.stroke();
      }
      for (let r = 0; r <= rows; r++) {
        ctx.beginPath();
        ctx.moveTo(0, r * CELL_SIZE);
        ctx.lineTo(canvas.width, r * CELL_SIZE);
        ctx.stroke();
      }

      // Draw and animate cells
      cells.forEach((cell) => {
        if (cell.delay > 0) {
          cell.delay -= 1;
          return;
        }

        // Ease toward target
        const diff = cell.targetOpacity - cell.opacity;
        cell.opacity += diff * cell.speed * 3;

        // Decay target back to 0
        cell.targetOpacity *= 0.995;

        if (cell.opacity < 0.005) {
          cell.opacity = 0;
          return;
        }

        // Draw filled cell
        ctx.fillStyle = `hsla(${cell.hue}, 100%, ${cell.hue === 180 ? 50 : 55}%, ${cell.opacity})`;
        ctx.fillRect(cell.x + 1, cell.y + 1, CELL_SIZE - 2, CELL_SIZE - 2);

        // Draw bright border on lit cells
        if (cell.opacity > 0.04) {
          ctx.strokeStyle = `hsla(${cell.hue}, 100%, ${cell.hue === 180 ? 60 : 65}%, ${cell.opacity * 1.5})`;
          ctx.lineWidth = 1;
          ctx.strokeRect(cell.x + 0.5, cell.y + 0.5, CELL_SIZE - 1, CELL_SIZE - 1);
        }
      });

      // Draw intersection dots
      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c <= cols; c++) {
          // Only draw some dots
          if ((r + c) % 3 === 0) {
            const pulse = Math.sin(time * 0.02 + r * 0.5 + c * 0.3) * 0.5 + 0.5;
            ctx.fillStyle = `hsla(180, 100%, 50%, ${0.03 + pulse * 0.05})`;
            ctx.beginPath();
            ctx.arc(c * CELL_SIZE, r * CELL_SIZE, 1.5, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default AnimatedGridBackground;
