import { useEffect, useRef } from 'react'
import './Skills.css'

export default function Skills() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      title: 'Design & UX',
      color: 'cyan',
      skills: [
        'Design Systems',
        'Product UX',
        'Interaction Design',
        'Prototyping',
        'User Insights'
      ]
    },
    {
      title: 'Development',
      color: 'blue',
      skills: [
        'React',
        'TypeScript',
        'UI Architecture',
        'AI-assisted Development',
        'Accessibility'
      ]
    },
    {
      title: 'Process ',
      color: 'magenta',
      skills: [
        'Stakeholder Alignment',
        'Cross-functional Teams',
        'Facilitation',
        'Agile Delivery',
        'Documentation'
      ]
    }
  ]

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title} 
              className="skill-category" 
              ref={el => { cardRefs.current[index] = el }}
            >
              <div className="card-shine"></div>
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
