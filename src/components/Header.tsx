import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <nav className="nav" aria-label="Main navigation">
        <a href="#about" className="logo" aria-label="Home">
          <span className="logo-text">EL</span>
        </a>
        <ul className="nav-links">
          <li><a href="#about" aria-label="Navigate to About section">About</a></li>
          <li><a href="#work" aria-label="Navigate to Work experience">Work</a></li>
          <li><a href="#skills" aria-label="Navigate to Skills section">Skills</a></li>
          <li><a href="#education" aria-label="Navigate to Education section">Education</a></li>
          <li><a href="#contact" aria-label="Navigate to Contact section">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}
