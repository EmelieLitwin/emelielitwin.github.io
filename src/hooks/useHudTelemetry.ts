import { useEffect, useRef, useState } from 'react';

interface HudTelemetry {
  scrollProgress: number;
  mouseNormX: number;
  mouseNormY: number;
  focus: number;
  latencyMs: number;
  signalPct: number;
  sparklineData: number[];
  lockState: 'ACQUIRED' | 'SEARCH' | 'TRACKING';
}

export const useHudTelemetry = (reticleX: number, reticleY: number) => {
  const [telemetry, setTelemetry] = useState<HudTelemetry>({
    scrollProgress: 0,
    mouseNormX: 0,
    mouseNormY: 0,
    focus: 0,
    latencyMs: 28,
    signalPct: 75,
    sparklineData: [0.3, 0.4, 0.5, 0.6, 0.5, 0.7, 0.6, 0.8],
    lockState: 'SEARCH',
  });

  const mouseRef = useRef({ x: 0, y: 0 });
  const scrollRef = useRef(0);
  const sparklineRef = useRef([0.3, 0.4, 0.5, 0.6, 0.5, 0.7, 0.6, 0.8]);
  const frameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      scrollRef.current = scrollable > 0 ? window.scrollY / scrollable : 0;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Update loop at ~30fps
    const updateLoop = () => {
      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;
      const w = window.innerWidth;
      const h = window.innerHeight;

      // Normalize mouse position to -1..1
      const normX = (mouseX / w) * 2 - 1;
      const normY = (mouseY / h) * 2 - 1;

      // Calculate focus (distance from mouse to reticle)
      const dx = mouseX - reticleX;
      const dy = mouseY - reticleY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const maxDist = Math.sqrt(w * w + h * h) / 2;
      const focus = Math.max(0, 1 - dist / maxDist);

      // Derive telemetry
      const latencyMs = Math.round(18 + Math.abs(normX) * 24);
      const signalPct = Math.round(55 + scrollRef.current * 44);
      
      // Lock state based on focus
      const lockState: HudTelemetry['lockState'] = 
        focus > 0.7 ? 'ACQUIRED' : focus > 0.3 ? 'TRACKING' : 'SEARCH';

      // Update sparkline with random walk (smooth)
      sparklineRef.current = sparklineRef.current.map((val, i) => {
        const target = 0.3 + scrollRef.current * 0.5 + (Math.sin(Date.now() / 1000 + i) + 1) * 0.1;
        return val + (target - val) * 0.1; // Lerp
      });

      // Shift sparkline occasionally
      if (Math.random() < 0.05) {
        sparklineRef.current.shift();
        sparklineRef.current.push(0.3 + Math.random() * 0.5);
      }

      setTelemetry({
        scrollProgress: scrollRef.current,
        mouseNormX: normX,
        mouseNormY: normY,
        focus,
        latencyMs,
        signalPct,
        sparklineData: [...sparklineRef.current],
        lockState,
      });

      frameRef.current = requestAnimationFrame(updateLoop);
    };

    frameRef.current = requestAnimationFrame(updateLoop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [reticleX, reticleY]);

  return telemetry;
};
