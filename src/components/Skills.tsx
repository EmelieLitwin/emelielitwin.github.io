import './Skills.css'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Design & UX',
      color: 'cyan',
      skills: [
        'Design Systems',
        'UX/UI Design',
        'Figma & Prototyping',
        'User Research',
        'Accessibility'
      ]
    },
    {
      title: 'Development',
      color: 'blue',
      skills: [
        'TypeScript & JavaScript',
        'React & Frameworks',
        'Web Components',
        'HTML/CSS & Styling',
        'Git & Version Control'
      ]
    },
    {
      title: 'Team & Process',
      color: 'magenta',
      skills: [
        'Agile & Scrum',
        'Cross-functional',
        'Workshops',
        'Documentation',
        'Stakeholder Mgmt'
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
              <h3 className={`category-title ${category.color}`}>{category.title}</h3>
              <div className="skills-tags">
                {category.skills.map((skill) => (
                  <span key={skill} className={`skill-tag ${category.color}`}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
