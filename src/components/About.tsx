import './About.css'
import profileImage from '../assets/profile-cyberpunk.png'

export default function About() {
  return (
    <section className="about" id="about-me">
      <div className="about-container">
        <h2 className="about-heading">About Me</h2>
        
        <div className="about-content">
          <div className="about-image-wrapper">
            <div className="about-image-glow"></div>
            <img 
              src={profileImage} 
              alt="Emelie Litwin - Design Technologist"
              className="about-image"
            />
          </div>
          
          <div className="about-text">
            <p className="about-intro">
              I'm a design technologist who bridges the gap between design and development. 
              With expertise in both UX/UI design and frontend development, I create beautiful, 
              functional experiences that solve real problems.
            </p>
            
            <p>
              My career didn't start in tech. I studied to become a dietitian. But I realized 
              I wanted more growth and variety, so I pivoted to interaction design. The skills 
              translated perfectly: analyzing user problems and finding solutions, just like 
              working with patients.
            </p>
            
            <p>
              I'm passionate about design systems that create consistent, user centered experiences 
              across platforms. Currently, I'm building web components and contributing to the Tegel 
              Design System at Scania, making design and development accessible to teams worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
