import { useState, useEffect, useRef } from 'react';
import './Projects.css';

interface Job {
  role: string
  company: string
  period: string
  description: string
  icon: string
  color: string
  details?: {
    achievements: string[]
    process: string[]
    tools: string[]
  }
}

export default function Projects() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)
  const itemRefs = useRef<(HTMLElement | null)[]>([])

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

  const timeline: Job[] = [
    {
      role: 'Design Technologist',
      company: 'Scania Group',
      period: '2022 - Present',
      description: 'Leading the Tegel Design System development with StencilJS and TypeScript. Creating reusable web components used across 50+ applications globally.',
      icon: '▲',
      color: 'var(--color-cyan)',
      details: {
        achievements: [
          'Built 50+ web components and CSS components for Tegel Design System',
          'Created demo pages showcasing design system in Angular and React',
          'Developed Power Apps component library for internal tools',
          'Wrote comprehensive documentation for designers and developers'
        ],
        process: [
          'Design and prototype components in Figma',
          'Code web components using StencilJS and CSS',
          'Structure design tokens and variable architecture',
          'Conduct user interviews to validate solutions',
          'Acted as Product Owner for entire design system'
        ],
        tools: ['StencilJS', 'TypeScript', 'Figma', 'CSS', 'Angular', 'React', 'Power Apps', 'Git']
      }
    },
    {
      role: 'Design Technologist',
      company: 'Arbetsförmedlingen',
      period: '2021 - 2022',
      description: 'Developed and maintained the government design system. Led workshops and created accessible components following WCAG 2.1 guidelines.',
      icon: '✕',
      color: 'var(--color-blue)',
      details: {
        achievements: [
          'Built multi-brand government design system for multiple agencies',
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
        tools: ['React', 'JavaScript', 'Sketch', 'WCAG AAA', 'ARIA']
      }
    },
    {
      role: 'UX Designer',
      company: 'FRISQ',
      period: '2020',
      description: 'Designed healthcare patient portal experiences. Conducted user research and improved patient engagement by 40% through intuitive interface design.',
      icon: '●',
      color: 'var(--color-magenta)',
      details: {
        achievements: [
          'Designed patient portal interface',
          'Conducted user interviews with patients',
          'Improved engagement through user-centered design'
        ],
        process: [
          'User research and interviews',
          'Design solutions in Figma',
          'Iterate based on feedback'
        ],
        tools: ['Figma', 'Sketch', 'Miro']
      }
    },
    {
      role: 'Product Designer',
      company: 'Blue Media AB',
      period: '2019',
      description: 'Created meditation app interfaces in collaboration with physicians. Designed complete user journey from onboarding to daily practice.',
      icon: '■',
      color: 'var(--color-cyan)',
      details: {
        achievements: [
          'Designed meditation app concept',
          'Collaborated with physicians on content'
        ],
        process: [
          'Research meditation apps',
          'Design app interface and user flows'
        ],
        tools: ['Sketch', 'Adobe Creative Suite']
      }
    },
    {
      role: 'Knitwear Designer',
      company: 'Litwins Knitwins',
      period: '2019 - Present',
      description: 'Independent knitwear design business selling patterns on international platforms. Creating visually appealing designs and pattern sheets.',
      icon: '◆',
      color: 'var(--color-magenta)',
      details: {
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
        tools: ['Adobe InDesign', 'Photoshop', 'Illustrator']
      }
    },
    {
      role: 'Requirements Analyst Intern',
      company: 'Karolinska Universitetssjukhuset',
      period: '2018',
      description: 'Worked in requirements analysis team for ILOV project, creating digital scorecards for the hospital\'s new business model.',
      icon: '✚',
      color: 'var(--color-blue)',
      details: {
        achievements: [
          'Documented requirements for digital scorecard system',
          'Created patient report dashboard in Tableau',
          'Supported stakeholder meetings and documentation'
        ],
        process: [
          'Participate in stakeholder meetings',
          'Document and analyze requirements',
          'Build reports in Tableau'
        ],
        tools: ['Tableau', 'Requirements Analysis', 'Documentation']
      }
    },
    {
      role: 'Summer Intern',
      company: 'Ericsson',
      period: '2017 - 2018',
      description: 'Supported eShop operations and internal reporting through design and automation.',
      icon: '○',
      color: 'var(--color-cyan)',
      details: {
        achievements: [
          'Created CPI templates for eShop',
          'Automated internal reports with Excel macros'
        ],
        process: [
          'Design templates in Illustrator',
          'Write Excel macros for automation'
        ],
        tools: ['Adobe Illustrator', 'Excel', 'VBA']
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
                <span className="timeline-icon">{job.icon}</span>
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
        <div className="modal-overlay" onClick={() => setSelectedJob(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close" 
              onClick={() => setSelectedJob(null)}
              aria-label="Close modal"
            >
              ✕
            </button>
            
            <div className="modal-header">
              <h2>{selectedJob.role}</h2>
              <p className="modal-company">{selectedJob.company}</p>
              <span className="modal-period">{selectedJob.period}</span>
            </div>

            <div className="modal-body">
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
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
