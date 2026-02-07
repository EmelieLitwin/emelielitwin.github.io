import { useState } from 'react'
import './Projects.css'

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
          'Built 50+ web components in the Tegel Design System',
          'Reduced development time by 40% through reusable components',
          'Improved accessibility compliance across all Scania digital products',
          'Led workshops and training for developers and designers'
        ],
        process: [
          'Collaborate with UX designers to define component requirements',
          'Develop components using StencilJS and TypeScript',
          'Write comprehensive documentation and examples',
          'Conduct accessibility audits and improvements'
        ],
        tools: ['StencilJS', 'TypeScript', 'Figma', 'Git', 'Web Components']
      }
    },
    {
      role: 'Design Technologist',
      company: 'Arbetsförmedlingen',
      period: '2021 - 2022',
      description: 'Developed and maintained the government design system. Led workshops and created accessible components following WCAG 2.1 guidelines.',
      icon: '◆',
      color: 'var(--color-blue)',
      details: {
        achievements: [
          'Established WCAG 2.1 AA compliance across all components',
          'Created comprehensive design system documentation',
          'Trained 20+ developers on accessible component usage',
          'Reduced design-to-development handoff time by 50%'
        ],
        process: [
          'Research accessibility standards and best practices',
          'Design and prototype accessible components',
          'Build components with semantic HTML and ARIA',
          'Test with screen readers and accessibility tools'
        ],
        tools: ['React', 'JavaScript', 'Sketch', 'WCAG Guidelines', 'ARIA']
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
          'Increased patient engagement by 40%',
          'Simplified booking flow reducing steps by 60%',
          'Conducted user interviews with 30+ patients',
          'Created design system for healthcare portal'
        ],
        process: [
          'User research and stakeholder interviews',
          'Create user personas and journey maps',
          'Design and prototype solutions in Figma',
          'Usability testing and iteration'
        ],
        tools: ['Figma', 'UserTesting', 'Miro', 'Sketch', 'InVision']
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
          'Launched meditation app with 10,000+ downloads',
          'Designed onboarding flow with 85% completion rate',
          'Collaborated with physicians on content design',
          'Created calming and intuitive interface design'
        ],
        process: [
          'Research meditation apps and user needs',
          'Collaborate with medical professionals',
          'Design onboarding and meditation experiences',
          'Iterate based on user feedback'
        ],
        tools: ['Sketch', 'Principle', 'Zeplin', 'Adobe Creative Suite']
      }
    }
  ]

  return (
    <section className="projects" id="work">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <p className="section-intro">My journey bridging design and development</p>
        
        <div className="timeline">
          {timeline.map((job) => (
            <article 
              key={job.company + job.period} 
              className="timeline-item" 
              style={{ '--accent-color': job.color } as React.CSSProperties}
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
