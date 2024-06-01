import React from 'react';
import './Experience.css';
import theme_pattern from '../../assets/theme_pattern.svg';

const experiences = [
  {
    title: "MERN Stack Developer",
    details: [
      "Developed Full Stack E-commerce web application."
    ]
  },
  {
    title: "MERN Stack Tutoring",
    details: [
      "Provided personalized MERN stack tutoring sessions to several students.",
      "Designed and delivered a structured curriculum covering MongoDB, Express.js, React, and Node.js."
    ]
  },
  {
    title: "Graphic Design for Business Promotions",
    details: [
      "Created engaging and visually appealing images and promotional videos for a peanut butter company.",
      "These materials were used for business promotions and product marketing campaigns."
    ]
  },
  {
    title: "Path Creators, Sri Vaikunta Technologies Pvt Ltd",
    details: [
      "Full Stack Developer (Java, MySQL, Tomcat)",
      "Developed a web application to provide real-time information on Goan landmarks using live photos, enhancing tourist experiences with automated recognition and user-generated content features.",
      "Implemented robust security, user-friendly interfaces, and data analytics for improved operational efficiency."
    ]
  }
];

const Experience = () => {
  return (
    <div>
      <div className="experience-title">
        <h1>Experience</h1>
        <img src={theme_pattern} alt="" />
      </div>
    
      <div className="experience">
        <div className="experience-cards">
          {experiences.map((exp, index) => (
            <div className="experience-card" key={index}>
              <h2>{exp.title}</h2>
              <hr />
              <ul>
                {exp.details.map((detail, idx) => (
                  <li key={idx}><i className="fas fa-check"></i> {detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
