import React, { useState } from 'react';
import './Certifications.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Android from '../../assets/AndroidDevelopemnt.png';
import Microsoft from '../../assets/MicroSoftAzure.png';
import FrontEndProject from '../../assets/ReactFrontEndProject.png';
import EthicalHacking from '../../assets/programmingbasicsforethicalhacking.jpg';
import CyberSecurity from '../../assets/IntroductionToCyberSecurity.png';
import JavaScript from '../../assets/JavascriptEssesntials.png';
import Ecommerce from '../../assets/FullStack-EcommerceProject.png'; // Corrected import
import AdvanceEthicalHacking from '../../assets/BasicsToAdvanceEthicalHackingf.jpg';

const certifications = [
  {
    id: 1,
    title: "Android Development",
    imgSrc: Android,
    issuer: "Google",
    date: "March 2023",
    description: "Learned the fundamentals of Android development and built several applications."
  },
  {
    id: 2,
    title: "Microsoft Azure",
    imgSrc: Microsoft,
    issuer: "Microsoft",
    date: "May 2023",
    description: "Gained expertise in Microsoft Azure services and cloud computing."
  },
  {
    id: 3,
    title: "Front End Project with React",
    imgSrc: FrontEndProject,
    issuer: "Coursera",
    date: "July 2023",
    description: "Developed a complete front-end application using React."
  },
  {
    id: 4,
    title: "Programming Basics for Ethical Hacking",
    imgSrc: EthicalHacking,
    issuer: "Udemy",
    date: "June 2023",
    description: "Learned the basics of programming required for ethical hacking."
  },
  {
    id: 5,
    title: "Introduction to Cyber Security",
    imgSrc: CyberSecurity,
    issuer: "edX",
    date: "April 2023",
    description: "Introduced to the concepts of cyber security and best practices."
  },
  {
    id: 6,
    title: "JavaScript Essentials",
    imgSrc: JavaScript,
    issuer: "freeCodeCamp",
    date: "February 2023",
    description: "Mastered the essential concepts of JavaScript programming."
  },
  {
    id: 7,
    title: "Full Stack E-commerce Project",
    imgSrc: Ecommerce,
    issuer: "Codecademy",
    date: "August 2023",
    description: "Built a full stack e-commerce application."
  },
  {
    id: 8,
    title: "Basics to Advance Ethical Hacking",
    imgSrc: AdvanceEthicalHacking,
    issuer: "Udacity",
    date: "September 2023",
    description: "Advanced skills in ethical hacking and penetration testing."
  }
];

const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slide = (direction) => {
    const newIndex = (currentIndex + direction + certifications.length) % certifications.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="certifications">
      <div className="certification-title">
        <h1>Certification</h1>
        <img src={theme_pattern} alt="Theme pattern" />
      </div>
      <div className="carousel">
        <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {certifications.map((cert, index) => (
            <div className={`carousel-item ${index === currentIndex ? 'active' : ''}`} key={cert.id}>
              <div className="card">
                <img src={cert.imgSrc} alt={cert.title} className="card-img" />
                <div className="cards">
                <div className="card-body">
                  <h5 className="card-title">{cert.title}</h5>
                  <p className="card-text"><strong>Issuer:</strong> {cert.issuer}</p>
                  <p className="card-text"><strong>Date:</strong> {cert.date}</p>
                  <p className="card-text"><strong>Description:</strong> {cert.description}</p>
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" aria-label="Previous" onClick={() => slide(-1)}>
          &#10094;
        </button>
        <button className="carousel-control-next" type="button" aria-label="Next" onClick={() => slide(1)}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Certifications;
