import './Footer.css'

/**
 * Footer Component
 * 
 * Site-wide footer with copyright information.
 * 
 * Features:
 * - Dynamically updates copyright year
 * - Simple, centered design
 * - Semantic <footer> element
 * 
 * Accessibility:
 * - Uses semantic HTML5 <footer> element
 * - Clear, readable text with proper contrast
 */
export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          Made with <span aria-label="coffee">☕</span> and a dash of <span aria-label="sparkles">✨</span> by Emelie Litwin © {currentYear}
        </p>
      </div>
    </footer>
  )
}
