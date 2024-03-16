import React from 'react';
import './Section1.css'; // Import or create a CSS file for styling

const Section1 = () => {
  const logos = Array.from({ length: 7 }, (_, index) => `logo${index + 1}.png`);

  return (
    <>
    <div className="logo-series-container">
      {logos.map((logo, index) => (
        <img key={index} src={`/images/${logo}`} alt={`Logo ${index + 1}`} className="logo" />
      ))}
    </div>
    <div className="section-container">
        <div className="background-image">
        <img src="/images/section1.png" alt="Logo 1" className="section1" />
        <img src="/images/section2.png" alt="Logo 2" className="section2" />
        <img src="/images/section3.png" alt="Logo 3" className="section3" />
        <img src="/images/section4.png" alt="Logo 4" className="section4" />
        </div>

    <div className="brand-text">
      <h2>Brand</h2>
      <div className='para'>
      Automate your influencer marketing journey from day
      zero with the magic of data and AI, creating impact for your
      brand, tracking performance and achieving results.
     </div>
     <div className="buttons-container">
        <button id="button1" ><span>Brand Login</span></button>
        <button id="button2"><span>More Details</span></button>
    </div>
    </div>

    
  </div>
  </>
  );
};

export default Section1;