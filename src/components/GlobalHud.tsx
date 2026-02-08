import { useEffect, useRef } from 'react';
import './GlobalHud.css';

export default function GlobalHud() {
  const targetRef = useRef<HTMLDivElement>(null);
  const mouseXRef = useRef<HTMLSpanElement>(null);
  const mouseYRef = useRef<HTMLSpanElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const latRef = useRef<HTMLSpanElement>(null);
  const focusRef = useRef<HTMLSpanElement>(null);
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
      const scrollPct = Math.min(100, (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
      const now = Date.now();
      const timeSinceMove = now - lastMoveTime;
      const focus = timeSinceMove > 1000 ? 1.0 : Math.max(0, 1 - (velocity / 50));
      const baseLat = 18 + Math.sin(Date.now() / 1000) * 12;
      const lat = baseLat + (1 - focus) * 18;
      
      let mode = 'IDLE';
      if (hoverTarget) mode = 'LOCK';
      else if (timeSinceMove < 500) mode = 'TRACK';
      else if (timeSinceMove < 2000) mode = 'SCAN';
      
      // Detect current section based on scroll position
      const sections = ['hero', 'work', 'skills', 'education', 'about', 'contact'];
      let currentSection = 'HERO';
      let bestMatch = { id: 'hero', distance: Infinity };
      
      const viewportCenter = window.innerHeight / 2;
      
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          const sectionCenter = rect.top + rect.height / 2;
          const distance = Math.abs(viewportCenter - sectionCenter);
          
          // If section contains viewport center, use it
          if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
            if (distance < bestMatch.distance) {
              bestMatch = { id: sectionId, distance };
            }
          }
        }
      }
      
      currentSection = bestMatch.id === 'work' ? 'WORK' : bestMatch.id.toUpperCase();
      
      const signal = Math.round(65 + focus * 30 + Math.random() * 5);
      
      // Better readable metrics
      const velocityStatus = velocity > 100 ? 'FAST' : velocity > 50 ? 'ACTIVE' : velocity > 10 ? 'MOVING' : 'IDLE';
      const focusStatus = focus > 0.9 ? 'HIGH' : focus > 0.7 ? 'MEDIUM' : 'LOW';
      
      // Update DOM directly
      if (scrollRef.current) scrollRef.current.textContent = `${scrollPct.toFixed(0)}%`;
      if (latRef.current) latRef.current.textContent = velocityStatus;
      if (focusRef.current) focusRef.current.textContent = focusStatus;
      if (modeRef.current) modeRef.current.textContent = mode;
      if (sectionRef.current) sectionRef.current.textContent = currentSection;
      if (targetRef.current) targetRef.current.textContent = hoverTarget || '⋯ SCANNING';
      
      document.documentElement.style.setProperty('--hud-scroll', scrollPct.toFixed(0));
      document.documentElement.style.setProperty('--hud-signal', signal.toString());
      
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
      
      // Update DOM directly
      if (mouseXRef.current) mouseXRef.current.textContent = mouseX;
      if (mouseYRef.current) mouseYRef.current.textContent = mouseY;

      const target = e.target as HTMLElement;
      
      // Check in order of specificity
      if (target.closest('.hero-visual') || target.closest('img[alt*="nicorn"]')) {
        hoverTarget = '🦄 UX UX UNICORN';
      } else if (target.closest('h1') && (target.textContent?.includes('EMELIE') || target.textContent?.includes('Emelie'))) {
        hoverTarget = '👋 DESIGN TECHNOLOGIST';
      } else if (target.classList.contains('wave') || (target.tagName === 'SPAN' && target.textContent?.includes('👋'))) {
        hoverTarget = '👋 HIGH FIVE';
      } else if (target.closest('[data-theme-toggle]') || target.closest('.theme-toggle')) {
        hoverTarget = '🌓 REALITY SHIFTER';
      } else if (target.tagName === 'BUTTON') {
        const text = target.textContent?.toUpperCase().slice(0, 15) || 'ACTION';
        if (text.includes('WORK')) hoverTarget = '💼 VIEW PORTFOLIO';
        else if (text.includes('TALK') || text.includes('CONTACT')) hoverTarget = '💬 INIT CONTACT';
        else hoverTarget = `⚡ ${text}`;
      } else if (target.tagName === 'A' && target.closest('header')) {
        const navText = target.textContent?.toUpperCase() || 'NAV';
        if (navText.includes('WORK')) hoverTarget = '💼 PROJECTS.DIR';
        else if (navText.includes('SKILL')) hoverTarget = '🛠️ ABILITIES.MAP';
        else if (navText.includes('EDUCATION')) hoverTarget = '🎓 KNOWLEDGE.DB';
        else if (navText.includes('ABOUT')) hoverTarget = '👤 PROFILE.SYS';
        else if (navText.includes('CONTACT')) hoverTarget = '📡 COMMS.LINK';
        else hoverTarget = `→ ${navText}`;
      } else if (target.closest('.timeline-item') || target.closest('.timeline-content')) {
        const item = target.closest('.timeline-item') || target.closest('.timeline-content')?.closest('.timeline-item');
        const company = item?.querySelector('.timeline-company')?.textContent?.toUpperCase();
        if (company) {
          hoverTarget = `🏢 ${company}`;
        } else {
          hoverTarget = '� EXPERIENCE';
        }
      } else if (target.closest('.skill-category')) {
        const cat = target.closest('.skill-category');
        const title = cat?.querySelector('h3')?.textContent?.toUpperCase();
        if (title?.includes('DESIGN')) hoverTarget = '🎨 DESIGN.TOOLKIT';
        else if (title?.includes('CODE')) hoverTarget = '💻 DEV.STACK';
        else if (title?.includes('TOOL')) hoverTarget = '🔧 TOOLS.ARRAY';
        else hoverTarget = `⚙️ ${title || 'SKILL'}`;
      } else if (target.closest('.education-card')) {
        const card = target.closest('.education-card');
        const degree = card?.querySelector('h3')?.textContent;
        if (degree?.includes('Frontend')) hoverTarget = '💻 CODE.DEGREE';
        else if (degree?.includes('Interaction')) hoverTarget = '🎨 UX.DEGREE';
        else if (degree?.includes('Nutrition')) hoverTarget = '🥗 SCI.DEGREE';
        else hoverTarget = '🎓 EDUCATION.REC';
      } else if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        hoverTarget = '⌨️ INPUT.FIELD';
      } else if (target.closest('a[href*="linkedin"]')) {
        hoverTarget = '💼 LINKEDIN.LINK';
      } else if (target.closest('a[href*="github"]')) {
        hoverTarget = '🐙 GITHUB.REPO';
      } else if (target.closest('a[href*="mail"]')) {
        hoverTarget = '📧 EMAIL.PROTO';
      } else if (target.closest('.logo')) {
        hoverTarget = '🏠 HOME.BEACON';
      } else {
        hoverTarget = '';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    rafId = requestAnimationFrame(updateHudMetrics);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="global-hud">
      <div className="hud-panel hud-panel-tl">
        <div className="panel-label">TARGET LOCK</div>
        <div ref={targetRef} className="panel-value panel-target">⋯ SCANNING</div>
        <div className="panel-sublabel">
          <span className="panel-coords">
            <span>X: <span ref={mouseXRef} className="panel-mouse-x">0.0</span>%</span>
            <span>Y: <span ref={mouseYRef} className="panel-mouse-y">0.0</span>%</span>
          </span>
        </div>
      </div>

      <div className="hud-panel hud-panel-tr">
        <div className="panel-label">SCROLL</div>
        <div ref={scrollRef} className="panel-value panel-scroll">0%</div>
        <div className="panel-bar">
          <div className="panel-bar-fill"></div>
        </div>
      </div>

      <div className="hud-panel hud-panel-mr">
        <div className="panel-row">
          <span className="panel-label">VELOCITY</span>
          <span ref={latRef} className="panel-value panel-lat">IDLE</span>
        </div>
        <div className="panel-row">
          <span className="panel-label">FOCUS</span>
          <span ref={focusRef} className="panel-value panel-focus">HIGH</span>
        </div>
        <div className="panel-row">
          <span className="panel-label">MODE</span>
          <span ref={modeRef} className="panel-value panel-mode">IDLE</span>
        </div>
      </div>

      <div className="hud-panel hud-panel-bl">
        <div className="panel-label">SECTOR</div>
        <div ref={sectionRef} className="panel-value panel-section">HERO</div>
      </div>
    </div>
  );
}
