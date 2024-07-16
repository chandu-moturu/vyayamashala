import {useState} from 'react'
import logo from '../../assets/logo.svg'
import './navbar.css'

const Navbar = () => {
 const [activeNav, setActiveNav] = useState("#home");

  return (
    <div className="master-nav">
      <div className="nav-main">
        <div className="logo">
          <img src={logo} alt="" />
          <p>Vyayamashala</p>
        </div>
        <div className="nav-items-main">
          <a
            href="#home"
            className={
              activeNav === "#home" ? "nav-items active-link" : "nav-items"
            }
            onClick={() => setActiveNav("#home")}
          >
            Home
          </a>
          <a
            href="#team"
            className={
              activeNav === "#team" ? "nav-items active-link" : "nav-items"
            }
            onClick={() => setActiveNav("#team")}
          >
            Team
          </a>
          <a
            href="#reviews"
            className={
              activeNav === "#reviews" ? "nav-items active-link" : "nav-items"
            }
            onClick={() => setActiveNav("#reviews")}
          >
            Reviews
          </a>
          <a
            href="#services"
            className={
              activeNav === "#services" ? "nav-items active-link" : "nav-items"
            }
            onClick={() => setActiveNav("#services")}
          >
            Services
          </a>
          <a
            href="#contact"
            className={
              activeNav === "#contact" ? "nav-items active-link" : "nav-items"
            }
            onClick={() => setActiveNav("#contact")}
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar