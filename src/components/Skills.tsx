import './Skills.css'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Design & UX',
      icon: '◆',
      skills: [
        'Design Systems',
        'UX/UI Design',
        'Figma & Prototyping',
        'User Research',
        'Accessibility (WCAG 2.1)'
      ]
    },
    {
      title: 'Development & Tools',
      icon: '▲',
      skills: [
        'TypeScript & JavaScript',
        'StencilJS & Web Components',
        'React',
        'HTML/CSS',
        'Git & GitHub'
      ]
    },
    {
      title: 'AI & Collaboration',
      icon: '●',
      skills: [
        'AI-Assisted Development',
        'GitHub Copilot & ChatGPT',
        'Agile/Scrum',
        'Design Thinking',
        'Workshops & Documentation'
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
