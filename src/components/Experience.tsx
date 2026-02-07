import { useState } from 'react';
import './Experience.css';
import { experience } from '../content/copy';

export const Experience = () => {
  const [selectedJob, setSelectedJob] = useState<typeof experience.timeline[0] | null>(null);

  return (
    <section className="experience" id="work" aria-labelledby="experience-heading">
      <div className="experience__container">
        <h2 id="experience-heading" className="section-title">{experience.title}</h2>
        <p className="section-intro">{experience.intro}</p>
        
        <div className="timeline">
          {experience.timeline.map((job, index) => (
            <article 
              key={index} 
              className="timeline-item"
              onClick={() => setSelectedJob(job)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedJob(job);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View details for ${job.role} at ${job.company}`}
            >
              <div className="timeline-marker" aria-hidden="true">
                <span className="timeline-icon">{job.icon}</span>
              </div>
              <div className="timeline-content">
                <h3 className="timeline-role">{job.role}</h3>
                <p className="timeline-company">{job.company}</p>
                <time className="timeline-period">{job.period}</time>
                <p className="timeline-description">{job.description}</p>
                <span className="timeline-more">View details →</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedJob && (
        <div 
          className="modal-overlay" 
          onClick={() => setSelectedJob(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedJob(null)}
              aria-label="Close modal"
            >
              ✕
            </button>
            
            <h3 id="modal-title" className="modal-role">{selectedJob.role}</h3>
            <p className="modal-company">{selectedJob.company}</p>
            <time className="modal-period">{selectedJob.period}</time>
            
            {selectedJob.details && (
              <>
                <div className="modal-section">
                  <h4>Achievements</h4>
                  <ul>
                    {selectedJob.details.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="modal-section">
                  <h4>Process & Responsibilities</h4>
                  <ul>
                    {selectedJob.details.process.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="modal-section">
                  <h4>Tools & Technologies</h4>
                  <div className="modal-tools">
                    {selectedJob.details.tools.map((tool, i) => (
                      <span key={i} className="tool-tag">{tool}</span>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
