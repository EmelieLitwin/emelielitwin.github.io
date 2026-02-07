import './Work.css';
import { work } from '../content/copy';

export const Work = () => {
  return (
    <section className="work" id="work" aria-labelledby="work-heading">
      <div className="work__container">
        <h2 id="work-heading" className="work__heading">Experience</h2>
        <div className="work__grid" role="list">
          {work.map((job, index) => (
            <article 
              key={index} 
              className="work__card"
              role="listitem"
              aria-labelledby={`job-title-${index}`}
            >
              <span className="work__card-icon" aria-hidden="true">{job.icon}</span>
              <h3 id={`job-title-${index}`} className="work__card-title">{job.role}</h3>
              <p className="work__card-company">{job.company}</p>
              <time className="work__card-period" dateTime={job.period}>{job.period}</time>
              <p className="work__card-description">{job.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
