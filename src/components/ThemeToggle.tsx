import { useState, useEffect } from 'react'
import './ThemeToggle.css'

export type Theme = 'cyberpunk'

interface ThemeOption {
  id: Theme
  name: string
  icon: string
  description: string
}

const themes: ThemeOption[] = [
  {
    id: 'cyberpunk',
    name: 'Cyberpunk',
    icon: '🌆',
    description: 'Neon lights & future vibes'
  }
]

export default function ThemeToggle() {
  const [currentTheme, setCurrentTheme] = useState<Theme>('cyberpunk')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Load saved theme or use default
    const savedTheme = localStorage.getItem('theme') as Theme
    if (savedTheme && themes.some(t => t.id === savedTheme)) {
      setCurrentTheme(savedTheme)
      document.documentElement.setAttribute('data-theme', savedTheme)
    } else {
      document.documentElement.setAttribute('data-theme', 'cyberpunk')
    }
  }, [])

  const changeTheme = (theme: Theme) => {
    setCurrentTheme(theme)
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
    setIsOpen(false)
  }

  const currentThemeData = themes.find(t => t.id === currentTheme) || themes[0]

  return (
    <div className="theme-toggle-wrapper">
      <button 
        className="theme-toggle-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change theme"
        title="Change theme"
      >
        <span className="theme-icon">{currentThemeData.icon}</span>
        <span className="theme-name">{currentThemeData.name}</span>
      </button>

      {isOpen && (
        <>
          <div className="theme-overlay" onClick={() => setIsOpen(false)} />
          <div className="theme-picker">
            <h3 className="theme-picker-title">Choose Your Vibe ✨</h3>
            <div className="theme-grid">
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  className={`theme-option ${currentTheme === theme.id ? 'active' : ''}`}
                  onClick={() => changeTheme(theme.id)}
                  data-theme-preview={theme.id}
                >
                  <span className="theme-option-icon">{theme.icon}</span>
                  <span className="theme-option-name">{theme.name}</span>
                  <span className="theme-option-desc">{theme.description}</span>
                  {currentTheme === theme.id && (
                    <span className="theme-option-check">✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

