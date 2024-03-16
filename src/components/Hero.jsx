import React from 'react';
import './Hero.css'; // Import or create a CSS file for styling

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="text-container">
        <p>Dive into Echio’s AI-driven ecosystem and explore the intriguing possibilities lying with redefined influencer experience for all.</p>
        
        <button className='button10'><span>Get Started</span></button>
      </div>
      <div className="image-container">
        <h1>
          <span className="white-text">Makes You</span><br />
          <span className="gradient-text">Viral</span>
        </h1>
        <div className="img2">
          <img src="/images/hero2.png" alt="Image 2" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
