import { useState, useEffect, useRef } from 'react';
import './Projects.css';

// Import images
import scaniaImg from '../../assets/scania.jpg';
import arbetsformedlingenImg from '../../assets/arbetsformedligen.jpeg';
import frisqImg from '../../assets/frisq.png';

interface Job {
  role: string
  company: string
  period: string
  description: string
  icon: string
  color: string
  details?: {
    myRole?: string
    achievements: string[]
    process: string[]
    tools: string[]
    images?: {
      src: string
      alt: string
      caption?: string
    }[]
    links?: {
      url: string
      label: string
    }[]
  }
}

export default function Projects() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)
  const itemRefs = useRef<(HTMLElement | null)[]>([])
  const modalRef = useRef<HTMLDivElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('timeline-item-visible')
          }
        })
      },
      { threshold: 0.2 }
    )

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item)
    })

    return () => observer.disconnect()
  }, [])

  // Handle modal accessibility
  useEffect(() => {
    if (selectedJob) {
      previousFocusRef.current = document.activeElement as HTMLElement
      modalRef.current?.focus()
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      previousFocusRef.current?.focus()
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedJob])

  // Handle Escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedJob) {
        setSelectedJob(null)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [selectedJob])

  const timeline: Job[] = [
    {
      role: 'Design Technologist',
      company: 'Scania Group',
      period: '2022 - Present',
      description: 'Leading the Tegel Design System development with StencilJS and TypeScript. Creating reusable web components used across 50+ applications globally.',
      icon: 'circle',
      color: 'var(--color-cyan)',
      details: {
        myRole: 'As Design Technologist, I bridge the gap between design and development, building and maintaining the Tegel Design System. I work cross-functionally with designers, developers, and stakeholders to create a cohesive component library.',
        achievements: [
          'Built 30+ web components for Tegel Design System using StencilJS',
          'Created CSS-only component library as lightweight alternative',
          'Developed demo pages showcasing design system in Angular and React',
          'Built Power Apps component library for internal tools',
          'Wrote comprehensive documentation for designers and developers'
        ],
        process: [
          'Design and prototype components in Figma',
          'Code web components using StencilJS and CSS',
          'Structure design tokens and variable architecture',
          'Conduct user interviews to validate solutions',
          'Stepped in as Product Owner during vacations'
        ],
        tools: ['StencilJS', 'TypeScript', 'Figma', 'CSS', 'Angular', 'React', 'Power Apps', 'AWS'],
        images: [
          {
            src: scaniaImg,
            alt: 'Scania Tegel Design System',
            caption: 'Working with the Tegel Design System at Scania'
          }
        ],
        links: [
          {
            url: 'https://tegel.scania.com',
            label: 'Visit Tegel Design System'
          }
        ]
      }
    },
    {
      role: 'Design Technologist',
      company: 'Arbetsförmedlingen',
      period: '2021 - 2022',
      description: 'Developed and maintained the government design system. Led workshops and created accessible components following WCAG 2.1 guidelines.',
      icon: 'cross',
      color: 'var(--color-blue)',
      details: {
        myRole: 'As Design Technologist, I owned the complete lifecycle of components in the government design system, from research and design to implementation and documentation. I ensured WCAG AAA compliance and facilitated cross-agency collaboration.',
        achievements: [
          'Achieved WCAG AAA compliance across all components',
          'Owned full component lifecycle from research to documentation',
          'Created comprehensive design system documentation'
        ],
        process: [
          'Conduct research and user needs analysis',
          'Design and prototype accessible components',
          'Code components with semantic HTML and ARIA',
          'Test with screen readers and accessibility tools',
          'Document patterns and best practices'
        ],
        tools: ['Web Components', 'JavaScript', 'Sketch', 'WCAG AAA', 'Figma', 'ARIA'],
        images: [
          {
            src: arbetsformedlingenImg,
            alt: 'Arbetsförmedlingen Design System',
            caption: 'Government design system with WCAG AAA compliance'
          }
        ],
        links: [
          {
            url: 'https://designsystem.arbetsformedlingen.se/',
            label: 'Visit Arbetsförmedlingen Design System'
          }
        ]
      }
    },
    {
      role: 'UX Designer',
      company: 'FRISQ',
      period: '2020',
      description: 'Designed healthcare patient portal experiences. Conducted user research and improved patient engagement by 40% through intuitive interface design.',
      icon: 'triangle',
      color: 'var(--color-magenta)',
      details: {
        myRole: 'UX/UI Designer',
        achievements: [
          'Designed patient portal interface',
          'Conducted user interviews with patients',
          'Improved engagement through user-centered design'
        ],
        process: [
          'User research synthesis',
          'Ideation',
          'Wireframing',
          'Prototyping',
          'Creative direction'
        ],
        tools: ['Figma'],
        images: [
          {
            src: frisqImg,
            alt: 'FRISQ Healthcare Patient Portal',
            caption: 'Patient portal design for healthcare application'
          }
        ]
      }
    },
    {
      role: 'Product Designer',
      company: 'Blue Media AB',
      period: '2019',
      description: 'Created meditation app interfaces in collaboration with physicians. Designed complete user journey from onboarding to daily practice.',
      icon: 'diamond',
      color: 'var(--color-cyan)',
      details: {
        myRole: 'As Product Designer, I designed the complete user experience for a meditation app concept, working closely with physicians to ensure content aligned with therapeutic goals. I created the full user journey from onboarding through daily practice.',
        achievements: [
          'Designed meditation app concept',
          'Collaborated with physicians on content'
        ],
        process: [
          'Research meditation apps',
          'Design app interface and user flows'
        ],
        tools: ['Adobe Creative Suite']
      }
    },
    {
      role: 'Knitwear Designer',
      company: 'Litwins Knitwins',
      period: '2019 - Present',
      description: 'Independent knitwear design business selling patterns on international platforms. Creating visually appealing designs and pattern sheets.',
      icon: 'circle',
      color: 'var(--color-magenta)',
      details: {
        myRole: 'As an independent Knitwear Designer, I manage my own design business from concept to publication. I design patterns, create professional product sheets, and maintain an international customer base through digital platforms.',
        achievements: [
          'Sell knitwear patterns on Ravelry.com internationally',
          'Create product sheets and pattern designs',
          'Building portfolio for future pattern book publication'
        ],
        process: [
          'Design knitwear patterns',
          'Create product sheets in InDesign',
          'Edit visuals in Photoshop and Illustrator'
        ],
        tools: ['Adobe InDesign', 'Photoshop', 'Illustrator'],
        links: [
          {
            url: 'https://www.ravelry.com/designers/emelie-litwin',
            label: 'View My Patterns on Ravelry'
          }
        ]
      }
    }
  ]

  return (
    <section className="projects" id="work">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <p className="section-intro">My journey bridging design and development</p>
        
        <div className="timeline">
          {timeline.map((job, index) => (
            <article 
              key={job.company + job.period} 
              className="timeline-item" 
              style={{ '--accent-color': job.color } as React.CSSProperties}
              ref={el => { itemRefs.current[index] = el }}
            >
              <div className="timeline-marker" aria-hidden="true">
                <svg className="timeline-icon" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  {job.icon === 'triangle' && <polygon points="10,4 16,16 4,16" fill="currentColor" />}
                  {job.icon === 'cross' && (
                    <>
                      <line x1="4" y1="4" x2="16" y2="16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                      <line x1="16" y1="4" x2="4" y2="16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    </>
                  )}
                  {job.icon === 'circle' && <circle cx="10" cy="10" r="6" fill="currentColor" />}
                  {job.icon === 'diamond' && <rect x="6" y="6" width="8" height="8" transform="rotate(45 10 10)" fill="currentColor" />}
                </svg>
              </div>
              <button 
                className="timeline-content"
                onClick={() => setSelectedJob(job)}
                aria-label={`View details for ${job.role} at ${job.company}`}
              >
                <div className="timeline-header">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="timeline-company">{job.company}</p>
                  </div>
                  <span className="timeline-period">{job.period}</span>
                </div>
                <p className="timeline-description">{job.description}</p>
                <span className="view-more">View Details →</span>
              </button>
            </article>
          ))}
        </div>
      </div>

      {selectedJob && (
        <div 
          className="modal-overlay" 
          onClick={() => setSelectedJob(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div 
            className="modal-content" 
            onClick={(e) => e.stopPropagation()}
            ref={modalRef}
            tabIndex={-1}
          >
            <button 
              className="modal-close" 
              onClick={() => setSelectedJob(null)}
              aria-label="Close dialog"
            >
            </button>
            
            <div className="modal-header">
              <h2 id="modal-title">{selectedJob.role}</h2>
              <p className="modal-company">{selectedJob.company}</p>
              <span className="modal-period">{selectedJob.period}</span>
            </div>

            <div className="modal-body">
              {selectedJob.details?.images && selectedJob.details.images.length > 0 && (
                <section className="modal-section modal-images">
                  <div className="modal-image-grid">
                    {selectedJob.details.images.map((image, i) => (
                      <figure key={i} className="modal-image-item">
                        <img 
                          src={image.src} 
                          alt={image.alt}
                          loading="lazy"
                        />
                        {image.caption && (
                          <figcaption>{image.caption}</figcaption>
                        )}
                      </figure>
                    ))}
                  </div>
                </section>
              )}

              {selectedJob.details?.myRole && (
                <section className="modal-section">
                  <h3>My Role</h3>
                  <p>{selectedJob.details.myRole}</p>
                </section>
              )}

              <section className="modal-section">
                <h3>Key Achievements</h3>
                <ul>
                  {selectedJob.details?.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </section>

              <section className="modal-section">
                <h3>Process</h3>
                <ul>
                  {selectedJob.details?.process.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ul>
              </section>

              <section className="modal-section">
                <h3>Tools & Technologies</h3>
                <div className="modal-tools">
                  {selectedJob.details?.tools.map((tool, i) => (
                    <span key={i} className="tool-tag">{tool}</span>
                  ))}
                </div>
              </section>

              {selectedJob.details?.links && selectedJob.details.links.length > 0 && (
                <section className="modal-section">
                  <h3>Links</h3>
                  <div className="modal-links">
                    {selectedJob.details.links.map((link, i) => (
                      <a 
                        key={i} 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        {link.label}
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333M10 2H14M14 2V6M14 2L6.66667 9.33333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
