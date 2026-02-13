import './Education.css'
import { useTranslation } from '../../hooks/useTranslation'

export default function Education() {
  const { t } = useTranslation()

  return (
    <section className="education" id="education">
      <div className="container">
        <h2 className="section-title">{t.education.title}</h2>
        
        <div className="education-grid">
          {t.education.degrees.map((edu, index) => (
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
          <h3 className="courses-title">{t.education.additionalCourses}</h3>
          <div className="courses-list">
            {t.education.courses.map((course) => (
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
