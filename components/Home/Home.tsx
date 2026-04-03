'use client'
import React, { useEffect } from 'react';
import Hero from './Hero/Hero';
import Resume from './Resume/Resume';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      offset: 120,
      anchorPlacement: "top-bottom",
    });
    
    // Refresh AOS to ensure all elements are captured after rendering
    setTimeout(() => {
      AOS.refresh();
    }, 500);
  }, []);

  return (
    <div className="overflow-hidden ">
      <Hero />
      <Resume />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;