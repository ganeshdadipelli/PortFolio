import React from 'react';
import resumeImage from '../../assets/REsume.png';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume-card">
     
      <img src={resumeImage} alt="Resume" className="resume-image" />
    </div>
  );
}

export default Resume;
