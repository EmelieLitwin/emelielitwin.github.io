import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <nav className="nav" aria-label="Main navigation">
        <a href="#about" className="logo" aria-label="Home">
          <svg className="logo-unicorn" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Unicorn logo">
            <defs>
              <linearGradient id="logo-grad-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#00F0FF', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#0BC5EA', stopOpacity: 1 }} />
              </linearGradient>
              <linearGradient id="logo-grad-blue" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#1D4ED8', stopOpacity: 1 }} />
              </linearGradient>
              <linearGradient id="logo-grad-magenta" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#FF00FF', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#D946EF', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            
            {/* Simplified unicorn - key shapes only */}
            <polygon points="280,653 373,679 255,840" fill="none" stroke="url(#logo-grad-magenta)" strokeLinejoin="round" strokeWidth="2" />
            <polygon points="102,634 298,439 373,430 297,540 447,585 387,674 281,646 285,575" fill="none" stroke="url(#logo-grad-blue)" strokeLinejoin="round" strokeWidth="2" />
            <polygon points="316,534 492,443 467,467 521,509 515,543 565,587 560,592 498,549" fill="none" stroke="url(#logo-grad-cyan)" strokeLinejoin="round" strokeWidth="2" />
            <polygon points="613,444 743,521 685,543 775,833 554,617 605,625" fill="none" stroke="url(#logo-grad-magenta)" strokeLinejoin="round" strokeWidth="2" />
            <polygon points="629,310 695,204 751,184 733,267 740,508 661,462" fill="none" stroke="url(#logo-grad-blue)" strokeLinejoin="round" strokeWidth="2" />
            <polygon points="757,183 869,81 776,196" fill="none" stroke="url(#logo-grad-magenta)" strokeLinejoin="round" strokeWidth="2" />
          </svg>
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
