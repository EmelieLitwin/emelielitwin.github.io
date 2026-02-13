import { useEffect, useRef } from 'react';
import './HudBackground.css';

/**
 * HudBackground Component
 * 
 * A decorative sci-fi HUD (Heads-Up Display) overlay that provides visual interest
 * without interfering with content accessibility. Features:
 * - Animated reticle circles and circuit traces
 * - Live data panels with scroll progress and mouse tracking
 * - Section detection and hover target identification
 * 
 * Accessibility:
 * - Marked as aria-hidden to prevent screen reader interference
 * - pointer-events: none to allow interaction with underlying content
 * - Hidden on light theme for cleaner appearance
 * - Respects prefers-reduced-motion user preference
 */
export default function HudBackground() {
  const hudRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const mouseXRef = useRef<HTMLSpanElement>(null);
  const mouseYRef = useRef<HTMLSpanElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const latRef = useRef<HTMLSpanElement>(null);
  const sigRef = useRef<HTMLSpanElement>(null);
  const modeRef = useRef<HTMLSpanElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;
    let lastMouseX = 0;
    let lastMouseY = 0;
    let lastMoveTime = 0;
    let velocity = 0;
    let hoverTarget = '';

    const updateHudMetrics = () => {
      // Calculate scroll percentage
      const scrollPct = Math.min(100, (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
      
      // Calculate focus (inverse of velocity, 0-1 range)
      const now = Date.now();
      const timeSinceMove = now - lastMoveTime;
      const focus = timeSinceMove > 1000 ? 1.0 : Math.max(0, 1 - (velocity / 50));
      
      // Calculate velocity status
      let velocityStatus = 'IDLE';
      if (velocity > 30) velocityStatus = 'FAST';
      else if (velocity > 15) velocityStatus = 'ACTIVE';
      else if (velocity > 5) velocityStatus = 'MOVING';
      
      // Calculate focus level
      let focusLevel = 'LOW';
      if (focus > 0.8) focusLevel = 'HIGH';
      else if (focus > 0.5) focusLevel = 'MED';
      
      // Mode based on recent mouse activity and hover
      let mode = 'IDLE';
      if (hoverTarget) mode = 'LOCK';
      else if (timeSinceMove < 500) mode = 'TRACK';
      else if (timeSinceMove < 2000) mode = 'SCAN';
      
      // Current section (find which section is in viewport)
      const sections = [
        { id: 'hero', label: 'HERO' },
        { id: 'work', label: 'WORK' },
        { id: 'skills', label: 'SKILLS' },
        { id: 'education', label: 'EDUCATION' },
        { id: 'about-me', label: 'ABOUT' },
        { id: 'contact', label: 'CONTACT' }
      ];
      let currentSection = 'HERO';
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section.label;
            break;
          }
        }
      }
      
      // Signal quality (0-100) based on focus
      const signal = Math.round(65 + focus * 30 + Math.random() * 5);
      
      // Update DOM directly via refs
      if (scrollRef.current) scrollRef.current.textContent = `${scrollPct.toFixed(0)}%`;
      if (latRef.current) latRef.current.textContent = velocityStatus;
      if (sigRef.current) sigRef.current.textContent = focusLevel;
      if (modeRef.current) modeRef.current.textContent = mode;
      if (sectionRef.current) sectionRef.current.textContent = currentSection;
      if (targetRef.current) targetRef.current.textContent = hoverTarget || 'SCANNING...';
      
      // Update CSS variables for progress bar
      document.documentElement.style.setProperty('--hud-scroll', scrollPct.toFixed(0));
      
      rafId = requestAnimationFrame(updateHudMetrics);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - lastMouseX;
      const dy = e.clientY - lastMouseY;
      velocity = Math.sqrt(dx * dx + dy * dy);
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
      lastMoveTime = Date.now();

      // Update mouse coordinates directly
      const mouseX = ((e.clientX / window.innerWidth) * 100).toFixed(1);
      const mouseY = ((e.clientY / window.innerHeight) * 100).toFixed(1);
      if (mouseXRef.current) mouseXRef.current.textContent = `X: ${mouseX}%`;
      if (mouseYRef.current) mouseYRef.current.textContent = `Y: ${mouseY}%`;

      // Detect what element is being hovered
      const target = e.target as HTMLElement;
      
      // Timeline items - prioritize company names
      const timelineItem = target.closest('.timeline-item');
      if (timelineItem) {
        const company = timelineItem.querySelector('.timeline-company')?.textContent?.toUpperCase();
        if (company) {
          hoverTarget = `${company}`;
        } else {
          hoverTarget = '💼 WORK';
        }
      }
      // Easter eggs for specific elements
      else if (target.closest('.hero-visual') || target.closest('img[alt*="nicorn"]')) {
        hoverTarget = '🦄 UX UNICORN';
      } 
      else if (target.textContent?.includes('Emelie') || target.textContent?.includes('EMELIE')) {
        hoverTarget = '👋 HELLO';
      } else if (target.closest('.wave-icon') || target.textContent?.includes('👋')) {
        hoverTarget = '👋 HIGH FIVE';
      } else if (target.closest('[data-theme-toggle]') || target.closest('.theme-toggle')) {
        hoverTarget = '🌓 THEME';
      } else if (target.closest('.unicorn, [class*="unicorn"]')) {
        hoverTarget = '🦄 UX UNICORN';
      }
      // Hero buttons - special messages
      else if (target.closest('.hero-cta') || target.closest('.hero')) {
        if (target.tagName === 'BUTTON' || target.tagName === 'A') {
          const text = target.textContent?.toUpperCase() || '';
          if (text.includes('VIEW') && text.includes('WORK')) {
            hoverTarget = '🚀 RESUME';
          } else if (text.includes('LET') && text.includes('TALK')) {
            hoverTarget = '📡 SAY HELLO';
          } else if (text.includes('CONTACT')) {
            hoverTarget = '💬 CONTACT';
          } else if (text.includes('WORK')) {
            hoverTarget = '💼 WORK';
          } else {
            hoverTarget = `⚡ ${text.slice(0, 10)}`;
          }
        } else {
          hoverTarget = '';
        }
      }
      // Other Buttons
      else if (target.tagName === 'BUTTON') {
        const text = target.textContent?.toUpperCase().slice(0, 10) || 'BTN';
        if (text.includes('WORK')) hoverTarget = '💼 WORK';
        else if (text.includes('TALK') || text.includes('CONTACT')) hoverTarget = '💬 CONTACT';
        else hoverTarget = `⚡ ${text}`;
      }
      // Navigation
      else if (target.tagName === 'A' && target.closest('header')) {
        const navText = target.textContent?.toUpperCase() || 'NAV';
        if (navText.includes('WORK')) hoverTarget = '💼 WORK';
        else if (navText.includes('SKILL')) hoverTarget = '🛠️ SKILLS';
        else if (navText.includes('EDUCATION')) hoverTarget = '🎓 EDU';
        else if (navText.includes('ABOUT')) hoverTarget = '👤 ABOUT';
        else if (navText.includes('CONTACT')) hoverTarget = '📡 CONTACT';
        else hoverTarget = `→ ${navText.slice(0, 8)}`;
      }
      // Project cards
      else if (target.closest('.project-card')) {
        const card = target.closest('.project-card');
        const title = card?.querySelector('h3')?.textContent?.slice(0, 10).toUpperCase();
        hoverTarget = `📂 ${title || 'PROJECT'}`;
      }
      // Skills
      else if (target.closest('.skill-category')) {
        const cat = target.closest('.skill-category');
        const title = cat?.querySelector('h3')?.textContent?.toUpperCase();
        if (title?.includes('DESIGN')) hoverTarget = '🎨 DESIGN';
        else if (title?.includes('CODE')) hoverTarget = '💻 CODE';
        else if (title?.includes('TOOL')) hoverTarget = '🔧 TOOLS';
        else hoverTarget = `⚙️ ${title?.slice(0, 8) || 'SKILL'}`;
      }
      // Education
      else if (target.closest('.education-card')) {
        const card = target.closest('.education-card');
        const degree = card?.querySelector('h3')?.textContent;
        if (degree?.includes('Frontend')) hoverTarget = '💻 FRONTEND';
        else if (degree?.includes('Interaction')) hoverTarget = '🎨 UX';
        else if (degree?.includes('Nutrition')) hoverTarget = '🥗 NUTRITION';
        else hoverTarget = '🎓 DEGREE';
      }
      // Contact form
      else if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        hoverTarget = '⌨️ INPUT';
      }
      // Social links
      else if (target.closest('a[href*="linkedin"]')) {
        hoverTarget = '💼 LINKEDIN';
      } else if (target.closest('a[href*="github"]')) {
        hoverTarget = '🐙 GITHUB';
      } else if (target.closest('a[href*="mail"]')) {
        hoverTarget = '📧 EMAIL';
      }
      // Logo/brand
      else if (target.closest('.logo') || target.closest('header img')) {
        hoverTarget = '🏠 HOME';
      }
      // Footer
      else if (target.closest('footer')) {
        hoverTarget = 'FOOTER';
      }
      else {
        hoverTarget = '';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', () => {}, { passive: true });
    
    rafId = requestAnimationFrame(updateHudMetrics);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={hudRef} className="hud" aria-hidden="true" role="presentation">
      {/* Background layer - SVG decorative elements */}
      <svg 
        className="hud-svg" 
        viewBox="0 0 1920 1080" 
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          {/* Dot grid pattern */}
          <pattern id="hudDotGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.8" fill="currentColor" opacity="0.15" />
          </pattern>
          
          {/* Circuit path gradient */}
          <linearGradient id="circuitGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="0.4" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Dot grid background */}
        <rect width="100%" height="100%" fill="url(#hudDotGrid)" />

        {/* Large reticle circle behind unicorn area (70% right, 40% down) */}
        <g className="hud-reticle" transform="translate(1344, 432)">
          <circle cx="0" cy="0" r="200" fill="none" stroke="#999" strokeWidth="2" opacity="0.35" />
          <circle cx="0" cy="0" r="160" fill="none" stroke="#999" strokeWidth="1.5" opacity="0.3" strokeDasharray="8 8" />
          <circle cx="0" cy="0" r="140" fill="none" stroke="#999" strokeWidth="1.2" opacity="0.28" />
          <circle cx="0" cy="0" r="120" fill="none" stroke="#999" strokeWidth="1" opacity="0.25" />
          
          {/* Crosshairs */}
          <line x1="-240" y1="0" x2="-200" y2="0" stroke="#999" strokeWidth="1.5" opacity="0.35" />
          <line x1="200" y1="0" x2="240" y2="0" stroke="#999" strokeWidth="1.5" opacity="0.35" />
          <line x1="0" y1="-240" x2="0" y2="-200" stroke="#999" strokeWidth="1.5" opacity="0.35" />
          <line x1="0" y1="200" x2="0" y2="240" stroke="#999" strokeWidth="1.5" opacity="0.35" />
          
          {/* Center dot */}
          <circle cx="0" cy="0" r="5" fill="#999" opacity="0.4" />
        </g>

        {/* Circuit traces BEHIND unicorn (z-index: 1) */}
        <g className="hud-circuits-back" stroke="#999" strokeWidth="0.5" fill="none" strokeLinejoin="round">
          {/* Circuit 5: Right side path - behind unicorn */}
          <path d="M 1840,600 L 1700,600 L 1700,800 L 1500,800" className="circuit-trace circuit-delay-4" opacity="0.15" />
          
          {/* Circuit 6: Right side vertical down - behind unicorn */}
          <path d="M 1850,300 L 1750,300 L 1750,550 L 1650,550" className="circuit-trace circuit-delay-1" opacity="0.15" />
          
          {/* Circuit 7: Right middle horizontal - behind unicorn */}
          <path d="M 1900,450 L 1800,450 L 1800,650 L 1700,650" className="circuit-trace circuit-delay-3" opacity="0.15" />
          
          {/* NEW: Full width horizontal traces across screen */}
          {/* Top horizontal spanning full width */}
          <path d="M 0,150 L 400,150 L 400,180 L 1920,180" className="circuit-trace" opacity="0.15" />
          
          {/* Middle horizontal spanning full width */}
          <path d="M 0,540 L 600,540 L 600,570 L 1920,570" className="circuit-trace circuit-delay-2" opacity="0.15" />
          
          {/* Lower horizontal spanning full width */}
          <path d="M 0,820 L 500,820 L 500,850 L 1920,850" className="circuit-trace circuit-delay-4" opacity="0.15" />
          
          {/* Vertical full height traces */}
          {/* Left vertical */}
          <path d="M 220,0 L 220,400 L 250,400 L 250,1080" className="circuit-trace circuit-delay-1" opacity="0.15" />
          
          {/* Middle vertical */}
          <path d="M 960,0 L 960,350 L 990,350 L 990,1080" className="circuit-trace circuit-delay-3" opacity="0.15" />
          
          {/* Right vertical */}
          <path d="M 1620,0 L 1620,450 L 1650,450 L 1650,1080" className="circuit-trace circuit-delay-2" opacity="0.15" />
        </g>

        {/* Circuit traces IN FRONT of unicorn (z-index: 3) */}
        <g className="hud-circuits-front" stroke="#999" strokeWidth="0.5" fill="none" strokeLinejoin="round">
          {/* Circuit 1: Top-left to center */}
          <path d="M 100,100 L 100,300 L 400,300 L 400,500" className="circuit-trace" opacity="0.15" />
          
          {/* Circuit 2: Top-right corner path */}
          <path d="M 1820,100 L 1820,200 L 1600,200 L 1600,400" className="circuit-trace circuit-delay-1" opacity="0.15" />
          
          {/* Circuit 3: Left side vertical */}
          <path d="M 80,400 L 200,400 L 200,700 L 350,700" className="circuit-trace circuit-delay-2" opacity="0.15" />
          
          {/* Circuit 4: Bottom horizontal */}
          <path d="M 600,1000 L 600,900 L 900,900 L 900,1000" className="circuit-trace circuit-delay-3" opacity="0.15" />
          
          {/* Circuit 8: Right lower path */}
          <path d="M 1820,900 L 1700,900 L 1700,750 L 1600,750" className="circuit-trace circuit-delay-2" opacity="0.15" />
          
          {/* Circuit 9: Right edge vertical */}
          <path d="M 1880,200 L 1880,500 L 1780,500 L 1780,700" className="circuit-trace circuit-delay-4" opacity="0.15" />
        </g>

        {/* Scanline shimmer */}
        <rect 
          className="hud-scanline"
          x="0" y="0" 
          width="100%" height="60" 
          fill="#999"
          opacity="0.02"
        />

        {/* Top ruler/ticks */}
        <g opacity="0.1" stroke="#999" strokeWidth="0.5">
          {Array.from({ length: 40 }).map((_, i) => (
            <line 
              key={i}
              x1={80 + i * 45} 
              y1="60" 
              x2={80 + i * 45} 
              y2={i % 5 === 0 ? "75" : "68"} 
            />
          ))}
        </g>
      </svg>

      {/* HTML Panels with live data */}
      <div className="hud-panel hud-panel-tl">
        <div className="panel-label">TARGET LOCK</div>
        <div className="panel-value panel-target" ref={targetRef}>SCANNING...</div>
      </div>

      <div className="hud-panel hud-panel-tr">
        <div className="panel-label">SCROLL</div>
        <div className="panel-value panel-scroll" ref={scrollRef}>0%</div>
        <div className="panel-bar">
          <div className="panel-bar-fill"></div>
        </div>
      </div>

      <div className="hud-panel hud-panel-bl">
        <div className="panel-label">SECTOR</div>
        <div className="panel-value panel-section" ref={sectionRef}>HERO</div>
      </div>

      <div className="hud-panel hud-panel-br">
        <div className="panel-label">COORDINATES</div>
        <div className="panel-coords">
          <span ref={mouseXRef}>X: 0.0%</span>
          <span ref={mouseYRef}>Y: 0.0%</span>
        </div>
      </div>
    </div>
  );
}
