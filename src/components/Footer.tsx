import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          Made with ☕ and a dash of ✨ by Emelie Litwin © {currentYear}
        </p>
      </div>
    </footer>
  )
}
