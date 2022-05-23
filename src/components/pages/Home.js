import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Service from '../Service';
import Projects from '../Projects';
import Footer from '../Footer';



function Home() {
    return (
      <>
        <HeroSection />
        <Service />
        <Projects />
        <Footer />
      </>
    );
  }
  
  export default Home;