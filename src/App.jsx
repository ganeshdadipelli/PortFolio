import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import MyWork from './Components/MyWork/MyWork';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Portfolio from './Components/Portfolio/Portfolio';
import Resume from './Components/Resume/Resume';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Services />
            <MyWork />
            <Contact />
            <Footer />
         
          </>
           
        } />
         <Route path="/portfolio" element={
         <>
          <Portfolio />
          
         </>
        
         
         } />
            <Route path="/my-resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
