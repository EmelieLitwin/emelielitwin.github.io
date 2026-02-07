import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <h1 className="logo">Emelie Litwin</h1>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}
