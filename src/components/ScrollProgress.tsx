import { useEffect, useState } from 'react';
import './ScrollProgress.css';

/**
 * ScrollProgress Component
 * 
 * Visual indicator showing page scroll progress as a horizontal bar.
 * 
 * Features:
 * - RequestAnimationFrame for smooth 60fps updates
 * - Passive event listener for better scroll performance
 * - Calculates progress as percentage of total scrollable height
 * 
 * Accessibility:
 * - Purely decorative (aria-hidden)
 * - Does not interfere with keyboard navigation
 * - Respects reduced-motion preferences via CSS
 */
const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const windowHeight = window.innerHeight;
          const documentHeight = document.documentElement.scrollHeight - windowHeight;
          const scrolled = window.scrollY;
          const progress = (scrolled / documentHeight) * 100;
          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-progress-container" aria-hidden="true" role="presentation">
      <div 
        className="scroll-progress-bar" 
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
