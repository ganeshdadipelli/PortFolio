import React from 'react';
import  './Hero.css'
import { Link } from 'react-router-dom';
import profile_image from '../../assets/profile_image.png'
const Hero = () => {
  return (
    <div className='hero' id='home'>
      <img src={profile_image} alt="" />
      <h1>
        <span>I'm Ganesh Dadipelli,</span> full-stack developer based in INDIA.
      </h1>
       <p>
      As a full-stack developer, I specialize in harnessing the power of both front-end and back-end technologies to build dynamic and engaging web applications.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
            Connect with me
        </div>
        <Link to="/my-resume" className="hero-resume">
            My Resume
        </Link>
      </div>
    </div>
  );
}

export default Hero;
