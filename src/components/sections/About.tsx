import './About.css'
import { useState, useEffect } from 'react'
import { useTranslation } from '../../hooks/useTranslation'
import profileImage from '../../assets/profile-cyberpunk.png'
import profileImageLight from '../../assets/profile-cyberpunk-light.png'

export default function About() {
  const { t } = useTranslation()
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    // Check current theme
    const currentTheme = document.documentElement.getAttribute('data-theme') as 'dark' | 'light' || 'dark'
    setTheme(currentTheme)

    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          const newTheme = document.documentElement.getAttribute('data-theme') as 'dark' | 'light' || 'dark'
          setTheme(newTheme)
        }
      })
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="about" id="about-me">
      <div className="about-container">
        <h2 className="about-heading">{t.about.title}</h2>
        
        <div className="about-content">
          <div className="about-image-wrapper">
            <div className="about-image-glow"></div>
            <img 
              src={theme === 'light' ? profileImageLight : profileImage}
              alt="Emelie Litwin - Design Technologist"
              className="about-image"
            />
          </div>
          
          <div className="about-text">
            <p className="about-intro about-intro-full">
              {t.about.introFull}
            </p>
            
            <p className="about-intro about-intro-mobile">
              {t.about.introMobile}
            </p>
            
            <p className="about-paragraph-full">
              {t.about.paragraph1Full}
            </p>
            
            <p className="about-paragraph-mobile">
              {t.about.paragraph1Mobile}
            </p>
            
            <p className="about-paragraph-full">
              {t.about.paragraph2Full}
            </p>
            
            <p className="about-paragraph-mobile">
              {t.about.paragraph2Mobile}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
