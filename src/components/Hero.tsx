import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="about">
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-greeting">Hi, I'm Emelie</div>
          <h2 className="hero-title">Design Technologist</h2>
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
            <a href="#work" className="btn-primary">View My Work</a>
            <a href="#contact" className="btn-secondary">Let's Talk</a>
          </div>
        </div>
        <div className="hero-visual">
          <svg className="origami-svg" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad-purple" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#D946EF', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: '#A855F7', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#7C3AED', stopOpacity: 1 }} />
              </linearGradient>
              <linearGradient id="grad-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#06B6D4', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: '#22D3EE', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#67E8F9', stopOpacity: 1 }} />
              </linearGradient>
              <linearGradient id="grad-pink" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#EC4899', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: '#F472B6', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#FB7185', stopOpacity: 1 }} />
              </linearGradient>
              
              {/* Intense neon glow filters */}
              <filter id="glow-purple" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur"/>
                <feFlood floodColor="#D946EF" floodOpacity="0.8"/>
                <feComposite in2="blur" operator="in" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <filter id="glow-cyan" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur"/>
                <feFlood floodColor="#22D3EE" floodOpacity="0.8"/>
                <feComposite in2="blur" operator="in" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <filter id="glow-pink" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur"/>
                <feFlood floodColor="#EC4899" floodOpacity="0.8"/>
                <feComposite in2="blur" operator="in" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Exact Blade Runner Origami Unicorn with intense neon gradient colors */}
            <polygon points="280,653 373,679 255,840" fill="url(#grad-pink)" stroke="#FB7185" strokeLinejoin="round" strokeWidth="4" filter="url(#glow-pink)" className="origami-part" style={{ animationDelay: '0s' }} />
            <polygon points="102,634 298,439 373,430 297,540 447,585 387,674 281,646 285,575" fill="url(#grad-purple)" stroke="#D946EF" strokeLinejoin="round" strokeWidth="4" filter="url(#glow-purple)" className="origami-part" style={{ animationDelay: '0.1s' }} />
            <polygon points="312,528 386,425 431,428" fill="url(#grad-cyan)" stroke="#67E8F9" strokeLinejoin="round" strokeWidth="4" filter="url(#glow-cyan)" className="origami-part" style={{ animationDelay: '0.2s' }} />
            <polygon points="332,520 485,397 513,414 496,435" fill="url(#grad-pink)" stroke="#FB7185" strokeLinejoin="round" strokeWidth="4" filter="url(#glow-pink)" className="origami-part" style={{ animationDelay: '0.3s' }} />
            <polygon points="316,534 492,443 467,467 521,509 515,543 565,587 560,592 498,549" fill="url(#grad-purple)" stroke="#D946EF" strokeLinejoin="round" strokeWidth="4" filter="url(#glow-purple)" className="origami-part" style={{ animationDelay: '0.4s' }} />
            <polygon points="318,542 496,557 555,595 548,605" fill="url(#grad-cyan)" stroke="#67E8F9" strokeLinejoin="round" strokeWidth="4" filter="url(#glow-cyan)" className="origami-part" style={{ animationDelay: '0.5s' }} />
            <polygon points="550,611 574,592 599,618" fill="url(#grad-pink)" stroke="#FB7185" strokeLinejoin="round" strokeWidth="4" filter="url(#glow-pink)" className="origami-part" style={{ animationDelay: '0.6s' }} />
            <polygon points="476,466 543,399 521,500" fill="url(#grad-purple)" stroke="#D946EF" strokeLinejoin="round" strokeWidth="4" filter="url(#glow-purple)" className="origami-part" style={{ animationDelay: '0.7s' }} />
            <polygon points="525,524 555,392 600,427" fill="url(#grad-cyan)" stroke="#67E8F9" strokeLinejoin="round" strokeWidth="4" filter="url(#glow-cyan)" className="origami-part" style={{ animationDelay: '0.8s' }} />
            <polygon points="522,542 605,435 597,604" fill="url(#grad-pink)" stroke="#FB7185" strokeLinejoin="round" strokeWidth="4" filter="url(#glow-pink)" className="origami-part" style={{ animationDelay: '0.9s' }} />
            <polygon points="613,444 743,521 685,543 775,833 554,617 605,625" fill="url(#grad-purple)" stroke="#D946EF" strokeLinejoin="round" strokeWidth="4" filter="url(#glow-purple)" className="origami-part" style={{ animationDelay: '1s' }} />
            <polygon points="565,318 620,318 655,457 613,434" fill="url(#grad-cyan)" stroke="#67E8F9" strokeLinejoin="round" strokeWidth="4" filter="url(#glow-cyan)" className="origami-part" style={{ animationDelay: '1.1s' }} />
            <polygon points="629,310 695,204 751,184 733,267 740,508 661,462" fill="url(#grad-pink)" stroke="#FB7185" strokeLinejoin="round" strokeWidth="4" filter="url(#glow-pink)" className="origami-part" style={{ animationDelay: '1.2s' }} />
            <polygon points="757,183 869,81 776,196" fill="url(#grad-purple)" stroke="#D946EF" strokeLinejoin="round" strokeWidth="4" filter="url(#glow-purple)" className="origami-part" style={{ animationDelay: '1.3s' }} />
            <polygon points="743,273 755,194 848,270 853,338" fill="url(#grad-cyan)" stroke="#67E8F9" strokeLinejoin="round" strokeWidth="4" filter="url(#glow-cyan)" className="origami-part" style={{ animationDelay: '1.4s' }} />
          </svg>
        </div>
      </div>
    </section>
  )
}
