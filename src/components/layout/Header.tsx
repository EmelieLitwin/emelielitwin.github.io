import './Header.css'
import ThemeToggle from '../ui/ThemeToggle'
import LanguageToggle from '../ui/LanguageToggle'
import { useState } from 'react'
import { useTranslation } from '../../hooks/useTranslation'

/**
 * Header Component
 * 
 * Site-wide navigation header with:
 * - Skip link for keyboard navigation (WCAG 2.4.1)
 * - Accessible SVG logo with proper labeling
 * - Main navigation with semantic HTML
 * - Mobile hamburger menu with slide-in navigation
 * - Theme toggle integration
 * - Language toggle integration
 * 
 * Accessibility features:
 * - Skip to main content link (hidden until focused)
 * - aria-label on navigation for screen readers
 * - Semantic <nav> and <header> elements
 * - SVG role="img" with descriptive title
 * - Mobile menu keyboard accessible with Escape to close
 */
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t } = useTranslation()

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  // Close menu on Escape key
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape' && mobileMenuOpen) {
      closeMobileMenu()
    }
  }
  return (
    <header className="header" onKeyDown={handleKeyDown}>
      <a href="#main" className="skip-link">Skip to main content</a>
      <nav className="nav" aria-label="Main navigation">
        {/* Mobile hamburger button - replaces logo on mobile */}
        <button 
          className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        
        {/* Desktop logo - hidden on mobile */}
        <a href="#hero" className="logo logo-desktop" aria-label="Emelie Litwin - Home" onClick={closeMobileMenu}>
          <svg 
            className="logo-svg" 
            width="60" 
            height="60" 
            viewBox="0 0 1000 1000" 
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-labelledby="logo-title"
          >
            <title id="logo-title">Emelie Litwin Logo</title>
            <defs>
              <linearGradient id="logo-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" className="logo-stop-1" />
                <stop offset="100%" className="logo-stop-1" />
              </linearGradient>
              <linearGradient id="logo-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" className="logo-stop-2" />
                <stop offset="100%" className="logo-stop-2" />
              </linearGradient>
              <linearGradient id="logo-grad-3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" className="logo-stop-3" />
                <stop offset="100%" className="logo-stop-3" />
              </linearGradient>
            </defs>
            
            <polygon points="280,653 373,679 255,840" fill="url(#logo-grad-1)" />
            <polygon points="102,634 298,439 373,430 297,540 447,585 387,674 281,646 285,575" fill="url(#logo-grad-2)" />
            <polygon points="312,528 386,425 431,428" fill="url(#logo-grad-3)" />
            <polygon points="332,520 485,397 513,414 496,435" fill="url(#logo-grad-2)" />
            <polygon points="316,534 492,443 467,467 521,509 515,543 565,587 560,592 498,549" fill="url(#logo-grad-3)" />
            <polygon points="318,542 496,557 555,595 548,605" fill="url(#logo-grad-1)" />
            <polygon points="550,611 574,592 599,618" fill="url(#logo-grad-3)" />
            <polygon points="476,466 543,399 521,500" fill="url(#logo-grad-2)" />
            <polygon points="525,524 555,392 600,427" fill="url(#logo-grad-3)" />
            <polygon points="522,542 605,435 597,604" fill="url(#logo-grad-2)" />
            <polygon points="613,444 743,521 685,543 775,833 554,617 605,625" fill="url(#logo-grad-1)" />
            <polygon points="565,318 620,318 655,457 613,434" fill="url(#logo-grad-3)" />
            <polygon points="629,310 695,204 751,184 733,267 740,508 661,462" fill="url(#logo-grad-2)" />
            <polygon points="757,183 869,81 776,196" fill="url(#logo-grad-1)" />
            <polygon points="743,273 755,194 848,270 853,338" fill="url(#logo-grad-3)" />
          </svg>
        </a>
        
        <div className="nav-right">
          {/* Desktop navigation */}
          <ul className="nav-links nav-links-desktop">
            <li><a href="#work">{t.nav.work}</a></li>
            <li><a href="#skills">{t.nav.skills}</a></li>
            <li><a href="#education">{t.nav.education}</a></li>
            <li><a href="#about-me">{t.nav.about}</a></li>
            <li><a href="#contact">{t.nav.contact}</a></li>
          </ul>
          
          {/* Mobile unicorn - only visible on mobile */}
          <a href="#hero" className="mobile-unicorn" aria-label="Back to top" onClick={closeMobileMenu}>
            <svg 
              className="mobile-unicorn-svg" 
              viewBox="0 0 1000 1000" 
              xmlns="http://www.w3.org/2000/svg"
              focusable="false"
            >
              <defs>
                <linearGradient id="mobile-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" className="logo-stop-1" />
                  <stop offset="100%" className="logo-stop-1" />
                </linearGradient>
                <linearGradient id="mobile-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" className="logo-stop-2" />
                  <stop offset="100%" className="logo-stop-2" />
                </linearGradient>
                <linearGradient id="mobile-grad-3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" className="logo-stop-3" />
                  <stop offset="100%" className="logo-stop-3" />
                </linearGradient>
              </defs>
              
              <polygon points="280,653 373,679 255,840" fill="url(#mobile-grad-1)" />
              <polygon points="102,634 298,439 373,430 297,540 447,585 387,674 281,646 285,575" fill="url(#mobile-grad-2)" />
              <polygon points="312,528 386,425 431,428" fill="url(#mobile-grad-3)" />
              <polygon points="332,520 485,397 513,414 496,435" fill="url(#mobile-grad-2)" />
              <polygon points="316,534 492,443 467,467 521,509 515,543 565,587 560,592 498,549" fill="url(#mobile-grad-3)" />
              <polygon points="318,542 496,557 555,595 548,605" fill="url(#mobile-grad-1)" />
              <polygon points="550,611 574,592 599,618" fill="url(#mobile-grad-3)" />
              <polygon points="476,466 543,399 521,500" fill="url(#mobile-grad-2)" />
              <polygon points="525,524 555,392 600,427" fill="url(#mobile-grad-3)" />
              <polygon points="522,542 605,435 597,604" fill="url(#mobile-grad-2)" />
              <polygon points="613,444 743,521 685,543 775,833 554,617 605,625" fill="url(#mobile-grad-1)" />
              <polygon points="565,318 620,318 655,457 613,434" fill="url(#mobile-grad-3)" />
              <polygon points="629,310 695,204 751,184 733,267 740,508 661,462" fill="url(#mobile-grad-2)" />
              <polygon points="757,183 869,81 776,196" fill="url(#mobile-grad-1)" />
              <polygon points="743,273 755,194 848,270 853,338" fill="url(#mobile-grad-3)" />
            </svg>
          </a>
          
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </nav>
      
      {/* Mobile slide-in menu */}
      <div 
        className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <ul className="mobile-menu-links">
          <li><a href="#hero" onClick={closeMobileMenu}>{t.nav.home}</a></li>
          <li><a href="#work" onClick={closeMobileMenu}>{t.nav.work}</a></li>
          <li><a href="#skills" onClick={closeMobileMenu}>{t.nav.skills}</a></li>
          <li><a href="#education" onClick={closeMobileMenu}>{t.nav.education}</a></li>
          <li><a href="#about-me" onClick={closeMobileMenu}>{t.nav.about}</a></li>
          <li><a href="#contact" onClick={closeMobileMenu}>{t.nav.contact}</a></li>
        </ul>
        
        {/* Mobile menu footer with toggles */}
        <div className="mobile-menu-footer">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
      
      {/* Overlay backdrop */}
      {mobileMenuOpen && (
        <div 
          className="mobile-menu-overlay" 
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
    </header>
  )
}
