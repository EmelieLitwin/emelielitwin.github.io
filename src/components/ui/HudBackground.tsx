import { useEffect, useRef } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
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
  const { t } = useTranslation();
  const hudRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const mouseXRef = useRef<HTMLSpanElement>(null);
  const mouseYRef = useRef<HTMLSpanElement>(null);
  const clicksRef = useRef<HTMLSpanElement>(null);
  const sessionRef = useRef<HTMLSpanElement>(null);
  const sectionsRef = useRef<HTMLSpanElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'light') {
      return; // Don't run RAF loop in light mode
    }

    let rafId: number;
    let lastMouseX = 0;
    let lastMouseY = 0;
    let lastMoveTime = Date.now();
    let lastClickTime = Date.now();
    let velocity = 0;
    let hoverTarget = '';
    
    const sessionStart = Date.now();
    let clickCount = 0;
    const visitedSections = new Set<string>();

    const formatTime = (ms: number): string => {
      const totalSeconds = Math.floor(ms / 1000);
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    const updateHudMetrics = () => {
      const now = Date.now();
      
      const sessionTime = now - sessionStart;
      
      const sections = [
        { id: 'hero', label: t.hud.hero },
        { id: 'work', label: t.hud.work },
        { id: 'skills', label: t.hud.skills },
        { id: 'education', label: t.hud.education },
        { id: 'about-me', label: t.hud.about },
        { id: 'contact', label: t.hud.contact }
      ];
      let currentSection: string = t.hud.hero;
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
      
      visitedSections.add(currentSection);
      
      if (sectionRef.current) sectionRef.current.textContent = currentSection;
      if (targetRef.current) targetRef.current.textContent = hoverTarget || t.hud.scanning;
      
      if (clicksRef.current) clicksRef.current.textContent = String(clickCount);
      if (sessionRef.current) sessionRef.current.textContent = formatTime(sessionTime);
      if (sectionsRef.current) sectionsRef.current.textContent = `${visitedSections.size}/6`;
      
      rafId = requestAnimationFrame(updateHudMetrics);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - lastMouseX;
      const dy = e.clientY - lastMouseY;
      velocity = Math.sqrt(dx * dx + dy * dy);
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
      lastMoveTime = Date.now();

      const mouseX = ((e.clientX / window.innerWidth) * 100).toFixed(1);
      const mouseY = ((e.clientY / window.innerHeight) * 100).toFixed(1);
      if (mouseXRef.current) mouseXRef.current.textContent = `X: ${mouseX}%`;
      if (mouseYRef.current) mouseYRef.current.textContent = `Y: ${mouseY}%`;

      const target = e.target as HTMLElement;
      
      const timelineItem = target.closest('.timeline-item');
      if (timelineItem) {
        const company = timelineItem.querySelector('.timeline-company')?.textContent?.toUpperCase();
        if (company) {
          hoverTarget = `${company}`;
        } else {
          hoverTarget = t.hud.workTarget;
        }
      }
      else if (target.closest('.hero-visual') || target.closest('img[alt*="nicorn"]')) {
        hoverTarget = t.hud.unicorn;
      } 
      else if (target.textContent?.includes('Emelie') || target.textContent?.includes('EMELIE')) {
        hoverTarget = t.hud.hello;
      } else if (target.closest('.wave-icon') || target.textContent?.includes('👋')) {
        hoverTarget = t.hud.highFive;
      } else if (target.closest('[data-theme-toggle]') || target.closest('.theme-toggle')) {
        hoverTarget = t.hud.theme;
      } else if (target.closest('.unicorn, [class*="unicorn"]')) {
        hoverTarget = t.hud.unicorn;
      }
      else if (target.closest('.hero-cta') || target.closest('.hero')) {
        if (target.tagName === 'BUTTON' || target.tagName === 'A') {
          const text = target.textContent?.toUpperCase() || '';
          if (text.includes('VIEW') && text.includes('WORK') || text.includes('SE') && text.includes('ARBETE')) {
            hoverTarget = t.hud.resume;
          } else if (text.includes('LET') && text.includes('TALK') || text.includes('LÅT') && text.includes('PRATA')) {
            hoverTarget = t.hud.sayHello;
          } else if (text.includes('CONTACT') || text.includes('KONTAKT')) {
            hoverTarget = t.hud.contactTarget;
          } else if (text.includes('WORK') || text.includes('ARBETE')) {
            hoverTarget = t.hud.workTarget;
          } else {
            hoverTarget = `⚡ ${text.slice(0, 10)}`;
          }
        } else {
          hoverTarget = '';
        }
      }
      else if (target.tagName === 'BUTTON') {
        const text = target.textContent?.toUpperCase().slice(0, 10) || 'BTN';
        if (text.includes('WORK') || text.includes('ARBETE')) hoverTarget = t.hud.workTarget;
        else if (text.includes('TALK') || text.includes('CONTACT') || text.includes('PRATA') || text.includes('KONTAKT')) hoverTarget = t.hud.contactTarget;
        else hoverTarget = `⚡ ${text}`;
      }
      else if (target.tagName === 'A' && target.closest('header')) {
        const navText = target.textContent?.toUpperCase() || 'NAV';
        if (navText.includes('WORK') || navText.includes('ARBETE')) hoverTarget = t.hud.workTarget;
        else if (navText.includes('SKILL') || navText.includes('KOMPETENS')) hoverTarget = t.hud.skillsTarget;
        else if (navText.includes('EDUCATION') || navText.includes('UTBILDNING')) hoverTarget = t.hud.eduTarget;
        else if (navText.includes('ABOUT') || navText.includes('OM')) hoverTarget = t.hud.aboutTarget;
        else if (navText.includes('CONTACT') || navText.includes('KONTAKT')) hoverTarget = t.hud.contactNav;
        else hoverTarget = `→ ${navText.slice(0, 8)}`;
      }
      else if (target.closest('.project-card')) {
        const card = target.closest('.project-card');
        const title = card?.querySelector('h3')?.textContent?.slice(0, 10).toUpperCase();
        hoverTarget = `📂 ${title || 'PROJECT'}`;
      }
      else if (target.closest('.skill-category')) {
        const cat = target.closest('.skill-category');
        const title = cat?.querySelector('h3')?.textContent?.toUpperCase();
        if (title?.includes('DESIGN')) hoverTarget = t.hud.design;
        else if (title?.includes('CODE') || title?.includes('KOD')) hoverTarget = t.hud.code;
        else if (title?.includes('TOOL') || title?.includes('VERKTYG') || title?.includes('PROCESS')) hoverTarget = t.hud.tools;
        else hoverTarget = `⚙️ ${title?.slice(0, 8) || 'SKILL'}`;
      }
      else if (target.closest('.education-card')) {
        const card = target.closest('.education-card');
        const degree = card?.querySelector('h3')?.textContent;
        if (degree?.includes('Frontend')) hoverTarget = t.hud.frontend;
        else if (degree?.includes('Interaction') || degree?.includes('Interaktionsdesign')) hoverTarget = t.hud.ux;
        else if (degree?.includes('Nutrition')) hoverTarget = t.hud.nutrition;
        else hoverTarget = t.hud.degree;
      }
      else if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        hoverTarget = t.hud.input;
      }
      else if (target.closest('a[href*="linkedin"]')) {
        hoverTarget = t.hud.linkedin;
      } else if (target.closest('a[href*="github"]')) {
        hoverTarget = t.hud.github;
      } else if (target.closest('a[href*="mail"]')) {
        hoverTarget = t.hud.email;
      }
      else if (target.closest('.logo') || target.closest('header img')) {
        hoverTarget = t.hud.home;
      }
      else if (target.closest('footer')) {
        hoverTarget = t.hud.footer;
      }
      else {
        hoverTarget = '';
      }
    };

    const handleClick = () => {
      clickCount++;
      lastClickTime = Date.now();
    };

    const handleScroll = () => {
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    rafId = requestAnimationFrame(updateHudMetrics);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, [t]);

  return (
    <div ref={hudRef} className="hud" aria-hidden="true" role="presentation">
      <svg 
        className="hud-svg" 
        viewBox="0 0 1920 1080" 
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <pattern id="hudDotGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.8" fill="currentColor" opacity="0.15" />
          </pattern>
          
          <linearGradient id="circuitGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="0.4" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>

        <rect width="100%" height="100%" fill="url(#hudDotGrid)" />

        <g className="hud-reticle" transform="translate(1344, 432)">
          <circle cx="0" cy="0" r="200" fill="none" stroke="#999" strokeWidth="2" opacity="0.35" />
          <circle cx="0" cy="0" r="160" fill="none" stroke="#999" strokeWidth="1.5" opacity="0.3" strokeDasharray="8 8" />
          <circle cx="0" cy="0" r="140" fill="none" stroke="#999" strokeWidth="1.2" opacity="0.28" />
          <circle cx="0" cy="0" r="120" fill="none" stroke="#999" strokeWidth="1" opacity="0.25" />
          
          <line x1="-240" y1="0" x2="-200" y2="0" stroke="#999" strokeWidth="1.5" opacity="0.35" />
          <line x1="200" y1="0" x2="240" y2="0" stroke="#999" strokeWidth="1.5" opacity="0.35" />
          <line x1="0" y1="-240" x2="0" y2="-200" stroke="#999" strokeWidth="1.5" opacity="0.35" />
          <line x1="0" y1="200" x2="0" y2="240" stroke="#999" strokeWidth="1.5" opacity="0.35" />
          
          <circle cx="0" cy="0" r="5" fill="#999" opacity="0.4" />
        </g>

        <g className="hud-circuits-back" stroke="#999" strokeWidth="0.5" fill="none" strokeLinejoin="round">
          <path d="M 1840,600 L 1700,600 L 1700,800 L 1500,800" className="circuit-trace circuit-delay-4" opacity="0.15" />
          
          <path d="M 1850,300 L 1750,300 L 1750,550 L 1650,550" className="circuit-trace circuit-delay-1" opacity="0.15" />
          
          <path d="M 1900,450 L 1800,450 L 1800,650 L 1700,650" className="circuit-trace circuit-delay-3" opacity="0.15" />
          
          <path d="M 0,150 L 400,150 L 400,180 L 1920,180" className="circuit-trace" opacity="0.15" />
          
          <path d="M 0,540 L 600,540 L 600,570 L 1920,570" className="circuit-trace circuit-delay-2" opacity="0.15" />
          
          <path d="M 0,820 L 500,820 L 500,850 L 1920,850" className="circuit-trace circuit-delay-4" opacity="0.15" />
          
          <path d="M 220,0 L 220,400 L 250,400 L 250,1080" className="circuit-trace circuit-delay-1" opacity="0.15" />
          
          <path d="M 960,0 L 960,350 L 990,350 L 990,1080" className="circuit-trace circuit-delay-3" opacity="0.15" />
          
          <path d="M 1620,0 L 1620,450 L 1650,450 L 1650,1080" className="circuit-trace circuit-delay-2" opacity="0.15" />
        </g>

        <g className="hud-circuits-front" stroke="#999" strokeWidth="0.5" fill="none" strokeLinejoin="round">
          <path d="M 100,100 L 100,300 L 400,300 L 400,500" className="circuit-trace" opacity="0.15" />
          
          <path d="M 1820,100 L 1820,200 L 1600,200 L 1600,400" className="circuit-trace circuit-delay-1" opacity="0.15" />
          
          <path d="M 80,400 L 200,400 L 200,700 L 350,700" className="circuit-trace circuit-delay-2" opacity="0.15" />
          
          <path d="M 600,1000 L 600,900 L 900,900 L 900,1000" className="circuit-trace circuit-delay-3" opacity="0.15" />
          
          <path d="M 1820,900 L 1700,900 L 1700,750 L 1600,750" className="circuit-trace circuit-delay-2" opacity="0.15" />
          
          <path d="M 1880,200 L 1880,500 L 1780,500 L 1780,700" className="circuit-trace circuit-delay-4" opacity="0.15" />
        </g>

        <rect 
          className="hud-scanline"
          x="0" y="0" 
          width="100%" height="60" 
          fill="#999"
          opacity="0.02"
        />

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

      <div className="hud-panel hud-panel-tl">
        <div className="panel-label">{t.hud.targetLock}</div>
        <div className="panel-value panel-target" ref={targetRef}>{t.hud.scanning}</div>
      </div>

      <div className="hud-panel hud-panel-tr">
        <div className="panel-label">{t.hud.user}</div>
        <div className="panel-telemetry">
          <div className="telemetry-row">
            <span className="telemetry-label">{t.hud.clicks}</span>
            <span className="telemetry-value" ref={clicksRef}>0</span>
          </div>
          <div className="telemetry-row">
            <span className="telemetry-label">{t.hud.session}</span>
            <span className="telemetry-value" ref={sessionRef}>00:00</span>
          </div>
          <div className="telemetry-row">
            <span className="telemetry-label">{t.hud.sections}</span>
            <span className="telemetry-value" ref={sectionsRef}>0/6</span>
          </div>
        </div>
      </div>

      <div className="hud-panel hud-panel-bl">
        <div className="panel-label">{t.hud.sector}</div>
        <div className="panel-value panel-section" ref={sectionRef}>{t.hud.hero}</div>
      </div>

      <div className="hud-panel hud-panel-br">
        <div className="panel-label">{t.hud.coordinates}</div>
        <div className="panel-coords">
          <span ref={mouseXRef}>X: 0.0%</span>
          <span ref={mouseYRef}>Y: 0.0%</span>
        </div>
      </div>
    </div>
  );
}
