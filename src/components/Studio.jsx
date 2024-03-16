import React from "react";
import "./Studio.css"; // Import or create a CSS file for styling

const Studio = () => {
  return (
    <>
    <div className="istudio-container">
      <div className="text-section">
      <h2 className="iheading">Studio</h2>
      <p className="itext">
      A place for executing what's possible, our studio is ready to meet every requirement of the content creation journey along with special catering 
      to brand’s advertising requirements
      </p>
      </div>
      <div className="image-container">
        <img
          src="/images/studio1.png"
          alt="Studio 1"
          className="image1"
        />

        <img
          src="/images/studio2.png"
          alt="Studio 2"
          className="image2"
        />

        <img
          src="/images/studio3.png"
          alt="Studio 3"
          className="image3"
        />

        <img
          src="/images/studio4.png"
          alt="Studio 4"
          className="image4"
        />

        <img
          src="/images/studio5.png"
          alt="Studio 5"
          className="image5"
        />
      </div>
    </div>
    <div className="istudio-container2">
      <div className="data-container">
        <div className="inner-container">
        <div className="text-container">
      <h2 className="iheading2">Agency</h2>
      <p className="itext2" style={{textAlign:'left', width:'628px'}}>
      Echio believes in Promoting partnerships, which goes on to define us and our community approach. We believe in building mutually beneficial relationships with agencies, 
      supporting each other and delivering the best output.
      </p>
      </div>
      <div className="buttons-container2">
        <button id="button9" ><span>Agency Login</span></button>
        <button id="button8"><span>More Details</span></button>
    </div>
    </div>
      
      <div className="image-container2">
        <img
          src="/images/studiov2.png"
          alt="Studio 1"
          className="imagev1"
        />
        </div>
    </div>
    
    </div>
    </>
  );
};

export default Studio;
