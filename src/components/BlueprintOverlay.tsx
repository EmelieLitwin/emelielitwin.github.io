import { useState, useEffect } from 'react'
import './BlueprintOverlay.css'

export default function BlueprintOverlay() {
  const [isVisible, setIsVisible] = useState(false)
  const [theme, setTheme] = useState('')

  useEffect(() => {
    // Check current theme
    const currentTheme = document.documentElement.getAttribute('data-theme')
    setTheme(currentTheme || '')
    
    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          const newTheme = document.documentElement.getAttribute('data-theme')
          setTheme(newTheme || '')
        }
      })
    })
    
    observer.observe(document.documentElement, { attributes: true })
    
    return () => observer.disconnect()
  }, [])

  // Only show for blueprint theme
  if (theme !== 'blueprint') return null

  return (
    <>
      <button 
        className="blueprint-toggle"
        onClick={() => setIsVisible(!isVisible)}
        aria-label="Toggle measurements"
        title="Toggle measurements overlay"
      >
        📏 {isVisible ? 'Hide' : 'Show'} Measurements
      </button>

      {isVisible && (
        <div className="blueprint-overlay" aria-hidden="true">
          <div className="blueprint-measurements">
            {/* Horizontal measurement lines */}
            <div className="measure-h measure-top">
              <span className="measure-label">1200px</span>
              <div className="measure-line"></div>
            </div>
            
            {/* Vertical measurement lines */}
            <div className="measure-v measure-left">
              <span className="measure-label">100vh</span>
              <div className="measure-line"></div>
            </div>

            {/* Corner coordinates */}
            <div className="coordinate top-left">0,0</div>
            <div className="coordinate top-right">X,0</div>
            <div className="coordinate bottom-left">0,Y</div>
            <div className="coordinate bottom-right">X,Y</div>

            {/* Center crosshair */}
            <div className="crosshair">
              <div className="crosshair-h"></div>
              <div className="crosshair-v"></div>
              <span className="crosshair-label">CENTER</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
