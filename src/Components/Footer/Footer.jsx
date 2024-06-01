import React from 'react'
import './Footer.css'
import profile_image from '../../assets/logo.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-top">
     <div className="footer-left">
      <span className='logo-text' style={{marginLeft:'1px'}}>GANESH DADIPELLI</span>
      <p>I am a full-stack developer from,INDIA with 2 years of experience.Proficient in both front-end and back-end technologies, I specialize in creating scalable web applications from concept to deployment.</p>
     </div>
<div className="footer-top-right">
    <div className="footer-email-input">
      <img src={user_icon} alt="" />
      <input type="email" placeholder='Enter your email' />
    </div>
<div className="footer-subscribe">
  Subscribe
</div>

</div>

      </div>
      <hr className='hr' />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
        © 2024 Ganesh Dadipelli. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>

    </div>
  )
}

export default Footer