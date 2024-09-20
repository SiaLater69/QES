import React from 'react';
import './JobCard.css';

const JobCard = ({ role, type, location }) => {
  return (
    <div className="job-card">
      <h3 className="job-role">{role}</h3>
      <div className="job-details">
        <span className={`job-type ${type.toLowerCase()}`}>{type}</span>
        <span className="job-location">{location}</span>
      </div>
    </div>
  );
};

export default JobCard;
