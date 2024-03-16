// Footer.jsx
import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className='content'>
        <div className='topper'>
      <div className="footer-logo">
        <img src="/images/company-logo1.png" alt="Company Logo" />
      </div>
      <button id='touch'><span>Stay in Touch</span></button>
      </div>
      
      <div className='written'>
        <div className='footer-columns'>
      <div className="footer-column1">
        <h4>Disclaimer</h4>
        <p>Echiofy Private Limited is an unlisted private company incorporated on 25 March 2022. It is classified as a
            private limited company and is located in Delhi. The Corporate Identification Number (CIN) of Echiofy Private
            Limited is U72900DL2022PTC395579. <br /> <br /> <br /> <br />
            The registered office of Echiofy Private Limited is at 303, Tower B, Logix Technova, Sector 132, Noida-201301.</p>
        {/* Add disclaimer content */}
      </div>
      <div className="footer-column2">
        <h4>Company</h4>
        <ul>
            <li>Blogs</li>
            <li>Team</li>
            <li>About</li>
            <li>Partner with Us</li>
            <li>Our Case Study</li>
            <li>Our Journey</li>
        </ul>
        
      </div>
      <div className="footer-column3">
        <h4>Features</h4>
        <ul>
            <li>Brands</li>
            <li>Influencers</li>
            <li>Studio</li>
            <li>Agency</li>
            <li>Our Services</li>
            
        </ul>
      </div>
      <div className="footer-column4">
        <h4>Policy</h4>
        <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
        </ul>
      </div>
      <div className="footer-column5">
        <h4>Contact Us</h4>
        <ul>
            <li>Call Us</li>
            <li>Email Us</li>
            <li>Banglore, India</li>
        </ul>
      </div>

      </div>
      </div>

    

      {/* Social Media Links */}
      <div className="social-media">
        <div className='copyright'>
        201301. © Copyright 2023 Echiofy Private Limited. All Rights Reserved.
        </div>
        <div className='follow'>
      <div style={{ marginBottom:'10px'}}>Follow Us On</div>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="/images/socialicon1.png" alt="Facebook" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="/images/socialicon2.png" alt="Twitter" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="/images/socialicon3.png" alt="Instagram" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="/images/socialicon4.png" alt="LinkedIn" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="/images/socialicons5.png" alt="LinkedIn" />
        </a>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
