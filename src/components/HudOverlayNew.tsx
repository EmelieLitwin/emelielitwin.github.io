import React, { useEffect, useRef, useState } from 'react';
import { HudWires } from './hud/HudWires';
import { HudPanels } from './hud/HudPanels';
import { useHudTelemetry } from '../hooks/useHudTelemetry';
import './HudOverlayNew.css';

const HudOverlay: React.FC = () => {
  const [reticlePos, setReticlePos] = useState({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const frameRef = useRef<number | undefined>(undefined);

  // Panel positions (fixed)
  const panelLeftX = 340;
  const panelLeftY = 180;
  const panelRightX = window.innerWidth - 340;
  const panelRightY = 180;

  // Get telemetry data
  const telemetry = useHudTelemetry(reticlePos.x, reticlePos.y);

  useEffect(() => {
    // Measure unicorn position precisely
    const updateTarget = () => {
      const unicorn = document.querySelector('.origami-svg');
      if (!unicorn) return;

      const rect = unicorn.getBoundingClientRect();
      targetRef.current = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      };
    };

    // Smooth lerp loop
    const lerpLoop = () => {
      const lerpFactor = 0.1; // Robotic smoothing
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * lerpFactor;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * lerpFactor;

      setReticlePos({
        x: currentRef.current.x,
        y: currentRef.current.y,
      });

      frameRef.current = requestAnimationFrame(lerpLoop);
    };

    // Initial measure
    setTimeout(updateTarget, 100);
    
    // Update target on scroll and resize
    window.addEventListener('scroll', updateTarget, { passive: true });
    window.addEventListener('resize', updateTarget, { passive: true });

    // Start lerp loop
    frameRef.current = requestAnimationFrame(lerpLoop);

    return () => {
      window.removeEventListener('scroll', updateTarget);
      window.removeEventListener('resize', updateTarget);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div className="hud-container">
      {/* Background layer - grid, frame, scanline */}
      <div className="hud-bg">
        <svg 
          className="hud-svg-bg" 
          viewBox="0 0 1920 1080" 
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* Dot grid pattern */}
            <pattern id="hudGrid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="0" cy="0" r="0.5" fill="rgba(11,12,15,.08)" />
            </pattern>
            {/* Noise texture */}
            <filter id="hudNoise">
              <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" />
              <feColorMatrix type="saturate" values="0" />
            </filter>
          </defs>

          {/* Grid */}
          <rect 
            x="0" y="0" 
            width="100%" height="100%" 
            fill="url(#hudGrid)"
          />

          {/* Hairline frame */}
          <rect 
            x="40" y="40" 
            width="1840" height="1000" 
            fill="none" 
            stroke="rgba(11,12,15,.15)"
            strokeWidth="0.5"
            rx="4"
          />

          {/* Corner brackets */}
          <g className="hud-corners">
            <path d="M 60,60 L 100,60 M 60,60 L 60,100" stroke="rgba(11,12,15,.3)" strokeWidth="1.5" fill="none" />
            <path d="M 1860,60 L 1820,60 M 1860,60 L 1860,100" stroke="rgba(11,12,15,.3)" strokeWidth="1.5" fill="none" />
            <path d="M 60,1020 L 100,1020 M 60,1020 L 60,980" stroke="rgba(11,12,15,.3)" strokeWidth="1.5" fill="none" />
            <path d="M 1860,1020 L 1820,1020 M 1860,1020 L 1860,980" stroke="rgba(11,12,15,.3)" strokeWidth="1.5" fill="none" />
          </g>

          {/* Scanline */}
          <rect 
            className="hud-scanline"
            x="0" y="0" 
            width="100%" height="2" 
            fill="rgba(11,12,15,.05)"
          />

          {/* Noise overlay */}
          <rect 
            x="0" y="0" 
            width="100%" height="100%" 
            filter="url(#hudNoise)"
            opacity="0.04"
            className="hud-noise"
          />
        </svg>
      </div>

      {/* Wires layer - below panels */}
      <HudWires
        reticleX={reticlePos.x}
        reticleY={reticlePos.y}
        panelLeftX={panelLeftX}
        panelLeftY={panelLeftY}
        panelRightX={panelRightX}
        panelRightY={panelRightY}
      />

      {/* Panels layer - can be interactive */}
      <div className="hud-ui">
        <HudPanels
          latencyMs={telemetry.latencyMs}
          signalPct={telemetry.signalPct}
          lockState={telemetry.lockState}
          scrollProgress={telemetry.scrollProgress}
          focus={telemetry.focus}
          mouseNormX={telemetry.mouseNormX}
          mouseNormY={telemetry.mouseNormY}
          sparklineData={telemetry.sparklineData}
        />
      </div>
    </div>
  );
};

export default HudOverlay;
