import React from 'react';


const TeamMember = ({ name, role, description }) => {
  return (
    <div className="team-member ubuntu-medium">
      <div className="team-member-info">
        <h3 className="team-member-name">{name}</h3>
        <p className="team-member-role">{role}</p>
        <p className="team-member-description">{description}</p>
      </div>
    </div>
  );
};

export default TeamMember;
