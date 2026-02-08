import React, { useEffect, useState } from 'react';
import './HudOverlay.css';

const HudOverlay: React.FC = () => {
  const [wireCoords, setWireCoords] = useState({
    targetX: 0,
    targetY: 0,
    panelLeftX: 340,
    panelLeftY: 180,
    panelRightX: 1580,
    panelRightY: 180,
  });

  useEffect(() => {
    const updateWirePositions = () => {
      // Find unicorn position (right side of hero section)
      const heroSection = document.querySelector('.hero');
      if (!heroSection) return;

      const heroRect = heroSection.getBoundingClientRect();
      
      // Target position: approximately where unicorn is (right side, upper part of hero)
      const targetX = window.innerWidth * 0.70; // 70% from left (unicorn area)
      const targetY = heroRect.top + heroRect.height * 0.40; // 20% down from top (very high, at unicorn head)
      
      // Panel positions (fixed)
      const panelLeftX = 340;
      const panelLeftY = 180;
      const panelRightX = window.innerWidth - 340;
      const panelRightY = 180;

      setWireCoords({
        targetX,
        targetY,
        panelLeftX,
        panelLeftY,
        panelRightX,
        panelRightY,
      });
    };

    // Initial update with small delay to ensure DOM is ready
    setTimeout(updateWirePositions, 100);
    
    // Update on scroll and resize
    window.addEventListener('scroll', updateWirePositions);
    window.addEventListener('resize', updateWirePositions);

    return () => {
      window.removeEventListener('scroll', updateWirePositions);
      window.removeEventListener('resize', updateWirePositions);
    };
  }, []);

  return (
    <div className="hud-overlay">
      <svg 
        className="hud-svg" 
        viewBox="0 0 1920 1080" 
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Dot grid background */}
        <defs>
          <pattern id="hudGrid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="var(--hud-ink-4)" />
          </pattern>
        </defs>

        {/* Background grid */}
        <rect 
          x="0" y="0" 
          width="100%" height="100%" 
          fill="url(#hudGrid)" 
          opacity="var(--hud-grid-opacity)"
        />

        {/* Inner hairline frame */}
        <rect 
          x="60" y="60" 
          width="1800" height="960" 
          fill="none" 
          stroke="var(--hud-ink-3)"
          strokeWidth="var(--hud-lw-hair)"
          rx="8"
        />

        {/* Reduced corner marks */}
        <g className="hud-corners">
          <path d="M 80,80 L 120,80 M 80,80 L 80,120" stroke="var(--hud-ink-2)" strokeWidth="var(--hud-lw)" fill="none" />
          <path d="M 1840,80 L 1800,80 M 1840,80 L 1840,120" stroke="var(--hud-ink-2)" strokeWidth="var(--hud-lw)" fill="none" />
          <path d="M 80,1000 L 120,1000 M 80,1000 L 80,960" stroke="var(--hud-ink-2)" strokeWidth="var(--hud-lw)" fill="none" />
          <path d="M 1840,1000 L 1800,1000 M 1840,1000 L 1840,960" stroke="var(--hud-ink-2)" strokeWidth="var(--hud-lw)" fill="none" />
        </g>

        {/* Scanline effect */}
        <rect 
          className="hud-scanline"
          x="0" y="-80" 
          width="100%" height="80" 
          fill="var(--hud-ink-1)" 
          opacity="var(--hud-scan-opacity)"
        />
      </svg>

      {/* Dynamic wires - positioned with viewport coordinates */}
      <svg 
        className="hud-wires" 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      >
        <defs>
          <pattern id="dashedLine" x="0" y="0" width="20" height="1" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="12" height="1" fill="var(--hud-ink-2)" />
          </pattern>
        </defs>
        
        {/* Wire 1: Left panel to unicorn */}
        <line 
          className="wire-trace"
          x1={wireCoords.panelLeftX} 
          y1={wireCoords.panelLeftY + 80} 
          x2={wireCoords.targetX} 
          y2={wireCoords.targetY + 80}
          stroke="url(#dashedLine)" 
          strokeWidth="var(--hud-lw-hair)"
        />
        <circle cx={wireCoords.panelLeftX} cy={wireCoords.panelLeftY + 80} r="2" fill="var(--hud-ink-2)" />
        <circle cx={wireCoords.targetX} cy={wireCoords.targetY + 80} r="2" fill="var(--hud-ink-2)" />
        
        {/* Wire 2: Right panel to unicorn */}
        <line 
          className="wire-trace"
          x1={wireCoords.panelRightX} 
          y1={wireCoords.panelRightY + 80} 
          x2={wireCoords.targetX} 
          y2={wireCoords.targetY + 80}
          stroke="url(#dashedLine)" 
          strokeWidth="var(--hud-lw-hair)"
        />
        <circle cx={wireCoords.panelRightX} cy={wireCoords.panelRightY + 80} r="2" fill="var(--hud-ink-2)" />
        <circle cx={wireCoords.targetX} cy={wireCoords.targetY + 80} r="2" fill="var(--hud-ink-2)" />
        
        {/* Reticle at unicorn position */}
        <g className="hud-reticle" transform={`translate(${wireCoords.targetX}, ${wireCoords.targetY + 80})`}>
          <circle 
            cx="0" cy="0" r="140" 
            fill="none" 
            stroke="var(--hud-ink-3)" 
            strokeWidth="var(--hud-lw-hair)"
            strokeDasharray="8 4"
            opacity="0.6"
          />
          <circle 
            cx="0" cy="0" r="120" 
            fill="none" 
            stroke="var(--hud-ink-3)" 
            strokeWidth="var(--hud-lw-hair)"
            opacity="0.4"
          />
          <line x1="-8" y1="0" x2="-20" y2="0" stroke="var(--hud-ink-2)" strokeWidth="var(--hud-lw-hair)" />
          <line x1="8" y1="0" x2="20" y2="0" stroke="var(--hud-ink-2)" strokeWidth="var(--hud-lw-hair)" />
          <line x1="0" y1="-8" x2="0" y2="-20" stroke="var(--hud-ink-2)" strokeWidth="var(--hud-lw-hair)" />
          <line x1="0" y1="8" x2="0" y2="20" stroke="var(--hud-ink-2)" strokeWidth="var(--hud-lw-hair)" />
          <circle cx="0" cy="0" r="3" fill="var(--hud-ink-2)" />
        </g>
      </svg>

      {/* HTML panels */}
      <div className="hud-panel hud-panel-tl">
        <div className="panel-header">PORT-254</div>
        <div className="panel-body">
          <div className="panel-data">0153 4485</div>
          <div className="panel-data">8781 8002</div>
          <div className="panel-data">3689 4823</div>
        </div>
      </div>

      <div className="hud-panel hud-panel-tr">
        <div className="panel-header">R-LEVEL</div>
        <div className="panel-body">
          <div className="panel-data">[Q02-C4PD]</div>
          <div className="panel-chart"></div>
        </div>
      </div>

      <div className="hud-panel hud-panel-mr">
        <div className="panel-metric">⌀ 73.889</div>
      </div>
    </div>
  );
};

export default HudOverlay;
