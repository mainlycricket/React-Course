import Duties from "./Duties";

const Job = ({ jobs, selectedTab }) => {
  let job = jobs[selectedTab];
  const { title, dates, duties, company } = job;

  return (
    <article className="job-info">
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date">Date: {dates}</p>
      <Duties duties={duties} />
    </article>  
  );
};

export default Job;
