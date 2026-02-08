import './Education.css'

export default function Education() {
  const degrees = [
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
    }
  ]

  const courses = [
    'Programming with JavaScript, HTML & CSS',
    'Programming and problem solving with Python',
    'Introduction to Java',
    'Introduction to eHealth'
  ]

  return (
    <section className="education" id="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        
        <div className="education-grid">
          {degrees.map((edu, index) => (
            <div key={edu.degree} className="education-card">
              <div className="edu-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  {index === 0 && <rect x="12" y="12" width="24" height="24" fill="currentColor" />}
                  {index === 1 && <polygon points="24,12 36,36 12,36" fill="currentColor" />}
                  {index === 2 && <circle cx="24" cy="24" r="12" fill="currentColor" />}
                </svg>
              </div>
              <h3>{edu.degree}</h3>
              <p className="edu-school">{edu.school}</p>
              <p className="edu-period">{edu.period}</p>
              <p className="edu-description">{edu.description}</p>
            </div>
          ))}
        </div>

        <div className="courses-section">
          <h3 className="courses-title">◆ Additional Courses</h3>
          <div className="courses-list">
            {courses.map((course) => (
              <div key={course} className="course-item">
                <span className="course-bullet">▸</span>
                {course}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
