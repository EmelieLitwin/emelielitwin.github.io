import './Projects.css'

export default function Projects() {
  const timeline = [
    {
      role: 'Design Technologist',
      company: 'Scania Group',
      period: '2022 - Present',
      description: 'Leading the Tegel Design System development with StencilJS and TypeScript. Creating reusable web components used across 50+ applications globally.',
      icon: '▲',
      color: 'var(--color-cyan)'
    },
    {
      role: 'Design Technologist',
      company: 'Arbetsförmedlingen',
      period: '2021 - 2022',
      description: 'Developed and maintained the government design system. Led workshops and created accessible components following WCAG 2.1 guidelines.',
      icon: '◆',
      color: 'var(--color-blue)'
    },
    {
      role: 'UX Designer',
      company: 'FRISQ',
      period: '2020',
      description: 'Designed healthcare patient portal experiences. Conducted user research and improved patient engagement by 40% through intuitive interface design.',
      icon: '●',
      color: 'var(--color-magenta)'
    },
    {
      role: 'Product Designer',
      company: 'Blue Media AB',
      period: '2019',
      description: 'Created meditation app interfaces in collaboration with physicians. Designed complete user journey from onboarding to daily practice.',
      icon: '■',
      color: 'var(--color-cyan)'
    }
  ]

  return (
    <section className="projects" id="work">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <p className="section-intro">My journey bridging design and development</p>
        
        <div className="timeline">
          {timeline.map((job) => (
            <article key={job.company + job.period} className="timeline-item" style={{ '--accent-color': job.color } as React.CSSProperties}>
              <div className="timeline-marker" aria-hidden="true">
                <span className="timeline-icon">{job.icon}</span>
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="timeline-company">{job.company}</p>
                  </div>
                  <span className="timeline-period">{job.period}</span>
                </div>
                <p className="timeline-description">{job.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
