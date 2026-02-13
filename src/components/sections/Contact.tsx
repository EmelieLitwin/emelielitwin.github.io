import './Contact.css'
import resumePdf from '../../assets/Emelie Litwin Resume 2026 FE.pdf'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>
        <div className="contact-content">
          <p className="contact-intro contact-intro-full">
            Want to bridge design and development? Whether it is building design systems, 
            crafting web components, or exploring innovative solutions, let us create something 
            amazing together.
          </p>
          <p className="contact-intro contact-intro-mobile">
            Let's create something amazing together.
          </p>
          <div className="contact-methods">
            <a 
              href="mailto:emelielitwin@gmail.com" 
              className="contact-link email-link"
            >
              <div className="link-glow"></div>
              <span className="contact-icon" aria-hidden="true">✉</span>
              <div className="contact-text">
                <span className="link-label">Email</span>
                <span className="link-value">emelielitwin@gmail.com</span>
              </div>
            </a>
            <a 
              href="https://www.linkedin.com/in/emelielitwin" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-link linkedin-link"
            >
              <div className="link-glow"></div>
              <span className="contact-icon" aria-hidden="true">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  height="24" 
                  width="24" 
                  viewBox="0 0 382 382" 
                  fill="currentColor"
                  focusable="false"
                >
                  <title>LinkedIn Icon</title>
                  <path d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472L341.91,330.654L341.91,330.654z"/>
                </svg>
              </span>
              <div className="contact-text">
                <span className="link-label">LinkedIn</span>
                <span className="link-value">linkedin.com/in/emelielitwin</span>
              </div>
            </a>
            <a 
              href={resumePdf}
              download="Emelie_Litwin_Resume.pdf" 
              className="contact-link cv-link"
            >
              <div className="link-glow"></div>
              <span className="contact-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5M5.83333 8.33333L10 12.5M10 12.5L14.1667 8.33333M10 12.5V2.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <div className="contact-text">
                <span className="link-label">Resume</span>
                <span className="link-value">Download my CV (PDF)</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
