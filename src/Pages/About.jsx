import React from 'react'
import hr1 from '../assets/hr1.jpg'
import hr2 from '../assets/hr2.jpg'

const About = () => {
  return (
    <section className='about-section'>
      <div className='about-container'>
        <h2 className='about-title ubuntu-bold'>About Us</h2>
        <h3 className='about-subtitle ubuntu-bold-italic'>South African contracting and recruitment company</h3>
        
        <div className='about-content ubuntu-medium'>
          <div className='about-images'>
            <img src={hr1} alt="HR professionals in a meeting" className='about-image' />
          </div>
          
          <div className='about-text'>
            <p>
            Welcome to QE Services (QES), a home grown South African specialist IT contracting and recruitment company.
            Established in 2009, QES specialises in placing highly skilled IT professionals on a contract or permanent basis with their clients.
            The Team consists of highly experienced IT professionals with more than 30 years combined Information Technology experience.
            </p>
            <p>
              Our team of experienced professionals utilizes cutting-edge technology and industry insights to provide 
              tailored solutions for both clients and candidates.
            </p>
            <ul className='about-features'>
              <li>Excelent client service & Honest business Ethics</li>
              <li>Strong IT knowledge base & personal face to face service</li>
              <li>Sound track record in industry & quick response</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
