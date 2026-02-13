import './About.css'
import { useState, useEffect } from 'react'
import profileImage from '../assets/profile-cyberpunk.png'
import profileImageLight from '../assets/profile-cyberpunk-light.png'

export default function About() {
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
        <h2 className="about-heading">About Me</h2>
        
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
              I'm a design technologist who bridges the gap between design and development. 
              With expertise in both UX/UI design and frontend development, I create beautiful, 
              functional experiences that solve real problems.
            </p>
            
            <p className="about-intro about-intro-mobile">
              I'm a design technologist who loves bridging the gap between design and development. I enjoy creating things that look good and work well.
            </p>
            
            <p className="about-paragraph-full">
              My path to tech wasn't traditional. I started as a dietitian, working with patients 
              to solve complex health challenges. When I discovered UX design, I realized the skills 
              were the same: understand the problem, empathize with users, and create solutions that 
              actually work. That foundation still drives how I approach product development today.
            </p>
            
            <p className="about-paragraph-mobile">
              I started as a dietitian before discovering UX design. That background taught me to understand problems deeply and create solutions that actually help people.
            </p>
            
            <p className="about-paragraph-full">
              I enjoy building products that are intuitive, well considered, and hold up in real use. 
              Whether coding components, prototyping in Figma, or exploring AI tools, I focus on creating 
              solutions where design and engineering work seamlessly together. Accessibility is always 
              built in from the start, not added as an afterthought.
            </p>
            
            <p className="about-paragraph-mobile">
              I like building products that feel natural to use. Whether I'm coding components or prototyping in Figma, I make sure accessibility is part of the process from the start.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
