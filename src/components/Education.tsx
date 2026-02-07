import './Education.css'

export default function Education() {
  const education = [
    {
      degree: 'Frontend Development',
      school: 'Jensen Yrkeshögskola',
      period: '2020 - 2021',
      description: 'Intensive vocational program focused on modern frontend development with React, TypeScript, and web accessibility standards.',
      icon: '■'
    },
    {
      degree: 'B.Sc in Interaction Design',
      school: 'Stockholm University',
      period: '2015 - 2018',
      description: 'Bachelor\'s degree combining UX design, human-computer interaction, and user research methodologies.',
      icon: '▲'
    },
    {
      degree: 'B.Sc in Clinical Nutrition',
      school: 'Uppsala University',
      period: '2010 - 2013',
      description: 'Bachelor\'s degree in nutrition science with focus on health, metabolism, and evidence-based practices.',
      icon: '●'
    },
    {
      degree: 'Single Courses',
      school: 'Various Universities',
      period: '2013 - 2020',
      description: 'Programming with JavaScript, HTML & CSS • Programming and problem solving with Python • Introduction to Java • Introduction to eHealth',
      icon: '◆'
    }
  ]

  return (
    <section className="education" id="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        
        <div className="education-grid">
          {education.map((edu) => (
            <div key={edu.degree} className="education-card">
              <div className="edu-icon">{edu.icon}</div>
              <h3>{edu.degree}</h3>
              <p className="edu-school">{edu.school}</p>
              <p className="edu-period">{edu.period}</p>
              <p className="edu-description">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
