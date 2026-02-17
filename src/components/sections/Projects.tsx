import { useState, useEffect, useRef } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import './Projects.css';

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
    achievements: readonly string[]
    process: readonly string[]
    tools: readonly string[]
    images?: {
      src: string
      alt: string
      caption?: string
    }[]
    links?: readonly {
      url: string
      label: string
    }[]
  }
}

export default function Projects() {
  const { t } = useTranslation()
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
      role: t.work.jobs.scania.role,
      company: t.work.jobs.scania.company,
      period: t.work.jobs.scania.period,
      description: t.work.jobs.scania.description,
      icon: 'circle',
      color: 'var(--color-cyan)',
      details: {
        myRole: t.work.jobs.scania.myRole,
        achievements: t.work.jobs.scania.achievements,
        process: t.work.jobs.scania.process,
        tools: t.work.jobs.scania.tools,
        images: [
          {
            src: scaniaImg,
            alt: 'Scania Tegel Design System',
            caption: 'Working with the Tegel Design System at Scania'
          }
        ],
        links: t.work.jobs.scania.links
      }
    },
    {
      role: t.work.jobs.arbetsformedlingen.role,
      company: t.work.jobs.arbetsformedlingen.company,
      period: t.work.jobs.arbetsformedlingen.period,
      description: t.work.jobs.arbetsformedlingen.description,
      icon: 'cross',
      color: 'var(--color-blue)',
      details: {
        myRole: t.work.jobs.arbetsformedlingen.myRole,
        achievements: t.work.jobs.arbetsformedlingen.achievements,
        process: t.work.jobs.arbetsformedlingen.process,
        tools: t.work.jobs.arbetsformedlingen.tools,
        images: [
          {
            src: arbetsformedlingenImg,
            alt: 'Arbetsförmedlingen Design System',
            caption: 'Government design system with WCAG AAA compliance'
          }
        ],
        links: t.work.jobs.arbetsformedlingen.links
      }
    },
    {
      role: t.work.jobs.frisq.role,
      company: t.work.jobs.frisq.company,
      period: t.work.jobs.frisq.period,
      description: t.work.jobs.frisq.description,
      icon: 'triangle',
      color: 'var(--color-magenta)',
      details: {
        myRole: t.work.jobs.frisq.myRole,
        achievements: t.work.jobs.frisq.achievements,
        process: t.work.jobs.frisq.process,
        tools: t.work.jobs.frisq.tools,
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
      role: t.work.jobs.bluemedia.role,
      company: t.work.jobs.bluemedia.company,
      period: t.work.jobs.bluemedia.period,
      description: t.work.jobs.bluemedia.description,
      icon: 'diamond',
      color: 'var(--color-cyan)',
      details: {
        myRole: t.work.jobs.bluemedia.myRole,
        achievements: t.work.jobs.bluemedia.achievements,
        process: t.work.jobs.bluemedia.process,
        tools: t.work.jobs.bluemedia.tools
      }
    },
    {
      role: t.work.jobs.knitwear.role,
      company: t.work.jobs.knitwear.company,
      period: t.work.jobs.knitwear.period,
      description: t.work.jobs.knitwear.description,
      icon: 'circle',
      color: 'var(--color-magenta)',
      details: {
        myRole: t.work.jobs.knitwear.myRole,
        achievements: t.work.jobs.knitwear.achievements,
        process: t.work.jobs.knitwear.process,
        tools: t.work.jobs.knitwear.tools,
        links: t.work.jobs.knitwear.links
      }
    }
  ]

  return (
    <section className="projects" id="work">
      <div className="container">
        <h2 className="section-title">{t.work.title}</h2>
        <p className="section-intro">{t.work.intro}</p>
        
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
                aria-label={`${t.work.viewDetails} ${job.role} ${t.work.at} ${job.company}`}
              >
                <div className="timeline-header">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="timeline-company">{job.company}</p>
                  </div>
                  <span className="timeline-period">{job.period}</span>
                </div>
                <p className="timeline-description">{job.description}</p>
                <span className="view-more">{t.work.readMore} →</span>
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
              aria-label={t.work.closeDialog}
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
                  <h3>{t.work.myRole}</h3>
                  <p>{selectedJob.details.myRole}</p>
                </section>
              )}

              <section className="modal-section">
                <h3>{t.work.achievements}</h3>
                <ul>
                  {selectedJob.details?.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </section>

              <section className="modal-section">
                <h3>{t.work.process}</h3>
                <ul>
                  {selectedJob.details?.process.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ul>
              </section>

              <section className="modal-section">
                <h3>{t.work.tools}</h3>
                <div className="modal-tools">
                  {selectedJob.details?.tools.map((tool, i) => (
                    <span key={i} className="tool-tag">{tool}</span>
                  ))}
                </div>
              </section>

              {selectedJob.details?.links && selectedJob.details.links.length > 0 && (
                <section className="modal-section">
                  <h3>{t.work.links}</h3>
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
