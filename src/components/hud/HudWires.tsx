import React from 'react';

interface HudWiresProps {
  reticleX: number;
  reticleY: number;
  panelLeftX: number;
  panelLeftY: number;
  panelRightX: number;
  panelRightY: number;
}

export const HudWires: React.FC<HudWiresProps> = ({
  reticleX,
  reticleY,
  panelLeftX,
  panelLeftY,
  panelRightX,
  panelRightY,
}) => {
  // Calculate elbow routing - use a vertical bus line at 50% viewport width
  const busX = window.innerWidth * 0.5;

  // Left panel to reticle (elbow routing)
  const leftWirePath = `
    M ${panelLeftX} ${panelLeftY}
    L ${busX} ${panelLeftY}
    L ${busX} ${reticleY}
    L ${reticleX} ${reticleY}
  `;

  // Right panel to reticle (elbow routing)
  const rightWirePath = `
    M ${panelRightX} ${panelRightY}
    L ${busX} ${panelRightY}
    L ${busX} ${reticleY}
    L ${reticleX} ${reticleY}
  `;

  return (
    <svg 
      className="hud-wires" 
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      <defs>
        {/* Dashed line pattern for signal travel effect */}
        <pattern id="wireDash" x="0" y="0" width="20" height="1" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="10" height="1" fill="rgba(11,12,15,.4)" />
        </pattern>
      </defs>
      
      {/* Left wire */}
      <path 
        d={leftWirePath}
        fill="none"
        stroke="rgba(11,12,15,.25)"
        strokeWidth="1"
      />
      <path 
        className="wire-signal"
        d={leftWirePath}
        fill="none"
        stroke="rgba(11,12,15,.5)"
        strokeWidth="1"
        strokeDasharray="20 40"
      />
      
      {/* Right wire */}
      <path 
        d={rightWirePath}
        fill="none"
        stroke="rgba(11,12,15,.25)"
        strokeWidth="1"
      />
      <path 
        className="wire-signal"
        d={rightWirePath}
        fill="none"
        stroke="rgba(11,12,15,.5)"
        strokeWidth="1"
        strokeDasharray="20 40"
      />
      
      {/* Endpoint dots */}
      <circle cx={panelLeftX} cy={panelLeftY} r="2" fill="rgba(11,12,15,.5)" />
      <circle cx={panelRightX} cy={panelRightY} r="2" fill="rgba(11,12,15,.5)" />
      <circle cx={reticleX} cy={reticleY} r="3" fill="rgba(11,12,15,.7)" className="reticle-pulse" />
      
      {/* Reticle */}
      <g className="hud-reticle" transform={`translate(${reticleX}, ${reticleY})`}>
        <circle 
          cx="0" cy="0" r="80" 
          fill="none" 
          stroke="rgba(11,12,15,.25)" 
          strokeWidth="2"
        />
        <circle 
          cx="0" cy="0" r="60" 
          fill="none" 
          stroke="rgba(11,12,15,.15)" 
          strokeWidth="1"
          strokeDasharray="4 4"
          className="reticle-dash"
        />
        {/* Crosshair */}
        <line x1="-10" y1="0" x2="-25" y2="0" stroke="rgba(11,12,15,.5)" strokeWidth="1.5" />
        <line x1="10" y1="0" x2="25" y2="0" stroke="rgba(11,12,15,.5)" strokeWidth="1.5" />
        <line x1="0" y1="-10" x2="0" y2="-25" stroke="rgba(11,12,15,.5)" strokeWidth="1.5" />
        <line x1="0" y1="10" x2="0" y2="25" stroke="rgba(11,12,15,.5)" strokeWidth="1.5" />
        
        {/* Tick marks (will micro-blink) */}
        <g className="reticle-ticks">
          <rect x="84" y="-1" width="4" height="2" fill="rgba(11,12,15,.3)" />
          <rect x="-88" y="-1" width="4" height="2" fill="rgba(11,12,15,.3)" />
          <rect x="-1" y="84" width="2" height="4" fill="rgba(11,12,15,.3)" />
          <rect x="-1" y="-88" width="2" height="4" fill="rgba(11,12,15,.3)" />
        </g>
      </g>
    </svg>
  );
};
