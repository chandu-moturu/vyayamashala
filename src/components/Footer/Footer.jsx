// import React from 'react'
import facebook from '../../assets/facebook.svg'
import youtube from '../../assets/youtube.svg'
import instagram from '../../assets/instagram.svg'
import samplemap from '../../assets/sample-map.svg'
import './footer.css'

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-top">
        <div className="footer-content">
          <div className="links">
            <p>Home</p>
            <p>About</p>
            <p>Services</p>
            <p>Team</p>
            <p>FAQs</p>
            <p>Careers</p>
            <p>Contact Us</p>
          </div>
          <div className="contact-address">
            <h3>Contact</h3>
            <p>1234 Elm Street </p>
            <p>Springfield, IL 62704</p>
            <p>Phone: (555) 123-4567</p>
          </div>
        </div>
        <div className="map">
          <img src={samplemap} alt="" />
        </div>
      </div>
      <div className="footer-bottom">
        <p>{new Date().getFullYear()} &copy; Vyayamashala</p>
        <div className="social-icons">
          <img src={facebook} alt="" width={13.2} />
          <img src={youtube} alt="" width={28.21} />
          <img src={instagram} alt="" width={24.28} />
        </div>
        <p>
          Developed by <span style={{color:'#FCF43D'}}>Chandu</span>
        </p>
      </div>
    </div>
  );
}

export default Footer