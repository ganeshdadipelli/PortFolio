import React, { useState } from 'react';
import { FaArrowRight, FaTimes } from 'react-icons/fa';
import './Education.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import { CgCheckO } from 'react-icons/cg';

const Education = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleModalToggle = (content) => {
    setModalContent(content);
    setModalOpen(!modalOpen);
  };

  return (
    <div>
      <div className="education-title">
        <h1>Education</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <section className="education__section">
        <div className="education__box">
          <div className="education__timeline">
            <div className="timeline__point">
              <div className="timeline__content-left">
                <h3 className="education__school">SSLC</h3>
                <h2 className="education__text">St Anne's High School</h2>
                <p className="education__batch">Batch: 2018-19</p>
                <button className="view-more__button" onClick={() => handleModalToggle('school')}>
                  View More <FaArrowRight className="icon" />
                </button>
              </div>
            </div>
            <div className="timeline__line"></div>
            <div className="timeline__point">
              <div className="timeline__content-right">
                <h3 className="education__school">Class 12th</h3>
                <h2 className="education__text">Ts Residential Junior College</h2>
                <p className="education__batch">Batch: 2019-21</p>
                <button className="view-more__button" onClick={() => handleModalToggle('class12')}>
                  View More <FaArrowRight className="icon" />
                </button>
              </div>
            </div>
            <div className="timeline__line"></div>
            <div className="timeline__point">
              <div className="timeline__content-left">
                <h3 className="education__school">College</h3>
                <h2 className="education__text">Malla Reddy Engineering College</h2>
                <p className="education__batch">Batch: 2021-25</p>
                <button className="view-more__button" onClick={() => handleModalToggle('college')}>
                  View More <FaArrowRight className="icon" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {modalOpen && (
          <div className="modal" onClick={handleModalToggle}>
            <div className="modal__content" onClick={(e) => e.stopPropagation()}>
             
              <div className="text">
                {modalContent === 'school' && (
                  <div className="school">
                     <button className="modal__close-icon" onClick={handleModalToggle}>
                <FaTimes />
              </button>
                    <h4>Class 10th Summary:</h4>
                    <p><CgCheckO className='icons'/> Subjects studied: Science, Maths, English, Social Studies, Telugu, Hindi.</p><br/>
                    <p><CgCheckO className='icons'/> Scored 98%</p><br/>
                    <p><CgCheckO className='icons'/> Came runners up in inter-school Cricket championship</p>
                  </div>
                )}
                {modalContent === 'class12' && (
                  <div className="intermediate">
                     <button className="modal__close-icon" onClick={handleModalToggle}>
                <FaTimes />
              </button>
                    <h4>Class 12th Summary:</h4>
                    <p><CgCheckO className='icons'/> Subjects studied: Physics, Chemistry, Maths, English, Sanskrit.</p><br/>
                    <p><CgCheckO className='icons'/> Scored 96.2%</p><br/>
                    <p><CgCheckO className='icons'/> Represented Suryapet District in State-Level Cricket Championship</p>
                  </div>
                )}
                {modalContent === 'college' && (
                  <div className="college">
                     <button className="modal__close-icon" onClick={handleModalToggle}>
                <FaTimes />
              </button>
                    <h4>College Summary:</h4>
                    <p><CgCheckO className='icons'/> Studying core subjects of Cyber Security including DSA, Computer Networks, Design analysis and algorithm, Operating systems,Cryptography and Network Security and Computer architecture.</p><br/>
                    <p><CgCheckO className='icons'/> Scored an aggregate of 7.87 CGPA till now.</p><br/>
                    <p><CgCheckO className='icons'/> Student coordinator in Cyber Security department club of the college.</p><br/>
                    <p><CgCheckO className='icons'/> 2 Years experience in designing responsive Websites as a frontend developer</p><br/>
                    <p><CgCheckO className='icons'/> Vishesh 2K22 hackathon winners under open innovation.</p><br/>
                    <p><CgCheckO className='icons'/> Finalist in Vishesh 2k23 Event  conducted by Department of MREC.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Education;
