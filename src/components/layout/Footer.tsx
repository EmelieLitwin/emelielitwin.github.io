import './Footer.css'
import { useTranslation } from '../../hooks/useTranslation'

/**
 * Footer Component
 * 
 * Site-wide footer with copyright information.
 * 
 * Features:
 * - Dynamically updates copyright year
 * - Simple, centered design
 * - Semantic <footer> element
 * - Bilingual support
 * 
 * Accessibility:
 * - Uses semantic HTML5 <footer> element
 * - Clear, readable text with proper contrast
 */
export default function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          {t.footer.madeWith} <span aria-label={t.footer.coffee}>☕</span> {t.footer.and} <span aria-label={t.footer.sparkles}>✨</span> {t.footer.by} Emelie Litwin © {currentYear}
        </p>
      </div>
    </footer>
  )
}
