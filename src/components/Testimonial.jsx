import React from 'react';
import './Testimonial.css';

const Testimonial = ({ name, role, company, quote, image }) => {
  return (
    <div className="testimonial">
      <div className="testimonial-content">
        <blockquote className="testimonial-quote ubuntu-medium-italic">{quote}</blockquote>
        <div className="testimonial-author">
          {/* <img src={image} alt={name} className="testimonial-image" /> */}
          <div className="author-info ubuntu-medium">
            <p className="testimonial-name">{name}</p>
            <p className="testimonial-role">{role}, {company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
