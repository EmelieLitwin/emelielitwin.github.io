import './Skills.css'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Design',
      icon: '◆',
      skills: [
        'Design Systems',
        'UX/UI Design',
        'Figma & Sketch',
        'Prototyping',
        'User Research & Testing',
        'Adobe Creative Suite',
        'Wireframing',
        'Mobile & Web Design'
      ]
    },
    {
      title: 'Development',
      icon: '▲',
      skills: [
        'TypeScript',
        'StencilJS',
        'Web Components',
        'React',
        'JavaScript',
        'HTML/CSS',
        'Git & GitHub',
        'Frontend Development',
        'Accessibility (WCAG 2.1)'
      ]
    },
    {
      title: 'AI & Modern Tools',
      icon: '●',
      skills: [
        'AI-Assisted Development',
        'Prompt Engineering',
        'GitHub Copilot',
        'ChatGPT & LLMs',
        'AI in Design Workflows',
        'Automation Tools'
      ]
    },
    {
      title: 'Methods & Collaboration',
      icon: '■',
      skills: [
        'Agile/Scrum',
        'Design Thinking',
        'Cross-functional Collaboration',
        'Workshops & Facilitation',
        'User Testing',
        'Requirements Analysis',
        'Documentation',
        'Mentoring'
      ]
    }
  ]

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.title} className="skill-category">
              <h3><span className="skill-icon">{category.icon}</span>{category.title}</h3>
              <ul>
                {category.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
