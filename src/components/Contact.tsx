import './Contact.css'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>
        <div className="contact-content">
          <p className="contact-intro">
            Want to bridge design and development? Whether it's building design systems, 
            crafting web components, or exploring innovative solutions—let's create something 
            amazing together.
          </p>
          <div className="contact-methods">
            <a href="mailto:emelielitwin@gmail.com" className="contact-link email-link">
              <div className="link-glow"></div>
              <span className="contact-icon">✉</span>
              <div className="contact-text">
                <span className="link-label">Email</span>
                <span className="link-value">emelielitwin@gmail.com</span>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/emelielitwin" target="_blank" rel="noopener noreferrer" className="contact-link linkedin-link">
              <div className="link-glow"></div>
              <span className="contact-icon">◆</span>
              <div className="contact-text">
                <span className="link-label">LinkedIn</span>
                <span className="link-value">linkedin.com/in/emelielitwin</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
