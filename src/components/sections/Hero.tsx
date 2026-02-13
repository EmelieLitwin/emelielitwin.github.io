import './Hero.css'
import { useTranslation } from '../../hooks/useTranslation'

export default function Hero() {
  const { t } = useTranslation()
  
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-greeting">
            <svg 
              className="wave-icon" 
              width="32" 
              height="32" 
              viewBox="0 0 64 64" 
              xmlns="http://www.w3.org/2000/svg" 
              aria-hidden="true"
              focusable="false"
            >
              <title>Waving hand</title>
              <defs>
                <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: 'var(--color-primary)', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: 'var(--color-accent)', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: 'var(--color-secondary)', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <path d="M5.946 30.785c-2.999 7.189 2.213 15.866 9.784 17.387c-5.9-3.962-9.584-10.327-9.784-17.387" fill="url(#wave-gradient)" />
              <path d="M15.73 48.172l-.184-.039c.023.006.078.015.184.039" fill="url(#wave-gradient)" />
              <path d="M2 44.261c.489 6.02 8.039 9.878 13.457 7.412C9.879 50.475 6.179 49.378 2 44.261" fill="url(#wave-gradient)" />
              <path d="M46.504 22.794c3.512-7.168-1.475-16.036-9.055-17.963c5.799 4.233 9.239 10.824 9.055 17.963" fill="url(#wave-gradient)" />
              <path d="M48.865 17.848c4.192-3.709 2.502-11.088-2.332-13.49c2.33 4.565 3.151 8.421 2.332 13.49" fill="url(#wave-gradient)" />
              <path d="M60.519 14.345a5.43 5.43 0 0 0-3.303-1.116c-7.206 0-8.498 9.386-10.097 13.05c0 0-7.389-15.469-9.959-20.573c-2.65-5.265-8.307-4.177-9.964-1.311C23.26.316 15.823 3.609 16.771 8.568c-5.104-.392-7.167 4.643-6.034 7.871c-3.945-.122-5.789 4.757-4.455 8.25c.069.182 7.073 13.966 8.959 18.662c.219.545.44 1.128.672 1.742c1.525 4.032 3.614 9.554 8.84 13.989C27.003 60.991 30.118 62 33.764 62c6.426 0 13.581-3.189 18.229-8.126c4.163-4.421 6.158-9.848 5.77-15.695c-.348-5.256 1.324-10.208 2.667-14.188c1.457-4.319 2.607-7.731.089-9.646m-5.947 23.66c.813 11.628-10.842 21.439-20.73 21.439c-3.021 0-6.15-.488-8.105-2.147c-5.606-4.758-7.013-10.646-8.638-14.684c-1.941-4.831-6.705-14.114-9.014-18.784c-.945-1.912.634-5.981 3.384-5.981L19.4 34.716l3.005 1.804s-6.882-14.998-9.061-20.167c-1.272-3.018.92-6.662 3.874-6.187l9.846 21.016l3.006 1.808L18.594 8.757c-.046-4.295 5.831-4.362 7.197-1.854c3.457 6.348 9.947 20.279 9.947 20.279l3.004 1.807L27.969 6.146c2.104-2.754 5.816-2.368 7.416.975c1.922 4.015 10.061 21.454 10.061 21.454c-8.035 3.012-13.52 11.743-7.777 20.35c-4.557-9.41 3.516-16.06 8.285-18.258c1.805-.833 2.469-2.408 2.469-2.408l-.004.001c.629-1.139.592-2.662 1.342-5.127c1.625-5.335 3.854-8.162 7.125-8.162c.754 0 1.704.564 2.14 1.207c2.203 3.251-5.21 11.023-4.454 21.827" fill="url(#wave-gradient)" />
            </svg>
            {t.hero.greeting}
          </h1>
          
          
          <p className="hero-subtitle">
            {t.hero.subtitle}
          </p>
          
          <p className="hero-description" dangerouslySetInnerHTML={{ __html: t.hero.description }} />
          
          <div className="hero-cta">
            <a href="#work" className="btn-primary">
              {t.hero.cta.work}
            </a>
            <a href="#contact" className="btn-secondary">
              {t.hero.cta.contact}
            </a>
          </div>
        </div>
        
        <div className="hero-visual" aria-hidden="true">
          <div className="unicorn-glow"></div>
          
          <svg 
            className="origami-svg" 
            viewBox="0 0 1000 1000" 
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
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
        </div>
      </div>
    </section>
  )
}
