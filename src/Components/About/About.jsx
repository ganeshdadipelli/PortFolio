import React from 'react';
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import about_profile from '../../assets/About-profile.png'
const About = () => {
  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/ganeshdadipelli/', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className='about' id='about'>
      <div className="about-title">
        <h1>
            About me
        </h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
            <img src={about_profile} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Welcome to my corner of the web! I'm Ganesh, a passionate full-stack developer dedicated to crafting exceptional digital experiences.</p>
                <p>Equipped with a strong foundation in both front-end and back-end development, I specialize in building robust, scalable web applications that not only meet but exceed expectations.</p>
            </div>
            <div className="about-skills">
            <div className="about-skill">
                <p>Java</p>
                <hr style={{width:"50%"}} className='ganesh'/>
                </div>
                <div className="about-skill">
                <p>HTML & CSS </p>
                <hr style={{width:"90%"}} className='ganesh'/>
                </div>
                <div className="about-skill">
                <p>BOOTSTRAP</p>
                <hr style={{width:"80%"}} className='ganesh'/>
                </div>
                <div className="about-skill">
                <p>REACT.JS</p>
                <hr style={{width:"70%"}} className='ganesh'/>
                </div>
                <div className="about-skill">
                <p>NODE.JS</p>
                <hr style={{width:"60%"}} className='ganesh'/>
                </div>
                <div className="about-skill">
                <p>EXPRESS.JS</p>
                <hr style={{width:"50%"}} className='ganesh'/>
                </div>
                <div className="about-skill">
                <p>MONGODB</p>
                <hr style={{width:"70%"}} className='ganesh'/>
                </div>


            </div>
        </div>
      
       </div>
       <div className='about-achievements'>
        <div className='about-achievement'>
          <div className="hello">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
          </div>
        </div>
<hr/>
        <div className='about-achievement'>
          <div className="hello"><h1>15+</h1>
          <p>PROJECTS COMPLETED</p></div>
        </div>
<hr/>
<div className='about-achievement'>
         <div className="hello"> <h1>5+</h1>
          <p>HAPPY CLIENTS</p></div>
        </div>
        <hr/>

       </div>
       <div className="about-connect">
           <span onClick={handleLinkedInClick}>Linkedin</span>
        </div>

      </div>
  );
}

export default About;
