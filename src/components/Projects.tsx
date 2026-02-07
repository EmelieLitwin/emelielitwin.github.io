import './Projects.css'

export default function Projects() {
  const projects = [
    {
      title: 'Tegel Design System',
      company: 'Scania Group',
      period: '2022 - Present',
      description: 'Leading the development of Scania\'s digital design system. Built with StencilJS and TypeScript to create reusable web components used across 50+ applications globally. Established design tokens, accessibility standards (WCAG 2.1), and comprehensive documentation to ensure consistency across all digital touchpoints. Collaborate daily with designers and developers to maintain a seamless design-to-code workflow.',
      tags: ['StencilJS', 'TypeScript', 'Design System', 'Web Components', 'Accessibility'],
      icon: '▲',
      color: 'var(--color-primary)'
    },
    {
      title: 'Government Design System',
      company: 'Arbetsförmedlingen',
      period: '2021 - 2022',
      description: 'Developed and maintained the design system for Sweden\'s Employment Agency. Created accessible components following WCAG 2.1 guidelines, implemented in StencilJS and vanilla JavaScript. Led workshops with product teams to drive adoption, participated in hackathons for innovation, and created comprehensive documentation. Worked closely with designers to ensure seamless integration across multiple government platforms.',
      tags: ['StencilJS', 'Sketch', 'Figma', 'Documentation', 'Workshops'],
      icon: '◆',
      color: 'var(--color-secondary)'
    },
    {
      title: 'Healthcare Patient Portal UX',
      company: 'FRISQ',
      period: '2020',
      description: 'Designed and prototyped user experiences for digital healthcare platforms across web, iPad, and mobile. Conducted extensive user research with patients and healthcare professionals, created interactive prototypes in Figma, and led usability testing sessions. Improved patient engagement by 40% through intuitive interface design and streamlined workflows. Ensured solutions met both patient needs and clinical requirements.',
      tags: ['UX Research', 'Prototyping', 'Healthcare', 'User Testing'],
      icon: '●',
      color: 'var(--color-accent)'
    },
    {
      title: 'Meditation & Mindfulness App',
      company: 'Blue Media AB',
      period: '2019',
      description: 'Product designer for a meditation app startup. Collaborated with physician and graphic designer to create calming, accessible interfaces focused on user retention and engagement. Created the complete user journey from onboarding to daily practice in Adobe XD. Wrote detailed requirements specifications ensuring efficient development process and clear communication between stakeholders.',
      tags: ['Adobe XD', 'Mobile Design', 'Requirements', 'Healthcare'],
      icon: '◯',
      color: 'var(--color-blue)'
    },
    {
      title: 'E-commerce & Brand Development',
      company: 'Litwins Knitwins',
      period: '2019 - Present',
      description: 'Founded and ran a sustainable knitwear business. Designed and developed the entire e-commerce platform, managed social media presence, and created brand identity using Adobe Creative Suite. Created knitwear patterns and product sheets, handled product photography, and managed customer relations. Selling designs internationally on platforms like Ravelry.com, gaining valuable insights into digital business operations and customer experience.',
      tags: ['Adobe Creative Suite', 'Product Design', 'E-commerce', 'Self-employed'],
      icon: '■',
      color: 'var(--color-teal)'
    }
  ]

  return (
    <section className="projects" id="work">
      <div className="container">
        <h2 className="section-title">Featured Work</h2>
        <p className="section-intro">A selection of projects showcasing my work at the intersection of design and development</p>
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card" style={{ '--accent-color': project.color } as React.CSSProperties}>
              <div className="project-icon">{project.icon}</div>
              <div className="project-content">
                <div className="project-meta">
                  <span className="project-company">{project.company}</span>
                  <span className="project-period">{project.period}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
