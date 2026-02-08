import './HudLines.css';

export default function HudLines() {
  return (
    <div className="hud-lines">
      <svg className="hud-svg-lines" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
        {/* Dot grid background */}
        <defs>
          <pattern id="dotGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.8" fill="currentColor" opacity="0.12" />
          </pattern>
          
          <linearGradient id="lineGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="0.5" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Background dot grid */}
        <rect width="100%" height="100%" fill="url(#dotGrid)" />

        {/* Orthogonal circuit lines - different patterns per section */}
        <g className="circuit-group circuit-hero" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.25" strokeLinejoin="round">
          <path d="M 100,100 L 100,300 L 400,300 L 400,500" className="circuit-path circuit-delay-0" />
          <path d="M 1820,100 L 1820,200 L 1600,200 L 1600,400" className="circuit-path circuit-delay-1" />
          <path d="M 80,400 L 200,400 L 200,700 L 350,700" className="circuit-path circuit-delay-2" />
        </g>

        <g className="circuit-group circuit-work" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.25" strokeLinejoin="round">
          <path d="M 200,150 L 500,150 L 500,450 L 800,450" className="circuit-path circuit-delay-1" />
          <path d="M 1700,200 L 1400,200 L 1400,600 L 1100,600" className="circuit-path circuit-delay-2" />
          <path d="M 150,800 L 450,800 L 450,500 L 700,500" className="circuit-path circuit-delay-0" />
        </g>

        <g className="circuit-group circuit-skills" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.25" strokeLinejoin="round">
          <path d="M 300,100 L 300,400 L 600,400 L 600,700" className="circuit-path circuit-delay-2" />
          <path d="M 1600,150 L 1300,150 L 1300,500 L 1000,500" className="circuit-path circuit-delay-0" />
          <path d="M 100,600 L 400,600 L 400,900 L 700,900" className="circuit-path circuit-delay-1" />
        </g>

        <g className="circuit-group circuit-education" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.25" strokeLinejoin="round">
          <path d="M 250,200 L 550,200 L 550,500 L 850,500" className="circuit-path circuit-delay-1" />
          <path d="M 1750,250 L 1450,250 L 1450,550 L 1150,550" className="circuit-path circuit-delay-2" />
          <path d="M 200,750 L 500,750 L 500,450 L 800,450" className="circuit-path circuit-delay-0" />
        </g>

        <g className="circuit-group circuit-about" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.25" strokeLinejoin="round">
          <path d="M 150,150 L 450,150 L 450,450 L 750,450" className="circuit-path circuit-delay-0" />
          <path d="M 1650,300 L 1350,300 L 1350,650 L 1050,650" className="circuit-path circuit-delay-1" />
          <path d="M 250,850 L 550,850 L 550,550 L 850,550" className="circuit-path circuit-delay-2" />
        </g>

        <g className="circuit-group circuit-contact" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.25" strokeLinejoin="round">
          <path d="M 180,180 L 480,180 L 480,480 L 780,480" className="circuit-path circuit-delay-2" />
          <path d="M 1700,220 L 1400,220 L 1400,580 L 1100,580" className="circuit-path circuit-delay-0" />
          <path d="M 220,800 L 520,800 L 520,500 L 820,500" className="circuit-path circuit-delay-1" />
        </g>

        {/* Scanline effect */}
        <rect 
          className="hud-scanline"
          x="0" y="0" 
          width="100%" height="80" 
          fill="currentColor" 
          opacity="0.03"
        />

        {/* Corner brackets */}
        <g opacity="0.15" stroke="currentColor" strokeWidth="1.5" fill="none">
          <path d="M 60,60 L 100,60 M 60,60 L 60,100" />
          <path d="M 1860,60 L 1820,60 M 1860,60 L 1860,100" />
          <path d="M 60,1020 L 100,1020 M 60,1020 L 60,980" />
          <path d="M 1860,1020 L 1820,1020 M 1860,1020 L 1860,980" />
        </g>

        {/* Rotating reticle circle - right side where unicorn is */}
        <g className="hud-reticle" transform="translate(1344, 432)">
          <circle cx="0" cy="0" r="180" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.12" strokeDasharray="8 8" className="reticle-outer" />
          <circle cx="0" cy="0" r="140" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.1" className="reticle-middle" />
          <circle cx="0" cy="0" r="100" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.08" className="reticle-inner" />
          
          {/* Crosshairs */}
          <line x1="-200" y1="0" x2="-180" y2="0" stroke="currentColor" strokeWidth="1" opacity="0.15" />
          <line x1="180" y1="0" x2="200" y2="0" stroke="currentColor" strokeWidth="1" opacity="0.15" />
          <line x1="0" y1="-200" x2="0" y2="-180" stroke="currentColor" strokeWidth="1" opacity="0.15" />
          <line x1="0" y1="180" x2="0" y2="200" stroke="currentColor" strokeWidth="1" opacity="0.15" />
          
          {/* Center dot */}
          <circle cx="0" cy="0" r="3" fill="currentColor" opacity="0.2" />
        </g>
      </svg>
    </div>
  );
}
