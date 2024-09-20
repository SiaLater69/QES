import React, { useState } from 'react';
import Testimonial from './Testimonial';
import './TestimonialSection.css';

// Import images
// import clientImage1 from '../assets/client1.jpg';
// import clientImage2 from '../assets/client2.jpg';
// import contractorImage1 from '../assets/contractor1.jpg';
// import contractorImage2 from '../assets/contractor2.jpg';

const clientTestimonials = [
  {
    name: "Hewan",
    role: "Head of IT ",
    company: "Glacier",
    quote: "QES has been one of Glaciers main supplier of quality I.T. contractors for the past 6 years. It is always  a pleasure working with them as the service is excellent and the quality of candidates the we get from QES rarely disappoints. QES’s business proposition is not “body shopping”, as they truly care about the contractors as people and ensure that they remain happy and motivated, which enables us as the end client to realize the benefits..",
    // image: contractorImage1
  },
  {
    name: "Jessica Cooper ",
    role: "Head: Current Systems Retail IT",
    company: "Metropolitan",
    quote: "I have been associated with QES for a number of years. QES has a unique ability to understand an organization, a department, and to match candidates well with needs. I have also found that due to their own Systems experience, I get candidates who really do meet the level of expertise  I require. QES also keeps well hooked in with it’s contractors and with the organization, which ensures that we have ongoing high performance and contractor content. QES is my first port of call when I need staff.",
    // image: contractorImage2
  },
  {
    name: "Marelize Visser",
    role: "Head of Portfolio Management Centre",
    company: "Santam",
    quote: "QES provides Project Manager and Project Coordinator services to Santam.QES is very supportive through weekly personal engagement with each contractor working at Santam. QES responds effectively on resource demands with quality resources. They demonstrate sound understanding of Santam’s unique requirements and is always available to address questions or challenges. I have found QES very reasonable and negotiable; also willing to engage and take responsibility to have difficult discussions. I would recommend QES as service provide for PM and PC roles",
    // image: contractorImage1
  },
    {
    name: "Chris Tomlinson",
    role: "QA Manager",
    company: "MWEB",
    quote: "I have been dealing with QES for some time now, especially with Marnel who is passionate about recruitment. What is appreciated is that Marnel on a regular basis will visit her staff and client to check how they are fitting in, their progress etc, which is appreciated. Candidates would be matched to client’s requirements. QES staff are friendly and are efficient in dealing with any client queries",
    // image: contractorImage2
  },
  {
    name: "Eugene ",
    role: "QA Manager",
    company: "Infocare Health",
    quote: "During the recruitment phase Marnell and her highly skilled team  kept us extremely well informed with continual feedback and prompt replies to any queries we had. The resources they provide are always of the highest caliber. We would highly recommend Marnell and her team to any prospective clients.",
    // image: contractorImage1
  }
];

const contractorTestimonials = [
  {
    name: "Craig",
    quote: "I am always greeted in a warm, heartfelt way by everyone in the team, a testament to a great business. Incredibly organized and consitent"
    // image: clientImage1
  },
  {
    name: "Lwando",
    quote: "All I know is... QES has a special place in my heart and came at the right time when I was retrenched and I still remember Marnel’s words when I was nervous about the interview at MWEB. She made me feel safe and confident. That’s why deep down I’ll always be a QES developer.",
    // image: clientImage2
  },
  {
    name: "Francois",
    quote: "QES is without a doubt my agency of choice. The client is always taken care of, the money is always in the bank, and you are always looked after. All of this is done in a very personal one-on-one way with full access to the highest levels of management, which makes quick work of any problem that may arise.",
    // image: clientImage1
  },
  {
    name: "Siviwe",
    quote: "Looking for employment and job opportunities can be a struggle to for jobseekers, especially after completing one's studies. Through QES, I was given the incredible opportunity of beginning my career with a company that has a friendly environment and one that promotes career growth and skills development. So far, I have enjoyed every moment of it. QES goes the extra mile to make sure that its contractors are happy. In return, I make sure that I give my utmost best to uphold QES's name",
  },
  {
    name: "Matthys",
    quote: "In n vreemde stad, het ek n familie ontmoet. Hulle het vir my gehelp om werk te kry, na my belange omgesien en het dit alles gedoen met ope arms en altyd n glimlag van tevredenheid op my gelos. Ek is dankbaar om deel te wees van die QES familie",
    // image: clientImage2
  }
];

const TestimonialSection = () => {
  const [showClients, setShowClients] = useState(true);

  const toggleTestimonials = () => {
    setShowClients(!showClients);
  };

  const currentTestimonials = showClients ? clientTestimonials : contractorTestimonials;


  return (
    <section className="testimonial-section">
      <h2 className="section-title ubuntu-bold">What People Say About Us</h2>
      <div className="testimonial-switch">
        <span className={!showClients ? 'active' : ''}>Contractors</span>
        <label className="switch">
          <input 
            type="checkbox" 
            checked={showClients}
            onChange={toggleTestimonials}
          />
          <span className="slider round"></span>
        </label>
        <span className={showClients ? 'active' : ''}>Clients</span>
      </div>
      <div className="testimonial-container">
        {currentTestimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
