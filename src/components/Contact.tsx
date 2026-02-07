import './Contact.css'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>
        <div className="contact-content">
          <p className="contact-intro">
            Interested in collaborating or want to learn more about my work? 
            I'd love to hear from you!
          </p>
          <div className="contact-methods">
            <a href="mailto:emelielitwin@gmail.com" className="contact-link">
              <span className="contact-icon">✉</span>
              <span>Email Me</span>
            </a>
            <a href="https://www.linkedin.com/in/emelielitwin" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="contact-icon">◆</span>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
