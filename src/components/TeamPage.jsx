import React, { useState } from 'react';
import TeamMember from './TeamMember';
import './TeamPage.css';

// Import team member images
import member1Image from '../assets/man1.jpg';
import member2Image from '../assets/man1.jpg';
import member3Image from '../assets/man1.jpg';
import member4Image from '../assets/man1.jpg';

const teamMembers = [
    {
      name: "John Doe",
      role: "CEO",
      image: member1Image,
      description: "John has over 20 years of experience in the recruitment industry and founded our company in 2005."
    },
    {
      name: "Jane Smith",
      role: "Head of IT Recruitment",
      image: member2Image,
      description: "Jane specializes in placing top IT talent and has been with us for 10 years."
    },
    {
      name: "Mike Johnson",
      role: "Senior Recruiter",
      image: member3Image,
      description: "Mike focuses on executive placements and has a strong network in the finance sector."
    },
    {
      name: "Sarah Brown",
      role: "HR Manager",
      image: member4Image,
      description: "Sarah ensures our internal processes run smoothly and manages our company culture initiatives."
    },
    {
      name: "David Lee",
      role: "Recruitment Coordinator",
      image: member4Image,
      description: "David manages our candidate database and coordinates our recruitment events."
    },
    {
      name: "David Lee",
      role: "Recruitment Coordinator",
      image: member4Image,
      description: "David manages our candidate database and coordinates our recruitment events."
    },
    {
      name: "David Lee",
      role: "Recruitment Coordinator",
      image: member4Image,
      description: "David manages our candidate database and coordinates our recruitment events."
    },
  ];

const TeamPage = () => {
  const [currentMemberIndex, setCurrentMemberIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentMemberIndex((prevIndex) => 
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentMemberIndex((prevIndex) => 
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="team-page">
      <h1 className="team-page-title ubuntu-bold">Our Team</h1>
      <div className="team-carousel">
        <button className="carousel-button prev" onClick={goToPrevious}>&lt;</button>
        <div className="team-carousel-inner" style={{ transform: `translateX(-${currentMemberIndex * 100}%)` }}>
          {teamMembers.map((member, index) => (
            <div key={index} className="team-carousel-item">
              <img src={member.image} alt={member.name} className="team-member-image" />
            </div>
          ))}
        </div>
        <button className="carousel-button next" onClick={goToNext}>&gt;</button>
      </div>
      <div className="team-info">
        <TeamMember {...teamMembers[currentMemberIndex]} />
      </div>
    </div>
  );
};

export default TeamPage;
