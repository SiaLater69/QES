import React from 'react';
import JobCard from '../components/JobCard';


const jobs = [
  { id: 1, role: "Senior Software Engineer", type: "Permanent", location: "Cape Town" },
  { id: 2, role: "Data Analyst", type: "Contract", location: "Johannesburg" },
  { id: 3, role: "UX Designer", type: "Permanent", location: "Durban" },
  { id: 4, role: "DevOps Engineer", type: "Contract", location: "Pretoria" },
  { id: 5, role: "Product Manager", type: "Permanent", location: "Cape Town" },
  { id: 6, role: "Frontend Developer", type: "Contract", location: "Johannesburg" },
];

const JobsPage = () => {
  return (
    <div className="jobs-page">
      <h1 className="jobs-page-title ubuntu-medium">Available Jobs</h1>
      <div className="jobs-grid">
        {jobs.map((job) => (
          <JobCard key={job.id} {...job} />
        ))}
      </div>
    </div>
  );
};

export default JobsPage;
