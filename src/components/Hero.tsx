import { useState, useEffect } from 'react'
import './Hero.css'

type Theme = 'cyberpunk' | 'paper' | 'rainbow' | 'blueprint' | 'editorial'

export default function Hero() {
  const [currentTheme, setCurrentTheme] = useState<Theme>('cyberpunk')

  useEffect(() => {
    // Detect theme changes
    const observer = new MutationObserver(() => {
      const theme = document.documentElement.getAttribute('data-theme') as Theme
      if (theme) setCurrentTheme(theme)
    })
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    })
    
    // Set initial theme
    const initialTheme = document.documentElement.getAttribute('data-theme') as Theme
    if (initialTheme) setCurrentTheme(initialTheme)
    
    return () => observer.disconnect()
  }, [])

  return (
    <section className="hero" id="about">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">
            <svg className="wave-icon" width="32" height="32" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: 'var(--color-cyan)', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: 'var(--color-blue)', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: 'var(--color-magenta)', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <path d="M5.946 30.785c-2.999 7.189 2.213 15.866 9.784 17.387c-5.9-3.962-9.584-10.327-9.784-17.387" fill="url(#wave-gradient)"></path>
              <path d="M15.73 48.172l-.184-.039c.023.006.078.015.184.039" fill="url(#wave-gradient)"></path>
              <path d="M2 44.261c.489 6.02 8.039 9.878 13.457 7.412C9.879 50.475 6.179 49.378 2 44.261" fill="url(#wave-gradient)"></path>
              <path d="M46.504 22.794c3.512-7.168-1.475-16.036-9.055-17.963c5.799 4.233 9.239 10.824 9.055 17.963" fill="url(#wave-gradient)"></path>
              <path d="M48.865 17.848c4.192-3.709 2.502-11.088-2.332-13.49c2.33 4.565 3.151 8.421 2.332 13.49" fill="url(#wave-gradient)"></path>
              <path d="M60.519 14.345a5.43 5.43 0 0 0-3.303-1.116c-7.206 0-8.498 9.386-10.097 13.05c0 0-7.389-15.469-9.959-20.573c-2.65-5.265-8.307-4.177-9.964-1.311C23.26.316 15.823 3.609 16.771 8.568c-5.104-.392-7.167 4.643-6.034 7.871c-3.945-.122-5.789 4.757-4.455 8.25c.069.182 7.073 13.966 8.959 18.662c.219.545.44 1.128.672 1.742c1.525 4.032 3.614 9.554 8.84 13.989C27.003 60.991 30.118 62 33.764 62c6.426 0 13.581-3.189 18.229-8.126c4.163-4.421 6.158-9.848 5.77-15.695c-.348-5.256 1.324-10.208 2.667-14.188c1.457-4.319 2.607-7.731.089-9.646m-5.947 23.66c.813 11.628-10.842 21.439-20.73 21.439c-3.021 0-6.15-.488-8.105-2.147c-5.606-4.758-7.013-10.646-8.638-14.684c-1.941-4.831-6.705-14.114-9.014-18.784c-.945-1.912.634-5.981 3.384-5.981L19.4 34.716l3.005 1.804s-6.882-14.998-9.061-20.167c-1.272-3.018.92-6.662 3.874-6.187l9.846 21.016l3.006 1.808L18.594 8.757c-.046-4.295 5.831-4.362 7.197-1.854c3.457 6.348 9.947 20.279 9.947 20.279l3.004 1.807L27.969 6.146c2.104-2.754 5.816-2.368 7.416.975c1.922 4.015 10.061 21.454 10.061 21.454c-8.035 3.012-13.52 11.743-7.777 20.35c-4.557-9.41 3.516-16.06 8.285-18.258c1.805-.833 2.469-2.408 2.469-2.408l-.004.001c.629-1.139.592-2.662 1.342-5.127c1.625-5.335 3.854-8.162 7.125-8.162c.754 0 1.704.564 2.14 1.207c2.203 3.251-5.21 11.023-4.454 21.827" fill="url(#wave-gradient)"></path>
            </svg>
            Hi, I'm Emelie
          </p>
          <h1 className="hero-title">Design Technologist</h1>
          <p className="hero-subtitle">
            I create delightful digital experiences at the intersection of design and code
          </p>
          <p className="hero-description">
            Currently working at <strong>Scania</strong> as a Design Technologist, I bridge the gap between design and development.
            With a background in UX design, product design, and frontend development, I help teams build products that are both 
            beautiful and functional. I'm passionate about design systems, accessibility, and creating intuitive user experiences 
            that solve real problems. 
          </p>
          <div className="hero-cta">
            <a href="#work" className="btn-primary" aria-label="View my work experience">View My Work</a>
            <a href="#contact" className="btn-secondary" aria-label="Contact me">Let's Talk</a>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="unicorn-glow"></div>
          
          {/* Cyberpunk - Original Origami Unicorn */}
          {currentTheme === 'cyberpunk' && (
            <svg 
              className="origami-svg" 
              viewBox="0 0 1000 1000" 
              xmlns="http://www.w3.org/2000/svg" 
              role="img" 
              aria-label="Decorative origami unicorn illustration"
            >
              <defs>
                <linearGradient id="grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" className="unicorn-stop-1" />
                  <stop offset="100%" className="unicorn-stop-1" />
                </linearGradient>
              </defs>
              
              <polygon points="280,653 373,679 255,840" fill="none" className="unicorn-part unicorn-part-1" strokeLinejoin="round" style={{ animationDelay: '0s' }} />
              <polygon points="102,634 298,439 373,430 297,540 447,585 387,674 281,646 285,575" fill="none" className="unicorn-part unicorn-part-2" strokeLinejoin="round" style={{ animationDelay: '0.1s' }} />
              <polygon points="312,528 386,425 431,428" fill="none" className="unicorn-part unicorn-part-3" strokeLinejoin="round" style={{ animationDelay: '0.2s' }} />
              <polygon points="332,520 485,397 513,414 496,435" fill="none" className="unicorn-part unicorn-part-2" strokeLinejoin="round" style={{ animationDelay: '0.3s' }} />
              <polygon points="316,534 492,443 467,467 521,509 515,543 565,587 560,592 498,549" fill="none" className="unicorn-part unicorn-part-3" strokeLinejoin="round" style={{ animationDelay: '0.4s' }} />
              <polygon points="318,542 496,557 555,595 548,605" fill="none" className="unicorn-part unicorn-part-1" strokeLinejoin="round" style={{ animationDelay: '0.5s' }} />
              <polygon points="550,611 574,592 599,618" fill="none" className="unicorn-part unicorn-part-3" strokeLinejoin="round" style={{ animationDelay: '0.6s' }} />
              <polygon points="476,466 543,399 521,500" fill="none" className="unicorn-part unicorn-part-2" strokeLinejoin="round" style={{ animationDelay: '0.7s' }} />
              <polygon points="525,524 555,392 600,427" fill="none" className="unicorn-part unicorn-part-3" strokeLinejoin="round" style={{ animationDelay: '0.8s' }} />
              <polygon points="522,542 605,435 597,604" fill="none" className="unicorn-part unicorn-part-2" strokeLinejoin="round" style={{ animationDelay: '0.9s' }} />
              <polygon points="613,444 743,521 685,543 775,833 554,617 605,625" fill="none" className="unicorn-part unicorn-part-1" strokeLinejoin="round" style={{ animationDelay: '1s' }} />
              <polygon points="565,318 620,318 655,457 613,434" fill="none" className="unicorn-part unicorn-part-3" strokeLinejoin="round" style={{ animationDelay: '1.1s' }} />
              <polygon points="629,310 695,204 751,184 733,267 740,508 661,462" fill="none" className="unicorn-part unicorn-part-2" strokeLinejoin="round" style={{ animationDelay: '1.2s' }} />
              <polygon points="757,183 869,81 776,196" fill="none" className="unicorn-part unicorn-part-1" strokeLinejoin="round" style={{ animationDelay: '1.3s' }} />
              <polygon points="743,273 755,194 848,270 853,338" fill="none" className="unicorn-part unicorn-part-3" strokeLinejoin="round" style={{ animationDelay: '1.4s' }} />
            </svg>
          )}

          {/* Paper - Sketchy Pencil Unicorn */}
          {currentTheme === 'paper' && (
            <svg 
              className="paper-unicorn" 
              viewBox="0 0 200 200" 
              fill="none"
              stroke="var(--unicorn-color-1)"
              strokeWidth="var(--unicorn-stroke)"
              strokeDasharray="var(--unicorn-stroke-dasharray)"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Body */}
              <ellipse cx="120" cy="120" rx="45" ry="35" />
              {/* Head */}
              <circle cx="65" cy="80" r="25" />
              {/* Neck */}
              <path d="M85 90 Q95 105, 90 110" />
              {/* Horn */}
              <path d="M65 55 L60 30 L58 55" />
              {/* Ear */}
              <path d="M70 60 L75 50 L72 65" />
              {/* Mane */}
              <path d="M50 70 Q35 65, 40 80" />
              <path d="M48 80 Q30 75, 38 92" />
              <path d="M50 90 Q32 88, 42 102" />
              {/* Legs */}
              <path d="M95 140 L95 175" />
              <path d="M115 145 L115 180" />
              <path d="M135 145 L135 180" />
              <path d="M150 140 L150 175" />
              {/* Tail */}
              <path d="M160 115 Q180 110, 185 125 Q190 135, 175 140" />
              {/* Eye */}
              <circle cx="60" cy="78" r="2" fill="var(--unicorn-color-1)" />
            </svg>
          )}

          {/* Rainbow - Cute Filled Unicorn */}
          {currentTheme === 'rainbow' && (
            <svg
              className="rainbow-unicorn"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 500"
            >
              <defs>
                {/* Gradient Definitions */}
                <linearGradient id="unicornBodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#f5d6f7', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#e8b5f3', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="maneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#ff9a9e', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#fad0c4', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#fad0c4', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="tailGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#ff9a9e', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#fad0c4', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#fad0c4', stopOpacity: 1 }} />
                </linearGradient>
                <radialGradient id="hornGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" style={{ stopColor: '#fff5e1', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#f5d6f7', stopOpacity: 1 }} />
                </radialGradient>
              </defs>
              {/* Unicorn Body */}
              <path
                d="M250,450 C150,450 100,350 100,300 C100,250 150,200 200,200 C250,200 300,250 350,250 C400,250 450,200 450,150 C450,100 400,50 350,50 C300,50 250,100 200,100 C150,100 100,50 50,100 C0,150 50,250 50,300 C50,350 0,400 50,450 C100,500 150,450 250,450"
                fill="url(#unicornBodyGradient)"
              />
              {/* Unicorn Horn */}
              <path
                d="M250,50 L230,0 L270,0 Z"
                fill="url(#hornGradient)"
              />
              {/* Unicorn Mane */}
              <path
                d="M350,100 C320,80 280,120 250,150 C220,180 180,160 150,140 C120,120 80,100 50,150 C20,200 50,250 100,300 C150,350 200,350 250,350 C300,350 350,300 400,250 C450,200 400,150 350,100"
                fill="url(#maneGradient)"
              />
              {/* Unicorn Tail */}
              <path
                d="M100,400 C50,350 0,300 50,250 C100,200 150,250 200,300 C250,350 200,400 150,450 C100,500 50,450 100,400"
                fill="url(#tailGradient)"
              />
              {/* Unicorn Eye */}
              <circle cx="325" cy="100" r="10" fill="black" />
              {/* Unicorn Hooves */}
              <rect x="180" y="420" width="20" height="30" fill="black" />
              <rect x="280" y="420" width="20" height="30" fill="black" />
            </svg>
          )}

          {/* Blueprint - Technical CAD Unicorn */}
          {currentTheme === 'blueprint' && (
            <svg 
              className="blueprint-unicorn"
              viewBox="0 0 200 200" 
              fill="none"
              stroke="var(--unicorn-color-1)"
              strokeWidth="var(--unicorn-stroke)"
              strokeDasharray="var(--unicorn-stroke-dasharray)"
              strokeLinecap="square"
            >
              {/* Grid lines */}
              <path d="M0 100 H200" opacity="0.2"/>
              <path d="M100 0 V200" opacity="0.2"/>
              {/* Measurements annotations */}
              <text x="120" y="95" fontSize="8" fill="var(--unicorn-color-1)" opacity="0.5">φ45</text>
              <text x="60" y="70" fontSize="8" fill="var(--unicorn-color-1)" opacity="0.5">R25</text>
              {/* Body - Rectangle */}
              <rect x="75" y="85" width="90" height="70" />
              {/* Head - Rectangle */}
              <rect x="40" y="55" width="50" height="50" />
              {/* Horn - Triangle */}
              <path d="M65 55 L60 20 L58 55 Z" />
              {/* Ear - Triangle */}
              <path d="M72 58 L78 45 L75 60" />
              {/* Legs - Lines */}
              <path d="M95 155 V185" />
              <path d="M115 155 V190" />
              <path d="M135 155 V190" />
              <path d="M150 155 V185" />
              {/* Tail - Angular */}
              <path d="M165 115 L180 108 L188 122 L178 135" />
              {/* Eye - Cross */}
              <path d="M58 73 L62 77 M58 77 L62 73" />
            </svg>
          )}

          {/* Editorial - Elegant Silhouette */}
          {currentTheme === 'editorial' && (
            <svg 
              className="editorial-unicorn"
              viewBox="0 0 200 200"
              fill="var(--unicorn-color-1)"
              stroke="none"
            >
              {/* Unified elegant silhouette */}
              <path d="
                M65 20
                L60 55
                L40 55
                Q35 70, 42 85
                Q38 95, 50 100
                L75 105
                Q85 110, 90 115
                L75 155
                L85 185
                L95 155
                L95 185
                L105 155
                L110 185
                L120 155
                L125 185
                L135 155
                L140 115
                Q155 108, 165 115
                Q180 105, 185 125
                Q190 138, 175 142
                L165 120
                Q155 100, 145 90
                L125 85
                Q95 80, 85 85
                L75 80
                Q65 75, 65 65
                L72 62
                Q78 58, 78 52
                L75 65
                L70 62
                Q65 45, 65 20
                Z
              " opacity="0.9"/>
            </svg>
          )}
        </div>
      </div>
    </section>
  )
}
