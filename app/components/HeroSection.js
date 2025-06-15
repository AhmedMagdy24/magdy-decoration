import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className='hero-container' id='home'>
      <h1>Modern Interior Design</h1>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
            Contact us
          </Button>
         
     
        </div>
        
    </div>
  );
}

export default HeroSection;
