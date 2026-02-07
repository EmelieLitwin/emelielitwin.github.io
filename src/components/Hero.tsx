import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="about">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">
            <span className="wave">👋</span> Hi, I'm Emelie
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
          <svg className="origami-svg" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Decorative origami unicorn illustration">
            <defs>
              {/* Cyberpunk neon gradients */}
              <linearGradient id="grad-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#00F0FF', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: '#00D9FF', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#0BC5EA', stopOpacity: 1 }} />
              </linearGradient>
              <linearGradient id="grad-blue" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: '#2563EB', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#1D4ED8', stopOpacity: 1 }} />
              </linearGradient>
              <linearGradient id="grad-magenta" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#FF00FF', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: '#E900E9', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#D946EF', stopOpacity: 1 }} />
              </linearGradient>
              
              {/* Subtle cyberpunk glow filters */}
              <filter id="glow-cyan" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur"/>
                <feFlood floodColor="#00F0FF" floodOpacity="0.5"/>
                <feComposite in2="blur" operator="in" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <filter id="glow-blue" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur"/>
                <feFlood floodColor="#3B82F6" floodOpacity="0.5"/>
                <feComposite in2="blur" operator="in" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <filter id="glow-magenta" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur"/>
                <feFlood floodColor="#FF00FF" floodOpacity="0.5"/>
                <feComposite in2="blur" operator="in" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Cyberpunk Origami Unicorn - Minimal outlined style */}
            <polygon points="280,653 373,679 255,840" fill="none" stroke="#FF00FF" strokeLinejoin="round" strokeWidth="2" className="origami-part" style={{ animationDelay: '0s' }} />
            <polygon points="102,634 298,439 373,430 297,540 447,585 387,674 281,646 285,575" fill="none" stroke="#3B82F6" strokeLinejoin="round" strokeWidth="2" className="origami-part" style={{ animationDelay: '0.1s' }} />
            <polygon points="312,528 386,425 431,428" fill="none" stroke="#00F0FF" strokeLinejoin="round" strokeWidth="2" className="origami-part" style={{ animationDelay: '0.2s' }} />
            <polygon points="332,520 485,397 513,414 496,435" fill="none" stroke="#3B82F6" strokeLinejoin="round" strokeWidth="2" className="origami-part" style={{ animationDelay: '0.3s' }} />
            <polygon points="316,534 492,443 467,467 521,509 515,543 565,587 560,592 498,549" fill="none" stroke="#00F0FF" strokeLinejoin="round" strokeWidth="2" className="origami-part" style={{ animationDelay: '0.4s' }} />
            <polygon points="318,542 496,557 555,595 548,605" fill="none" stroke="#FF00FF" strokeLinejoin="round" strokeWidth="2" className="origami-part" style={{ animationDelay: '0.5s' }} />
            <polygon points="550,611 574,592 599,618" fill="none" stroke="#00F0FF" strokeLinejoin="round" strokeWidth="2" className="origami-part" style={{ animationDelay: '0.6s' }} />
            <polygon points="476,466 543,399 521,500" fill="none" stroke="#3B82F6" strokeLinejoin="round" strokeWidth="2" className="origami-part" style={{ animationDelay: '0.7s' }} />
            <polygon points="525,524 555,392 600,427" fill="none" stroke="#00F0FF" strokeLinejoin="round" strokeWidth="2" className="origami-part" style={{ animationDelay: '0.8s' }} />
            <polygon points="522,542 605,435 597,604" fill="none" stroke="#3B82F6" strokeLinejoin="round" strokeWidth="2" className="origami-part" style={{ animationDelay: '0.9s' }} />
            <polygon points="613,444 743,521 685,543 775,833 554,617 605,625" fill="none" stroke="#FF00FF" strokeLinejoin="round" strokeWidth="2" className="origami-part" style={{ animationDelay: '1s' }} />
            <polygon points="565,318 620,318 655,457 613,434" fill="none" stroke="#00F0FF" strokeLinejoin="round" strokeWidth="2" className="origami-part" style={{ animationDelay: '1.1s' }} />
            <polygon points="629,310 695,204 751,184 733,267 740,508 661,462" fill="none" stroke="#3B82F6" strokeLinejoin="round" strokeWidth="2" className="origami-part" style={{ animationDelay: '1.2s' }} />
            <polygon points="757,183 869,81 776,196" fill="none" stroke="#FF00FF" strokeLinejoin="round" strokeWidth="2" className="origami-part" style={{ animationDelay: '1.3s' }} />
            <polygon points="743,273 755,194 848,270 853,338" fill="none" stroke="#00F0FF" strokeLinejoin="round" strokeWidth="2" className="origami-part" style={{ animationDelay: '1.4s' }} />
          </svg>
        </div>
      </div>
    </section>
  )
}
