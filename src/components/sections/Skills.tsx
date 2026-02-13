import { useEffect, useRef } from 'react'
import { useTranslation } from '../../hooks/useTranslation'
import './Skills.css'

export default function Skills() {
  const { t } = useTranslation()
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
      title: t.skills.categories.design,
      color: 'cyan',
      skills: t.skills.designSkills
    },
    {
      title: t.skills.categories.code,
      color: 'blue',
      skills: t.skills.codeSkills
    },
    {
      title: t.skills.categories.process,
      color: 'magenta',
      skills: t.skills.processSkills
    }
  ]

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">{t.skills.title}</h2>
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
