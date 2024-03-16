import React from 'react';
import './Influencers.css'; // Import the CSS file for styling

const Influencers = () => {
  return (
    <>
    <div className="imageWithTextContainer" >
      <div className="contentWrapper">
        <div className="textSection">
        <h1 className="heading">Influencers</h1>
          
          <p className="text">
          Yes influencers, we have an exclusive place just
           for you, with not just catching up with
            the trends but creating ones, facilitating
          your growth, taking care of your everyday
          requirements and topping it off with
          monetization.
          </p>
        </div>
          <div className="buttonContainer">
            <button className="button1"><span>View Services</span></button>
            <button className="button3"><span>More Details</span></button>
          </div>

          </div>
        
        <div className="imageSection">
          <img
            src="/images/influencers1.png"
            alt="Sample"
            className="image"
          />
        </div>
      
    </div>
    <div className="imageWithTextContainer2" >
    <div className="contentWrapper2">
    <div className="textSection2">
      <h1 className="heading2">Our Services</h1>
      
    
          <p className="text2">
          The right exposure to your pinpoint audience, 
          funneling bright opportunities directly to you,
           where it matters the most.
          </p>
        </div>
          <div className="buttonContainer2">
            <button className="button2"><span>View Services</span></button>
            <button className="button4"><span>More Details</span></button>
          </div>
          
        </div>
        <div className="imageSection2">
          <img
            src="/images/influencers2.png"
            alt="Sample"
            className="image2"
          />
        </div>
      </div>
    
    </>
  );
};

export default Influencers;
