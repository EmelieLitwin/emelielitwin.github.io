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
              My path to tech wasn't traditional. I started as a dietitian, working with patients 
              to solve complex health challenges. When I discovered UX design, I realized the skills 
              were the same: understand the problem, empathize with users, and create solutions that 
              actually work. That foundation still drives how I approach product development today.
            </p>
            
            <p>
              I enjoy building products that are intuitive, well considered, and hold up in real use. 
              Whether coding components, prototyping in Figma, or exploring AI tools, I focus on creating 
              solutions where design and engineering work seamlessly together. Accessibility is always 
              built in from the start, not added as an afterthought.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
