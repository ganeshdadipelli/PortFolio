import React from 'react';
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import call_icon from '../../assets/call_icon.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon  from '../../assets/location_icon.svg'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1ac6335f-8a7a-445e-94d5-2759c5b3ee76");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact' id='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I'am currently available to take on new projects, so feel free to send me a message about anything that you want me to work on.You can contact anytime.</p>
        </div>
      </div>
      <div className="contact-details">
        <div className="contact-detail">
<img src={mail_icon} alt="" /><p>ganeshdadipelli43@gmail.com</p>
        </div>
        <div className="contact-detail">
          <div className="contactP">  <img src={call_icon} alt="" /><p style={{marginLeft:'20px'}}>+91-9392450425</p></div>
            </div>
            <div className="contact-detail">
            <div className="contactP" ><img src={location_icon} alt="" /><p style={{marginLeft:'30px'}}>Hyderabad,Telangana</p></div>
        </div>
<form  onSubmit={onSubmit} className='contact-right'>
    <label htmlFor="">Your Name</label>
    <input type="text" placeholder='Enter your name'  name='name'/>
    <label htmlFor="">Your Email</label>
    <input type="text" name="email" placeholder='Enter your mail'  />
    <label htmlFor="">Write your message here</label>
    <textarea name="message" rows="8"cols='50' placeholder='Enter your message' ></textarea>
    <button type='submit' className='contact-submit'>Submit now</button>
</form>
      </div>
    </div>
  );
}

export default Contact;

